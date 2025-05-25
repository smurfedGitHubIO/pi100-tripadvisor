<script>
  import frongs from '$lib/assets/images/Frongoso.jpg';
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
      name: "Justin Clyde Frongoso",
      role: "Katha",
      bio: "Isang katha na nangangarap maging direktor at patnubay.",
      image: frongs
    }
  ];
</script>

<div class="about-page">
  <section class="about-header">
    <div class="overlay">
      <div class="header-content">
        <h1>Tungkol sa GuiltTripAdvisor</h1>
        <p class="subtitle">Paggunita sa Golden Age ni Marcos Sr.</p>
      </div>
    </div>
  </section>

  <section class="mission-section">
    <div class="wide-container mission-content">
      <div class="mission-text">
        <h2>Aming Misyon</h2>
        <p>
          Sa GuiltTripAdvisor ay matatagpuan ang iba’t ibang halimbawa ng arkitekturang Pilipino—mga gusaling kahanga-hanga sa paningin ngunit may mga kwentong bumabalot sa bawat haligi at disenyo.
        </p>
        <p>
          Sa likod ng kanilang engrandeng anyo, may mga kasaysayang dapat halukayin. Kanino nga ba talaga ang tagumpay na ito? Sa bayan ba, o sa iilang apelyidong pilit na inuukit ang kanilang pangalan sa marmol ng kasaysayan?
        </p>
        <p>
          Halina’t pasukin natin ang mundo ng edifice complex—isang paglalakbay sa pagitan ng ningning ng karangyaan at ang kapalit nito ay ang yaman ng bayan.
        </p>
        <p>
          Ang Cultural Center of the Philippines (CCP) Complex ay maituturing na kauna-unahang pambansang teatro ng Pilipinas matapos makamit ang kasarinlan. Orihinal itong planong itayo sa Quezon City bilang bahagi ng proyektong pangkultura ng Philippine-American Cultural Foundation. Gayunman, hindi ito natuloy, ngunit ito ay muling iminungkahi ni Unang Ginang Imelda Marcos noong 1965.
        </p>
        <p>
          Itinayo ito sa nabawing lupain sa Manila Bay, at umabot sa ₱65 milyon ang gastos sa konstruksyon. Isinagawa ito sa isang panahong puno ng pagbabagong pampulitika at pangkultura. Ayon kay urban planning scholar Gavin Shatkin, idinisenyo ang CCP upang mapahanga ang lokal at pandaigdigang bisita sa laki at karangyaan nito—isang simbolo ng ambisyon ng administrasyong Marcos.
        </p>
        <p>
          Subalit sa likod ng marangyang disenyo ay nakatago ang mga kontrobersiya. Ang orihinal na badyet ay ₱15 milyon lamang ngunit tumaas ito hanggang ₱50 milyon, dahilan upang umutang ng $7 milyon mula sa ibang bansa. Isa lamang ito sa maraming proyektong ipinagawa ni Imelda Marcos gamit ang dayuhang utang. Bagama’t nagpakita ito ng tila kaunlaran, lalong lumubha ang krisis sa ekonomiya ng Pilipinas.
        </p>
      </div>
      <div class="mission-image">
        <img src="https://images.pexels.com/photos/1422407/pexels-photo-1422407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Historical building" />
      </div>
    </div>
  </section>

    <!-- Team section with improved alignment -->
  <section class="team-section">
    <div class="wide-container">
      <h2 class="section-title">Kilalanin ang mga Miyembro</h2>
      <div class="team-grid">
        {#each teamMembers as member}
          <div class="team-member">
            <div class="member-image-container">
              <img class="member-image" src={member.image} alt={member.name} />
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
</div>

<style>
  :root {
    --accent-brown: #4B3F36;
    --primary-gold: #D4AF37;
    --secondary-gold: #c49b2e;
    --text-dark: #2d2d2d;
    --bg-soft: #f8f6f3;
  }

  .about-page {
    background-color: var(--bg-soft);
    color: var(--text-dark);
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.6;
  }

  .wide-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .about-header {
    background: url("https://images.pexels.com/photos/1422407/pexels-photo-1422407.jpeg?auto=compress&cs=tinysrgb&w=1600") center center/cover no-repeat;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .overlay {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-content {
    text-align: center;
    color: white;
  }

  .about-header h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1.25rem;
    font-style: italic;
    color: #f1eac8;
  }

  .section-title {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: var(--accent-brown);
  }

  .mission-section {
    padding: 3rem 0;
  }

  .mission-content {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;
    align-items: center;
  }

  .mission-text h2 {
    margin-bottom: 1rem;
    color: var(--accent-brown);
  }

  .mission-text p {
    margin-bottom: 1.25rem;
    line-height: 1.75;
    max-width: 80ch; /* Limits line length for readability */
  }

  .mission-image img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }

  .team-section {
    padding: 3rem 0;
    background-color: white;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    justify-items: center;
  }

  .team-member {
    width: 100%;
    max-width: 280px;
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .team-member:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  .member-image-container {
    height: 250px;
    overflow: hidden;
    position: relative;
  }

  .member-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .team-member:hover .member-image {
    transform: scale(1.05);
  }

  .member-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .member-info {
    padding: 1.25rem 1rem;
  }

  .member-info h3 {
    margin: 0 0 0.5rem;
    color: var(--accent-brown);
    font-size: 1.15rem;
  }

  .member-role {
    font-weight: bold;
    color: var(--primary-gold);
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
  }

  .member-bio {
    font-size: 0.95rem;
    color: #444;
    line-height: 1.5;
  }

  @media (max-width: 992px) {
    .mission-content {
      grid-template-columns: 1fr;
    }

    .mission-image {
      order: -1;
    }
  }

  @media (max-width: 768px) {
    .team-member {
      flex: 1 1 100%;
      max-width: 100%;
    }

    .about-header h1 {
      font-size: 2.5rem;
    }

    .section-title {
      font-size: 1.75rem;
    }
  }
</style>