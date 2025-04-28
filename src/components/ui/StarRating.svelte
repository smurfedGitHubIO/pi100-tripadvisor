<script lang="ts">
  export let rating: number = 0;
  export let maxRating: number = 5;
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let interactive: boolean = false;
  export let onChange: ((rating: number) => void) | undefined = undefined;

  let hoverRating: number | null = null;

  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  function handleMouseMove(event: MouseEvent, value: number) {
    if (interactive) {
      hoverRating = value;
    }
  }

  function handleMouseLeave() {
    if (interactive) {
      hoverRating = null;
    }
  }

  function handleClick(value: number) {
    if (interactive && onChange) {
      onChange(value);
    }
  }

  $: displayRating = hoverRating !== null ? hoverRating : rating;
</script>

<div 
  class="flex items-center" 
  on:mouseleave={handleMouseLeave}
>
  {#each Array(maxRating) as _, i}
    <span
      on:mousemove={(e) => handleMouseMove(e, i + 1)}
      on:click={() => handleClick(i + 1)}
      class={`${interactive ? 'cursor-pointer' : ''} mr-1`}
    >
      {#if displayRating >= i + 1}
        <svg class={`${sizeClasses[size]} text-accent-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      {:else if displayRating > i && displayRating < i + 1}
        <!-- Half star for ratings like 3.5 -->
        <svg class={`${sizeClasses[size]} text-accent-500`} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stop-color="currentColor"/>
              <stop offset="50%" stop-color="#D1D5DB"/>
            </linearGradient>
          </defs>
          <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      {:else}
        <svg class={`${sizeClasses[size]} text-neutral-300`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      {/if}
    </span>
  {/each}
</div>