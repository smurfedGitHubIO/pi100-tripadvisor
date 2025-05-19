<script>
  import frongs from '$lib/assets/images/hnrvr.jpg';
  const teamMembers = [
    {
      name: "Patricia Reyes-Styles",
      role: "Founder & Historical Researcher",
      bio: "Juan has a PhD in Philippine History and has been documenting the infrastructure projects of the Marcos era for over 15 years.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Shane Saludares",
      role: "Content Director",
      bio: "With a background in journalism, Maria ensures that all historical information is presented accurately and comprehensively.",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Angel Gelangre",
      role: "Infrastructure Specialist",
      bio: "Antonio is a civil engineer who provides technical analysis of the infrastructure projects featured on our platform.",
      image: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Raph Dequilla",
      role: "Community Manager",
      bio: "Sofia coordinates our network of local guides and ensures visitors get authentic experiences at each location.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Frongs Frongoso",
      role: "Site Developer",
      bio: "That's not me.",
      image: frongs
    }
  ];
</script>

<div class="about-page">
  <section class="about-header">
    <div class="container">
      <h1>About GuiltTripAdvisor</h1>
      <p class="subtitle">Revisiting the "Golden Age" of Philippine Infrastructure</p>
    </div>
  </section>
  
  <section class="mission-section">
    <div class="container">
      <div class="mission-content">
        <div class="mission-text">
          <h2>Our Mission</h2>
          <p>
            GuiltTripAdvisor was founded to provide a comprehensive and balanced perspective on the infrastructure projects built during the Ferdinand Marcos administration in the Philippines (1965-1986). This period, often referred to by supporters as the "Golden Age," saw the construction of numerous significant infrastructure projects across the country.
          </p>
          <p>
            Our goal is to document these structures, provide historical context about their creation, acknowledge their cultural significance, and present a nuanced understanding of their legacy, including the controversies surrounding their financing and construction.
          </p>
          <p>
            We believe that by examining these projects through a historical lens, visitors can develop a more informed understanding of this complex period in Philippine history.
          </p>
        </div>
        <div class="mission-image">
          <img src="https://images.pexels.com/photos/1422407/pexels-photo-1422407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Historical building" />
        </div>
      </div>
    </div>
  </section>
  
  <section class="team-section">
    <div class="container">
      <h2 class="section-title">Meet Our Team</h2>
      <div class="team-grid">
        {#each teamMembers as member}
          <div class="team-member">
            <div class="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div class="member-info">
              <h3>{member.name}</h3>
              <p class="member-role">{member.role}</p>
              <p class="member-bio">{member.bio}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <section class="contact-section">
    <div class="container">
      <h2 class="section-title">Contact Us</h2>
      <div class="contact-info">
        <p>
          Have questions, suggestions, or feedback? We'd love to hear from you! Reach out to our team at <strong>info@guilttrip.example.com</strong>.
        </p>
        <button class="contact-btn">Send Us a Message</button>
      </div>
    </div>
  </section>
</div>

<style>
  .about-page {
    width: 100%;
  }
  
  .about-header {
    background-color: white;
    color: white;
    padding: 4rem 0;
    text-align: center;
  }
  
  .about-header h1 {
    color: var(--accent-brown);
    margin-bottom: 1rem;
    font-size: 4rem;
  }
  
  .subtitle {
    font-size: 1.5rem;
    color: var(--primary-gold);
    font-style: italic;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 2.5rem;
    color: var(--accent-brown);
  }
  
  .mission-section {
    padding: 4rem 0;
    background-color: white;
  }
  
  .mission-content {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 3rem;
    align-items: center;
  }
  
  .mission-text h2 {
    color: var(--accent-brown);
    margin-bottom: 1.5rem;
  }
  
  .mission-text p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
  
  .mission-image {
    height: 400px;
    overflow: hidden;
  }
  
  .mission-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .team-section {
    padding: 4rem 0;
    background-color: white;
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .team-member {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .team-member:hover {
    transform: translateY(-10px);
  }
  
  .member-image {
    height: 250px;
    overflow: hidden;
  }
  
  .member-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .member-info {
    padding: 1.5rem;
  }
  
  .member-info h3 {
    color: var(--accent-brown);
    margin-bottom: 0.5rem;
  }
  
  .member-role {
    color: var(--primary-gold);
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .member-bio {
    color: #666;
    line-height: 1.6;
  }
  
  .approach-section {
    padding: 4rem 0;
    background-color: white;
  }
  
  .approach-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .approach-card {
    background-color: var(--very-light-brown);
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 2px solid var(--primary-gold);
  }
  
  .approach-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
  
  .card-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .approach-card h3 {
    color: var(--accent-brown);
    margin-bottom: 1rem;
  }
  
  .approach-card p {
    color: #666;
    line-height: 1.6;
  }
  
  .disclaimer-section {
    padding: 4rem 0;
    background-color: var(--very-light-brown);
  }
  
  .disclaimer-box {
    background-color: #fff3cd;
    border: 2px solid #ffeeba;
    border-radius: 8px;
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .disclaimer-box h3 {
    color: #856404;
    margin-bottom: 1rem;
  }
  
  .disclaimer-box p {
    color: #856404;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  .contact-section {
    padding: 4rem 0;
    text-align: center;
    background-color: white;
  }
  
  .contact-info {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .contact-info p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
  
  .contact-btn {
    padding: 1rem 2rem;
    background-color: var(--primary-gold);
    color: var(--text-dark);
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .contact-btn:hover {
    background-color: var(--secondary-gold);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 992px) {
    .mission-content {
      grid-template-columns: 1fr;
    }
    
    .mission-image {
      order: -1;
    }
    
    .approach-cards {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 768px) {
    .about-header {
      padding: 3rem 0;
    }
    
    .team-grid {
      grid-template-columns: 1fr;
    }
  }
</style>