<script lang="ts">
  import { link } from 'svelte-spa-router';
  import { fade } from 'svelte/transition';
  import StarRating from './StarRating.svelte';
  import SaveButton from './SaveButton.svelte';
  import type { Place } from '../../types/places';
  
  export let place: Place;
  export let type: 'hotel' | 'restaurant' | 'attraction';
  
  // Define URL based on place type
  $: detailsUrl = `/${type}s/${place.id}`;
  
  // Format price to display
  $: priceDisplay = place.priceLevel ? '•' + '€'.repeat(place.priceLevel) : '';
</script>

<div 
  class="card group"
  in:fade={{ duration: 300 }}
>
  <a href={detailsUrl} use:link class="block">
    <div class="relative h-48 overflow-hidden">
      <img
        src={place.thumbnail}
        alt={place.name}
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <SaveButton placeId={place.id} className="absolute top-2 right-2" />
    </div>
    
    <div class="p-4">
      <div class="flex justify-between items-start">
        <h3 class="text-lg font-bold text-neutral-800 truncate">{place.name}</h3>
      </div>
      
      <div class="flex items-center mt-1">
        <StarRating rating={place.rating} />
        <span class="ml-1 text-sm text-neutral-600">
          {place.rating} ({place.reviewCount} reviews)
        </span>
      </div>
      
      <div class="mt-2 text-sm text-neutral-700">
        <span>{place.location}</span>
        {#if priceDisplay}
          <span class="ml-1">{priceDisplay}</span>
        {/if}
      </div>
      
      {#if type === 'hotel'}
        <p class="mt-2 text-accent-600 font-bold">
          €{place.price} <span class="text-sm font-normal text-neutral-600">/ night</span>
        </p>
      {/if}
      
      <p class="mt-2 text-neutral-600 text-sm line-clamp-2">{place.description}</p>
    </div>
  </a>
</div>