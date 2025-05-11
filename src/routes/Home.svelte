<script lang="ts">
  import { infrastructures } from '../data/infrastructures';
  import Carousel from '../components/Carousel.svelte';
  import InfrastructureCard from '../components/InfrastructureCard.svelte';
</script>

<div class="home-page">
  <section class="hero">
    <div class="hero-overlay"></div>
    <img 
      src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg" 
      alt="Luxury Resort" 
      class="hero-image" 
    />
    
    <div class="hero-content">
      <h1 class="hero-title">Discover Extraordinary Destinations</h1>
      <p class="hero-subtitle">
        Explore our handpicked collection of the world's most remarkable accommodations
      </p>
    </div>
  </section>
  
  <section class="section carousel-section">
    <div class="container">
      <h2 class="section-title">Featured Destinations</h2>
      <Carousel items={infrastructures} />
    </div>
  </section>
  
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Explore Our Collection</h2>
        <p class="section-subtitle">
          From beachfront luxury to mountain retreats, discover the perfect accommodation for your next adventure
        </p>
      </div>
      
      <div class="grid-3 infrastructures-grid">
        {#each infrastructures as infrastructure}
          <InfrastructureCard {infrastructure} />
        {/each}
      </div>
    </div>
  </section>
  
  <section class="section cta-section">
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">Ready to Experience Something Extraordinary?</h2>
        <p class="cta-text">
          Explore our curated collection of world-class accommodations and start planning your perfect getaway today.
        </p>
      </div>
    </div>
  </section>
</div>

<style>
  .home-page {
    padding-top: 0;
  }
  
  .hero {
    height: 80vh;
    min-height: 600px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: var(--spacing-8);
  }
  
  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6));
    z-index: -1;
  }
  
  .hero-content {
    max-width: 800px;
    padding: 0 var(--spacing-4);
    color: white;
    animation: fadeIn 1.5s ease;
  }
  
  .hero-title {
    font-size: 3rem;
    margin-bottom: var(--spacing-4);
    color: white;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .section {
    padding: var(--spacing-12) 0;
  }
  
  .carousel-section {
    padding-top: 0;
  }
  
  .section-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto var(--spacing-8);
  }
  
  .section-title {
    font-size: 2.25rem;
    margin-bottom: var(--spacing-4);
  }
  
  .section-subtitle {
    font-size: 1.125rem;
    color: var(--color-gray-600);
  }
  
  .infrastructures-grid {
    margin-top: var(--spacing-8);
  }
  
  .cta-section {
    background-color: var(--color-primary);
    color: white;
    text-align: center;
    padding: var(--spacing-16) 0;
  }
  
  .cta-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .cta-title {
    font-size: 2.5rem;
    color: white;
    margin-bottom: var(--spacing-4);
  }
  
  .cta-text {
    font-size: 1.25rem;
    margin-bottom: var(--spacing-6);
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.25rem;
    }
    
    .hero-subtitle {
      font-size: 1.125rem;
    }
    
    .cta-title {
      font-size: 2rem;
    }
  }
</style>