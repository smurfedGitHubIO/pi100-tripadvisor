<script lang="ts">
  import { onMount } from 'svelte';
  import { infrastructures } from '../data/infrastructures';
  import Gallery from '../components/Gallery.svelte';
  import RatingStars from '../components/RatingStars.svelte';
  import ReviewList from '../components/ReviewList.svelte';
  
  export let id: string = '';
  
  $: infrastructureId = parseInt(id, 10);
  $: infrastructure = infrastructures.find(item => item.id === infrastructureId);
  
  let isLoading = true;
  
  onMount(() => {
    // Simulate loading data
    setTimeout(() => {
      isLoading = false;
    }, 300);
  });
</script>

{#if isLoading}
  <div class="loading-container">
    <div class="loading-spinner"></div>
  </div>
{:else if !infrastructure}
  <div class="container section error-container">
    <h2>Infrastructure Not Found</h2>
    <p>The infrastructure you're looking for doesn't exist or may have been removed.</p>
    <a href="/" class="btn-primary">Return to Home</a>
  </div>
{:else}
  <div class="infrastructure-detail">
    <div class="hero">
      <div class="hero-overlay"></div>
      <img src={infrastructure.images[0]} alt={infrastructure.name} class="hero-image" />
      
      <div class="hero-content container">
        <div class="location-badge">{infrastructure.location}</div>
        <h1 class="hero-title">{infrastructure.name}</h1>
        <div class="hero-rating">
          <RatingStars rating={infrastructure.rating} size="lg" />
          <span class="review-count">({infrastructure.reviewCount} reviews)</span>
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="infrastructure-content">
        <div class="content-main">
          <section class="section-sm">
            <h2>About this place</h2>
            <p class="description">{infrastructure.description}</p>
          </section>
          
          <section class="section-sm">
            <Gallery images={infrastructure.images} title="Photo Gallery" />
          </section>
          
          <section class="section-sm">
            <h2>Amenities</h2>
            <ul class="amenities-list">
              {#each infrastructure.amenities as amenity}
                <li class="amenity-item">{amenity}</li>
              {/each}
            </ul>
          </section>
          
          <section class="section-sm">
            <h2>Guest Reviews</h2>
            <div class="review-summary">
              <div class="rating-large">
                <span class="rating-number">{infrastructure.rating.toFixed(1)}</span>
                <RatingStars rating={infrastructure.rating} size="lg" />
                <span class="rating-label">based on {infrastructure.reviewCount} reviews</span>
              </div>
            </div>
            
            <ReviewList reviews={infrastructure.reviews} showTitle={false} />
          </section>
        </div>
        
        <div class="content-sidebar">
          <div class="booking-card">
            <div class="price-container">
              <span class="price">{infrastructure.currency} {infrastructure.price}</span>
              <span class="price-period">per night</span>
            </div>
            
            <button type="button" class="btn-book">Book Now</button>
            <p class="booking-note">You won't be charged yet</p>
          </div>
          
          <div class="location-card">
            <h3>Location</h3>
            <p class="location-text">{infrastructure.location}</p>
            <div class="map-placeholder">
              <div class="map-content">Map View</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
  }
  
  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid var(--color-gray-200);
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  .error-container {
    text-align: center;
    padding: var(--spacing-16) 0;
  }
  
  .hero {
    height: 60vh;
    min-height: 400px;
    position: relative;
    display: flex;
    align-items: flex-end;
  }
  
  .hero-content {
    padding-bottom: var(--spacing-8);
    z-index: 1;
    color: white;
  }
  
  .location-badge {
    display: inline-block;
    background-color: var(--color-accent);
    color: white;
    padding: var(--spacing-1) var(--spacing-3);
    border-radius: var(--radius-full);
    font-size: 0.9rem;
    margin-bottom: var(--spacing-3);
  }
  
  .hero-title {
    font-size: 3rem;
    margin-bottom: var(--spacing-3);
    color: white;
  }
  
  .hero-rating {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
  }
  
  .review-count {
    font-size: 1rem;
    opacity: 0.9;
  }
  
  .infrastructure-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
    margin: var(--spacing-8) 0;
  }
  
  .description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--color-gray-800);
    margin-bottom: var(--spacing-6);
  }
  
  .booking-card {
    background-color: white;
    border-radius: var(--radius-md);
    padding: var(--spacing-6);
    box-shadow: var(--shadow-md);
    top: 100px;
    margin-bottom: var(--spacing-6);
    text-align: center;
  }
  
  .price-container {
    margin-bottom: var(--spacing-4);
  }
  
  .price {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-primary);
  }
  
  .price-period {
    font-size: 1rem;
    color: var(--color-gray-600);
    margin-left: var(--spacing-2);
  }
  
  .btn-book {
    background-color: var(--color-primary);
    color: white;
    padding: var(--spacing-3) var(--spacing-4);
    border: none;
    border-radius: var(--radius-md);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color var(--transition-fast);
    width: 100%;
    margin-bottom: var(--spacing-2);
  }
  
  .btn-book:hover {
    background-color: var(--color-primary-dark);
  }
  
  .booking-note {
    text-align: center;
    font-size: 0.875rem;
    color: var(--color-gray-600);
    margin: 0;
  }
  
  .location-card {
    background-color: white;
    border-radius: var(--radius-md);
    padding: var(--spacing-6);
    box-shadow: var(--shadow-md);
  }
  
  .location-text {
    margin-bottom: var(--spacing-4);
    color: var(--color-gray-700);
  }
  
  .map-placeholder {
    width: 100%;
    height: 200px;
    background-color: var(--color-gray-200);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-gray-600);
  }
  
  .rating-large {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: var(--spacing-6);
  }
  
  .rating-number {
    font-size: 3rem;
    font-weight: 700;
    color: var(--color-gray-900);
    line-height: 1;
    margin-bottom: var(--spacing-2);
  }
  
  .rating-label {
    font-size: 0.875rem;
    color: var(--color-gray-600);
    margin-top: var(--spacing-2);
  }
  
  @media (min-width: 1024px) {
    .infrastructure-content {
      grid-template-columns: 2fr 1fr;
    }
  }
</style>