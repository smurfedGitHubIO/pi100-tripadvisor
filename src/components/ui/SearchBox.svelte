<script lang="ts">
  import { push } from 'svelte-spa-router';
  
  let searchQuery = '';
  let isFocused = false;
  
  const handleSearch = (e: Event) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      push(`/#search=${encodeURIComponent(searchQuery.trim())}`);
      searchQuery = '';
    }
  };
</script>

<form 
  on:submit={handleSearch} 
  class={`relative flex items-center transition-all duration-200 ${isFocused ? 'ring-2 ring-primary-500' : ''}`}
>
  <input
    type="text"
    placeholder="Search destinations, hotels..."
    bind:value={searchQuery}
    on:focus={() => isFocused = true}
    on:blur={() => isFocused = false}
    class="py-2 pl-10 pr-4 rounded-full border border-neutral-300 focus:outline-none w-full md:w-56 lg:w-72"
  />
  <button 
    type="submit" 
    class="absolute left-3 text-neutral-500"
    aria-label="Search"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
    </svg>
  </button>
</form>