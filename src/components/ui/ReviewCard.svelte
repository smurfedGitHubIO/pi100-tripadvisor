<script lang="ts">
  import StarRating from './StarRating.svelte';
  import type { Review } from '../../types/places';
  
  export let review: Review;
  export let showFull: boolean = false;
  
  $: formattedDate = new Date(review.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  let isExpanded = showFull;
  
  function toggleExpand() {
    isExpanded = !isExpanded;
  }
  
  $: shouldShowReadMore = review.text.length > 150 && !isExpanded;
</script>

<div class="bg-white rounded-lg border border-neutral-200 p-4 mb-4">
  <div class="flex items-start">
    <div class="mr-3">
      <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
        {review.userName.charAt(0)}
      </div>
    </div>
    
    <div class="flex-1">
      <div class="flex items-center justify-between">
        <span class="font-bold">{review.userName}</span>
        <span class="text-sm text-neutral-500">{formattedDate}</span>
      </div>
      
      <div class="mt-1">
        <StarRating rating={review.rating} size="sm" />
      </div>
      
      <p class="mt-2 text-neutral-700">
        {#if isExpanded}
          {review.text}
        {:else}
          {review.text.substring(0, 150)}
          {#if shouldShowReadMore}
            ...
          {/if}
        {/if}
      </p>
      
      {#if shouldShowReadMore || (review.text.length > 150 && isExpanded)}
        <button 
          class="mt-2 text-primary-600 text-sm font-medium hover:text-primary-700"
          on:click={toggleExpand}
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      {/if}
      
      {#if review.images && review.images.length > 0}
        <div class="mt-3 flex flex-wrap gap-2">
          {#each review.images as image}
            <img 
              src={image} 
              alt="Review photo" 
              class="w-16 h-16 object-cover rounded"
            />
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>