<script lang="ts">
  import { Link } from 'svelte-routing';
  import type { Infrastructure } from '../types/types';
  import RatingStars from './RatingStars.svelte';
  
  export let infrastructure: Infrastructure;
</script>

<div class="card infrastructure-card">
  <div class="card-image">
    <img src={infrastructure.images[0]} alt={infrastructure.name} class="img-cover" />
    <div class="price-tag">
      <span class="price-amount">{infrastructure.currency} {infrastructure.price}</span>
      <span class="price-period">/ night</span>
    </div>
  </div>
  
  <div class="card-content">
    <h3 class="card-title">{infrastructure.name}</h3>
    <p class="card-location">{infrastructure.location}</p>
    
    <div class="card-rating">
      <RatingStars rating={infrastructure.rating} />
      <span class="review-count">({infrastructure.reviewCount} reviews)</span>
    </div>
    
    <p class="card-description">{infrastructure.shortDescription}</p>
    
    <Link to={`/infrastructure/${infrastructure.id}`} class="btn-view">
      View Details
    </Link>
  </div>
</div>

<style>
  .infrastructure-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    overflow: hidden;
  }
  
  .infrastructure-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  .card-image {
    position: relative;
    height: 220px;
    overflow: hidden;
  }
  
  .price-tag {
    position: absolute;
    bottom: var(--spacing-3);
    right: var(--spacing-3);
    background-color: var(--color-primary);
    color: white;
    padding: var(--spacing-2) var(--spacing-3);
    border-radius: var(--radius-md);
    font-weight: 500;
  }
  
  .price-amount {
    font-weight: 700;
  }
  
  .price-period {
    font-size: 0.75rem;
    opacity: 0.9;
  }
  
  .card-content {
    padding: var(--spacing-4);
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  
  .card-title {
    margin-bottom: var(--spacing-1);
    font-size: 1.25rem;
  }
  
  .card-location {
    color: var(--color-gray-600);
    margin-bottom: var(--spacing-3);
    font-size: 0.9rem;
  }
  
  .card-rating {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    margin-bottom: var(--spacing-3);
  }
  
  .review-count {
    font-size: 0.875rem;
    color: var(--color-gray-600);
  }
  
  .card-description {
    margin-bottom: var(--spacing-4);
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--color-gray-700);
    flex-grow: 1;
  }
  
  .btn-view {
    display: inline-block;
    padding: var(--spacing-2) var(--spacing-4);
    background-color: var(--color-primary);
    color: white;
    border-radius: var(--radius-md);
    font-weight: 500;
    text-align: center;
    transition: background-color var(--transition-fast);
    align-self: flex-start;
  }
  
  .btn-view:hover {
    background-color: var(--color-primary-dark);
    color: white;
  }
</style>