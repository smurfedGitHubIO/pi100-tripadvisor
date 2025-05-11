<script lang="ts">
  import Carousel from 'svelte-carousel';
  import type { Infrastructure } from '../types/infrastructure';
  import InfrastructureCard from './InfrastructureCard.svelte';
  
  export let infrastructures: Infrastructure[] = [];
  export let title: string = 'Popular Destinations';
  export let subtitle: string = 'Discover highly rated places loved by travelers';
  
  // Responsive settings for the carousel
  const responsive = [
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ];
</script>

<section class="carousel-section">
  <div class="section-header">
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
    <div class="carousel-navigation">
      <slot name="navigation"></slot>
    </div>
  </div>
  
  <div class="carousel-container">
    <Carousel
      {responsive}
      autoplay={true}
      autoplayDuration={5000}
      autoplayDirection="right"
      pauseOnFocus={true}
      arrows={true}
      dots={false}
      infinite={true}
      let:controls={controls}
    >
      {#each infrastructures as infrastructure (infrastructure.id)}
        <div class="carousel-slide">
          <InfrastructureCard {infrastructure} />
        </div>
      {/each}
    </Carousel>
  </div>
</section>

<style>
  .carousel-section {
    margin: var(--space-12) 0;
  }
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-6);
  }
  
  h2 {
    font-size: var(--font-2xl);
    font-weight: 600;
    color: var(--neutral-900);
    margin-bottom: var(--space-2);
  }
  
  p {
    color: var(--neutral-600);
  }
  
  .carousel-container {
    position: relative;
  }
  
  .carousel-slide {
    padding: var(--space-2);
    height: 100%;
  }
  
  @media (max-width: 640px) {
    .section-header {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-4);
    }
  }
</style>