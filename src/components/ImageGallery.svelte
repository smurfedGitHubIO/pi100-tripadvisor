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

  $: console.log('Current image:', images[currentIndex]); // Debug helper
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Inline Carousel -->
<div class="carousel-inline">
  <button on:click={() => navigate('prev')} class="nav-btn prev">&larr;</button>

  <div class="image-container">
    <img src={images[currentIndex]} alt={`Image ${currentIndex}`} class="carousel-image" />
  </div>

  <button on:click={() => navigate('next')} class="nav-btn next">&rarr;</button>

  <div class="counter">{currentIndex + 1} / {images.length}</div>
</div>

<!-- Thumbnail Grid Below Carousel -->
<div class="thumbnail-grid">
  {#each images as image, i}
    <img 
      src={image} 
      alt={`Thumbnail ${i}`}
      on:click={() => currentIndex = i}
      class="thumbnail {i === currentIndex ? 'active' : ''}"
    />
  {/each}
</div>

<style>
  /* Inline Carousel */
  .carousel-inline {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    position: relative;
  }

  .image-container {
    width: 100%;
    max-width: 800px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    border-radius: 8px;
    overflow: hidden;
  }

  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    z-index: 10;
    transition: background 0.2s;
  }

  .nav-btn:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .prev { left: 20px; }
  .next { right: 20px; }

  .counter {
    margin-top: 0.5rem;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
  }

  /* Thumbnail Grid */
  .thumbnail-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 0.5rem;
    padding: 1rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .thumbnail {
    width: 100%;
    height: 80px;
    object-fit: cover;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 4px;
    border: 2px solid transparent;
  }
  
  .thumbnail:hover {
    transform: scale(1.05);
    border-color: #007acc;
  }

  .thumbnail.active {
    border-color: #007acc;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .image-container {
      height: 300px;
    }
    
    .nav-btn {
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
    }
    .prev { left: 10px; }
    .next { right: 10px; }
    
    .thumbnail-grid {
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    }
    
    .thumbnail {
      height: 60px;
    }
  }
</style>