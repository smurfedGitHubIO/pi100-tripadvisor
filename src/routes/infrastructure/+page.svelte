<script lang="ts">
  import { infrastructures } from "$lib/data/infrastructures";
  import InfrastructureCard from "$lib/components/InfrastructureCard.svelte";
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  
  let isVisible = false;
  
  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 300);
  });
</script>

<svelte:head>
  <title>Infrastructures | GuiltTripAdvisor</title>
</svelte:head>

<section class="infrastructure-hero">
  <div class="overlay"></div>
  <div class="container">
    <div class="hero-content" in:fade={{ duration: 800 }}>
      <h1>Mga Gusali</h1>
      <p class="subtitle">Tuklasin ang legasiya ng Marcos era</p>
      <div class="search-container">
        <SearchBar />
      </div>
    </div>
  </div>
</section>

<section class="container section">
  <div class="infrastructure-grid">
    {#each infrastructures as infra, i}
      {#if isVisible}
        <div in:fly={{ y: 20, duration: 500, delay: 100 * i }}>
          <InfrastructureCard 
            name={infra.name}
            slug={infra.slug}
            location={infra.location}
            image={infra.images[0]}
            rating={infra.rating}
            year={infra.year}
            shortDescription={infra.shortDescription}
          />
        </div>
      {/if}
    {/each}
  </div>
</section>

<style>
  :root {
    --space-1: 0.5rem;
    --space-2: 1rem;
    --space-3: 1.5rem;
    --space-4: 2rem;
    --space-5: 3rem;
  }

  .infrastructure-hero {
    height: 400px;
    background-image: url('https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg');
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
    color: white;
    margin-bottom: var(--space-5);
    padding: 0 var(--space-2);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  
  .hero-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: var(--space-2);
  }
  
  .hero-content h1 {
    font-size: 3rem;
    margin-bottom: var(--space-2);
  }
  
  .subtitle {
    font-size: 1.5rem;
    max-width: 800px;
    margin: 0 auto var(--space-3);
  }
  
  .search-container {
    max-width: 600px;
    margin: 0 auto;
    padding: var(--space-1);
  }

  .container.section {
    padding: var(--space-3);
  }

  .infrastructure-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-3);
  }

  @media (max-width: 1200px) {
    .infrastructure-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .infrastructure-hero {
      height: 300px;
      padding: 0 var(--space-1);
    }

    .hero-content h1 {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1rem;
      padding: 0 var(--space-1);
    }

    .infrastructure-grid {
      grid-template-columns: 1fr;
    }

    .search-container {
      padding: var(--space-1);
    }
  }

  @media (max-width: 480px) {
    .infrastructure-hero {
      height: 250px;
    }

    .hero-content h1 {
      font-size: 1.5rem;
    }

    .subtitle {
      font-size: 0.9rem;
    }

    .infrastructure-grid {
      gap: var(--space-2);
    }
  }
</style>
