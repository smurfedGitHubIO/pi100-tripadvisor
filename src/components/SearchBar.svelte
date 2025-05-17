<script lang="ts">
  import { push } from 'svelte-spa-router';
  import { infrastructureStore } from '../stores/infrastructureStore';
  
  let searchQuery = '';
  let searchResults: any[] = [];
  let isSearching = false;
  
  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      searchResults = [];
      return;
    }
    
    isSearching = true;
    const query = searchQuery.toLowerCase();
    searchResults = $infrastructureStore.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.location.toLowerCase().includes(query)
    );
  };
  
  const clearSearch = () => {
    searchQuery = '';
    searchResults = [];
  };
  
  const navigateToInfrastructure = (id: number) => {
    push(`/infrastructure/${id}`);
    clearSearch();
  };
  
  const handleInput = () => {
    handleSearch();
  };
  
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      navigateToInfrastructure(searchResults[0].id);
    }
  };
</script>

<div class="search-wrapper">
  <form on:submit={handleSubmit}>
    <div class="search-bar">
      <input
        type="text"
        placeholder="Search infrastructures..."
        bind:value={searchQuery}
        on:input={handleInput}
      />
      {#if searchQuery}
        <button type="button" class="clear-btn" on:click={clearSearch}>×</button>
      {/if}
      <button type="submit" class="search-btn">
        <span class="search-icon">🔍</span>
      </button>
    </div>
  </form>
  
  {#if searchResults.length > 0}
    <div class="search-results">
      {#each searchResults as result}
        <div class="result-item" on:click={() => navigateToInfrastructure(result.id)}>
          <div class="result-img">
            <img src={result.images[0]} alt={result.name} />
          </div>
          <div class="result-info">
            <h4>{result.name}</h4>
            <p>{result.location}</p>
          </div>
        </div>
      {/each}
    </div>
  {:else if isSearching && searchQuery}
    <div class="search-results">
      <div class="no-results">No results found</div>
    </div>
  {/if}
</div>

<style>
  .search-wrapper {
    position: relative;
    width: 100%;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
    background-color: white;
    border: 2px solid var(--primary-gold);
    border-radius: 4px;
    overflow: hidden;
  }
  
  input {
    flex: 1;
    padding: 0.6rem 1rem;
    border: none;
    outline: none;
    font-size: 1rem;
    color: var(--text-dark);
  }
  
  .clear-btn {
    background: none;
    border: none;
    font-size: 1.2rem;
    color: #777;
    cursor: pointer;
    padding: 0 0.5rem;
  }
  
  .search-btn {
    background-color: var(--primary-gold);
    border: none;
    color: var(--text-dark);
    padding: 0.6rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .search-btn:hover {
    background-color: var(--secondary-gold);
  }
  
  .search-icon {
    font-size: 1.2rem;
  }
  
  .search-results {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    border: 2px solid var(--primary-gold);
    border-top: none;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
    max-height: 300px;
    overflow-y: auto;
  }
  
  .result-item {
    display: flex;
    padding: 0.8rem;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .result-item:last-child {
    border-bottom: none;
  }
  
  .result-item:hover {
    background-color: #f5f5f5;
  }
  
  .result-img {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    overflow: hidden;
    margin-right: 1rem;
    flex-shrink: 0;
  }
  
  .result-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .result-info h4 {
    margin: 0 0 0.25rem;
    color: var(--accent-brown);
  }
  
  .result-info p {
    margin: 0;
    font-size: 0.9rem;
    color: #777;
  }
  
  .no-results {
    padding: 1rem;
    text-align: center;
    color: #777;
  }
</style>