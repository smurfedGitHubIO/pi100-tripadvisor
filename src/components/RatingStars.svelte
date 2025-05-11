<script lang="ts">
  export let rating: number;
  export let max: number = 5;
  export let size: 'sm' | 'md' | 'lg' = 'md';
  
  // Calculate full and half stars
  $: fullStars = Math.floor(rating);
  $: hasHalfStar = rating % 1 >= 0.5;
  $: emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);
</script>

<div class="stars {size}">
  {#each Array(fullStars) as _, i}
    <span class="star full">★</span>
  {/each}
  
  {#if hasHalfStar}
    <span class="star half">★</span>
  {/if}
  
  {#each Array(emptyStars) as _, i}
    <span class="star empty">☆</span>
  {/each}
  
  <span class="rating-value">{rating.toFixed(1)}</span>
</div>

<style>
  .stars {
    display: inline-flex;
    align-items: center;
  }
  
  .stars.sm .star {
    font-size: 0.875rem;
  }
  
  .stars.md .star {
    font-size: 1rem;
  }
  
  .stars.lg .star {
    font-size: 1.25rem;
  }
  
  .star {
    margin-right: 2px;
  }
  
  .star.full, .star.half {
    color: var(--color-secondary);
  }
  
  .star.empty {
    color: var(--color-gray-300);
  }
  
  .star.half {
    position: relative;
    display: inline-block;
  }
  
  .star.half::after {
    content: "☆";
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    overflow: hidden;
    color: var(--color-gray-300);
  }
  
  .rating-value {
    font-size: 0.875rem;
    font-weight: 600;
    margin-left: var(--spacing-2);
    color: var(--color-gray-700);
  }
  
  .stars.sm .rating-value {
    font-size: 0.75rem;
  }
  
  .stars.lg .rating-value {
    font-size: 1rem;
  }
</style>