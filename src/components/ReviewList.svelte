<script lang="ts">
  import type { Review } from '../types/types';
  import RatingStars from './RatingStars.svelte';
  
  export let reviews: Review[] = [];
  export let showTitle: boolean = true;
</script>

<div class="reviews-container">
  {#if showTitle}
    <h3 class="reviews-title">Guest Reviews</h3>
  {/if}
  
  {#if reviews.length === 0}
    <p class="reviews-empty">No reviews yet.</p>
  {:else}
    <div class="reviews-list">
      {#each reviews as review}
        <div class="review-card">
          <div class="review-header">
            <div class="avatar">
              <img src={review.avatar} alt={review.username} class="avatar-img" />
            </div>
            <div class="review-meta">
              <h4 class="reviewer-name">{review.username}</h4>
              <div class="review-details">
                <RatingStars rating={review.rating} size="sm" />
                <span class="review-date">{review.date}</span>
              </div>
            </div>
          </div>
          <div class="review-content">
            <p>{review.comment}</p>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .reviews-container {
    margin-bottom: var(--spacing-8);
  }
  
  .reviews-title {
    margin-bottom: var(--spacing-4);
  }
  
  .reviews-empty {
    color: var(--color-gray-600);
    font-style: italic;
  }
  
  .reviews-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
  }
  
  .review-card {
    background-color: var(--color-gray-100);
    border-radius: var(--radius-md);
    padding: var(--spacing-4);
    transition: transform var(--transition-fast), box-shadow var(--transition-fast);
  }
  
  .review-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }
  
  .review-header {
    display: flex;
    gap: var(--spacing-3);
    margin-bottom: var(--spacing-3);
  }
  
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: var(--radius-full);
    overflow: hidden;
    flex-shrink: 0;
  }
  
  .avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .review-meta {
    flex: 1;
  }
  
  .reviewer-name {
    margin: 0 0 var(--spacing-1);
    font-size: 1rem;
  }
  
  .review-details {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
  }
  
  .review-date {
    font-size: 0.75rem;
    color: var(--color-gray-600);
  }
  
  .review-content {
    font-size: 0.9375rem;
    color: var(--color-gray-800);
    line-height: 1.6;
  }
  
  .review-content p {
    margin: 0;
  }
</style>