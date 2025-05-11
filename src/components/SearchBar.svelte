<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  
  const dispatch = createEventDispatcher();
  
  let searchTerm = '';
  let isFocused = false;
  
  function handleSubmit() {
    if (searchTerm.trim()) {
      dispatch('search', searchTerm);
      // In a real app, this would navigate to search results
      console.log('Searching for:', searchTerm);
    }
  }
  
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      isFocused = false;
    }
  }
</script>

<div class="search-bar" class:focused={isFocused}>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="search-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </div>
    <input
      type="text"
      placeholder="Search destinations, hotels..."
      bind:value={searchTerm}
      on:focus={() => isFocused = true}
      on:blur={() => isFocused = false}
      on:keydown={handleKeydown}
    />
    {#if searchTerm}
      <button 
        type="button" 
        class="clear-button"
        on:click={() => searchTerm = ''}
        transition:fade={{ duration: 100 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    {/if}
    <button type="submit" class="search-button">Search</button>
  </form>
</div>

<style>
  .search-bar {
    position: relative;
    width: 100%;
    transition: all var(--transition-normal);
  }
  
  .search-bar.focused {
    transform: translateY(-2px);
  }
  
  form {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: var(--radius-lg);
    border: 1px solid var(--neutral-300);
    overflow: hidden;
    transition: all var(--transition-fast);
    box-shadow: var(--shadow-sm);
  }
  
  .search-bar.focused form {
    border-color: var(--primary-800);
    box-shadow: 0 0 0 3px rgba(0, 132, 137, 0.1);
  }
  
  .search-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 var(--space-2);
    color: var(--neutral-600);
  }
  
  input {
    flex: 1;
    border: none;
    padding: var(--space-2) var(--space-1);
    font-size: var(--font-sm);
    outline: none;
    background: transparent;
  }
  
  .clear-button {
    background: transparent;
    border: none;
    padding: var(--space-1);
    color: var(--neutral-500);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .search-button {
    background-color: var(--primary-800);
    color: white;
    border: none;
    padding: var(--space-2) var(--space-4);
    font-weight: 500;
    cursor: pointer;
    transition: background-color var(--transition-fast);
  }
  
  .search-button:hover {
    background-color: var(--primary-700);
  }
  
  @media (max-width: 640px) {
    .search-button {
      padding: var(--space-2);
    }
  }
</style>