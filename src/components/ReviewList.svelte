<script lang="ts">
  import { onMount } from 'svelte';
  
  export let reviews: any[] = [];
  let filteredReviews = [...reviews];
  let sortOption = 'newest';
  let filterRating = 0;
  
  onMount(() => {
    sortReviews(sortOption);
  });
  
  function sortReviews(option: string) {
    sortOption = option;
    
    switch (option) {
      case 'newest':
        filteredReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'oldest':
        filteredReviews.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'highest':
        filteredReviews.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest':
        filteredReviews.sort((a, b) => a.rating - b.rating);
        break;
    }
    
    // Apply filter after sorting
    if (filterRating > 0) {
      filteredReviews = filteredReviews.filter(review => review.rating === filterRating);
    } else {
      filteredReviews = [...reviews];
      // Re-sort after resetting filters
      sortReviews(sortOption);
    }
    
    filteredReviews = [...filteredReviews]; // Trigger reactivity
  }
  
  function filterByRating(rating: number) {
    if (filterRating === rating) {
      // Toggle off the filter
      filterRating = 0;
      filteredReviews = [...reviews];
      sortReviews(sortOption);
    } else {
      filterRating = rating;
      filteredReviews = reviews.filter(review => review.rating === rating);
      sortReviews(sortOption);
    }
  }
  
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
</script>

<div class="reviews-container">
  <h2 class="section-title">Visitor Reviews</h2>
  
  <div class="review-stats">
    <div class="average-rating">
      <span class="big-rating">
        {(reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)}
      </span>
      <div class="star-rating big">
        {#each Array(5) as _, i}
          <span class={i < Math.round(reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) ? 'star filled' : 'star'}>★</span>
        {/each}
      </div>
      <span class="review-count">{reviews.length} reviews</span>
    </div>
    
    <div class="rating-bars">
      {#each [5, 4, 3, 2, 1] as rating}
        {@const count = reviews.filter(r => r.rating === rating).length}
        {@const percentage = (count / reviews.length) * 100}
        <div 
          class="rating-bar-row"
          class:active={filterRating === rating}
          on:click={() => filterByRating(rating)}
        >
          <span class="rating-label">{rating} stars</span>
          <div class="rating-bar">
            <div class="rating-fill" style="width: {percentage}%"></div>
          </div>
          <span class="rating-count">{count}</span>
        </div>
      {/each}
    </div>
  </div>
  
  <div class="reviews-controls">
    <div class="sorting">
      <label for="sort">Sort by: </label>
      <select id="sort" bind:value={sortOption} on:change={() => sortReviews(sortOption)}>
        <option value="newest">Newest first</option>
        <option value="oldest">Oldest first</option>
        <option value="highest">Highest rating</option>
        <option value="lowest">Lowest rating</option>
      </select>
    </div>
    
    {#if filterRating > 0}
      <button class="clear-filter" on:click={() => filterByRating(0)}>
        Clear filter ({filterRating}-star)
      </button>
    {/if}
  </div>
  
  <div class="reviews-list">
    {#if filteredReviews.length === 0}
      <div class="no-reviews">No reviews match your filter</div>
    {:else}
      {#each filteredReviews as review}
        <div class="review-card">
          <div class="review-header">
            <div class="avatar">
              <img src={review.avatar} alt={review.name} />
            </div>
            <div class="reviewer-info">
              <h4 class="reviewer-name">{review.name}</h4>
              <div class="reviewer-meta">
                <span class="review-date">{formatDate(review.date)}</span>
                <span class="review-source">via {review.source}</span>
              </div>
            </div>
          </div>
          
          <div class="review-rating">
            <div class="star-rating">
              {#each Array(5) as _, i}
                <span class={i < review.rating ? 'star filled' : 'star'}>★</span>
              {/each}
            </div>
            <span class="review-title">{review.title}</span>
          </div>
          
          <div class="review-content">
            <p>{review.comment}</p>
          </div>
          
          {#if review.response}
            <div class="review-response">
              <h5>Response from Management:</h5>
              <p>{review.response}</p>
            </div>
          {/if}
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
  .reviews-container {
    margin: 2rem 0;
  }
  
  .section-title {
    margin-bottom: 1.5rem;
  }
  
  .review-stats {
    display: flex;
    margin-bottom: 2rem;
    background-color: var(--very-light-brown);
    border: 1px solid var(--primary-gold);
    padding: 1.5rem;
    border-radius: 8px;
  }
  
  .average-rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 2rem;
    margin-right: 2rem;
    border-right: 1px solid var(--light-brown);
    min-width: 150px;
  }
  
  .big-rating {
    font-size: 3rem;
    font-weight: bold;
    color: var(--accent-brown);
  }
  
  .star-rating.big {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }
  
  .review-count {
    color: #777;
  }
  
  .rating-bars {
    flex: 1;
  }
  
  .rating-bar-row {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    padding: 0.3rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .rating-bar-row:hover, .rating-bar-row.active {
    background-color: rgba(212, 175, 55, 0.2);
  }
  
  .rating-label {
    width: 80px;
  }
  
  .rating-bar {
    flex: 1;
    height: 8px;
    background-color: #ddd;
    border-radius: 4px;
    margin: 0 1rem;
    overflow: hidden;
  }
  
  .rating-fill {
    height: 100%;
    background-color: var(--primary-gold);
  }
  
  .rating-count {
    width: 30px;
    text-align: right;
  }
  
  .reviews-controls {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }
  
  .sorting select {
    padding: 0.5rem;
    border: 1px solid var(--primary-gold);
    border-radius: 4px;
    background-color: white;
  }
  
  .clear-filter {
    padding: 0.5rem 1rem;
    background-color: var(--accent-brown);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .reviews-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .review-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    border-left: 5px solid var(--primary-gold);
  }
  
  .review-header {
    display: flex;
    margin-bottom: 1rem;
  }
  
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--primary-gold);
    margin-right: 1rem;
  }
  
  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .reviewer-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .reviewer-name {
    margin: 0;
    color: var(--accent-brown);
  }
  
  .reviewer-meta {
    display: flex;
    gap: 1rem;
    font-size: 0.9rem;
    color: #777;
  }
  
  .review-rating {
    margin-bottom: 1rem;
  }
  
  .star-rating {
    display: inline-block;
    margin-right: 1rem;
  }
  
  .star {
    color: #ddd;
  }
  
  .star.filled {
    color: var(--primary-gold);
  }
  
  .review-title {
    font-weight: bold;
  }
  
  .review-content {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  .review-response {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 4px;
    border-left: 3px solid var(--accent-brown);
    margin-top: 1rem;
  }
  
  .review-response h5 {
    margin-top: 0;
    color: var(--accent-brown);
    margin-bottom: 0.5rem;
  }
  
  .no-reviews {
    text-align: center;
    padding: 2rem;
    color: #777;
    background-color: #f5f5f5;
    border-radius: 8px;
  }
  
  @media (max-width: 768px) {
    .review-stats {
      flex-direction: column;
    }
    
    .average-rating {
      border-right: none;
      border-bottom: 1px solid var(--light-brown);
      padding-right: 0;
      margin-right: 0;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }
  }
</style>