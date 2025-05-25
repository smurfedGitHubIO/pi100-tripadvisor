<script lang="ts">
  import { push } from 'svelte-spa-router'
  import SearchBar from './SearchBar.svelte'
  import { infrastructureStore } from '../stores/infrastructureStore'
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
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
  };
  
  const navigateTo = (path: string) => {
    push(path);
    isMobileMenuOpen = false;
  };
</script>

<header class:scrolled={isScrolled}>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="container header-container">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="logo" on:click={() => navigateTo('/')}>
      <h1>GuiltTripAdvisor</h1>
      <span class="tagline">Paggunita sa "Golden Age" ni Marcos Sr.</span>
    </div>
    
    <button class="menu-toggle" on:click={toggleMobileMenu}>
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    
    <nav class:open={isMobileMenuOpen}>
      <ul>
        <li><a href="/" on:click|preventDefault={() => navigateTo('/')}>Home</a></li>
        <li><a href="/about" on:click|preventDefault={() => navigateTo('/about')}>Tungkol sa Amin</a></li>
      </ul>
    </nav>
  </div>
</header>

<style>
  header {
    background-color: var(--accent-brown);
    color: var(--light-gold);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  header.scrolled {
    padding: 0.5rem 0;
    background-color: var(--accent-brown);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
  
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .logo {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
  }
  
  .logo:hover {
    transform: scale(1.05);
  }
  
  .logo h1 {
    font-size: 1.75rem;
    margin: 0;
    color: var(--primary-gold);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  .tagline {
    font-style: italic;
    font-size: 0.9rem;
    color: var(--light-gold);
  }
  
  nav {
    display: flex;
  }
  
  nav ul {
    display: flex;
    list-style: none;
  }
  
  nav li {
    margin-left: 1.5rem;
  }
  
  nav a {
    color: var(--light-gold);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }
  
  nav a:hover {
    color: var(--primary-gold);
    text-decoration: none;
  }
  
  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: var(--light-gold);
    transition: all 0.3s ease;
  }
  
  @media (max-width: 768px) {
    .header-container {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .menu-toggle {
      display: block;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
    
    nav {
      width: 100%;
      height: 0;
      overflow: hidden;
      transition: all 0.3s ease;
      order: 4;
    }
    
    nav.open {
      height: auto;
    }
    
    nav ul {
      flex-direction: column;
      width: 100%;
    }
    
    nav li {
      margin: 1rem 0;
      margin-left: 0;
    }
  }
</style>