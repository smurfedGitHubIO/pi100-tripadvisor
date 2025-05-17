<script lang="ts">
  export let images: string[] = [];
  let currentImageIndex = 0;
  let showLightbox = false;
  
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  }
  
  function openLightbox(index: number) {
    currentImageIndex = index;
    showLightbox = true;
    document.body.style.overflow = 'hidden';
  }
  
  function closeLightbox() {
    showLightbox = false;
    document.body.style.overflow = '';
  }
  
  function handleKeydown(event: KeyboardEvent) {
    if (!showLightbox) return;
    
    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    } else if (event.key === 'ArrowLeft') {
      prevImage();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="gallery">
  <div class="main-image vintage-border">
    <img src={images[0]} alt="Main view" on:click={() => openLightbox(0)} />
  </div>
  
  <div class="thumbnails">
    {#each images.slice(1) as image, i}
      <div 
        class="thumbnail vintage-border"
        on:click={() => openLightbox(i + 1)}
      >
        <img src={image} alt={`Thumbnail ${i + 1}`} />
      </div>
    {/each}
  </div>
</div>

{#if showLightbox}
  <div class="lightbox" on:click={closeLightbox}>
    <div class="lightbox-content" on:click|stopPropagation>
      <button class="close-btn" on:click={closeLightbox}>×</button>
      <button class="nav-btn prev" on:click={prevImage}>❮</button>
      <div class="lightbox-image">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
      <button class="nav-btn next" on:click={nextImage}>❯</button>
      <div class="image-counter">{currentImageIndex + 1} / {images.length}</div>
    </div>
  </div>
{/if}

<style>
  .gallery {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .main-image {
    height: 400px;
    overflow: hidden;
    cursor: pointer;
  }
  
  .main-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .main-image:hover img {
    transform: scale(1.05);
  }
  
  .thumbnails {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
    height: 400px;
  }
  
  .thumbnail {
    overflow: hidden;
    cursor: pointer;
  }
  
  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .thumbnail:hover img {
    transform: scale(1.1);
  }
  
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .lightbox-content {
    position: relative;
    width: 90%;
    max-width: 1000px;
    height: 80%;
  }
  
  .lightbox-image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .lightbox-image img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
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
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .nav-btn:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .nav-btn.prev {
    left: -70px;
  }
  
  .nav-btn.next {
    right: -70px;
  }
  
  .image-counter {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.3rem 1rem;
    border-radius: 20px;
  }
  
  @media (max-width: 768px) {
    .gallery {
      grid-template-columns: 1fr;
    }
    
    .main-image {
      height: 300px;
    }
    
    .thumbnails {
      height: auto;
      grid-template-rows: repeat(2, 150px);
    }
    
    .nav-btn.prev {
      left: 10px;
    }
    
    .nav-btn.next {
      right: 10px;
    }
  }
</style>