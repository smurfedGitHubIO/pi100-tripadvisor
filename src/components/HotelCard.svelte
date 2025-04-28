<script lang="ts">
  import { link } from 'svelte-spa-router';
  import StarRating from './StarRating.svelte';
  import type { Hotel } from '../types/hotel';
  
  export let hotel: Hotel;
</script>

<div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <a href={`/hotels/${hotel.id}`} use:link>
    <div class="relative h-48 overflow-hidden">
      <img 
        src={hotel.thumbnail} 
        alt={hotel.name}
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      {#if hotel.price}
        <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
          <span class="font-bold text-gray-900">€{hotel.price}</span>
          <span class="text-sm text-gray-600">/night</span>
        </div>
      {/if}
    </div>
    
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
      
      <div class="flex items-center mb-2">
        <StarRating rating={hotel.rating} />
        <span class="ml-2 text-sm text-gray-600">
          {hotel.rating} ({hotel.reviewCount} reviews)
        </span>
      </div>
      
      <p class="text-gray-600 text-sm mb-4">{hotel.location}</p>
      
      <div class="flex flex-wrap gap-2 mb-4">
        {#each hotel.amenities.slice(0, 3) as amenity}
          <span class="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
            {amenity}
          </span>
        {/each}
      </div>
      
      <p class="text-gray-700 text-sm line-clamp-2 mb-4">{hotel.description}</p>
      
      <div class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center">
        View Details
      </div>
    </div>
  </a>
</div>