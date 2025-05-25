<script lang="ts">
  export let images: string[] = [];
  let currentIndex = 0;
  let showCarousel = false;

  function navigate(direction: 'prev' | 'next') {
    currentIndex = direction === 'next'
      ? (currentIndex + 1) % images.length
      : (currentIndex - 1 + images.length) % images.length;
  }

  function open(index: number) {
    currentIndex = index;
    showCarousel = true;
    document.body.style.overflow = 'hidden';
  }

  function close() {
    showCarousel = false;
    document.body.style.overflow = '';
  }

  function handleKeydown(e: KeyboardEvent) {
    if (!showCarousel) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') navigate('next');
    if (e.key === 'ArrowLeft') navigate('prev');
  }

  $: console.log('Current image:', images[currentIndex]); // Debug helper
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Thumbnail Grid -->
<div class="thumbnail-grid">
  {#each images as image, i}
    <button 
      type="button" 
      on:click={() => open(i)} 
      class="thumbnail-btn"
    >
      <img 
        src={image} 
        alt={`Thumbnail ${i}`}
        class="thumbnail"
      />
    </button>
  {/each}
</div>

<!-- Carousel Overlay -->
{#if showCarousel}
  <div class="carousel-overlay" on:click={close}>
    <div class="carousel-container" on:click|stopPropagation>
      <button on:click|stopPropagation={close} class="close-btn">
        &times;
      </button>
      
      <img 
        src={images[currentIndex]} 
        alt={`Image ${currentIndex}`}
        class="carousel-image"
      />
      
      <button on:click|stopPropagation={() => navigate('prev')} class="nav-btn prev">
        &larr;
      </button>
      <button on:click|stopPropagation={() => navigate('next')} class="nav-btn next">
        &rarr;
      </button>
      
      <div class="counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  </div>
{/if}

<style>
  /* Thumbnail Grid */
  .thumbnail-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }

  .thumbnail-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .thumbnail {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.2s;
    display: block;
  }

  .thumbnail-btn:hover .thumbnail {
    transform: scale(1.02);
  }

  /* Carousel Overlay */
  .carousel-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .carousel-container {
    position: relative;
    width: 90%;
    max-width: 1000px;
    max-height: 90vh;
  }

  .carousel-image {
    width: 100%;
    max-height: 80vh;
    object-fit: contain;
    display: block;
  }

  .close-btn {
    position: absolute;
    top: -40px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
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
  }

  .prev { left: 20px; }
  .next { right: 20px; }

  .counter {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 0.5rem 1rem;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    .thumbnail-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .nav-btn {
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
    }

    .prev { left: 10px; }
    .next { right: 10px; }
  }
</style>
