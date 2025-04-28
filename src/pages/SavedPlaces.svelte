<script lang="ts">
  import { onMount } from 'svelte';
  import PlaceCard from '../components/ui/PlaceCard.svelte';
  import { savedPlaces } from '../stores/savedPlaces';
  import { mockData } from '../data/mockData';
  
  let savedHotels: any[] = [];
  let savedRestaurants: any[] = [];
  let savedAttractions: any[] = [];
  let savedDestinations: any[] = [];
  
  $: {
    if ($savedPlaces) {
      // Filter all types of places based on savedPlaces array
      savedHotels = mockData.hotels.filter(hotel => $savedPlaces.includes(hotel.id));
      savedRestaurants = mockData.restaurants.filter(restaurant => $savedPlaces.includes(restaurant.id));
      savedAttractions = mockData.attractions.filter(attraction => $savedPlaces.includes(attraction.id));
      savedDestinations = mockData.destinations.filter(destination => $savedPlaces.includes(destination.id));
    }
  }
  
  onMount(() => {
    document.title = 'Your Saved Places - TravelScape';
  });
</script>

<div class="pt-24 pb-16">
  <div class="container">
    <h1 class="text-3xl font-bold mb-8">Your Saved Places</h1>
    
    {#if $savedPlaces.length === 0}
      <div class="bg-white rounded-lg shadow-md p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-neutral-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <h2 class="text-xl font-bold mb-2">No saved places yet</h2>
        <p class="text-neutral-600 mb-6">Start exploring and save places you're interested in visiting.</p>
        <a href="/" class="btn btn-primary">Explore Destinations</a>
      </div>
    {:else}
      <!-- Saved Destinations -->
      {#if savedDestinations.length > 0}
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">Destinations</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {#each savedDestinations as destination}
              <div class="relative h-64 rounded-lg overflow-hidden group">
                <a href={`/destinations/${destination.id}`} class="block h-full">
                  <img 
                    src={destination.thumbnail} 
                    alt={destination.name} 
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent">
                    <div class="absolute bottom-0 left-0 p-4 text-white">
                      <h3 class="text-xl font-bold">{destination.name}</h3>
                      <p class="text-neutral-200">{destination.location}</p>
                    </div>
                  </div>
                </a>
              </div>
            {/each}
          </div>
        </section>
      {/if}
      
      <!-- Saved Hotels -->
      {#if savedHotels.length > 0}
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">Hotels</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {#each savedHotels as hotel}
              <PlaceCard place={hotel} type="hotel" />
            {/each}
          </div>
        </section>
      {/if}
      
      <!-- Saved Restaurants -->
      {#if savedRestaurants.length > 0}
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">Restaurants</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {#each savedRestaurants as restaurant}
              <PlaceCard place={restaurant} type="restaurant" />
            {/each}
          </div>
        </section>
      {/if}
      
      <!-- Saved Attractions -->
      {#if savedAttractions.length > 0}
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">Attractions</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {#each savedAttractions as attraction}
              <PlaceCard place={attraction} type="attraction" />
            {/each}
          </div>
        </section>
      {/if}
    {/if}
  </div>
</div>