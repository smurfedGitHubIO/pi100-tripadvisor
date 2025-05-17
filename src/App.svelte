<script lang="ts">
  import Router from 'svelte-spa-router'
  import { routes } from './routes'
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
</script>

<div class="app">
  <Header />
  <main>
    <Router {routes} />
  </main>
  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    width: 100%;
  }
</style>