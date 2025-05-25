<script lang="ts">
  import { onMount } from 'svelte';
  import { location } from 'svelte-spa-router';
  import { infrastructureStore } from '../stores/infrastructureStore';
  import ImageGallery from '../components/ImageGallery.svelte';
  import ReviewList from '../components/ReviewList.svelte';
  
  let infrastructure: any = null;
  let loading = true;
  let error = false;
  
  // Handle scrolling to sections
  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Fetch infrastructure data
  function fetchInfrastructure() {
    const id = Number($location.split('/').pop());
    const found = $infrastructureStore.find(item => item.id === id);
    
    if (found) {
      infrastructure = found;
      error = false;
    } else {
      error = true;
    }
    
    loading = false;
  }
  
  onMount(() => {
    fetchInfrastructure();
    window.scrollTo(0, 0);
  });
  
  // Watch for route changes
  $: if ($location) {
    fetchInfrastructure();
    window.scrollTo(0, 0);
  }
</script>

<svelte:head>
  {#if infrastructure}
    <title>{infrastructure.name} | GuiltTripAdvisor</title>
  {:else}
    <title>Loading... | GuiltTripAdvisor</title>
  {/if}
</svelte:head>

<div class="infrastructure-page">
  {#if loading}
    <div class="loading">
      <div class="spinner"></div>
      <p>Loading infrastructure data...</p>
    </div>
  {:else if error}
    <div class="error">
      <h2>Infrastructure Not Found</h2>
      <p>Sorry, we couldn't find the infrastructure you're looking for.</p>
      <a href="/" class="btn">Return Home</a>
    </div>
  {:else}
    <div class="infrastructure-header">
      <div class="container">
        <h1>{infrastructure.name}</h1>
        <div class="meta-info">
          <div class="rating">
            <div class="star-rating">
              {#each Array(5) as _, i}
                <span class={i < Math.round(infrastructure.rating) ? 'star filled' : 'star'}>★</span>
              {/each}
            </div>
            <span class="rating-value">{infrastructure.rating.toFixed(1)}</span>
            <span class="reviews-count">({infrastructure.reviews.length} reviews)</span>
          </div>
          <div class="location">{infrastructure.location}</div>
        </div>
      </div>
    </div>
    
    <div class="page-navbar">
      <div class="container">
        <ul class="nav-links">
          <li><a href="#overview" on:click|preventDefault={() => scrollToSection('overview')}>Overview</a></li>
          <li><a href="#photos" on:click|preventDefault={() => scrollToSection('photos')}>Photos</a></li>
          <li><a href="#information" on:click|preventDefault={() => scrollToSection('information')}>Information</a></li>
          <li><a href="#history" on:click|preventDefault={() => scrollToSection('history')}>History</a></li>
          <li><a href="#reviews" on:click|preventDefault={() => scrollToSection('reviews')}>Reviews</a></li>
        </ul>
      </div>
    </div>
    
    <div class="container">
      <section id="photos" class="section">
        <ImageGallery images={infrastructure.images} />
      </section>
      
      <div class="content-sidebar-layout">
        <div class="main-content">
          <section id="overview" class="section">
            <h2>Overview</h2>
            <p class="description">{infrastructure.description}</p>
          </section>
          
          <section id="information" class="section">
            <h2>Information</h2>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Taon Ginawa</div>
                <div class="info-value">{infrastructure.yearBuilt}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Build Cost</div>
                <div class="info-value">₱{infrastructure.cost.toLocaleString()}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Entry Fee</div>
                <div class="info-value">₱{infrastructure.price.toLocaleString()}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Arkitekt/Inhenyero</div>
                <div class="info-value">{infrastructure.architect}</div>
              </div>
            </div>
          </section>
          
          <section id="history" class="section">
            <h2>Historical Context</h2>
            <div class="history-content">
              <div class="history-image vintage-border">
                <img src={infrastructure.historicalImage} alt="Historical photo" />
                <div class="image-caption">Historical photo, circa {infrastructure.historicalImageYear}</div>
              </div>
              <div class="history-text">
                <p>{infrastructure.history}</p>
                <h3>Controversy</h3>
                <p>{infrastructure.controversy}</p>
              </div>
            </div>
          </section>
          
          <section id="reviews" class="section">
            <ReviewList reviews={infrastructure.reviews} />
          </section>
        </div>
        
        <div class="sidebar">
          <div class="booking-card">
            <div class="price">
              <span class="price-value">₱{infrastructure.price.toLocaleString()}</span>
              <span class="price-unit">per person</span>
            </div>
            <button class="book-btn">Book a Tour</button>
            <div class="notice">Limited availability for historical tours</div>
          </div>
          
          <div class="map-card">
            <h3>Location</h3>
            <div class="map-placeholder vintage-border">
              <img src="https://images.pexels.com/photos/4312858/pexels-photo-4312858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Map location" />
            </div>
            <div class="address">
              {infrastructure.address}
            </div>
          </div>
          
          <div class="similar-card">
            <h3>Similar Places</h3>
            <ul class="similar-list">
              {#each $infrastructureStore.filter(item => item.id !== infrastructure.id).slice(0, 3) as similar}
                <li>
                  <a href={`/infrastructure/${similar.id}`}>
                    <div class="similar-image">
                      <img src={similar.images[0]} alt={similar.name} />
                    </div>
                    <div class="similar-info">
                      <div class="similar-name">{similar.name}</div>
                      <div class="similar-rating">
                        <span class="star filled">★</span>
                        <span>{similar.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .infrastructure-page {
    width: 100%;
  }
  
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
  }
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid var(--very-light-brown);
    border-top: 5px solid var(--primary-gold);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .error {
    text-align: center;
    padding: 4rem 1rem;
  }
  
  .infrastructure-header {
    background-color: var(--accent-brown);
    color: white;
    padding: 2rem 0;
    margin-bottom: 0;
  }
  
  .infrastructure-header h1 {
    color: var(--primary-gold);
    margin-bottom: 1rem;
  }
  
  .meta-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .rating {
    display: flex;
    align-items: center;
  }
  
  .star-rating {
    margin-right: 0.5rem;
  }
  
  .star {
    color: #ddd;
  }
  
  .star.filled {
    color: var(--primary-gold);
  }
  
  .rating-value {
    font-weight: bold;
    margin-right: 0.5rem;
  }
  
  .reviews-count {
    color: var(--light-gold);
  }
  
  .location {
    color: var(--light-gold);
    font-style: italic;
  }
  
  .page-navbar {
    background-color: white;
    border-bottom: 1px solid #eee;
    position: sticky;
    top: 0;
    z-index: 90;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    overflow-x: auto;
    padding: 0;
    margin: 0;
  }
  
  .nav-links li {
    flex-shrink: 0;
  }
  
  .nav-links a {
    display: block;
    padding: 1rem 1.5rem;
    color: var(--accent-brown);
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s;
    white-space: nowrap;
  }
  
  .nav-links a:hover {
    color: var(--primary-gold);
    background-color: rgba(212, 175, 55, 0.1);
  }
  
  .section {
    margin-bottom: 3rem;
  }
  
  .section h2 {
    margin-bottom: 1.5rem;
    color: var(--accent-brown);
    border-bottom: 2px solid var(--primary-gold);
    display: inline-block;
    padding-bottom: 0.5rem;
  }
  
  .description {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
  
  .content-sidebar-layout {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }
  
  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .info-item {
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .info-label {
    font-weight: bold;
    color: var(--accent-brown);
    margin-bottom: 0.5rem;
  }
  
  .info-value {
    font-size: 1.2rem;
  }
  
  .history-content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 2rem;
  }
  
  .history-image {
    position: relative;
  }
  
  .history-image img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .image-caption {
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 0.9rem;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  .history-text {
    line-height: 1.7;
  }
  
  .history-text h3 {
    margin: 1.5rem 0 1rem;
    color: var(--accent-brown);
  }
  
  .sidebar {
    position: sticky;
    top: 70px;
    align-self: start;
  }
  
  .booking-card, .map-card, .similar-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border: 1px solid var(--primary-gold);
  }
  
  .price {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .price-value {
    font-size: 2rem;
    font-weight: bold;
    color: var(--accent-brown);
    display: block;
  }
  
  .price-unit {
    color: #777;
  }
  
  .book-btn {
    width: 100%;
    padding: 1rem;
    background-color: var(--primary-gold);
    color: var(--text-dark);
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 1rem;
  }
  
  .book-btn:hover {
    background-color: var(--secondary-gold);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .notice {
    text-align: center;
    font-size: 0.9rem;
    color: #777;
  }
  
  .map-card h3, .similar-card h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: var(--accent-brown);
  }
  
  .map-placeholder {
    height: 150px;
    overflow: hidden;
    margin-bottom: 1rem;
  }
  
  .map-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .address {
    color: #777;
    font-style: italic;
  }
  
  .similar-list {
    list-style: none;
    padding: 0;
  }
  
  .similar-list li {
    margin-bottom: 1rem;
  }
  
  .similar-list a {
    display: flex;
    text-decoration: none;
    color: inherit;
  }
  
  .similar-image {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    overflow: hidden;
    margin-right: 1rem;
    border: 2px solid var(--primary-gold);
  }
  
  .similar-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .similar-info {
    flex: 1;
  }
  
  .similar-name {
    font-weight: bold;
    color: var(--accent-brown);
    margin-bottom: 0.3rem;
  }
  
  .similar-rating {
    font-size: 0.9rem;
    color: #777;
  }
  
  @media (max-width: 992px) {
    .content-sidebar-layout {
      grid-template-columns: 1fr;
    }
    
    .sidebar {
      position: static;
      order: -1;
      margin-bottom: 2rem;
    }
    
    .booking-card {
      position: sticky;
      top: 70px;
      z-index: 80;
    }
  }
  
  @media (max-width: 768px) {
    .info-grid {
      grid-template-columns: 1fr;
    }
    
    .history-content {
      grid-template-columns: 1fr;
    }
    
    .history-image {
      margin-bottom: 1.5rem;
    }
  }
</style>