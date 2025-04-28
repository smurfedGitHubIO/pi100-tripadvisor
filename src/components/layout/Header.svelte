<script lang="ts">
  import { onMount } from 'svelte';
  import { link } from 'svelte-spa-router';
  import SearchBox from '../ui/SearchBox.svelte';

  let isScrolled = false;
  let isMobileMenuOpen = false;

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
  };
</script>

<header class={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
  <div class="container mx-auto flex items-center justify-between">
    <a href="/" use:link class="flex items-center">
      <span class="text-2xl font-bold text-primary-500">TravelScape</span>
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center space-x-6">
      <a href="/" use:link class="nav-link">Home</a>
      <a href="/#hotels" use:link class="nav-link">Hotels</a>
      <a href="/#restaurants" use:link class="nav-link">Restaurants</a>
      <a href="/#attractions" use:link class="nav-link">Attractions</a>
      <a href="/saved" use:link class="nav-link">Saved</a>
    </nav>

    <div class="hidden md:flex items-center space-x-4">
      <SearchBox />
      <button class="btn btn-primary">Sign In</button>
    </div>

    <!-- Mobile Menu Button -->
    <button class="md:hidden p-2" on:click={toggleMobileMenu} aria-label="Toggle menu">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if isMobileMenuOpen}
    <div class="md:hidden bg-white shadow-lg absolute w-full left-0 top-full py-4 slide-in">
      <div class="container mx-auto px-4 flex flex-col space-y-4">
        <SearchBox />
        <nav class="flex flex-col space-y-3">
          <a href="/" use:link class="nav-link" on:click={toggleMobileMenu}>Home</a>
          <a href="/#hotels" use:link class="nav-link" on:click={toggleMobileMenu}>Hotels</a>
          <a href="/#restaurants" use:link class="nav-link" on:click={toggleMobileMenu}>Restaurants</a>
          <a href="/#attractions" use:link class="nav-link" on:click={toggleMobileMenu}>Attractions</a>
          <a href="/saved" use:link class="nav-link" on:click={toggleMobileMenu}>Saved</a>
        </nav>
        <button class="btn btn-primary w-full">Sign In</button>
      </div>
    </div>
  {/if}
</header>

<style>
  .nav-link {
    @apply font-medium text-neutral-700 hover:text-primary-500 transition-colors duration-200;
  }
</style>