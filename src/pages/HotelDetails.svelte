<script lang="ts">
  import { onMount } from 'svelte';
  import { params } from 'svelte-spa-router';
  import { hotels } from '../data/hotels';
  import StarRating from '../components/StarRating.svelte';
  
  let hotel: any;
  
  $: {
    hotel = $params?.id ? hotels.find(h => h.id === $params.id) : null;
  }
</script>

{#if hotel}
  <div class="min-h-screen bg-gray-50 pt-8">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Hotel Images -->
        <div class="relative h-[60vh] rounded-xl overflow-hidden mb-8">
          <img 
            src={hotel.thumbnail} 
            alt={hotel.name}
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Hotel Info -->
        <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 mb-2">{hotel.name}</h1>
              <p class="text-gray-600">{hotel.location}</p>
            </div>
            <div class="mt-4 md:mt-0">
              <p class="text-sm text-gray-600">Starting from</p>
              <p class="text-3xl font-bold text-blue-600">€{hotel.price}<span class="text-sm text-gray-600">/night</span></p>
            </div>
          </div>
          
          <div class="flex items-center mb-6">
            <StarRating rating={hotel.rating} />
            <span class="ml-2 text-gray-600">{hotel.rating} ({hotel.reviewCount} reviews)</span>
          </div>
          
          <div class="prose max-w-none mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">About this hotel</h2>
            <p class="text-gray-700">{hotel.description}</p>
          </div>
          
          <div class="mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Amenities</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              {#each hotel.amenities as amenity}
                <div class="flex items-center">
                  <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span class="text-gray-700">{amenity}</span>
                </div>
              {/each}
            </div>
          </div>
          
          <button class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Book Now
          </button>
        </div>

        <!-- Comments Section -->
        <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div>

            Comment 1
            fix thsi
          </div>
        </div>
      </div>
    </div>
  </div>
{:else}
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Hotel Not Found</h1>
      <p class="text-gray-600 mb-4">The hotel you're looking for doesn't exist.</p>
      <a href="/" class="text-blue-600 hover:underline">Return to Home</a>
    </div>
  </div>
{/if}