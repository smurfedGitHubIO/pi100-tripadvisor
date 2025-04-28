<script lang="ts">
  import { onMount } from 'svelte';
  import { params } from 'svelte-spa-router';
  import ImageGallery from '../components/ui/ImageGallery.svelte';
  import StarRating from '../components/ui/StarRating.svelte';
  import ReviewCard from '../components/ui/ReviewCard.svelte';
  import SaveButton from '../components/ui/SaveButton.svelte';
  import { mockData } from '../data/mockData';
  
  let restaurant: any;
  let similarRestaurants: any[] = [];
  let loading = true;
  
  $: restaurantId = $params.id;
  $: if (restaurantId) {
    loadRestaurant(restaurantId);
  }
  
  function loadRestaurant(id: string) {
    loading = true;
    
    setTimeout(() => {
      restaurant = mockData.restaurants.find(r => r.id === id) || mockData.restaurants[0];
      
      // Get similar restaurants in the same location
      similarRestaurants = mockData.restaurants
        .filter(r => r.location === restaurant.location && r.id !== restaurant.id)
        .slice(0, 3);
      
      loading = false;
      
      document.title = `${restaurant.name} - TravelScape`;
    }, 500);
  }
  
  // Format price level to euro symbols
  $: priceDisplay = restaurant?.priceLevel ? '€'.repeat(restaurant.priceLevel) : '';
  
  onMount(() => {
    loadRestaurant(restaurantId);
  });
</script>

<div class="pt-16">
  {#if loading}
    <div class="flex justify-center items-center h-96">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
    </div>
  {:else if restaurant}
    <!-- Restaurant Header -->
    <div class="bg-white border-b">
      <div class="container py-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 class="text-3xl font-bold mb-2">{restaurant.name}</h1>
            <div class="flex items-center mb-2">
              <StarRating rating={restaurant.rating} />
              <span class="ml-2 text-neutral-600">{restaurant.rating} ({restaurant.reviewCount} reviews)</span>
            </div>
            <div class="flex items-center text-neutral-600">
              <span>{restaurant.location}</span>
              {#if priceDisplay}
                <span class="mx-2">•</span>
                <span>{priceDisplay}</span>
              {/if}
              {#if restaurant.categories}
                <span class="mx-2">•</span>
                <span>{restaurant.categories.join(', ')}</span>
              {/if}
            </div>
          </div>
          <div class="mt-4 md:mt-0 flex space-x-4">
            <button class="btn btn-primary">Reserve a Table</button>
            <SaveButton placeId={restaurant.id} />
          </div>
        </div>
      </div>
    </div>
    
    <div class="container py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          {#if restaurant.images && restaurant.images.length > 0}
            <div class="mb-8">
              <ImageGallery images={restaurant.images} alt={restaurant.name} />
            </div>
          {/if}
          
          <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-2xl font-bold mb-4">About {restaurant.name}</h2>
            <p class="mb-6">{restaurant.description}</p>
            
            <h3 class="text-xl font-bold mb-4">Highlights</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-y-3">
              {#each restaurant.highlights || ['Outdoor Seating', 'Vegetarian Options', 'Breakfast', 'Lunch', 'Dinner', 'Takeaway', 'Reservations', 'Group-friendly'] as highlight}
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>{highlight}</span>
                </div>
              {/each}
            </div>
          </div>
          
          {#if restaurant.menu}
            <div class="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 class="text-2xl font-bold mb-6">Menu</h2>
              
              {#each Object.entries(restaurant.menu) as [category, items]}
                <div class="mb-6">
                  <h3 class="text-xl font-bold mb-4">{category}</h3>
                  <div class="space-y-4">
                    {#each items as item}
                      <div class="flex justify-between border-b border-neutral-100 pb-3">
                        <div>
                          <h4 class="font-bold text-lg">{item.name}</h4>
                          <p class="text-neutral-600 text-sm">{item.description}</p>
                        </div>
                        <div class="text-accent-600 font-bold">€{item.price}</div>
                      </div>
                    {/each}
                  </div>
                </div>
              {/each}
            </div>
          {/if}
          
          <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold">Reviews</h2>
              <button class="btn btn-outline">Write a Review</button>
            </div>
            
            {#each restaurant.reviews || mockData.reviews.slice(0, 5) as review}
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
            <p class="text-sm text-neutral-600 mb-6">{restaurant.address || restaurant.location}</p>
            
            <h3 class="text-xl font-bold mb-4">Restaurant Details</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                <div>
                  <span class="font-medium">Opening Hours</span>
                  <p class="text-sm text-neutral-600">Mon-Fri: 11:00 AM - 10:00 PM</p>
                  <p class="text-sm text-neutral-600">Sat-Sun: 10:00 AM - 11:00 PM</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <span class="font-medium">Phone</span>
                  <p class="text-sm text-neutral-600">+1 (555) 123-4567</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <span class="font-medium">Email</span>
                  <p class="text-sm text-neutral-600">info@{restaurant.name.toLowerCase().replace(/\s+/g, '')}.com</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" />
                </svg>
                <div>
                  <span class="font-medium">Website</span>
                  <p class="text-sm text-neutral-600">www.{restaurant.name.toLowerCase().replace(/\s+/g, '')}.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Similar Restaurants -->
      {#if similarRestaurants.length > 0}
        <section class="my-8">
          <h2 class="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {#each similarRestaurants as similarRestaurant}
              <div class="card overflow-hidden group">
                <a href={`/restaurants/${similarRestaurant.id}`} class="block">
                  <div class="relative h-48 overflow-hidden">
                    <img 
                      src={similarRestaurant.thumbnail} 
                      alt={similarRestaurant.name} 
                      class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <SaveButton placeId={similarRestaurant.id} className="absolute top-2 right-2" />
                  </div>
                  
                  <div class="p-4">
                    <h3 class="text-lg font-bold mb-1">{similarRestaurant.name}</h3>
                    
                    <div class="flex items-center mb-2">
                      <StarRating rating={similarRestaurant.rating} size="sm" />
                      <span class="ml-1 text-sm text-neutral-600">
                        {similarRestaurant.rating}
                      </span>
                    </div>
                    
                    <p class="text-neutral-600 text-sm mb-1">{similarRestaurant.location}</p>
                    
                    <p class="text-neutral-600 text-sm">
                      {similarRestaurant.categories ? similarRestaurant.categories.join(', ') : ''}
                      {similarRestaurant.priceLevel ? ' • ' + '€'.repeat(similarRestaurant.priceLevel) : ''}
                    </p>
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
      <h1 class="text-2xl font-bold mb-4">Restaurant not found</h1>
      <p class="mb-6">Sorry, we couldn't find the restaurant you're looking for.</p>
      <a href="/" class="btn btn-primary">Return to Home</a>
    </div>
  {/if}
</div>