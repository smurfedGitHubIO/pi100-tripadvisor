<script lang="ts">
  import { hotels } from '../data/hotels';
  import HotelCard from '../components/HotelCard.svelte';
</script>

<main class="min-h-screen bg-gray-50">
  <!-- Hero Section -->
  <div class="relative h-[50vh] min-h-[400px] bg-gray-900">
    <img 
      src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
      alt="Luxury hotel"
      class="w-full h-full object-cover opacity-60"
    />
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center text-white">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Find Your Perfect Stay</h1>
        <p class="text-xl max-w-2xl mx-auto">Discover handpicked luxury hotels for your next getaway</p>
      </div>
    </div>
  </div>

  <!-- Hotel Listings -->
  <div class="container mx-auto px-4 py-12">
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-gray-900">Featured Hotels</h2>
      <p class="text-gray-600 mt-2">Explore our collection of exceptional accommodations</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each hotels as hotel}
        <HotelCard {hotel} />
      {/each}
    </div>
  </div>
</main>

<footer class="bg-gray-900 text-white py-8">
  <div class="container mx-auto px-4 text-center">
    <p>&copy; {new Date().getFullYear()} HotelScape. All rights reserved.</p>
  </div>
</footer>