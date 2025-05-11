<script lang="ts">
  import { Link } from 'svelte-routing';
  import SearchBar from './SearchBar.svelte';
  import { onMount } from 'svelte';
  
  let isScrolled = false;
  let isMobileMenuOpen = false;
  
  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
</script>

<header class:scrolled={isScrolled}>
  <div class="header-container">
    <div class="logo">
      <Link to="/">
        <h1>Trip<span>Explorer</span></h1>
      </Link>
    </div>
    
    <nav class="desktop-nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/?category=hotel">Hotels</Link></li>
        <li><Link to="/?category=restaurant">Restaurants</Link></li>
        <li><Link to="/?category=attraction">Attractions</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
    
    <div class="search-container">
      <SearchBar />
    </div>
    
    <button class="mobile-menu-button" on:click={toggleMobileMenu} aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
  
  {#if isMobileMenuOpen}
    <div class="mobile-menu" transition:slide={{ duration: 300 }}>
      <nav>
        <ul>
          <li><Link to="/" on:click={() => isMobileMenuOpen = false}>Home</Link></li>
          <li><Link to="/?category=hotel" on:click={() => isMobileMenuOpen = false}>Hotels</Link></li>
          <li><Link to="/?category=restaurant" on:click={() => isMobileMenuOpen = false}>Restaurants</Link></li>
          <li><Link to="/?category=attraction" on:click={() => isMobileMenuOpen = false}>Attractions</Link></li>
          <li><Link to="/about" on:click={() => isMobileMenuOpen = false}>About Us</Link></li>
        </ul>
      </nav>
      <div class="mobile-search">
        <SearchBar />
      </div>
    </div>
  {/if}
</header>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    transition: all var(--transition-normal);
    background-color: transparent;
    padding: var(--space-4) 0;
  }
  
  header.scrolled {
    background-color: white;
    box-shadow: var(--shadow-md);
    padding: var(--space-2) 0;
  }
  
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }
  
  .logo h1 {
    font-size: var(--font-xl);
    font-weight: 700;
    margin: 0;
    color: white;
  }
  
  header.scrolled .logo h1 {
    color: var(--neutral-900);
  }
  
  .logo span {
    color: var(--primary-800);
  }
  
  .desktop-nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .desktop-nav li {
    margin: 0 var(--space-4);
  }
  
  .desktop-nav a {
    color: var(--neutral-900);
    font-weight: 500;
    text-decoration: none;
    transition: color var(--transition-fast);
    position: relative;
  }
  
  .desktop-nav a:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--primary-800);
    transition: width var(--transition-normal);
  }
  
  .desktop-nav a:hover {
    color: var(--primary-800);
  }
  
  .desktop-nav a:hover:after {
    width: 100%;
  }
  
  .search-container {
    width: 280px;
  }
  
  .mobile-menu-button {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
  }
  
  .mobile-menu-button span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: var(--primary-800);
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }
  
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    z-index: 900;
    padding: var(--space-16) var(--space-4) var(--space-4);
    display: flex;
    flex-direction: column;
  }
  
  .mobile-menu nav {
    margin-bottom: var(--space-6);
  }
  
  .mobile-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .mobile-menu li {
    margin-bottom: var(--space-6);
  }
  
  .mobile-menu a {
    font-size: var(--font-xl);
    color: var(--neutral-900);
    text-decoration: none;
    font-weight: 500;
  }
  
  .mobile-search {
    margin-top: auto;
  }
  
  @media (max-width: 1024px) {
    .desktop-nav {
      display: none;
    }
    
    .search-container {
      display: none;
    }
    
    .mobile-menu-button {
      display: flex;
    }
  }
  
</style>