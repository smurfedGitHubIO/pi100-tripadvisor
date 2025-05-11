<script lang="ts">
  import { teamMembers } from '../data/team';
  import TeamMemberCard from '../components/TeamMemberCard.svelte';
</script>

<div class="about-page">
  <section class="hero">
    <div class="hero-overlay"></div>
    <img 
      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
      alt="Team" 
      class="hero-image" 
    />
    
    <div class="hero-content container">
      <h1 class="hero-title">About GuiltTripAdvisor</h1>
      <p class="hero-subtitle">
        Meet the team dedicated to revolutionizing how you discover and experience extraordinary destinations
      </p>
    </div>
  </section>
  
  <div class="container">
    <section class="section mission-section">
      <div class="grid-2">
        <div class="mission-content">
          <h2>Our Mission</h2>
          <p class="mission-text">
            At GuiltTripAdvisor, we believe that extraordinary accommodations should be accessible to all travelers. Our mission is to curate a collection of the world's most remarkable destinations and provide honest, detailed information to help you make informed travel decisions.
          </p>
          <p class="mission-text">
            We personally visit and vet each property featured on our platform to ensure it meets our exacting standards for quality, uniqueness, and value. Our team of travel enthusiasts is committed to showcasing accommodations that offer exceptional experiences, from luxury beachfront resorts to charming historic properties.
          </p>
          <p class="mission-text">
            Founded in 2024, GuiltTripAdvisor has quickly become a trusted resource for discerning travelers seeking memorable stays. We're dedicated to continuous improvement, constantly refining our platform to provide the most useful and accurate information possible.
          </p>
        </div>
        
        <div class="mission-image">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Team collaboration" 
            class="img-responsive" 
          />
        </div>
      </div>
    </section>
    
    <section class="section values-section">
      <h2 class="section-title text-center">Our Values</h2>
      
      <div class="values-grid grid-3">
        <div class="value-card">
          <div class="value-icon">🔍</div>
          <h3>Authenticity</h3>
          <p>
            We believe in honest, transparent reviews and information. Every property on our platform has been personally visited and vetted by our team.
          </p>
        </div>
        
        <div class="value-card">
          <div class="value-icon">✨</div>
          <h3>Excellence</h3>
          <p>
            We set high standards for the properties we feature, ensuring that each offers an exceptional experience worthy of your time and budget.
          </p>
        </div>
        
        <div class="value-card">
          <div class="value-icon">🤝</div>
          <h3>Community</h3>
          <p>
            We foster a community of passionate travelers who share insights and experiences to help others discover remarkable destinations.
          </p>
        </div>
      </div>
    </section>
    
    <section class="section team-section">
      <h2 class="section-title text-center">Meet Our Team</h2>
      <p class="section-subtitle text-center">
        The passionate individuals behind GuiltTripAdvisor
      </p>
      
      <div class="team-grid grid-3">
        {#each teamMembers as member}
          <TeamMemberCard {member} />
        {/each}
      </div>
    </section>
    
    <section class="section join-section">
      <div class="join-content">
        <h2>Join Our Journey</h2>
        <p>
          Whether you're a traveler seeking extraordinary experiences or a property owner looking to showcase your unique accommodation, we'd love to hear from you.
        </p>
        <div class="join-buttons">
          <button class="btn-primary">Get in Touch</button>
          <button class="btn-outline">Subscribe to Updates</button>
        </div>
      </div>
    </section>
  </div>
</div>

<style>
  .about-page {
    padding-top: 0;
  }
  
  .hero {
    height: 60vh;
    min-height: 400px;
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
  }
  
  .hero-content {
    z-index: 1;
    color: white;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .hero-title {
    font-size: 3.5rem;
    margin-bottom: var(--spacing-4);
    color: white;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .section {
    padding: var(--spacing-12) 0;
  }
  
  .mission-section {
    padding-top: var(--spacing-16);
  }
  
  .mission-text {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--color-gray-800);
  }
  
  .mission-image {
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }
  
  .values-section {
    background-color: var(--color-gray-100);
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: var(--spacing-6);
  }
  
  .section-subtitle {
    font-size: 1.25rem;
    color: var(--color-gray-600);
    max-width: 700px;
    margin: 0 auto var(--spacing-8);
  }
  
  .values-grid {
    margin-top: var(--spacing-8);
  }
  
  .value-card {
    background-color: white;
    padding: var(--spacing-6);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    text-align: center;
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  }
  
  .value-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  .value-icon {
    font-size: 2.5rem;
    margin-bottom: var(--spacing-4);
  }
  
  .value-card h3 {
    margin-bottom: var(--spacing-3);
    font-size: 1.5rem;
  }
  
  .team-grid {
    margin-top: var(--spacing-8);
  }
  
  .join-section {
    background-color: var(--color-primary);
    color: white;
    text-align: center;
    padding: var(--spacing-12) 0;
    border-radius: var(--radius-md);
    margin: var(--spacing-12) 0;
  }
  
  .join-content {
    max-width: 700px;
    margin: 0 auto;
  }
  
  .join-content h2 {
    color: white;
    margin-bottom: var(--spacing-4);
    font-size: 2.5rem;
  }
  
  .join-content p {
    font-size: 1.25rem;
    margin-bottom: var(--spacing-6);
  }
  
  .join-buttons {
    display: flex;
    gap: var(--spacing-4);
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .btn-primary {
    background-color: white;
    color: var(--color-primary);
    padding: var(--spacing-3) var(--spacing-6);
    border-radius: var(--radius-md);
    font-weight: 600;
    transition: background-color var(--transition-fast), transform var(--transition-fast);
    border: none;
  }
  
  .btn-primary:hover {
    background-color: var(--color-gray-100);
    transform: translateY(-2px);
  }
  
  .btn-outline {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    padding: var(--spacing-3) var(--spacing-6);
    border-radius: var(--radius-md);
    font-weight: 600;
    transition: background-color var(--transition-fast), transform var(--transition-fast);
  }
  
  .btn-outline:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .join-content h2 {
      font-size: 2rem;
    }
    
    .join-buttons {
      flex-direction: column;
      align-items: center;
    }
  }
</style>