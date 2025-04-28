<script lang="ts">
  import { onMount } from 'svelte';
  import { params } from 'svelte-spa-router';
  import ImageGallery from '../components/ui/ImageGallery.svelte';
  import StarRating from '../components/ui/StarRating.svelte';
  import PlaceCard from '../components/ui/PlaceCard.svelte';
  import { mockData } from '../data/mockData';
  import SaveButton from '../components/ui/SaveButton.svelte';
  
  let destination: any;
  let hotels = [];
  let restaurants = [];
  let attractions = [];
  let loading = true;
  
  $: destinationId = $params.id;
  $: if (destinationId) {
    loadDestination(destinationId);
  }
  
  function loadDestination(id: string) {
    loading = true;
    
    setTimeout(() => {
      destination = mockData.destinations.find(d => d.id === id) || mockData.destinations[0];
      
      // Filter places by location matching destination
      hotels = mockData.hotels.filter(h => h.location === destination.name).slice(0, 4);
      restaurants = mockData.restaurants.filter(r => r.location === destination.name).slice(0, 4);
      attractions = mockData.attractions.filter(a => a.location === destination.name).slice(0, 4);
      
      loading = false;
      
      document.title = `${destination.name} - TravelScape`;
    }, 500);
  }
  
  onMount(() => {
    loadDestination(destinationId);
  });
</script>

<div class="pt-16">
  {#if loading}
    <div class="flex justify-center items-center h-96">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
    </div>
  {:else if destination}
    <!-- Hero Image -->
    <div class="relative h-[60vh] min-h-[400px]">
      <img 
        src={destination.images?.[0] || destination.thumbnail} 
        alt={destination.name} 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent flex items-end">
        <div class="container pb-16">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">{destination.name}</h1>
          <div class="flex items-center text-white mb-4">
            <StarRating rating={destination.rating} />
            <span class="ml-2">{destination.rating} ({destination.reviewCount} reviews)</span>
            <SaveButton placeId={destination.id} className="ml-4" />
          </div>
          <p class="text-xl text-white max-w-2xl">{destination.tagline}</p>
        </div>
      </div>
    </div>
    
    <div class="container py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-2xl font-bold mb-4">About {destination.name}</h2>
            <p class="mb-4">{destination.description}</p>
            
            <h3 class="text-xl font-bold mb-3 mt-6">Top Things to Know</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Best time to visit: {destination.bestTimeToVisit}</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Language: {destination.language}</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Currency: {destination.currency}</span>
              </li>
            </ul>
          </div>
          
          {#if destination.images && destination.images.length > 0}
            <div class="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 class="text-2xl font-bold mb-4">Photos</h2>
              <ImageGallery images={destination.images} alt={destination.name} />
            </div>
          {/if}
        </div>
        
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-24">
            <h3 class="text-xl font-bold mb-4">Map</h3>
            <div class="h-48 bg-neutral-200 rounded-lg flex items-center justify-center mb-4">
              <span class="text-neutral-600">Map Placeholder</span>
            </div>
            <p class="text-sm text-neutral-600 mb-4">{destination.region}, {destination.country}</p>
            
            <h3 class="text-xl font-bold mb-4 mt-6">Weather</h3>
            <div class="flex items-center justify-between mb-4">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-accent-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="text-right">
                <p class="text-2xl font-bold">27°C</p>
                <p class="text-neutral-600">Sunny</p>
              </div>
            </div>
            <div class="grid grid-cols-5 text-center border-t border-neutral-200 pt-2">
              {#each ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] as day, i}
                <div>
                  <p class="text-sm font-medium">{day}</p>
                  <p class="text-lg font-bold">{23 + i}°</p>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Where to Stay -->
      {#if hotels.length > 0}
        <section class="my-8">
          <h2 class="text-2xl font-bold mb-6">Where to Stay</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each hotels as hotel}
              <PlaceCard place={hotel} type="hotel" />
            {/each}
          </div>
        </section>
      {/if}
      
      <!-- Where to Eat -->
      {#if restaurants.length > 0}
        <section class="my-8">
          <h2 class="text-2xl font-bold mb-6">Where to Eat</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each restaurants as restaurant}
              <PlaceCard place={restaurant} type="restaurant" />
            {/each}
          </div>
        </section>
      {/if}
      
      <!-- Things to Do -->
      {#if attractions.length > 0}
        <section class="my-8">
          <h2 class="text-2xl font-bold mb-6">Things to Do</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each attractions as attraction}
              <PlaceCard place={attraction} type="attraction" />
            {/each}
          </div>
        </section>
      {/if}
    </div>
  {:else}
    <div class="container py-16 text-center">
      <h1 class="text-2xl font-bold mb-4">Destination not found</h1>
      <p class="mb-6">Sorry, we couldn't find the destination you're looking for.</p>
      <a href="/" class="btn btn-primary">Return to Home</a>
    </div>
  {/if}
</div>