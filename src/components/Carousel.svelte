<script lang="ts">
  import { onMount } from 'svelte';
  import { infrastructureStore } from '../stores/infrastructureStore';
  import { push } from 'svelte-spa-router';
  
  let currentIndex = 0;
  let isDragging = false;
  let startX = 0;
  let initialTranslate = 0;
  let currentTranslate = 0;
  let animationFrameId: number;
  
  // Responsive settings
  let slidesToShow = 3;
  let isMobile = false;
  
  onMount(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 5000);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkScreenSize);
      cancelAnimationFrame(animationFrameId);
    };
  });
  
  function checkScreenSize() {
    if (window.innerWidth < 768) {
      slidesToShow = 1;
      isMobile = true;
    } else if (window.innerWidth < 1024) {
      slidesToShow = 2;
      isMobile = false;
    } else {
      slidesToShow = 3;
      isMobile = false;
    }
  }
  
  function nextSlide() {
    if (currentIndex < $infrastructureStore.length - slidesToShow) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
  }
  
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = $infrastructureStore.length - slidesToShow;
    }
  }
  
  function goToSlide(index: number) {
    currentIndex = index;
  }
  
  function navigateToInfrastructure(id: number) {
    push(`/infrastructure/${id}`);
  }
  
  // Touch and mouse events for dragging functionality
  function handleDragStart(e: MouseEvent | TouchEvent) {
    isDragging = true;
    startX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    initialTranslate = currentTranslate;
    cancelAnimationFrame(animationFrameId);
  }
  
  function handleDragMove(e: MouseEvent | TouchEvent) {
    if (!isDragging) return;
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    currentTranslate = initialTranslate + diff;
    animationFrameId = requestAnimationFrame(updateSlidePosition);
  }
  
  function handleDragEnd() {
    isDragging = false;
    const movedBy = currentTranslate - initialTranslate;
    
    // If dragged enough to change slide
    if (Math.abs(movedBy) > 100) {
      if (movedBy < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    cancelAnimationFrame(animationFrameId);
  }
  
  function updateSlidePosition() {
    // This would be used for smooth dragging animation
    // We'll just use the built-in transition for simplicity
  }
</script>

<div class="carousel-container">
  <h2 class="section-title">Discover Infrastructure Projects</h2>
  
  <div class="carousel-controls">
    <button class="control-btn prev" on:click={prevSlide}>❮</button>
    <button class="control-btn next" on:click={nextSlide}>❯</button>
  </div>
  
  <div 
    class="carousel"
    on:mousedown={handleDragStart}
    on:touchstart={handleDragStart}
    on:mousemove={handleDragMove}
    on:touchmove={handleDragMove}
    on:mouseup={handleDragEnd}
    on:touchend={handleDragEnd}
    on:mouseleave={handleDragEnd}
  >
    <div 
      class="carousel-track"
      style="transform: translateX(-{currentIndex * (100 / slidesToShow)}%)"
    >
      {#each $infrastructureStore as item, i}
        <div 
          class="carousel-slide"
          style="width: {100 / slidesToShow}%"
        >
          <div 
            class="carousel-item"
            on:click={() => navigateToInfrastructure(item.id)}
          >
            <div class="carousel-image">
              <img src={item.images[0]} alt={item.name} />
              <div class="image-overlay">
                <h3>{item.name}</h3>
                <div class="star-rating">
                  {#each Array(5) as _, i}
                    <span class={i < Math.round(item.rating) ? 'star filled' : 'star'}>★</span>
                  {/each}
                </div>
              </div>
            </div>
            <div class="carousel-content">
              <h3>{item.name}</h3>
              <p class="location">{item.location}</p>
              <p class="description">{item.shortDescription}</p>
              <div class="price">From ₱{item.price.toLocaleString()}</div>
              <button class="view-btn">View Details</button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  <div class="carousel-dots">
    {#each Array(Math.ceil($infrastructureStore.length / slidesToShow)) as _, i}
      <button 
        class="dot"
        class:active={Math.floor(currentIndex / slidesToShow) === i}
        on:click={() => goToSlide(i * slidesToShow)}
      ></button>
    {/each}
  </div>
</div>

<style>
  .carousel-container {
    position: relative;
    width: 100%;
    margin: 2rem 0;
    overflow: hidden;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--accent-brown);
  }
  
  .carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
    cursor: grab;
  }
  
  .carousel:active {
    cursor: grabbing;
  }
  
  .carousel-track {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .carousel-slide {
    flex-shrink: 0;
    padding: 0 10px;
  }
  
  .carousel-item {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: white;
    cursor: pointer;
  }
  
  .carousel-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  .carousel-image {
    position: relative;
    height: 200px;
    overflow: hidden;
  }
  
  .carousel-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .carousel-item:hover .carousel-image img {
    transform: scale(1.1);
  }
  
  .image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    color: white;
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .carousel-item:hover .image-overlay {
    opacity: 1;
  }
  
  .image-overlay h3 {
    color: var(--primary-gold);
    margin-bottom: 0.5rem;
  }
  
  .carousel-content {
    padding: 1.5rem;
  }
  
  .carousel-content h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--accent-brown);
  }
  
  .location {
    color: #777;
    font-style: italic;
    margin-bottom: 1rem;
  }
  
  .description {
    margin-bottom: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .price {
    font-weight: bold;
    color: var(--accent-brown);
    margin-bottom: 1rem;
  }
  
  .view-btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: var(--primary-gold);
    color: var(--text-dark);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
  }
  
  .view-btn:hover {
    background-color: var(--secondary-gold);
    transform: translateY(-2px);
  }
  
  .carousel-controls {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    z-index: 10;
    pointer-events: none;
  }
  
  .control-btn {
    background-color: var(--primary-gold);
    color: var(--text-dark);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.2rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    pointer-events: auto;
  }
  
  .control-btn:hover {
    background-color: var(--secondary-gold);
    transform: scale(1.1);
  }
  
  .carousel-dots {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
  }
  
  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--very-light-brown);
    border: none;
    margin: 0 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .dot.active {
    background-color: var(--primary-gold);
    transform: scale(1.2);
  }
  
  .star {
    font-size: 1.2rem;
    color: #ccc;
  }
  
  .star.filled {
    color: var(--primary-gold);
  }
  
  @media (max-width: 768px) {
    .carousel-image {
      height: 180px;
    }
    
    .carousel-content {
      padding: 1rem;
    }
    
    .description {
      -webkit-line-clamp: 2;
    }
    
    .control-btn {
      width: 30px;
      height: 30px;
      font-size: 1rem;
    }
  }
</style>