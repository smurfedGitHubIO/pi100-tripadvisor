<script lang="ts">
  import { teamMembers } from "$lib/data/teamMembers";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  
  let isVisible = false;
  
  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 300);
  });
</script>

<svelte:head>
  <title>Tungkol sa Amin | GuiltTripAdvisor</title>
</svelte:head>

<section class="about-hero">
  <div class="overlay"></div>
  <div class="container">
    <div class="hero-content" in:fade={{ duration: 800 }}>
      <h1>Tungkol sa GuiltTripAdvisor</h1>
      <p class="subtitle">Exploring the Complex Legacy of the Marcos Era Infrastructure</p>
    </div>
  </div>
</section>

<section class="container section">
  <div class="about-content">
    <div class="mission-section">
      <h2>Aming Layunin</h2>
      <div class="gold-separator"></div>
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
  </div>
</section>

<section class="container section">
  <h2 class="text-center">Kilalanin ang Grupo</h2>
  <div class="gold-separator center"></div>
  <p class="team-intro">
    Our diverse team brings together expertise in history, architecture, photography, design, and community engagement to create a multifaceted exploration of these historical infrastructures.
  </p>
  
  <div class="team-grid">
    {#each teamMembers as member, i}
      {#if isVisible}
        <div class="team-card" in:fly={{ y: 30, duration: 500, delay: 200 * i }}>
          <div class="team-image">
            <img src={member.image} alt={member.name} />
          </div>
          <div class="team-info">
            <h3>{member.name}</h3>
            <p class="team-role">{member.role}</p>
            <p class="team-bio">{member.bio}</p>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</section>

<style>
  .about-hero {
    height: 400px;
    background-image: url('https://images.pexels.com/photos/2129796/pexels-photo-2129796.jpeg');
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
    color: white;
    margin-bottom: var(--space-5);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  
  .hero-content {
    position: relative;
    z-index: 10;
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 3rem;
    margin-bottom: var(--space-2);
    color: white;
  }
  
  .subtitle {
    font-size: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .about-content {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .mission-section {
    margin-bottom: var(--space-5);
  }
  
  h2 {
    color: var(--brown-dark);
    margin-bottom: var(--space-2);
  }
  
  .gold-separator {
    width: 80px;
    height: 3px;
    background-color: var(--gold-primary);
    margin-bottom: var(--space-3);
  }
  
  .gold-separator.center {
    margin-left: auto;
    margin-right: auto;
  }
  
  .team-intro {
    text-align: center;
    max-width: 700px;
    margin: 0 auto var(--space-4);
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }
  
  .team-card {
    display: flex;
    background-color: white;
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .team-image {
    flex: 0 0 120px;
  }
  
  .team-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .team-info {
    flex: 1;
    padding: var(--space-2);
  }
  
  .team-info h3 {
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 1.2rem;
  }
  
  .team-role {
    color: var(--gold-dark);
    font-weight: 600;
    margin-bottom: var(--space-1);
    font-size: 0.9rem;
  }
  
  .team-bio {
    font-size: 0.9rem;
    margin-bottom: 0;
  }
  
  @media (max-width: 992px) {
    .team-grid {
      grid-template-columns: 1fr;
      gap: var(--space-3);
    }
  }
  
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2.5rem;
    }
    
    .subtitle {
      font-size: 1.2rem;
    }
    
    .team-card {
      flex-direction: column;
    }
    
    .team-image {
      height: 200px;
    }
  }
</style>