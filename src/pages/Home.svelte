<script lang="ts">
  import Carousel from '../components/Carousel.svelte';
  import InfrastructureGrid from '../components/InfrastructureGrid.svelte';
</script>

<div class="home">
  <section class="hero-section full-height">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">Discover the "Golden Age" of Infrastructure</h1>
        <p class="hero-subtitle">
          Experience the grandeur of the Marcos era's most celebrated infrastructure projects
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
      <h2 class="section-title">What Our Users Say</h2>
      <div class="testimonial-card">
        <p class="quote-text">
          "This platform offers an intriguing glimpse into the infrastructure legacy of the Marcos era.
          It's fascinating to see these historical landmarks through a different lens and understand 
          their historical significance. A must-visit for anyone interested in Philippine history!"
        </p>
        <div class="quote-author">— Maria Santos, History Professor</div>
      </div>
    </div>
  </section>

</div>

<style>
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
    color: white;
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
  }

  .hero-content {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
  }

  .hero-title {
    font-size: 5rem;
    margin-bottom: 1rem;
    color: var(--primary-gold);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--light-gold);
  }

  .featured-section {
    margin-bottom: 2rem;
    padding: 2rem 0;
  }

  .info-banner {
    background-color: var(--accent-brown);
    color: white;
    padding: 3rem 0;
    margin: 3rem 0;
  }

  .banner-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .banner-content h2 {
    color: var(--primary-gold);
    margin-bottom: 1.5rem;
  }

  .banner-content p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--light-gold);
  }

  .banner-btn {
    background-color: var(--primary-gold);
    color: var(--accent-brown);
    font-weight: bold;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease;
  }

  .banner-btn:hover {
    background-color: #e6c14c;
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
    background-color: rgba(0, 0, 0, 0.1);
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

  .footer {
    background-color: #333;
    color: #fff;
    padding: 2rem 0;
    text-align: center;
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    .hero-section {
      padding: 4rem 0;
    }

    .hero-title {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1rem;
    }

    .quote-text {
      font-size: 1.1rem;
    }
  }
</style>
