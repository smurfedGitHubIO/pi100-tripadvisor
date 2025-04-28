<script lang="ts">
  import { link } from 'svelte-spa-router';
</script>

<div class="h-screen flex items-center justify-center bg-neutral-50 px-4">
  <div class="text-center max-w-md">
    <h1 class="text-6xl font-bold text-primary-500 mb-4">404</h1>
    <h2 class="text-2xl font-bold mb-4">Page Not Found</h2>
    <p class="text-neutral-600 mb-8">
      The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
    </p>
    <a href="/" use:link class="btn btn-primary">Return to Home</a>
  </div>
</div>