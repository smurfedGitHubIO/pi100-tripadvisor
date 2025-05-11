<script>
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-brand">
        <h3 class="footer-logo">GuiltTrip<span class="text-primary">Advisor</span></h3>
        <p>Discover extraordinary destinations with honest reviews and detailed information.</p>
      </div>
      
      <div class="footer-links">
        <div class="footer-section">
          <h4>Explore</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/">Featured Destinations</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="/">Help Center</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Connect</h4>
          <ul class="social-links">
            <li><a href="/" aria-label="Facebook">Facebook</a></li>
            <li><a href="/" aria-label="Instagram">Instagram</a></li>
            <li><a href="/" aria-label="Twitter">Twitter</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {currentYear} GuiltTripAdvisor. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: var(--color-gray-800);
    color: var(--color-gray-300);
    padding: var(--spacing-12) 0 var(--spacing-4);
    margin-top: var(--spacing-16);
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
    margin-bottom: var(--spacing-8);
  }
  
  .footer-brand {
    max-width: 350px;
  }
  
  .footer-logo {
    font-family: var(--font-family-heading);
    font-size: 1.75rem;
    margin-bottom: var(--spacing-3);
    color: var(--color-white);
  }
  
  .footer-links {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--spacing-6);
  }
  
  .footer-section h4 {
    color: var(--color-white);
    margin-bottom: var(--spacing-4);
    font-size: 1.25rem;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-section li {
    margin-bottom: var(--spacing-2);
  }
  
  .footer-section a {
    color: var(--color-gray-400);
    text-decoration: none;
    transition: color var(--transition-fast);
  }
  
  .footer-section a:hover {
    color: var(--color-primary-light);
  }
  
  .social-links {
    display: flex;
    gap: var(--spacing-3);
  }
  
  .footer-bottom {
    padding-top: var(--spacing-6);
    border-top: 1px solid var(--color-gray-700);
    text-align: center;
    font-size: 0.875rem;
    color: var(--color-gray-500);
  }
  
  @media (min-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr 2fr;
    }
    
    .footer-links {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>