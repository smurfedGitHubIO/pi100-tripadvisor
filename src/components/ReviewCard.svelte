<script lang="ts">
  import type { Review } from '../types/infrastructure';
  import RatingStars from './RatingStars.svelte';
  import { fade } from 'svelte/transition';
  
  export let review: Review;
  
  let isExpanded = false;
  let showFullText = false;
  let isLongComment = false;
  
  // Check if comment is long enough to need truncation
  $: isLongComment = review.comment.length > 250;
  
  function toggleExpand() {
    isExpanded = !isExpanded;
    
    // Add a small delay before showing the full text to make the animation smooth
    if (isExpanded) {
      setTimeout(() => {
        showFullText = true;
      }, 100);
    } else {
      showFullText = false;
    }
  }
</script>

<div class="review-card" transition:fade={{ duration: 300 }}>
  <div class="review-header">
    <div class="user-info">
      <img src={review.userAvatar} alt={review.userName} />
      <div>
        <h4>{review.userName}</h4>
        <div class="user-meta">
          {#if review.userLocation}
            <span>{review.userLocation}</span>
          {/if}
          <span>{review.userContributions} contributions</span>
        </div>
      </div>
    </div>
    <div class="review-rating">
      <RatingStars rating={review.rating} size="sm" />
      <div class="review-date">{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</div>
    </div>
  </div>
  
  <div class="review-content">
    <h3>{review.title}</h3>
    
    {#if review.stayDate || review.tripType}
      <div class="trip-info">
        {#if review.stayDate}
          <span>Stayed: {review.stayDate}</span>
        {/if}
        {#if review.tripType}
          <span>Trip type: {review.tripType.charAt(0).toUpperCase() + review.tripType.slice(1)}</span>
        {/if}
      </div>
    {/if}
    
    <div class="review-text" class:expanded={isExpanded}>
      {#if isLongComment && !showFullText}
        <p>{review.comment.substring(0, 250)}...</p>
      {:else}
        <p>{review.comment}</p>
      {/if}
      
      {#if isLongComment}
        <button class="read-more-btn" on:click={toggleExpand}>
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      {/if}
    </div>
    
    {#if review.photos && review.photos.length > 0}
      <div class="review-photos">
        {#each review.photos as photo}
          <div class="review-photo">
            <img src={photo.url} alt={photo.alt} loading="lazy" />
          </div>
        {/each}
      </div>
    {/if}
    
    <div class="review-actions">
      <button class="helpful-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
        Helpful ({review.helpfulCount})
      </button>
      <button class="share-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
        Share
      </button>
    </div>
  </div>
</div>

<style>
  .review-card {
    background-color: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    padding: var(--space-6);
    margin-bottom: var(--space-4);
    border: 1px solid var(--neutral-200);
  }
  
  .review-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--space-4);
  }
  
  .user-info {
    display: flex;
    align-items: center;
  }
  
  .user-info img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: var(--space-3);
  }
  
  .user-info h4 {
    font-size: var(--font-base);
    margin: 0 0 var(--space-1) 0;
  }
  
  .user-meta {
    font-size: var(--font-xs);
    color: var(--neutral-600);
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  
  .review-rating {
    text-align: right;
  }
  
  .review-date {
    font-size: var(--font-xs);
    color: var(--neutral-600);
    margin-top: var(--space-1);
  }
  
  .review-content h3 {
    font-size: var(--font-lg);
    margin: 0 0 var(--space-2) 0;
    color: var(--neutral-900);
  }
  
  .trip-info {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    font-size: var(--font-xs);
    color: var(--neutral-600);
    margin-bottom: var(--space-3);
    font-style: italic;
  }
  
  .review-text {
    margin-bottom: var(--space-4);
    color: var(--neutral-800);
    line-height: 1.6;
    transition: max-height var(--transition-normal);
    overflow: hidden;
  }
  
  .review-text.expanded {
    max-height: 2000px;
  }
  
  .read-more-btn {
    background: none;
    border: none;
    color: var(--primary-800);
    font-weight: 500;
    padding: 0;
    margin-top: var(--space-2);
    cursor: pointer;
    transition: color var(--transition-fast);
  }
  
  .read-more-btn:hover {
    color: var(--primary-700);
    text-decoration: underline;
  }
  
  .review-photos {
    display: flex;
    gap: var(--space-2);
    margin-bottom: var(--space-4);
    overflow-x: auto;
    padding-bottom: var(--space-2);
  }
  
  .review-photo {
    width: 120px;
    height: 80px;
    border-radius: var(--radius-md);
    overflow: hidden;
    flex-shrink: 0;
  }
  
  .review-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal);
  }
  
  .review-photo:hover img {
    transform: scale(1.05);
  }
  
  .review-actions {
    display: flex;
    gap: var(--space-4);
  }
  
  .review-actions button {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    background: none;
    border: 1px solid var(--neutral-300);
    border-radius: var(--radius-md);
    padding: var(--space-1) var(--space-3);
    color: var(--neutral-700);
    font-size: var(--font-sm);
    cursor: pointer;
    transition: all var(--transition-fast);
  }
  
  .review-actions button:hover {
    background-color: var(--neutral-100);
    border-color: var(--neutral-400);
  }
  
  .review-actions svg {
    color: var(--neutral-600);
  }
  
  @media (max-width: 640px) {
    .review-header {
      flex-direction: column;
      gap: var(--space-3);
    }
    
    .review-rating {
      text-align: left;
    }
    
    .review-actions {
      flex-wrap: wrap;
    }
  }
</style>