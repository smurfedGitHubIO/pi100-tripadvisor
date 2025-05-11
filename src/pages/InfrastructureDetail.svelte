<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import infrastructures from '../data/infrastructures';
  import reviews from '../data/reviews';
  import type { Infrastructure, Review } from '../types/infrastructure';
  import ImageGallery from '../components/ImageGallery.svelte';
  import RatingStars from '../components/RatingStars.svelte';
  import ReviewCard from '../components/ReviewCard.svelte';
  import InfrastructureCarousel from '../components/InfrastructureCarousel.svelte';
  
  export let id: string;
  
  let infrastructure: Infrastructure | undefined;
  let infrastructureReviews: Review[] = [];
  let relatedInfrastructures: Infrastructure[] = [];
  let activeTab = 'overview';
  
  onMount(() => {
    // Find the infrastructure by ID
    infrastructure = infrastructures.find(item => item.id === id);
    
    if (infrastructure) {
      // Get related infrastructure of the same category
      relatedInfrastructures = infrastructures
        .filter(item => item.category === infrastructure?.category && item.id !== id)
        .slice(0, 4);
      
      // Get reviews for this infrastructure
      infrastructureReviews = reviews.filter(review => review.infrastructureId === id);
      
      // Update document title
      document.title = `${infrastructure.name} - TripExplorer`;
    }
  });
  
  function setActiveTab(tab: string) {
    activeTab = tab;
  }
  
  function scrollToReviews() {
    setActiveTab('reviews');
    setTimeout(() => {
      const reviewsSection = document.getElementById('reviews-section');
      if (reviewsSection) {
        reviewsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
</script>

{#if infrastructure}
  <div class="detail-page" transition:fade={{ duration: 300 }}>
    <div class="detail-header">
      <div class="breadcrumbs">
        <a href="/">Home</a>
        <span>/</span>
        <a href={`/?category=${infrastructure.category}`}>{infrastructure.category.charAt(0).toUpperCase() + infrastructure.category.slice(1)}</a>
        <span>/</span>
        <span>{infrastructure.name}</span>
      </div>
      
      <h1>{infrastructure.name}</h1>
      
      <div class="infrastructure-meta">
        <div class="rating-info">
          <RatingStars rating={infrastructure.rating} size="lg" />
          <button class="reviews-link" on:click={scrollToReviews}>
            {infrastructure.reviewCount} reviews
          </button>
        </div>
        
        <div class="location">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>{infrastructure.location}</span>
        </div>
      </div>
    </div>
    
    <ImageGallery images={infrastructure.images} />
    
    <div class="detail-tabs">
      <button 
        class="tab-button" 
        class:active={activeTab === 'overview'}
        on:click={() => setActiveTab('overview')}
      >
        Overview
      </button>
      <button 
        class="tab-button" 
        class:active={activeTab === 'amenities'}
        on:click={() => setActiveTab('amenities')}
      >
        Amenities
      </button>
      <button 
        class="tab-button" 
        class:active={activeTab === 'reviews'}
        on:click={() => setActiveTab('reviews')}
      >
        Reviews ({infrastructure.reviewCount})
      </button>
      <button 
        class="tab-button" 
        class:active={activeTab === 'location'}
        on:click={() => setActiveTab('location')}
      >
        Location
      </button>
    </div>
    
    <div class="detail-content">
      <div class="main-content">
        {#if activeTab === 'overview'}
          <section class="overview-section" transition:fade={{ duration: 200 }}>
            <h2>About {infrastructure.name}</h2>
            <p class="description">{infrastructure.description}</p>
            
            <div class="tags">
              {#each infrastructure.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
          </section>
        {:else if activeTab === 'amenities'}
          <section class="amenities-section" transition:fade={{ duration: 200 }}>
            <h2>Amenities</h2>
            <div class="amenities-list">
              {#each infrastructure.amenities as amenity}
                <div class="amenity-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{amenity}</span>
                </div>
              {/each}
            </div>
          </section>
        {:else if activeTab === 'reviews'}
          <section id="reviews-section" class="reviews-section" transition:fade={{ duration: 200 }}>
            <h2>Guest Reviews</h2>
            
            <div class="reviews-overview">
              <div class="rating-summary">
                <div class="overall-rating">
                  <span class="rating-number">{infrastructure.rating.toFixed(1)}</span>
                  <div>
                    <RatingStars rating={infrastructure.rating} size="lg" />
                    <div class="rating-count">{infrastructure.reviewCount} reviews</div>
                  </div>
                </div>
                
                <div class="rating-distribution">
                  <div class="rating-bar">
                    <span>5</span>
                    <div class="bar-container">
                      <div class="bar" style="width: 80%"></div>
                    </div>
                  </div>
                  <div class="rating-bar">
                    <span>4</span>
                    <div class="bar-container">
                      <div class="bar" style="width: 15%"></div>
                    </div>
                  </div>
                  <div class="rating-bar">
                    <span>3</span>
                    <div class="bar-container">
                      <div class="bar" style="width: 3%"></div>
                    </div>
                  </div>
                  <div class="rating-bar">
                    <span>2</span>
                    <div class="bar-container">
                      <div class="bar" style="width: 1%"></div>
                    </div>
                  </div>
                  <div class="rating-bar">
                    <span>1</span>
                    <div class="bar-container">
                      <div class="bar" style="width: 1%"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="reviews-filters">
                <h3>Filter Reviews</h3>
                <div class="filter-buttons">
                  <button class="filter-btn active">All Reviews</button>
                  <button class="filter-btn">Recent</button>
                  <button class="filter-btn">With Photos</button>
                  <button class="filter-btn">Highest Rating</button>
                  <button class="filter-btn">Lowest Rating</button>
                </div>
              </div>
            </div>
            
            <div class="reviews-list">
              {#each infrastructureReviews as review}
                <ReviewCard {review} />
              {/each}
            </div>
            
            <div class="show-more">
              <button class="btn btn-outline">Show More Reviews</button>
            </div>
          </section>
        {:else if activeTab === 'location'}
          <section class="location-section" transition:fade={{ duration: 200 }}>
            <h2>Location</h2>
            <div class="map-placeholder">
              <div class="map-info">
                <p>Located in {infrastructure.location}</p>
                <p>Coordinates: {infrastructure.coordinates.lat}, {infrastructure.coordinates.lng}</p>
              </div>
              <img 
                src={`https://maps.googleapis.com/maps/api/staticmap?center=${infrastructure.coordinates.lat},${infrastructure.coordinates.lng}&zoom=14&size=800x400&markers=color:red%7C${infrastructure.coordinates.lat},${infrastructure.coordinates.lng}&key=YOUR_API_KEY`} 
                alt="Map showing location of ${infrastructure.name}"
                class="map-image"
              />
              <div class="map-overlay">
                <p>Interactive map would be displayed here</p>
                <p>For demonstration purposes only</p>
              </div>
            </div>
            
            <div class="location-details">
              <h3>Getting There</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in facilisis nulla. Nullam facilisis augue eu velit pretium, vel vehicula justo pellentesque. Proin fermentum lectus sit amet nibh feugiat, vel varius magna tristique.</p>
              
              <h3>Nearby Attractions</h3>
              <ul>
                <li>Local attraction 1 (2.5 miles)</li>
                <li>Famous landmark (3.7 miles)</li>
                <li>Popular restaurant (1.2 miles)</li>
                <li>Shopping center (4.1 miles)</li>
              </ul>
            </div>
          </section>
        {/if}
      </div>
      
      <div class="sidebar">
        <div class="booking-card">
          <div class="price-container">
            <span class="price">${infrastructure.price.amount}</span>
            {#if infrastructure.price.period}
              <span class="period">/ {infrastructure.price.period}</span>
            {/if}
          </div>
          
          <div class="booking-form">
            <div class="form-row">
              <div class="form-group">
                <label for="check-in">Check In</label>
                <input type="date" id="check-in" name="check-in" />
              </div>
              <div class="form-group">
                <label for="check-out">Check Out</label>
                <input type="date" id="check-out" name="check-out" />
              </div>
            </div>
            
            <div class="form-group">
              <label for="guests">Guests</label>
              <select id="guests" name="guests">
                <option value="1">1 guest</option>
                <option value="2" selected>2 guests</option>
                <option value="3">3 guests</option>
                <option value="4">4 guests</option>
                <option value="5">5 guests</option>
                <option value="6">6+ guests</option>
              </select>
            </div>
            
            <button class="btn btn-primary book-btn">Book Now</button>
            <button class="btn btn-outline save-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              Save to Wishlist
            </button>
          </div>
        </div>
        
        <div class="contact-card">
          <h3>Have questions?</h3>
          <p>Contact the provider directly for more information about this listing.</p>
          <button class="btn btn-outline contact-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Contact
          </button>
        </div>
      </div>
    </div>
    
    {#if relatedInfrastructures.length > 0}
      <section class="related-section">
        <InfrastructureCarousel 
          infrastructures={relatedInfrastructures}
          title="You Might Also Like"
          subtitle="Similar places you might be interested in"
        />
      </section>
    {/if}
  </div>
{:else}
  <div class="loading">
    <p>Loading...</p>
  </div>
{/if}

<style>
  .detail-page {
    padding-top: var(--space-16);
  }
  
  .detail-header {
    margin-bottom: var(--space-6);
  }
  
  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
    color: var(--neutral-600);
    font-size: var(--font-sm);
  }
  
  .breadcrumbs a {
    color: var(--neutral-600);
    text-decoration: none;
    transition: color var(--transition-fast);
  }
  
  .breadcrumbs a:hover {
    color: var(--primary-800);
  }
  
  h1 {
    font-size: var(--font-3xl);
    margin-bottom: var(--space-4);
    color: var(--neutral-900);
  }
  
  .infrastructure-meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-6);
    align-items: center;
    margin-bottom: var(--space-4);
  }
  
  .rating-info {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }
  
  .reviews-link {
    color: var(--primary-800);
    background: none;
    border: none;
    font-weight: 500;
    cursor: pointer;
    padding: 0;
    text-decoration: underline;
  }
  
  .location {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    color: var(--neutral-700);
  }
  
  .detail-tabs {
    display: flex;
    border-bottom: 1px solid var(--neutral-300);
    margin: var(--space-8) 0 var(--space-6);
    overflow-x: auto;
    scrollbar-width: none;
  }
  
  .detail-tabs::-webkit-scrollbar {
    display: none;
  }
  
  .tab-button {
    padding: var(--space-3) var(--space-5);
    background: none;
    border: none;
    font-weight: 500;
    color: var(--neutral-600);
    cursor: pointer;
    position: relative;
    white-space: nowrap;
  }
  
  .tab-button:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--primary-800);
    transform: scaleX(0);
    transition: transform var(--transition-normal);
  }
  
  .tab-button:hover {
    color: var(--primary-800);
  }
  
  .tab-button.active {
    color: var(--primary-800);
  }
  
  .tab-button.active:after {
    transform: scaleX(1);
  }
  
  .detail-content {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
    gap: var(--space-8);
    margin-bottom: var(--space-12);
  }
  
  .main-content {
    min-width: 0;
  }
  
  h2 {
    font-size: var(--font-2xl);
    margin-bottom: var(--space-4);
    color: var(--neutral-900);
  }
  
  .description {
    line-height: 1.7;
    color: var(--neutral-800);
    margin-bottom: var(--space-6);
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-6);
  }
  
  .tag {
    background-color: var(--primary-50);
    color: var(--primary-800);
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-md);
    font-size: var(--font-sm);
  }
  
  .amenities-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: var(--space-4) var(--space-6);
    margin-bottom: var(--space-6);
  }
  
  .amenity-item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--neutral-800);
  }
  
  .amenity-item svg {
    color: var(--primary-800);
    flex-shrink: 0;
  }
  
  .reviews-overview {
    background-color: var(--neutral-100);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    margin-bottom: var(--space-6);
  }
  
  .rating-summary {
    display: flex;
    gap: var(--space-8);
    margin-bottom: var(--space-6);
  }
  
  .overall-rating {
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }
  
  .rating-number {
    font-size: var(--font-3xl);
    font-weight: 700;
    color: var(--neutral-900);
  }
  
  .rating-count {
    color: var(--neutral-600);
    font-size: var(--font-sm);
    margin-top: var(--space-1);
  }
  
  .rating-distribution {
    flex: 1;
  }
  
  .rating-bar {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-bottom: var(--space-1);
  }
  
  .rating-bar span {
    width: 20px;
    text-align: center;
  }
  
  .bar-container {
    flex: 1;
    height: 8px;
    background-color: var(--neutral-300);
    border-radius: var(--radius-md);
    overflow: hidden;
  }
  
  .bar {
    height: 100%;
    background-color: var(--primary-800);
  }
  
  .reviews-filters h3 {
    font-size: var(--font-lg);
    margin-bottom: var(--space-3);
  }
  
  .filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  
  .filter-btn {
    background-color: white;
    border: 1px solid var(--neutral-300);
    color: var(--neutral-700);
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-md);
    font-size: var(--font-sm);
    cursor: pointer;
    transition: all var(--transition-fast);
  }
  
  .filter-btn:hover {
    border-color: var(--primary-800);
    color: var(--primary-800);
  }
  
  .filter-btn.active {
    background-color: var(--primary-800);
    border-color: var(--primary-800);
    color: white;
  }
  
  .reviews-list {
    margin-bottom: var(--space-8);
  }
  
  .show-more {
    text-align: center;
  }
  
  .map-placeholder {
    height: 400px;
    background-color: var(--neutral-200);
    border-radius: var(--radius-lg);
    margin-bottom: var(--space-6);
    position: relative;
    overflow: hidden;
  }
  
  .map-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .map-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
  }
  
  .map-info {
    position: absolute;
    top: var(--space-4);
    left: var(--space-4);
    z-index: 1;
    background-color: white;
    padding: var(--space-3);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    max-width: 300px;
  }
  
  .location-details {
    line-height: 1.6;
  }
  
  .location-details h3 {
    font-size: var(--font-xl);
    margin-top: var(--space-6);
    margin-bottom: var(--space-3);
  }
  
  .location-details ul {
    padding-left: var(--space-6);
  }
  
  .location-details li {
    margin-bottom: var(--space-2);
  }
  
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }
  
  .booking-card, .contact-card {
    background-color: white;
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--neutral-200);
    position: sticky;
    top: var(--space-6);
  }
  
  .price-container {
    margin-bottom: var(--space-4);
    display: flex;
    align-items: baseline;
  }
  
  .price {
    font-size: var(--font-2xl);
    font-weight: 700;
    color: var(--neutral-900);
  }
  
  .period {
    color: var(--neutral-600);
    margin-left: var(--space-1);
  }
  
  .booking-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
  
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-3);
  }
  
  .form-group label {
    display: block;
    margin-bottom: var(--space-1);
    font-size: var(--font-sm);
    color: var(--neutral-700);
  }
  
  .form-group input, .form-group select {
    width: 100%;
    padding: var(--space-2);
    border: 1px solid var(--neutral-300);
    border-radius: var(--radius-md);
    font-family: inherit;
    font-size: var(--font-base);
  }
  
  .form-group input:focus, .form-group select:focus {
    border-color: var(--primary-800);
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 132, 137, 0.2);
  }
  
  .book-btn {
    width: 100%;
    padding: var(--space-3);
    font-weight: 600;
  }
  
  .save-btn, .contact-btn {
    width: 100%;
    padding: var(--space-3);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
  }
  
  .contact-card h3 {
    font-size: var(--font-xl);
    margin-bottom: var(--space-3);
  }
  
  .contact-card p {
    margin-bottom: var(--space-4);
    color: var(--neutral-700);
  }
  
  .related-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }
  
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    font-size: var(--font-xl);
    color: var(--neutral-600);
  }
  
  @media (max-width: 1024px) {
    .detail-content {
      grid-template-columns: 1fr;
    }
    
    .sidebar {
      order: -1;
      margin-bottom: var(--space-6);
    }
    
    .booking-card, .contact-card {
      position: static;
    }
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: var(--font-2xl);
    }
    
    .rating-summary {
      flex-direction: column;
      gap: var(--space-4);
    }
  }
  
  @media (max-width: 640px) {
    .infrastructure-meta {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-3);
    }
    
    .form-row {
      grid-template-columns: 1fr;
    }
  }
</style>