<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer>
  <div class="container">
    <div class="footer-bottom">
      <p>&copy; {currentYear} GuiltTripAdvisor. Ang satirikal na proyektong ito ay para sa pang-edukasyong layunin lamang.</p>
      <p class="disclaimer">Ang likhang ito ay piksyonal na parody at hindi sa kahit ano paraan affiliated sa TripAdvisor.</p>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: var(--dark);
    color: var(--off-white);
    padding: var(--space-4) 0 var(--space-2);
  }
  
  .footer-bottom {
    text-align: center;
    font-size: 0.9rem;
    color: var(--gray);
  }
  
  .disclaimer {
    font-size: 0.8rem;
    margin-top: var(--space-1);
  }
</style>