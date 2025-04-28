<script lang="ts">
  import { onMount } from 'svelte';
  import { params } from 'svelte-spa-router';
  import ImageGallery from '../components/ui/ImageGallery.svelte';
  import StarRating from '../components/ui/StarRating.svelte';
  import ReviewCard from '../components/ui/ReviewCard.svelte';
  import SaveButton from '../components/ui/SaveButton.svelte';
  import { mockData } from '../data/mockData';
  
  let attraction: any;
  let similarAttractions: any[] = [];
  let loading = true;
  
  $: attractionId = $params.id;
  $: if (attractionId) {
    loadAttraction(attractionId);
  }
  
  function loadAttraction(id: string) {
    loading = true;
    
    setTimeout(() => {
      attraction = mockData.attractions.find(a => a.id === id) || mockData.attractions[0];
      
      // Get similar attractions in the same location
      similarAttractions = mockData.attractions
        .filter(a => a.location === attraction.location && a.id !== attraction.id)
        .slice(0, 3);
      
      loading = false;
      
      document.title = `${attraction.name} - TravelScape`;
    }, 500);
  }
  
  onMount(() => {
    loadAttraction(attractionId);
  });
</script>

<div class="pt-16">
  {#if loading}
    <div class="flex justify-center items-center h-96">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
    </div>
  {:else if attraction}
    <!-- Attraction Header -->
    <div class="bg-white border-b">
      <div class="container py-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 class="text-3xl font-bold mb-2">{attraction.name}</h1>
            <div class="flex items-center mb-2">
              <StarRating rating={attraction.rating} />
              <span class="ml-2 text-neutral-600">{attraction.rating} ({attraction.reviewCount} reviews)</span>
            </div>
            <div class="flex items-center text-neutral-600">
              <span>{attraction.location}</span>
              {#if attraction.categories}
                <span class="mx-2">•</span>
                <span>{attraction.categories.join(', ')}</span>
              {/if}
            </div>
          </div>
          <div class="mt-4 md:mt-0 flex space-x-4">
            {#if attraction.price}
              <div class="text-right">
                <p class="text-sm text-neutral-600">From</p>
                <p class="text-2xl font-bold text-accent-600">€{attraction.price}</p>
              </div>
            {/if}
            <div class="flex space-x-2">
              <button class="btn btn-primary">Book Tickets</button>
              <SaveButton placeId={attraction.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          {#if attraction.images && attraction.images.length > 0}
            <div class="mb-8">
              <ImageGallery images={attraction.images} alt={attraction.name} />
            </div>
          {/if}
          
          <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-2xl font-bold mb-4">About {attraction.name}</h2>
            <p class="mb-6">{attraction.description}</p>
            
            {#if attraction.highlights}
              <h3 class="text-xl font-bold mb-4">Highlights</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-y-3 mb-6">
                {#each attraction.highlights as highlight}
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span>{highlight}</span>
                  </div>
                {/each}
              </div>
            {/if}
            
            {#if attraction.tips}
              <h3 class="text-xl font-bold mb-4">Visitor Tips</h3>
              <ul class="space-y-2 mb-6">
                {#each attraction.tips as tip}
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                    </svg>
                    <span>{tip}</span>
                  </li>
                {/each}
              </ul>
            {/if}
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold">Reviews</h2>
              <button class="btn btn-outline">Write a Review</button>
            </div>
            
            {#each attraction.reviews || mockData.reviews.slice(0, 5) as review}
              <ReviewCard {review} />
            {/each}
            
            <div class="text-center mt-6">
              <button class="btn btn-outline">View All Reviews</button>
            </div>
          </div>
        </div>
        
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-24">
            <h3 class="text-xl font-bold mb-4">Map</h3>
            <div class="h-48 bg-neutral-200 rounded-lg flex items-center justify-center mb-4">
              <span class="text-neutral-600">Map Placeholder</span>
            </div>
            <p class="text-sm text-neutral-600 mb-6">{attraction.address || attraction.location}</p>
            
            <h3 class="text-xl font-bold mb-4">Attraction Details</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                <div>
                  <span class="font-medium">Opening Hours</span>
                  <p class="text-sm text-neutral-600">Daily: 9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                </svg>
                <div>
                  <span class="font-medium">Suggested Duration</span>
                  <p class="text-sm text-neutral-600">{attraction.duration || '2-3 hours'}</p>
                </div>
              </li>
              {#if attraction.price}
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <span class="font-medium">Ticket Price</span>
                    <p class="text-sm text-neutral-600">From €{attraction.price}</p>
                  </div>
                </li>
              {/if}
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd" />
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zm2 7h4a2 2 0 002-2v-5h-6v7z" />
                </svg>
                <div>
                  <span class="font-medium">Facilities</span>
                  <p class="text-sm text-neutral-600">Restrooms, Gift Shop, Cafe</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Similar Attractions -->
      {#if similarAttractions.length > 0}
        <section class="my-8">
          <h2 class="text-2xl font-bold mb-6">Nearby Attractions</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {#each similarAttractions as similarAttraction}
              <div class="card overflow-hidden group">
                <a href={`/attractions/${similarAttraction.id}`} class="block">
                  <div class="relative h-48 overflow-hidden">
                    <img 
                      src={similarAttraction.thumbnail} 
                      alt={similarAttraction.name} 
                      class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <SaveButton placeId={similarAttraction.id} className="absolute top-2 right-2" />
                  </div>
                  
                  <div class="p-4">
                    <h3 class="text-lg font-bold mb-1">{similarAttraction.name}</h3>
                    
                    <div class="flex items-center mb-2">
                      <StarRating rating={similarAttraction.rating} size="sm" />
                      <span class="ml-1 text-sm text-neutral-600">
                        {similarAttraction.rating}
                      </span>
                    </div>
                    
                    <p class="text-neutral-600 text-sm mb-1">{similarAttraction.location}</p>
                    
                    {#if similarAttraction.categories}
                      <p class="text-neutral-600 text-sm">{similarAttraction.categories.join(', ')}</p>
                    {/if}
                    
                    {#if similarAttraction.price}
                      <p class="mt-2 text-accent-600 font-bold">
                        From €{similarAttraction.price}
                      </p>
                    {/if}
                  </div>
                </a>
              </div>
            {/each}
          </div>
        </section>
      {/if}
    </div>
  {:else}
    <div class="container py-16 text-center">
      <h1 class="text-2xl font-bold mb-4">Attraction not found</h1>
      <p class="mb-6">Sorry, we couldn't find the attraction you're looking for.</p>
      <a href="/" class="btn btn-primary">Return to Home</a>
    </div>
  {/if}
</div>