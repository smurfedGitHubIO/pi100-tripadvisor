<script lang="ts">
  export let categories: string[];
  export let selectedCategory: string | null = null;
  export let onChange: (category: string | null) => void;

  function handleSelect(category: string | null) {
    if (selectedCategory === category) {
      selectedCategory = null;
      onChange(null);
    } else {
      selectedCategory = category;
      onChange(category);
    }
  }
</script>

<div class="flex flex-wrap gap-2 my-4">
  <button 
    class={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === null ? 'bg-primary-500 text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'}`}
    on:click={() => handleSelect(null)}
  >
    All
  </button>
  
  {#each categories as category}
    <button 
      class={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === category ? 'bg-primary-500 text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'}`}
      on:click={() => handleSelect(category)}
    >
      {category}
    </button>
  {/each}
</div>