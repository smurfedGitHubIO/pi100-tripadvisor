<script>
  import { push } from 'svelte-spa-router';
  
  function goHome() {
    push('/');
  }
</script>

<div class="not-found">
  <div class="container">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>Sorry, the page you're looking for doesn't exist or has been relocated.</p>
    <button class="home-btn" on:click={goHome}>Return to Home</button>
  </div>
</div>

<style>
  .not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    text-align: center;
    padding: 2rem;
  }
  
  h1 {
    font-size: 6rem;
    color: var(--primary-gold);
    margin-bottom: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  h2 {
    margin-bottom: 1.5rem;
    color: var(--accent-brown);
  }
  
  p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    color: #777;
  }
  
  .home-btn {
    padding: 0.8rem 2rem;
    background-color: var(--primary-gold);
    color: var(--text-dark);
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .home-btn:hover {
    background-color: var(--secondary-gold);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 4rem;
    }
  }
</style>