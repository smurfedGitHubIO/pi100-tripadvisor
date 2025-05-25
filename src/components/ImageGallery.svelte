<script lang="ts">
  export let images: string[] = [];
  let currentIndex = 0;

  function navigate(direction: 'prev' | 'next') {
    currentIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length
      : (currentIndex - 1 + images.length) % images.length;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowRight') navigate('next');
    if (e.key === 'ArrowLeft') navigate('prev');
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="carousel-container">
  <!-- Main Carousel -->
  <div class="carousel-inline">
    <button on:click={() => navigate('prev')} class="nav-btn prev">&larr;</button>
    
    <img 
      src={images[currentIndex]} 
      alt="Image {currentIndex}" 
      class="carousel-image" 
    />
    
    <button on:click={() => navigate('next')} class="nav-btn next">&rarr;</button>
    
    <div class="counter">{currentIndex + 1} / {images.length}</div>
  </div>

  <!-- Thumbnail Grid -->
  <div class="thumbnail-grid">
    {#each images as image, i}
      <img 
        src={image} 
        alt="Thumbnail {i}"
        on:click={() => currentIndex = i}
        class="thumbnail {currentIndex === i ? 'active' : ''}"
      />
    {/each}
  </div>
</div>

<style>
  .carousel-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  .carousel-inline {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    background: #f8f8f8;
    border-radius: 8px;
    overflow: hidden;
  }

  .carousel-image {
    max-width: 100%;
    max-height: 600px;
    object-fit: contain;
    margin: 2rem 0;
  }

  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .nav-btn:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .prev { left: 20px; }
  .next { right: 20px; }

  .counter {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
  }

  .thumbnail-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;
    padding: 1rem;
    background: #f8f8f8;
    border-radius: 8px;
  }

  .thumbnail {
    width: 100%;
    height: 100px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s;
  }

  .thumbnail:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .thumbnail.active {
    border: 3px solid #3b82f6;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .nav-btn {
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
    }
    
    .prev { left: 10px; }
    .next { right: 10px; }
    
    .thumbnail-grid {
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
      gap: 0.5rem;
    }
    
    .thumbnail {
      height: 80px;
    }
  }
</style>
