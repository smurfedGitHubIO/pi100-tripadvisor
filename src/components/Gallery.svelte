<script lang="ts">
  import { onMount } from 'svelte';

  export let images: string[] = [];
  export let title: string = '';
  
  let isLightboxOpen = false;
  let currentImageIndex = 0;
  
  function openLightbox(index: number) {
    currentImageIndex = index;
    isLightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }
  
  function closeLightbox() {
    isLightboxOpen = false;
    document.body.style.overflow = '';
  }
  
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
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
  
  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<div class="gallery-container">
  <h3 class="gallery-title">{title || 'Photo Gallery'}</h3>
  
  <div class="gallery">
    {#each images as image, index}
      <div class="gallery-image" on:click={() => openLightbox(index)}>
        <img src={image} alt={`Gallery image ${index + 1}`} loading="lazy" />
      </div>
    {/each}
  </div>
</div>

{#if isLightboxOpen}
  <div class="lightbox" on:click={closeLightbox}>
    <button class="lightbox-close" on:click|stopPropagation={closeLightbox} aria-label="Close gallery">
      &times;
    </button>
    
    <div class="lightbox-content" on:click|stopPropagation={() => {}}>
      <img src={images[currentImageIndex]} alt={`Gallery image ${currentImageIndex + 1}`} class="lightbox-image" />
    </div>
    
    <button class="lightbox-nav prev" on:click|stopPropagation={prevImage} aria-label="Previous image">
      &#10094;
    </button>
    
    <button class="lightbox-nav next" on:click|stopPropagation={nextImage} aria-label="Next image">
      &#10095;
    </button>
    
    <div class="lightbox-counter">
      {currentImageIndex + 1} / {images.length}
    </div>
  </div>
{/if}

<style>
  .gallery-container {
    margin-bottom: var(--spacing-8);
  }
  
  .gallery-title {
    margin-bottom: var(--spacing-4);
  }
  
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
  }
  
  .lightbox-content {
    max-width: 90%;
    max-height: 90%;
    position: relative;
  }
  
  .lightbox-image {
    max-width: 100%;
    max-height: 90vh;
    display: block;
    object-fit: contain;
  }
  
  .lightbox-close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2rem;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 2001;
  }
  
  .lightbox-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: white;
    background: rgba(0, 0, 0, 0.3);
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
  
  .lightbox-nav:hover {
    background: rgba(0, 0, 0, 0.6);
  }
  
  .lightbox-nav.prev {
    left: 20px;
  }
  
  .lightbox-nav.next {
    right: 20px;
  }
  
  .lightbox-counter {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 0.875rem;
    background: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: var(--radius-full);
  }
</style>