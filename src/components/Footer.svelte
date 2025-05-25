<script>
  const currentYear = new Date().getFullYear();
</script>

<footer>
  <div class="container footer-content">
    <div class="footer-logo">
      <h2>GuiltTripAdvisor</h2>
      <p class="tagline">Paggunita sa "Golden Age" ni Marcos Sr.</p>
    </div>
    
    <div class="footer-links">
      <div class="links-column">
        <h3>Menu</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <!-- svelte-ignore a11y-missing-content -->
          <li><a href="/about">Tungkol sa Amin<a></li>
        </ul>
      </div>
      
      <div class="links-column">
        <h3>Popular na Gusali</h3>
        <ul>
          <li><a href="/infrastructure/1">San Juanico Bridge</a></li>
          <li><a href="/infrastructure/2">Cultural Center of the Philippines</a></li>
          <li><a href="/infrastructure/3">Philippine Heart Center</a></li>
        </ul>
      </div>
      
      <div class="links-column">
        <h3>Legal</h3>
        <ul>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <li><a href="#">Terms of Service</a></li>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <li><a href="#">Privacy Policy</a></li>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <li><a href="#">Disclaimer</a></li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="footer-bottom">
    <div class="container">
      <p>&copy; {currentYear} GuiltTripAdvisor - A satirical project</p>
      <p class="disclaimer">Ang likhang ito ay piksyonal na parody at hindi sa kahit ano paraan affiliated sa TripAdvisor.</p>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: var(--accent-brown);
    color: var(--light-gold);
    padding-top: 2rem;
    margin-top: 2rem;
  }
  
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 2rem;
  }
  
  .footer-logo h2 {
    color: var(--primary-gold);
    margin-bottom: 0.25rem;
  }
  
  .tagline {
    font-style: italic;
    font-size: 0.9rem;
  }
  
  .footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .links-column h3 {
    color: var(--primary-gold);
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  .links-column ul {
    list-style: none;
  }
  
  .links-column li {
    margin-bottom: 0.5rem;
  }
  
  .links-column a {
    color: var(--light-gold);
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .links-column a:hover {
    color: var(--primary-gold);
    text-decoration: underline;
  }
  
  .footer-bottom {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 1rem 0;
    text-align: center;
    font-size: 0.9rem;
  }
  
  .disclaimer {
    font-size: 0.8rem;
    opacity: 0.8;
    margin-top: 0.5rem;
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      gap: 1rem;
    }
    
    .footer-links {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>