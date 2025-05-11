<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import type { Infrastructure } from '../types/types';
  import { navigate } from 'svelte-routing';
  
  export let items: Infrastructure[] = [];
  export let autoplay = true;
  export let interval = 5000;
  
  let currentIndex = 0;
  let timer: number;
  let touchStartX = 0;
  let touchEndX = 0;
  let carouselElement: HTMLElement;
  
  function setNextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
  }
  
  function setPrevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
  }
  
  function startAutoplay() {
    if (autoplay) {
      timer = window.setInterval(setNextSlide, interval);
    }
  }
  
  function stopAutoplay() {
    clearInterval(timer);
  }
  
  function goToSlide(index: number) {
    currentIndex = index;
    if (autoplay) {
      stopAutoplay();
      startAutoplay();
    }
  }
  
  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.touches[0].clientX;
  }
  
  function handleTouchEnd(e: TouchEvent) {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  }
  
  function handleSwipe() {
    const minSwipeDistance = 50;
    const distance = touchEndX - touchStartX;
    
    if (distance > minSwipeDistance) {
      setPrevSlide();
    } else if (distance < -minSwipeDistance) {
      setNextSlide();
    }
    
    if (autoplay) {
      stopAutoplay();
      startAutoplay();
    }
  }
  
  function navigateToInfrastructure() {
    navigate(`/infrastructure/${items[currentIndex].id}`);
  }
  
  onMount(() => {
    startAutoplay();
  });
  
  onDestroy(() => {
    stopAutoplay();
  });
</script>

<div 
  class="carousel" 
  bind:this={carouselElement}
  on:touchstart={handleTouchStart}
  on:touchend={handleTouchEnd}
>
  <div class="carousel-inner">
    {#each items as item, i}
      <div 
        class="carousel-slide"
        class:active={i === currentIndex}
        on:click={navigateToInfrastructure}
      >
        <img src={item.images[0]} alt={item.name} class="slide-image" />
        <div class="slide-overlay"></div>
        <div class="slide-content">
          <div class="slide-badge">{item.location}</div>
          <h2 class="slide-title">{item.name}</h2>
          <p class="slide-description">{item.shortDescription}</p>
          <button class="slide-btn">View Details</button>
        </div>
      </div>
    {/each}
  </div>
  
  <button class="carousel-control prev" on:click={() => { setPrevSlide(); stopAutoplay(); }} aria-label="Previous slide">
    <span>&#10094;</span>
  </button>
  
  <button class="carousel-control next" on:click={() => { setNextSlide(); stopAutoplay(); }} aria-label="Next slide">
    <span>&#10095;</span>
  </button>
  
  <div class="carousel-indicators">
    {#each items as _, i}
      <button 
        class="indicator" 
        class:active={i === currentIndex} 
        on:click={() => goToSlide(i)}
        aria-label={`Go to slide ${i + 1}`}
      ></button>
    {/each}
  </div>
</div>

<style>
  .carousel {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
  }
  
  .carousel-inner {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .carousel-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity var(--transition-slow);
    cursor: pointer;
  }
  
  .carousel-slide.active {
    opacity: 1;
  }
  
  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .slide-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7));
  }
  
  .slide-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: var(--spacing-6);
    color: white;
    text-align: left;
    transform: translateY(0);
    transition: transform var(--transition-normal);
  }
  
  .carousel-slide:hover .slide-content {
    transform: translateY(-10px);
  }
  
  .slide-badge {
    display: inline-block;
    background-color: var(--color-accent);
    padding: var(--spacing-1) var(--spacing-3);
    border-radius: var(--radius-full);
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: var(--spacing-3);
  }
  
  .slide-title {
    font-size: 2rem;
    margin-bottom: var(--spacing-2);
    font-weight: 600;
  }
  
  .slide-description {
    max-width: 600px;
    margin-bottom: var(--spacing-4);
    font-size: 1rem;
  }
  
  .slide-btn {
    display: inline-block;
    background-color: var(--color-primary);
    color: white;
    padding: var(--spacing-2) var(--spacing-4);
    border-radius: var(--radius-md);
    font-weight: 500;
    transition: background-color var(--transition-fast), transform var(--transition-fast);
    border: none;
  }
  
  .slide-btn:hover {
    background-color: var(--color-primary-dark);
    transform: translateY(-2px);
  }
  
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity var(--transition-fast), background-color var(--transition-fast);
    z-index: 2;
    border: none;
  }
  
  .carousel-control:hover {
    opacity: 1;
    background-color: white;
  }
  
  .carousel-control.prev {
    left: var(--spacing-4);
  }
  
  .carousel-control.next {
    right: var(--spacing-4);
  }
  
  .carousel-indicators {
    position: absolute;
    bottom: var(--spacing-4);
    right: var(--spacing-4);
    display: flex;
    gap: var(--spacing-2);
    z-index: 2;
  }
  
  .indicator {
    width: 10px;
    height: 10px;
    border-radius: var(--radius-full);
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    padding: 0;
    cursor: pointer;
    transition: background-color var(--transition-fast), transform var(--transition-fast);
  }
  
  .indicator.active {
    background-color: white;
    transform: scale(1.2);
  }
  
  @media (max-width: 768px) {
    .carousel {
      height: 400px;
    }
    
    .slide-title {
      font-size: 1.5rem;
    }
    
    .slide-description {
      font-size: 0.9rem;
    }
  }
</style>