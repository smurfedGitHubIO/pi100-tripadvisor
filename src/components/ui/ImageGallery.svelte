<script lang="ts">
  import { onMount } from 'svelte';
  
  export let images: string[];
  export let alt: string = '';
  
  let currentIndex = 0;
  let isModalOpen = false;
  let touchStartX = 0;
  let touchEndX = 0;
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
  
  function openModal(index: number) {
    currentIndex = index;
    isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    isModalOpen = false;
    document.body.style.overflow = '';
  }
  
  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.touches[0].clientX;
  }
  
  function handleTouchEnd(e: TouchEvent) {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  }
  
  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      nextImage();
    }
    if (touchEndX > touchStartX + 50) {
      prevImage();
    }
  }
  
  function handleKeydown(e: KeyboardEvent) {
    if (!isModalOpen) return;
    
    if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'Escape') {
      closeModal();
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

<div class="relative">
  <!-- Main Image -->
  <div 
    class="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg cursor-pointer"
    on:click={() => openModal(0)}
    on:touchstart={handleTouchStart}
    on:touchend={handleTouchEnd}
  >
    <img 
      src={images[0]} 
      alt={alt} 
      class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    />
    
    {#if images.length > 1}
      <div class="absolute bottom-2 right-2 bg-neutral-800 bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
        {images.length} photos
      </div>
    {/if}
  </div>
  
  <!-- Thumbnails -->
  {#if images.length > 1}
    <div class="mt-2 grid grid-cols-4 gap-2">
      {#each images.slice(0, 4) as image, i}
        <div 
          class="h-20 overflow-hidden rounded-lg cursor-pointer relative"
          on:click={() => openModal(i)}
        >
          <img 
            src={image} 
            alt={`${alt} thumbnail ${i + 1}`} 
            class="w-full h-full object-cover"
          />
          
          {#if i === 3 && images.length > 4}
            <div class="absolute inset-0 bg-neutral-900 bg-opacity-60 flex items-center justify-center">
              <span class="text-white font-medium">+{images.length - 4}</span>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  {/if}

  <!-- Modal -->
  {#if isModalOpen}
    <div 
      class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 fade-in"
      on:click|self={closeModal}
      on:touchstart={handleTouchStart}
      on:touchend={handleTouchEnd}
    >
      <button 
        class="absolute top-4 right-4 text-white p-2 z-50"
        on:click={closeModal}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <button 
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 z-50"
        on:click|stopPropagation={prevImage}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 z-50"
        on:click|stopPropagation={nextImage}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <div class="w-full h-full flex items-center justify-center">
        <img 
          src={images[currentIndex]} 
          alt={`${alt} ${currentIndex + 1} of ${images.length}`}
          class="max-w-full max-h-full object-contain slide-in"
        />
      </div>
      
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  {/if}
</div>