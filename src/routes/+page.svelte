<script lang="ts">
  import HeroSection from "$lib/components/HeroSection.svelte";
  import InfrastructureCard from "$lib/components/InfrastructureCard.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import { infrastructures } from "$lib/data/infrastructures";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  
  let featuredInfrastructure = infrastructures.slice(0, 3);
  let otherInfrastructure = infrastructures.slice(3);
  
  let carouselItems = infrastructures.map(item => ({
    image: item.images[0],
    title: item.name
  }));
  
  let isVisible = false;
  
  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 500);
  });
</script>

<HeroSection 
  title="GuiltTripAdvisor" 
  subtitle="Damhin ang karangyaan ng mga ipinagmamalaking proyekto sa ilalim ng Marcos era"
  backgroundImage="https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg"
/>

<section class="container section">
  <div class="section-header">
    <h2>Tuklasin ang iba't-ibang gusali</h2>
    <p>Explore iconic projects from the Marcos era that continue to shape the Philippine landscape</p>
  </div>
  
  <div class="carousel-container">
    <Carousel items={carouselItems} autoplay={true} interval={5000} />
  </div>
  
  <div class="infrastructure-grid">
    {#each featuredInfrastructure as infra}
      {#if isVisible}
        <div in:fly={{ y: 20, duration: 500, delay: 200 * infra.id }}>
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

<section class="vintage-banner">
  <div class="overlay"></div>
  <div class="container banner-content">
    <h2>Ang "Golden Age" ni Marcos Sr. </h2>
    <p>Pagsusuri sa masalimuot na pamana ng mga malalaking proyektong konstruksyon noong administrasyon ni Marcos</p>
    <a href="/about" class="banner-button">Alamin Pa Tungkol sa Aming Misyon</a>
  </div>
</section>

<section class="quote-section">
  <div class="container">
    <blockquote>
      "Ang platapormang ito ay nagbibigay ng isang nakakaintrigang sulyap sa pamana ng imprastraktura mula sa Marcos era. Nakakatuwang makita ang mga makasaysayang palatandaan sa ibang pananaw at maintindihan ang kanilang kahalagahan sa kasaysayan. Dapat bisitahin ng sinumang interesado sa kasaysayan ng Pilipinas!"
      <cite>—Nonito Ossianson, Researcher</cite>
    </blockquote>
  </div>
</section>

<style>
  .section-header {
    text-align: center;
    margin-bottom: var(--space-4);
    padding: 0 1rem;
  }

  .section-header h2 {
    color: var(--brown-dark);
    position: relative;
    display: inline-block;
    margin-bottom: var(--space-1);
    font-size: 2rem;
  }

  .section-header h2::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--gold-primary);
  }

  .section-header p {
    color: var(--gray);
    max-width: 700px;
    margin: 0 auto;
    font-size: 1rem;
    padding: 0 1rem;
  }

  .carousel-container {
    height: 400px;
    margin-bottom: var(--space-4);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .infrastructure-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-3);
    margin-bottom: var(--space-4);
    padding: 0 1rem;
  }

  .vintage-banner {
    position: relative;
    background-image: url('https://images.pexels.com/photos/2362004/pexels-photo-2362004.jpeg');
    background-size: cover;
    background-position: center;
    padding: var(--space-6) 0;
    margin: var(--space-5) 0;
    color: white;
    text-align: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .banner-content {
    position: relative;
    z-index: 1;
    padding: 0 1rem;
  }

  .banner-content h2 {
    color: var(--gold-primary);
    font-size: 2.5rem;
    margin-bottom: var(--space-2);
  }

  .banner-content p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto var(--space-3);
  }

  .banner-button {
    display: inline-block;
    background-color: var(--gold-primary);
    color: var(--dark);
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-md);
    font-weight: 600;
    transition: all var(--transition-normal);
    text-decoration: none;
  }

  .banner-button:hover {
    background-color: var(--gold-light);
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    text-decoration: none;
  }

  .quote-section {
    background-color: var(--cream);
    padding: var(--space-5) 0;
    margin-bottom: var(--space-5);
  }

  blockquote {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    font-style: italic;
    text-align: center;
    max-width: 1000px;
    margin: 0 auto;
    color: var(--brown-dark);
    position: relative;
    padding: 0 1rem;
  }

  blockquote::before,
  blockquote::after {
    content: '"';
    font-size: 4rem;
    color: var(--gold-primary);
    opacity: 0.5;
    position: absolute;
    line-height: 1;
  }

  blockquote::before {
    left: 0;
    top: -20px;
  }

  blockquote::after {
    right: 0;
    bottom: -40px;
  }

  cite {
    display: block;
    margin-top: var(--space-2);
    font-size: 1.1rem;
    font-style: normal;
    color: var(--gray);
  }

  /* Tablet (<= 992px) */
  @media (max-width: 992px) {
    .carousel-container {
      height: 300px;
    }

    .infrastructure-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-2);
    }

    .banner-content h2 {
      font-size: 2rem;
    }

    blockquote {
      font-size: 1.5rem;
    }
  }

  /* Mobile (<= 768px) */
  @media (max-width: 768px) {
    .carousel-container {
      height: 250px;
    }

    .infrastructure-grid {
      grid-template-columns: 1fr;
      gap: var(--space-2);
    }

    .banner-content h2 {
      font-size: 1.8rem;
    }

    .banner-content p {
      font-size: 1rem;
    }

    .section-header h2 {
      font-size: 1.5rem;
    }

    .section-header p {
      font-size: 0.95rem;
    }

    blockquote {
      font-size: 1.2rem;
    }

    .banner-button {
      padding: var(--space-1) var(--space-2);
      font-size: 0.9rem;
    }
  }

  /* Smallest screens (<= 480px) */
  @media (max-width: 480px) {
    .carousel-container {
      height: 200px;
    }

    .banner-content h2 {
      font-size: 1.5rem;
    }

    .banner-content p {
      font-size: 0.9rem;
    }

    blockquote {
      font-size: 1rem;
    }
  }
</style>
