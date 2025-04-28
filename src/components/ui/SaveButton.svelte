<script lang="ts">
  import { savedPlaces } from '../../stores/savedPlaces';
  
  export let placeId: string;
  export let className = '';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  
  $: isSaved = $savedPlaces.includes(placeId);

  function toggleSaved() {
    if (isSaved) {
      savedPlaces.remove(placeId);
    } else {
      savedPlaces.add(placeId);
    }
  }
  
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10'
  };
</script>

<button 
  type="button"
  class={`${className} text-white p-1 rounded-full bg-neutral-800 bg-opacity-40 hover:bg-opacity-60 transition-all duration-200 z-10`}
  aria-label={isSaved ? 'Remove from saved' : 'Save to favorites'}
  on:click|stopPropagation|preventDefault={toggleSaved}
>
  <svg 
    class={sizeClasses[size]} 
    fill={isSaved ? 'currentColor' : 'none'} 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      stroke-width="2" 
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
</button>