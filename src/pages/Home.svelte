<script lang="ts">
  import { onMount } from 'svelte';
  import infrastructures from '../data/infrastructures';
  import InfrastructureCarousel from '../components/InfrastructureCarousel.svelte';
  import InfrastructureCard from '../components/InfrastructureCard.svelte';
  
  let activeCategory = 'all';
  let filteredInfrastructures = [...infrastructures];
  
  // Categories for filter
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'hotel', name: 'Hotels' },
    { id: 'restaurant', name: 'Restaurants' },
    { id: 'attraction', name: 'Attractions' },
    { id: 'vacation-rental', name: 'Vacation Rentals' }
  ];
  
  function filterByCategory(category: string) {
    activeCategory = category;
    
    if (category === 'all') {
      filteredInfrastructures = [...infrastructures];
    } else {
      filteredInfrastructures = infrastructures.filter(item => item.category === category);
    }
  }
  
  // Get URL search params on mount
  onMount(() => {
    const url = new URL(window.location.href);
    const category = url.searchParams.get('category');
    
    if (category) {
      filterByCategory(category);
    }
  });
</script>

<section class="hero">
  <div class="hero-content">
    <h1>Discover Amazing Places</h1>
    <p>Find and review the best destinations around the world</p>
    <div class="hero-cta">
      <a href="#explore" class="btn btn-primary">Explore Now</a>
      <a href="#categories" class="btn btn-outline">Browse Categories</a>
    </div>
  </div>
</section>

<section class="featured-section">
  <InfrastructureCarousel 
    infrastructures={infrastructures}
    title="Featured Destinations"
    subtitle="Explore our top-rated locations loved by travelers"
  />
</section>

<section id="categories" class="categories-section">
  <div class="section-header">
    <h2>Browse by Category</h2>
    <p>Find the perfect place for your next adventure</p>
  </div>
  
  <div class="category-filters">
    {#each categories as category}
      <button 
        class="category-btn" 
        class:active={activeCategory === category.id}
        on:click={() => filterByCategory(category.id)}
      >
        {category.name}
      </button>
    {/each}
  </div>
  
  <div id="explore" class="infrastructure-grid">
    {#each filteredInfrastructures as infrastructure}
      <div class="grid-item">
        <InfrastructureCard {infrastructure} />
      </div>
    {/each}
  </div>
</section>

<section class="cta-section">
  <div class="cta-content">
    <h2>Ready for your next adventure?</h2>
    <p>Join thousands of travelers who trust TripExplorer for their journey</p>
    <a href="#explore" class="btn btn-secondary">Start Exploring</a>
  </div>
</section>

<style>
  .hero {
    height: 80vh;
    min-height: 500px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    margin-bottom: var(--space-12);
    position: relative;
  }
  
  .hero::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to top, rgba(249, 249, 251, 1), transparent);
  }
  
  .hero-content {
    max-width: 800px;
    padding: var(--space-4);
    z-index: 1;
  }
  
  .hero h1 {
    font-size: var(--font-4xl);
    margin-bottom: var(--space-4);
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .hero p {
    font-size: var(--font-xl);
    margin-bottom: var(--space-8);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  .hero-cta {
    display: flex;
    justify-content: center;
    gap: var(--space-4);
  }
  
  .hero-cta .btn {
    padding: var(--space-3) var(--space-6);
    font-size: var(--font-lg);
    font-weight: 500;
  }
  
  .hero-cta .btn-outline {
    border-color: white;
    color: white;
  }
  
  .hero-cta .btn-outline:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .featured-section,
  .categories-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-4);
    margin-bottom: var(--space-16);
  }
  
  .section-header {
    text-align: center;
    margin-bottom: var(--space-8);
  }
  
  .section-header h2 {
    font-size: var(--font-3xl);
    margin-bottom: var(--space-2);
    color: var(--neutral-900);
  }
  
  .section-header p {
    color: var(--neutral-600);
    font-size: var(--font-lg);
  }
  
  .category-filters {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-8);
  }
  
  .category-btn {
    background-color: white;
    border: 1px solid var(--neutral-300);
    color: var(--neutral-700);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-lg);
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-fast);
  }
  
  .category-btn:hover {
    border-color: var(--primary-800);
    color: var(--primary-800);
  }
  
  .category-btn.active {
    background-color: var(--primary-800);
    border-color: var(--primary-800);
    color: white;
  }
  
  .infrastructure-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: var(--space-6);
  }
  
  .cta-section {
    background-color: var(--primary-800);
    color: white;
    padding: var(--space-16) 0;
    text-align: center;
    margin-top: var(--space-16);
  }
  
  .cta-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }
  
  .cta-section h2 {
    font-size: var(--font-3xl);
    margin-bottom: var(--space-4);
  }
  
  .cta-section p {
    font-size: var(--font-lg);
    margin-bottom: var(--space-8);
    opacity: 0.9;
  }
  
  .cta-section .btn {
    padding: var(--space-3) var(--space-6);
    font-size: var(--font-lg);
    font-weight: 500;
    background-color: white;
    color: var(--primary-800);
  }
  
  .cta-section .btn:hover {
    background-color: var(--neutral-100);
  }
  
  @media (max-width: 768px) {
    .hero {
      height: 70vh;
    }
    
    .hero h1 {
      font-size: var(--font-3xl);
    }
    
    .hero p {
      font-size: var(--font-lg);
    }
    
    .hero-cta {
      flex-direction: column;
      gap: var(--space-3);
    }
    
    .infrastructure-grid {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
  }
  
  @media (max-width: 480px) {
    .hero h1 {
      font-size: var(--font-2xl);
    }
    
    .hero p {
      font-size: var(--font-base);
    }
    
    .section-header h2 {
      font-size: var(--font-2xl);
    }
    
    .section-header p {
      font-size: var(--font-base);
    }
    
    .infrastructure-grid {
      grid-template-columns: 1fr;
    }
  }
</style>