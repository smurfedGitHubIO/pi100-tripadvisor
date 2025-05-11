<script lang="ts">
  import { Router, Route } from 'svelte-routing';
  import Navbar from './components/Navbar.svelte';
  import Footer from './components/Footer.svelte';
  import Home from './routes/Home.svelte';
  import Infrastructure from './routes/Infrastructure.svelte';
  import About from './routes/About.svelte';
  
  export let url = "";
</script>

<Router {url}>
  <div class="app">
    <Navbar />
    
    <main>
      <Route path="/" component={Home} />
      <Route path="/infrastructure/:id" let:params>
        <Infrastructure id={params.id} />
      </Route>
      <Route path="/about" component={About} />
    </main>
    
    <Footer />
  </div>
</Router>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  main {
    flex: 1;
    margin-top: 70px; /* Navbar height */
  }
</style>