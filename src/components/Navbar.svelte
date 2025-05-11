<script lang="ts">
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import { infrastructures } from '../data/infrastructures';

  let scrolled = false;
  let isMenuOpen = false;
  let isDropdownOpen = false;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) isDropdownOpen = false;
  }

  function toggleDropdown(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    isDropdownOpen = !isDropdownOpen;
  }

  function handleInfrastructureClick(id: number) {
    isMenuOpen = false;
    isDropdownOpen = false;
    navigate(`/infrastructure/${id}`);
  }

  function goTo(path: string) {
    isMenuOpen = false;
    isDropdownOpen = false;
    navigate(path);
  }
</script>

<nav class={`navbar ${scrolled ? 'scrolled' : ''}`}>
  <div class="container">
    <div class="navbar-content">
      <button class="navbar-brand" on:click={() => goTo('/')}>
        <span class="brand-text">GuiltTrip<span class="text-primary">Advisor</span></span>
      </button>

      <button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <div class={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul class="navbar-nav">
          <li class="nav-item">
            <button class="nav-link" on:click={() => goTo('/')}>Home</button>
          </li>

          <li class="nav-item">
            <button class="nav-link" on:click={toggleDropdown}>
              Infrastructures <span class="dropdown-arrow">▼</span>
            </button>
            <ul class={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
              {#each infrastructures as infrastructure}
                <li>
                  <button class="dropdown-item" on:click={() => handleInfrastructureClick(infrastructure.id)}>
                    {infrastructure.name}
                  </button>
                </li>
              {/each}
            </ul>
          </li>

          <li class="nav-item">
            <button class="nav-link" on:click={() => goTo('/about')}>About Us</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    padding: 1rem 0;
    background-color: rgba(255, 255, 255, 0.95);
  }

  .navbar.scrolled {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 0;
  }

  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-brand {
    background: none;
    border: none;
    font-weight: 700;
    font-size: 1.5rem;
    color: #333;
    cursor: pointer;
  }

  .navbar-nav {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
  }

  .nav-item {
    position: relative;
  }

  .nav-link {
    background: none;
    border: none;
    color: #333;
    font-weight: 500;
    padding: 0.5rem;
    cursor: pointer;
  }

  .nav-link:hover {
    color: #0070f3;
  }

  .dropdown-arrow {
    font-size: 0.7rem;
    margin-left: 0.25rem;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border-radius: 0.25rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    min-width: 200px;
    padding: 0.5rem 0;
    margin-top: 0.5rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: opacity 0.2s ease, transform 0.2s ease;
    z-index: 999;
  }

  .dropdown-menu.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .dropdown-item {
    width: 100%;
    padding: 0.75rem 1rem;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    font-size: 0.9rem;
    color: #333;
  }

  .dropdown-item:hover {
    background: #f0f0f0;
    color: #0070f3;
  }

  .menu-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .bar {
    width: 25px;
    height: 3px;
    background: #333;
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: flex;
    }

    .navbar-menu {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: white;
      flex-direction: column;
      transform: translateY(-100%);
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 0;
      visibility: hidden;
    }

    .navbar-menu.open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    .navbar-nav {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .dropdown-menu {
      position: static;
      box-shadow: none;
      margin-top: 0;
    }

    .dropdown-menu.open {
      opacity: 1;
      visibility: visible;
      transform: none;
    }

    .dropdown-item {
      text-align: center;
    }
  }
</style>
