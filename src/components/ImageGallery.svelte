<script lang="ts">
  export let images: string[] = [];
  let currentImageIndex = 0;
  let showLightbox = false;
  
  // Reactive statement to ensure we have valid images
  $: validImages = images && images.length > 0 ? images : [];
  $: hasImages = validImages.length > 0;
  
  function nextImage() {
    if (validImages.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % validImages.length;
  }
  
  function prevImage() {
    if (validImages.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + validImages.length) % validImages.length;
  }
  
  function openLightbox(index: number) {
    if (validImages.length === 0) return;
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
  
  function handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    console.warn('Failed to load image:', img.src);
    // You can set a placeholder image here if needed
    // img.src = '/path/to/placeholder.jpg';
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if !hasImages}
  <div class="no-images">
    <p>No images available</p>
  </div>
{:else}
  <div class="gallery">
    <div class="main-image">
      <img 
        src={validImages[0]} 
        alt="Main view" 
        on:click={() => openLightbox(0)}
        on:error={handleImageError}
      />
    </div>
    
    {#if validImages.length > 1}
      <div class="thumbnails">
        {#each validImages.slice(1, 5) as image, i}
          <div 
            class="thumbnail"
            on:click={() => openLightbox(i + 1)}
            on:keydown={(e) => e.key === 'Enter' && openLightbox(i + 1)}
            role="button"
            tabindex="0"
          >
            <img 
              src={image} 
              alt={`Thumbnail ${i + 1}`}
              on:error={handleImageError}
            />
          </div>
        {/each}
      </div>
    {/if}
  </div>
{/if}

{#if showLightbox && hasImages}
  <div class="lightbox" on:click={closeLightbox} role="dialog" aria-modal="true">
    <div class="lightbox-content" on:click|stopPropagation>
      <button class="close-btn" on:click={closeLightbox} aria-label="Close lightbox">×</button>
      
      {#if validImages.length > 1}
        <button class="nav-btn prev" on:click={prevImage} aria-label="Previous image">❮</button>
        <button class="nav-btn next" on:click={nextImage} aria-label="Next image">❯</button>
      {/if}
      
      <div class="lightbox-image">
        <img 
          src={validImages[currentImageIndex]} 
          alt={`Image ${currentImageIndex + 1}`}
          on:error={handleImageError}
        />
      </div>
      
      {#if validImages.length > 1}
        <div class="image-counter">{currentImageIndex + 1} / {validImages.length}</div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .no-images {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background-color: #f5f5f5;
    border: 2px dashed #ccc;
    border-radius: 8px;
    color: #666;
    font-size: 1.1rem;
  }

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
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .main-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
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
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
  }

  .thumbnail:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
  
  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
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
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
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
    border-radius: 4px;
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
    transition: color 0.3s ease;
    padding: 0.25rem;
  }

  .close-btn:hover,
  .close-btn:focus {
    color: #ccc;
    outline: none;
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
  
  .nav-btn:hover,
  .nav-btn:focus {
    background-color: rgba(0, 0, 0, 0.8);
    outline: 2px solid white;
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
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    white-space: nowrap;
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

    .lightbox-content {
      width: 95%;
      height: 70%;
    }

    .close-btn {
      top: -30px;
      right: 10px;
    }
  }

  @media (max-width: 480px) {
    .thumbnails {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 100px);
    }

    .main-image {
      height: 250px;
    }
  }
</style>