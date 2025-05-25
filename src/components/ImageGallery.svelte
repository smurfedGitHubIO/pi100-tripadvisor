<script lang="ts">
  export let images: string[] = [];
  let zoomedIndex: number | null = null;

  function toggleZoom(i: number) {
    zoomedIndex = zoomedIndex === i ? null : i;
  }

  function closeZoom() {
    zoomedIndex = null;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      closeZoom();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Photo Grid -->
<div class="photo-album">
  {#each images as image, i}
    <img
      src={image}
      alt={`Image ${i + 1}`}
      class="photo"
      on:click={() => toggleZoom(i)}
    />
  {/each}
</div>

<!-- Zoomed Overlay -->
{#if zoomedIndex !== null}
  <div class="overlay" on:click={closeZoom}>
    <img
      src={images[zoomedIndex]}
      alt={`Zoomed Image ${zoomedIndex + 1}`}
      class="zoomed-photo"
      on:click|stopPropagation
    />
  </div>
{/if}

<style>
  .photo-album {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  .photo {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    cursor: zoom-in;
    transition: transform 0.3s ease;
  }

  .photo:hover {
    transform: scale(1.05);
  }

  .overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    cursor: zoom-out;
  }

  .zoomed-photo {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 8px;
    cursor: auto;
  }
</style>
