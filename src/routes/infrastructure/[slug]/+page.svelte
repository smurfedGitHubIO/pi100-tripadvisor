<script lang="ts">
  import { page } from '$app/stores';
  import { infrastructures } from '$lib/data/infrastructures';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import StarRating from '$lib/components/StarRating.svelte';
  import UserReview from '$lib/components/UserReview.svelte';
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  
  const slug = $page.params.slug;
  const infrastructure = infrastructures.find(i => i.slug === slug);
  
  let isVisible = false;
  let similarInfrastructures = infrastructures
    .filter(i => i.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
    
  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 300);
    
    if (infrastructure) {
      document.title = `${infrastructure.name} | GuiltTripAdvisor`;
    }
  });
</script>

<svelte:head>
  {#if infrastructure}
    <title>{infrastructure.name} | GuiltTripAdvisor</title>
    <meta name="description" content={infrastructure.shortDescription} />
  {:else}
    <title>Infrastructure Not Found | GuiltTripAdvisor</title>
    <meta name="description" content="The requested infrastructure could not be found." />
  {/if}
</svelte:head>

{#if infrastructure}
  <div class="container infrastructure-container">
    <div class="infrastructure-header" in:fade={{ duration: 800 }}>
      <h1>{infrastructure.name}</h1>
      <div class="infrastructure-meta">
        <div class="rating-container">
          <StarRating rating={infrastructure.rating} />
          <span class="rating-value">{infrastructure.rating.toFixed(1)}</span>
        </div>
        <div class="location">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>{infrastructure.location}</span>
        </div>
        <div class="year">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>Built: {infrastructure.year}</span>
        </div>
      </div>
    </div>
    
    <div class="gallery-section">
      <ImageGallery images={infrastructure.images} name={infrastructure.name} />
    </div>
    
    <div class="infrastructure-content">
      <div class="main-content">
        {#if isVisible}
          <section class="about-section" in:fly={{ y: 20, duration: 500 }}>
            <h2>Tungkol sa {infrastructure.name}</h2>
            <div class="gold-separator"></div>
            <div class="description">
              {#each infrastructure.description.split('\n\n') as paragraph}
                <p>{paragraph}</p>
              {/each}
            </div>
          </section>
        
          <section class="features-section" in:fly={{ y: 20, duration: 500, delay: 100 }}>
            <h2>Features</h2>
            <div class="gold-separator"></div>
            <ul class="features-list">
              {#each infrastructure.features as feature}
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              {/each}
            </ul>
          </section>
        
          <section class="reviews-section" in:fly={{ y: 20, duration: 500, delay: 200 }}>
            <h2>Reviews</h2>
            <div class="gold-separator"></div>
            <div class="reviews-container">
              {#each infrastructure.reviews as review}
                <UserReview 
                  name={review.name}
                  avatar={review.avatar}
                  date={review.date}
                  rating={review.rating}
                  comment={review.comment}
                  helpful={review.helpful}
                />
              {/each}
            </div>
          </section>
        {/if}
      </div>
      
      <div class="sidebar">
        {#if isVisible}
          <div class="info-card" in:fly={{ y: 20, duration: 500 }}>
            <h3>Entry Fee</h3>
            <p class="price">{infrastructure.price}</p>
          </div>
          
          <div class="info-card" in:fly={{ y: 20, duration: 500, delay: 100 }}>
            <h3>Best Time to Visit</h3>
            <p>Weekday mornings to avoid crowds</p>
            <p>Golden hour (late afternoon) for best photography</p>
          </div>
          
          <div class="info-card" in:fly={{ y: 20, duration: 500, delay: 200 }}>
            <h3>Historical Context</h3>
            <p>Built during President Ferdinand Marcos' administration ({infrastructure.year})</p>
            <p>Part of the "Golden Age" infrastructure push</p>
            <a href="/about" class="learn-more">Learn more about this era</a>
          </div>
        {/if}
      </div>
    </div>
  </div>
{:else}
  <div class="container">
    <div class="not-found">
      <h2>Infrastructure Not Found</h2>
      <p>Sorry, we couldn't find the infrastructure you're looking for.</p>
      <a href="/infrastructure" class="back-button">Back to All Infrastructures</a>
    </div>
  </div>
{/if}

<style>
  .infrastructure-container {
    padding-top: var(--space-4);
  }
  
  .infrastructure-header {
    margin-bottom: var(--space-4);
  }
  
  .infrastructure-header h1 {
    margin-bottom: var(--space-2);
    color: var(--brown-dark);
  }
  
  .infrastructure-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-3);
  }
  
  .rating-container {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .rating-value {
    font-weight: 600;
    color: var(--gold-dark);
  }
  
  .location, .year {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--gray);
  }
  
  .gallery-section {
    margin-bottom: var(--space-4);
  }
  
  .infrastructure-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--space-4);
    margin-bottom: var(--space-5);
  }
  
  .gold-separator {
    width: 60px;
    height: 3px;
    background-color: var(--gold-primary);
    margin-bottom: var(--space-3);
  }
  
  .about-section, .features-section, .reviews-section {
    margin-bottom: var(--space-4);
  }
  
  .description {
    line-height: 1.7;
  }
  
  .features-list {
    list-style: none;
    padding: 0;
  }
  
  .features-list li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: var(--space-1);
    padding: var(--space-1) 0;
  }
  
  .features-list svg {
    color: var(--gold-primary);
    flex-shrink: 0;
    margin-top: 4px;
  }
  
  .reviews-container {
    margin-top: var(--space-3);
  }
  
  .info-card {
    background-color: white;
    border-radius: var(--radius-md);
    padding: var(--space-3);
    margin-bottom: var(--space-3);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-left: 3px solid var(--gold-primary);
  }
  
  .info-card h3 {
    margin-top: 0;
    margin-bottom: var(--space-2);
    color: var(--brown-dark);
  }
  
  .price {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--gold-dark);
  }
  
  .learn-more {
    display: inline-block;
    margin-top: var(--space-1);
    color: var(--red-primary);
    font-weight: 600;
  }
  
  .not-found {
    text-align: center;
    padding: var(--space-5) 0;
  }
  
  .back-button {
    display: inline-block;
    background-color: var(--gold-primary);
    color: var(--dark);
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-md);
    font-weight: 600;
    margin-top: var(--space-3);
    text-decoration: none;
  }
  
  @media (max-width: 992px) {
    .infrastructure-content {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 768px) {
    .infrastructure-meta {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-1);
    }
  }
</style>