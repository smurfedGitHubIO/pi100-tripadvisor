<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  
  export let images: { url: string; alt: string }[] = [];
  
  let currentIndex = 0;
  let isLightboxOpen = false;
  let touchStartX = 0;
  let touchEndX = 0;
  
  function openLightbox(index: number) {
    currentIndex = index;
    isLightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }
  
  function closeLightbox() {
    isLightboxOpen = false;
    document.body.style.overflow = '';
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
  
  function handleKeydown(event: KeyboardEvent) {
    if (!isLightboxOpen) return;
    
    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    } else if (event.key === 'ArrowLeft') {
      prevImage();
    }
  }
  
  function handleTouchStart(event: TouchEvent) {
    touchStartX = event.touches[0].clientX;
  }
  
  function handleTouchMove(event: TouchEvent) {
    touchEndX = event.touches[0].clientX;
  }
  
  function handleTouchEnd() {
    if (touchStartX - touchEndX > 50) {
      // Swipe left, show next image
      nextImage();
    } else if (touchEndX - touchStartX > 50) {
      // Swipe right, show previous image
      prevImage();
    }
  }
  
  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    
    return () => {
      window.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = '';
    };
  });
</script>

<section class="image-gallery">
  <div class="gallery-grid">
    {#if images.length > 0}
      <div class="main-image" on:click={() => openLightbox(0)}>
        <img src={images[0].url} alt={images[0].alt} loading="eager" />
      </div>
    {/if}
    
    <div class="thumbnail-grid">
      {#each images.slice(1, 5) as image, index}
        <div class="thumbnail" on:click={() => openLightbox(index + 1)}>
          <img src={image.url} alt={image.alt} loading="lazy" />
          {#if index === 3 && images.length > 5}
            <div class="more-photos">
              <span>+{images.length - 5} more</span>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
  
  {#if isLightboxOpen}
    <div 
      class="lightbox"
      on:click|self={closeLightbox}
      on:touchstart={handleTouchStart}
      on:touchmove={handleTouchMove}
      on:touchend={handleTouchEnd}
      transition:fade={{ duration: 200 }}
    >
      <button class="close-button" on:click={closeLightbox}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      <button class="nav-button prev" on:click|stopPropagation={prevImage}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 18l-6-6 6-6"></path>
        </svg>
      </button>
      
      <div class="lightbox-content">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          transition:fade={{ duration: 200 }}
        />
        <div class="image-caption">
          <span>{currentIndex + 1} / {images.length}</span>
          <p>{images[currentIndex].alt}</p>
        </div>
      </div>
      
      <button class="nav-button next" on:click|stopPropagation={nextImage}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18l6-6-6-6"></path>
        </svg>
      </button>
    </div>
  {/if}
</section>

<style>
  .image-gallery {
    margin-bottom: var(--space-8);
  }
  
  .gallery-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: var(--space-2);
    border-radius: var(--radius-lg);
    overflow: hidden;
    height: 450px;
  }
  
  .main-image {
    grid-row: span 2;
    height: 450px;
    cursor: pointer;
    overflow: hidden;
  }
  
  .main-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal);
  }
  
  .main-image:hover img {
    transform: scale(1.05);
  }
  
  .thumbnail-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: var(--space-2);
    height: 100%;
  }
  
  .thumbnail {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  
  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal);
  }
  
  .thumbnail:hover img {
    transform: scale(1.05);
  }
  
  .more-photos {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .more-photos span {
    color: white;
    font-weight: 600;
    font-size: var(--font-lg);
  }
  
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .lightbox-content img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
  }
  
  .image-caption {
    color: white;
    margin-top: var(--space-4);
    text-align: center;
  }
  
  .image-caption span {
    font-size: var(--font-sm);
    color: var(--neutral-400);
    margin-right: var(--space-2);
  }
  
  .close-button {
    position: absolute;
    top: var(--space-4);
    right: var(--space-4);
    background: transparent;
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color var(--transition-fast);
  }
  
  .nav-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .nav-button.prev {
    left: var(--space-4);
  }
  
  .nav-button.next {
    right: var(--space-4);
  }
  
  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: 1fr;
      height: auto;
    }
    
    .main-image {
      height: 300px;
    }
    
    .thumbnail-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 120px;
    }
    
    .nav-button {
      width: 40px;
      height: 40px;
    }
  }
  
  @media (max-width: 640px) {
    .thumbnail-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 100px);
    }
  }
</style>