<script lang="ts">
  import { push } from 'svelte-spa-router';
  import { infrastructureStore } from '../stores/infrastructureStore';
  
  function navigateToInfrastructure(id: number) {
    push(`/infrastructure/${id}`);
  }
</script>

<div class="infrastructure-grid">
  <h2 class="section-title">Explore All Infrastructures</h2>
  
  <div class="grid">
    {#each $infrastructureStore as item}
      <div class="grid-item" on:click={() => navigateToInfrastructure(item.id)}>
        <div class="grid-image">
          <img src={item.images[0]} alt={item.name} />
          <div class="rating-badge">
            <span class="rating-value">{item.rating.toFixed(1)}</span>
            <span class="star">★</span>
          </div>
        </div>
        <div class="grid-content">
          <h3>{item.name}</h3>
          <p class="location">{item.location}</p>
          <p class="description">{item.shortDescription}</p>
          <div class="info-row">
            <div class="price">₱{item.price.toLocaleString()}</div>
            <div class="reviews">{item.reviews.length} reviews</div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .infrastructure-grid {
    width: 100%;
    padding: 2rem 0;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--accent-brown);
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .grid-item {
    border-radius: 8px;
    overflow: hidden;
    background-color: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  
  .grid-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
  
  .grid-image {
    position: relative;
    height: 200px;
    overflow: hidden;
  }
  
  .grid-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .grid-item:hover .grid-image img {
    transform: scale(1.1);
  }
  
  .rating-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: var(--primary-gold);
    color: var(--text-dark);
    font-weight: bold;
    padding: 0.3rem 0.5rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
  }
  
  .rating-value {
    margin-right: 0.2rem;
  }
  
  .star {
    font-size: 0.9rem;
  }
  
  .grid-content {
    padding: 1.5rem;
  }
  
  .grid-content h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--accent-brown);
  }
  
  .location {
    color: #777;
    font-style: italic;
    margin-bottom: 1rem;
  }
  
  .description {
    margin-bottom: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .price {
    font-weight: bold;
    color: var(--accent-brown);
  }
  
  .reviews {
    color: #777;
    font-size: 0.9rem;
  }
  
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>