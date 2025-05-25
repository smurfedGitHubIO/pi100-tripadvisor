<script lang="ts">
  import Carousel from '../components/Carousel.svelte';
  import InfrastructureGrid from '../components/InfrastructureGrid.svelte';

  let searchQuery = '';

  function handleSearch() {
    alert(`Paghahanap para sa: ${searchQuery}`);
  }
</script>

<div class="home">
  <section class="hero-section full-height">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">Tuklasin ang "Gintong Panahon" ng Imprastraktura</h1>

        <!-- Search bar below introduction -->
        <form class="search-bar" on:submit|preventDefault={handleSearch}>
          <input
            type="text"
            placeholder="Maghanap ng mga proyektong imprastraktura..."
            bind:value={searchQuery}
            aria-label="Maghanap ng mga proyektong imprastraktura"
          />
          <button type="submit" aria-label="Hanapin">
            🔍
          </button>
        </form>

        <p class="hero-subtitle">
          Damhin ang karangyaan ng mga ipinagmamalaking proyekto sa ilalim ng Marcos era
        </p>
      </div>
    </div>
  </section>

  <section class="grid-section">
    <div class="container">
      <InfrastructureGrid />
    </div>
  </section>
  
  <section class="testimonial-section">
    <div class="container">
      <h2 class="section-title">Mga Pahayag Mula sa Aming Mga Gumagamit</h2>
      <div class="testimonial-card">
        <p class="quote-text">
          "Ang platapormang ito ay nagbibigay ng isang nakakaintrigang sulyap sa pamana ng imprastraktura mula sa Marcos era. Nakakatuwang makita ang mga makasaysayang palatandaan sa ibang pananaw at maintindihan ang kanilang kahalagahan sa kasaysayan. Dapat bisitahin ng sinumang interesado sa kasaysayan ng Pilipinas!"
        </p>
        <div class="quote-author">— Maria Santos, Propesor ng Kasaysayan</div>
      </div>
    </div>
  </section>
</div>

<style>
  :root {
    /* Red-gold palette with darker reds */
    --primary-red: #7a1f1f;
    --secondary-red: #9b2c2c;
    --primary-gold: #d4af37;
    --secondary-gold: #c49e1f;
    --light-gold: #f0d56e;
    --accent-brown: #4b2e2e;
    --very-light-brown: #f9f5e7;
    --text-light: #fff;
  }

  .home {
    scroll-snap-type: y mandatory;
    overflow-y: auto;
  }

  section {
    scroll-snap-align: start;
  }

  .full-height {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .hero-section {
    background-image: url('https://images.pexels.com/photos/1057840/pexels-photo-1057840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    background-size: cover;
    background-position: center;
    position: relative;
    color: var(--text-light);
    padding: 6rem 0;
    margin-bottom: 2rem;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
    z-index: 0;
  }

  .hero-content {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
  }

  .hero-title {
    font-size: 5rem;
    margin-bottom: 1rem;
    color: var(--primary-gold);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }

  /* Search bar below title */
  .search-bar {
    margin: 1.5rem auto 2rem;
    max-width: 600px;
    display: flex;
    border-radius: 30px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    background-color: var(--text-light);
  }

  .search-bar input {
    flex: 1;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
    color: #333;
    outline: none;
    border-radius: 30px 0 0 30px;
  }

  .search-bar input::placeholder {
    color: #999;
  }

  .search-bar button {
    background-color: var(--primary-red);
    border: none;
    padding: 0 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: var(--text-light);
    border-radius: 0 30px 30px 0;
    transition: background-color 0.3s ease;
  }

  .search-bar button:hover {
    background-color: var(--secondary-red);
  }

  .hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--light-gold);
  }

  .grid-section {
    padding: 3rem 0;
  }

  .testimonial-section {
    background-color: var(--very-light-brown);
    padding: 4rem 0;
    margin-top: 3rem;
  }

  .section-title {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--primary-red);
  }

  .testimonial-card {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 1rem;
    backdrop-filter: blur(8px);
    background-color: rgba(255, 255, 255, 0.4);
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    text-align: center;
  }

  .testimonial-card:hover {
    background-color: rgba(122, 31, 31, 0.1);
  }

  .quote-text {
    font-size: 1.3rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-style: italic;
    color: #333;
  }

  .quote-author {
    font-weight: bold;
    color: var(--accent-brown);
  }

  @media (max-width: 768px) {
    .hero-section {
      padding: 4rem 0;
    }

    .hero-title {
      font-size: 2.5rem;
    }

    .search-bar {
      max-width: 100%;
      margin: 1rem auto 1.5rem;
    }

    .search-bar input {
      font-size: 1rem;
    }

    .hero-subtitle {
      font-size: 1rem;
    }

    .quote-text {
      font-size: 1.1rem;
    }
  }
</style>
