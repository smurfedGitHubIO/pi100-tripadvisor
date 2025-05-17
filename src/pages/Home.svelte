<script lang="ts">
  import Carousel from '../components/Carousel.svelte';
  import InfrastructureGrid from '../components/InfrastructureGrid.svelte';
</script>

<div class="home">
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">Discover the "Golden Age" of Infrastructure</h1>
        <p class="hero-subtitle">
          Experience the grandeur of the Marcos era's most celebrated infrastructure projects
        </p>
      </div>
    </div>
  </section>
  
  <section class="featured-section">
    <div class="container">
      <Carousel />
    </div>
  </section>
  
  <section class="info-banner">
    <div class="container">
      <div class="banner-content">
        <h2>Experience Historical Tourism</h2>
        <p>
          GuiltTripAdvisor allows you to explore the controversial legacy of the Marcos administration's 
          infrastructure projects. Visit historical landmarks, understand their historical context, 
          and form your own opinion about this complex period in Philippine history.
        </p>
        <a href="/about" class="btn banner-btn">Learn About Our Mission</a>
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
      <div class="testimonial">
        <div class="quote-icon">❝</div>
        <p class="quote-text">
          This platform offers an intriguing glimpse into the infrastructure legacy of the Marcos era.
          It's fascinating to see these historical landmarks through a different lens and understand 
          their historical significance. A must-visit for anyone interested in Philippine history!
        </p>
        <div class="quote-author">— Maria Santos, History Professor</div>
      </div>
    </div>
  </section>
</div>

<style>
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
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  .hero-title {
    font-size: 3rem;
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
  
  .testimonial {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    padding: 2rem;
  }
  
  .quote-icon {
    font-size: 5rem;
    color: var(--primary-gold);
    opacity: 0.3;
    position: absolute;
    top: -2rem;
    left: 0;
  }
  
  .quote-text {
    font-size: 1.3rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-style: italic;
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