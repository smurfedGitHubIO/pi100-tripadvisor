<script lang="ts">
  export let images: string[] = [];
  let zoomedIndex: number | null = null;

  function toggleZoom(i: number) {
    zoomedIndex = zoomedIndex === i ? null : i;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && zoomedIndex !== null) {
      zoomedIndex = null;
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Dark overlay -->
{#if zoomedIndex !== null}
  <div class="overlay" on:click={() => zoomedIndex = null}></div>
{/if}

<div class="photo-album">
  {#each images as image, i}
    <img
      src={image}
      alt={`Image ${i + 1}`}
      class="photo {zoomedIndex === i ? 'zoomed' : ''}"
      on:click={() => toggleZoom(i)}
    />
  {/each}
</div>

<style>
  .photo-album {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .photo {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 6px;
    cursor: zoom-in;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    z-index: 1;
  }

  .photo:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
  }

  .photo.zoomed {
    position: fixed;
    top: 50%;
    left: 50%;
    width: auto;
    max-width: 90vw;
    max-height: 90vh;
    height: auto;
    border-radius: 0;
    cursor: zoom-out;
    transform: translate(-50%, -50%) scale(1);
    z-index: 1001; /* Higher than overlay */
    box-shadow: 0 0 40px rgba(0,0,0,0.8);
    background-color: transparent;
    object-fit: contain;
  }

  .overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    cursor: zoom-out;
  }
</style>
