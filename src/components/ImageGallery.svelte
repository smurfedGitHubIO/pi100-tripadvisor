<script context="module" lang="ts">
  export const ssr = false;
</script>

<script lang="ts">
  export let images: string[] = [];
  let zoomedIndex: number | null = null;

  const toggleZoom = (i: number) => {
    zoomedIndex = zoomedIndex === i ? null : i;
  };

  const closeZoom = () => {
    zoomedIndex = null;
  };

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') closeZoom();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if zoomedIndex !== null}
  <div 
    class="overlay" 
    on:click|self={closeZoom}
    on:touchstart|self={closeZoom}
    role="presentation"
  />
{/if}

<div class="photo-album">
  {#each images as image, i}
    <button 
      class="image-button"
      on:click={() => toggleZoom(i)}
      aria-label={zoomedIndex === i ? 'Zoom out' : 'Zoom in'}
    >
      <img
        src={image}
        alt={`Image ${i + 1}`}
        class="photo {zoomedIndex === i ? 'zoomed' : ''}"
        draggable="false"
      />
    </button>
  {/each}
</div>

<style>
  .photo-album {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    padding: 1rem;
  }

  .image-button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: zoom-in;
    transition: transform 0.3s ease;
  }

  .image-button:hover {
    transform: scale(1.05);
  }

  .photo {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    display: block;
  }

  .photo.zoomed {
    position: fixed;
    top: 50%;
    left: 50%;
    width: auto;
    max-width: 90vw;
    max-height: 90vh;
    height: auto;
    transform: translate(-50%, -50%);
    z-index: 1001;
    cursor: default;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
    border-radius: 0;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    cursor: zoom-out;
  }
</style>