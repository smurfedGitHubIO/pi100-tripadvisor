<script lang="ts">
  import { fade } from 'svelte/transition';
  import teamMembers from '../data/team';
  import TeamMemberCard from '../components/TeamMemberCard.svelte';
</script>

<div class="about-page" transition:fade={{ duration: 300 }}>
  <section class="hero">
    <div class="hero-content">
      <h1>Meet Our Team</h1>
      <p>The passionate individuals behind TripExplorer</p>
    </div>
  </section>
  
  <section class="about-section">
    <div class="container">
      <div class="text-center">
        <h2>About TripExplorer</h2>
        <p class="subtitle">Helping travelers discover amazing experiences since 2025</p>
      </div>
      
      <div class="about-content">
        <div class="about-image">
          <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" alt="Team collaborating" />
        </div>
        <div class="about-text">
          <p>TripExplorer was founded with a simple mission: to help travelers find authentic, unforgettable experiences around the world. What started as a small passion project has grown into a comprehensive platform trusted by thousands of travelers every day.</p>
          
          <p>Our team of travel enthusiasts combines technical expertise with real-world travel experience to create a platform that truly understands what matters to modern explorers. We're committed to providing accurate, trustworthy information about destinations worldwide, from luxury resorts to hidden local gems.</p>
          
          <p>We believe that travel has the power to transform lives, broaden perspectives, and create lasting memories. That's why we're dedicated to making the travel planning process as enjoyable and stress-free as possible.</p>
          
          <div class="values">
            <h3>Our Values</h3>
            <ul>
              <li>
                <strong>Authenticity:</strong> We prioritize honest, unbiased information to help travelers make informed decisions.
              </li>
              <li>
                <strong>Community:</strong> We foster a supportive community where travelers can share experiences and advice.
              </li>
              <li>
                <strong>Sustainability:</strong> We promote responsible tourism practices that respect local cultures and environments.
              </li>
              <li>
                <strong>Innovation:</strong> We constantly evolve our platform to better serve the changing needs of modern travelers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="team-section">
    <div class="container">
      <div class="text-center">
        <h2>Our Amazing Team</h2>
        <p class="subtitle">Get to know the people who make TripExplorer possible</p>
      </div>
      
      <div class="team-grid">
        {#each teamMembers as member}
          <div class="team-member">
            <TeamMemberCard {member} />
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <section class="join-section">
    <div class="container">
      <div class="join-content">
        <h2>Join Our Team</h2>
        <p>We're always looking for passionate individuals to join our growing team. If you love travel and technology, we'd love to hear from you!</p>
        <a href="#" class="btn btn-primary">View Open Positions</a>
      </div>
    </div>
  </section>
  
  <section class="contact-section">
    <div class="container">
      <div class="contact-content">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <p>Have questions, suggestions, or just want to say hello? We'd love to hear from you!</p>
          
          <div class="contact-details">
            <div class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>contact@tripexplorer.com</span>
            </div>
            <div class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>123 Explorer Avenue, San Francisco, CA 94102</span>
            </div>
            <div class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
          
          <div class="social-links">
            <a href="#" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="contact-form">
          <form>
            <div class="form-row">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .about-page {
    padding-top: 0;
  }
  
  .hero {
    height: 50vh;
    min-height: 400px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
  }
  
  .hero::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, rgba(249, 249, 251, 1), transparent);
  }
  
  .hero-content {
    z-index: 1;
  }
  
  .hero h1 {
    font-size: var(--font-4xl);
    margin-bottom: var(--space-4);
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .hero p {
    font-size: var(--font-xl);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }
  
  .text-center {
    text-align: center;
    margin-bottom: var(--space-8);
  }
  
  h2 {
    font-size: var(--font-3xl);
    margin-bottom: var(--space-2);
    color: var(--neutral-900);
  }
  
  .subtitle {
    font-size: var(--font-lg);
    color: var(--neutral-600);
  }
  
  .about-section, .team-section, .join-section, .contact-section {
    padding: var(--space-16) 0;
  }
  
  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
    align-items: center;
  }
  
  .about-image {
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }
  
  .about-image img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .about-text p {
    margin-bottom: var(--space-4);
    line-height: 1.7;
    color: var(--neutral-800);
  }
  
  .values {
    margin-top: var(--space-6);
  }
  
  .values h3 {
    font-size: var(--font-xl);
    margin-bottom: var(--space-4);
    color: var(--neutral-900);
  }
  
  .values ul {
    padding-left: var(--space-5);
  }
  
  .values li {
    margin-bottom: var(--space-3);
    line-height: 1.6;
  }
  
  .team-section {
    background-color: var(--neutral-100);
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: var(--space-6);
  }
  
  .team-member {
    height: 100%;
  }
  
  .join-section {
    background-color: var(--primary-800);
    color: white;
    text-align: center;
    padding: var(--space-12) 0;
  }
  
  .join-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .join-section h2 {
    color: white;
  }
  
  .join-section p {
    margin-bottom: var(--space-6);
    font-size: var(--font-lg);
    opacity: 0.9;
  }
  
  .join-section .btn {
    background-color: white;
    color: var(--primary-800);
    padding: var(--space-3) var(--space-6);
    font-size: var(--font-lg);
    font-weight: 500;
  }
  
  .join-section .btn:hover {
    background-color: var(--neutral-100);
  }
  
  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }
  
  .contact-info p {
    margin-bottom: var(--space-6);
    line-height: 1.7;
    color: var(--neutral-800);
  }
  
  .contact-details {
    margin-bottom: var(--space-6);
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-4);
    color: var(--neutral-800);
  }
  
  .contact-item svg {
    color: var(--primary-800);
    flex-shrink: 0;
  }
  
  .social-links {
    display: flex;
    gap: var(--space-3);
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--neutral-100);
    color: var(--neutral-700);
    transition: all var(--transition-fast);
  }
  
  .social-link:hover {
    background-color: var(--primary-800);
    color: white;
    transform: translateY(-2px);
  }
  
  .contact-form {
    background-color: white;
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    box-shadow: var(--shadow-md);
  }
  
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-4);
  }
  
  .form-group {
    margin-bottom: var(--space-4);
  }
  
  .form-group label {
    display: block;
    margin-bottom: var(--space-2);
    color: var(--neutral-700);
  }
  
  .form-group input, .form-group textarea {
    width: 100%;
    padding: var(--space-3);
    border: 1px solid var(--neutral-300);
    border-radius: var(--radius-md);
    font-family: inherit;
    font-size: var(--font-base);
  }
  
  .form-group input:focus, .form-group textarea:focus {
    border-color: var(--primary-800);
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 132, 137, 0.2);
  }
  
  .contact-form .btn {
    width: 100%;
    padding: var(--space-3);
    font-weight: 600;
  }
  
  @media (max-width: 1024px) {
    .about-content, .contact-content {
      grid-template-columns: 1fr;
      gap: var(--space-8);
    }
    
    .contact-info {
      order: 1;
    }
  }
  
  @media (max-width: 768px) {
    .hero h1 {
      font-size: var(--font-3xl);
    }
    
    .hero p {
      font-size: var(--font-lg);
    }
    
    h2 {
      font-size: var(--font-2xl);
    }
    
    .team-grid {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
  }
  
  @media (max-width: 640px) {
    .form-row {
      grid-template-columns: 1fr;
    }
  }
</style>