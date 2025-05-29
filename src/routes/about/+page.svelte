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

<section class="container section">
  <h2>Mga Sanggunian</h2>
  <div class="gold-separator"></div>
  <ul class="references">
    <li>Adobo Magazine. “The Cultural Center of the Philippines Announces Three-Year Rehabilitation of Main Building.” Adobo Magazine, September 5, 2022. <a href="https://www.adobomagazine.com/arts-culture/arts-culture-the-cultural-center-of-the-philippines-announces-three-year-rehabilitation-of-main-building/" target="_blank">https://www.adobomagazine.com/arts-culture/arts-culture-the-cultural-center-of-the-philippines-announces-three-year-rehabilitation-of-main-building/</a>.</li>
    <li>Afinidad-Bernardo, Deni Rose M. “Edifice Complex | 31 Years of Amnesia.” Philstar, n.d. Accessed May 20, 2025. <a href="https://newslab.philstar.com/31-years-of-amnesia/building-spree" target="_blank">https://newslab.philstar.com/31-years-of-amnesia/building-spree</a>.</li>
    <li>Aguilar, Karl. “From Opening Flair to Uncertain Future: The Saga of Folk Arts Theater.” The Urban Roamer, September 5, 2016. <a href="https://www.theurbanroamer.com/folk-arts-theater/" target="_blank">https://www.theurbanroamer.com/folk-arts-theater/</a>.</li>
    <li>Andrew, Kim. The Philippine Center for International Trade and Exhibit (PhilCite) located in the reclaimed area of the CCP Complex in Pasay City, circa 1984, photograph. <a href="https://www.facebook.com/photo.php?fbid=1866080356973186&id=1646483675599523&set=a.1734035076844382&locale=zh_HK" target="_blank">https://www.facebook.com/photo.php?fbid=1866080356973186&id=1646483675599523&set=a.1734035076844382&locale=zh_HK</a>.</li>
    <li>Ateneo ML Museum. n.d. “Edifice Complex: Building on the Backs of the Filipino People.” Martial Law in the Philippines. <a href="https://learn.martiallawmuseum.ph/magaral/edifice-complex-building-on-the-backs-of-the-filipino-people/" target="_blank">https://learn.martiallawmuseum.ph/magaral/edifice-complex-building-on-the-backs-of-the-filipino-people/</a>.</li>
    <li>Brutalistpilipinas (@brutalistpilipinas). 2023. “This aerial photo shows the last building to be built (and the first one to go) within Locsin's Cultural Center of the Philippines Complex:..” Instagram, January 20. <a href="https://www.instagram.com/brutalistpilipinas/p/Cnopl0WrxGE/?hl=en" target="_blank">https://www.instagram.com/brutalistpilipinas/p/Cnopl0WrxGE/?hl=en</a>.</li>
    <li>Cahiles, Magkilat, Bernie. 2022. “Imelda played a crucial role in trade and love.” Manila Bulletin, March 25. <a href="https://mb.com.ph/2022/3/25/imelda-played-a-crucial-role-in-trade-and-love" target="_blank">https://mb.com.ph/2022/3/25/imelda-played-a-crucial-role-in-trade-and-love</a>.</li>
    <li>Canlas, MH. “Designed Better Extended: CCP Theater.” BluPrint, January 1, 2018. <a href="https://bluprint-onemega.com/architecture/heritage/designed-better-extended-ccp-theater/" target="_blank">https://bluprint-onemega.com/architecture/heritage/designed-better-extended-ccp-theater/</a>.</li>
    <li>Comet Photo AG (Zürich). National Theater/Tanghalang Pambansa by Leandro Locsin, 1969, Pasay City, Metro Manila. ETH-Bibliothek Zürich, Bildarchiv. <a href="http://doi.org/10.3932/ethz-a-000988485" target="_blank">http://doi.org/10.3932/ethz-a-000988485</a>.</li>
    <li>Cordero, Ted. 2024. “Star City property eyed for sale; P15B in revenues expected for gov't — DOF.” GMA News Online, August 10. <a href="https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t" target="_blank">https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t</a>.</li>
    <li>Comet Photo AG (Zürich). National Theater/Tanghalang Pambansa by Leandro Locsin, 1969, Pasay City, Metro Manila. ETH-Bibliothek Zürich, Bildarchiv. <a href="http://doi.org/10.3932/ethz-a-000988485" target="_blank">http://doi.org/10.3932/ethz-a-000988485</a>.</li>
    <li>Cordero, Ted. 2024. “Star City property eyed for sale; P15B in revenues expected for gov't — DOF.” GMA News Online, August 10. <a href="https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t" target="_blank">https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t</a>.</li>
    <li>Comet Photo AG (Zürich). National Theater/Tanghalang Pambansa by Leandro Locsin, 1969, Pasay City, Metro Manila. ETH-Bibliothek Zürich, Bildarchiv. <a href="http://doi.org/10.3932/ethz-a-000988485" target="_blank">http://doi.org/10.3932/ethz-a-000988485</a>.</li>
    <li>Cordero, Ted. 2024. “Star City property eyed for sale; P15B in revenues expected for gov't — DOF.” GMA News Online, August 10. <a href="https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t" target="_blank">https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t</a>.</li>
    <li>Comet Photo AG (Zürich). National Theater/Tanghalang Pambansa by Leandro Locsin, 1969, Pasay City, Metro Manila. ETH-Bibliothek Zürich, Bildarchiv. <a href="http://doi.org/10.3932/ethz-a-000988485" target="_blank">http://doi.org/10.3932/ethz-a-000988485</a>.</li>
    <li>Cordero, Ted. 2024. “Star City property eyed for sale; P15B in revenues expected for gov't — DOF.” GMA News Online, August 10. <a href="https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t" target="_blank">https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t</a>.</li>
    <li>Comet Photo AG (Zürich). National Theater/Tanghalang Pambansa by Leandro Locsin, 1969, Pasay City, Metro Manila. ETH-Bibliothek Zürich, Bildarchiv. <a href="http://doi.org/10.3932/ethz-a-000988485" target="_blank">http://doi.org/10.3932/ethz-a-000988485</a>.</li>
    <li>Cordero, Ted. 2024. “Star City property eyed for sale; P15B in revenues expected for gov't — DOF.” GMA News Online, August 10. <a href="https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t" target="_blank">https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t</a>.</li>
    <li>Comet Photo AG (Zürich). National Theater/Tanghalang Pambansa by Leandro Locsin, 1969, Pasay City, Metro Manila. ETH-Bibliothek Zürich, Bildarchiv. <a href="http://doi.org/10.3932/ethz-a-000988485" target="_blank">http://doi.org/10.3932/ethz-a-000988485</a>.</li>
    <li>Cordero, Ted. 2024. “Star City property eyed for sale; P15B in revenues expected for gov't — DOF.” GMA News Online, August 10. <a href="https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t" target="_blank">https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t</a>.</li>
    <li>Comet Photo AG (Zürich). National Theater/Tanghalang Pambansa by Leandro Locsin, 1969, Pasay City, Metro Manila. ETH-Bibliothek Zürich, Bildarchiv. <a href="http://doi.org/10.3932/ethz-a-000988485" target="_blank">http://doi.org/10.3932/ethz-a-000988485</a>.</li>
    <li>Cordero, Ted. 2024. “Star City property eyed for sale; P15B in revenues expected for gov't — DOF.” GMA News Online, August 10. <a href="https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t" target="_blank">https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t</a>.</li>
    <li>Comet Photo AG (Zürich). National Theater/Tanghalang Pambansa by Leandro Locsin, 1969, Pasay City, Metro Manila. ETH-Bibliothek Zürich, Bildarchiv. <a href="http://doi.org/10.3932/ethz-a-000988485" target="_blank">http://doi.org/10.3932/ethz-a-000988485</a>.</li>
    <li>Cordero, Ted. 2024. “Star City property eyed for sale; P15B in revenues expected for gov't — DOF.” GMA News Online, August 10. <a href="https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t" target="_blank">https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t</a>.</li>
    <li>Comet Photo AG (Zürich). National Theater/Tanghalang Pambansa by Leandro Locsin, 1969, Pasay City, Metro Manila. ETH-Bibliothek Zürich, Bildarchiv. <a href="http://doi.org/10.3932/ethz-a-000988485" target="_blank">http://doi.org/10.3932/ethz-a-000988485</a>.</li>
    <li>Cordero, Ted. 2024. “Star City property eyed for sale; P15B in revenues expected for gov't — DOF.” GMA News Online, August 10. <a href="https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t" target="_blank">https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t</a>.</li>
    <li>Comet Photo AG (Zürich). National Theater/Tanghalang Pambansa by Leandro Locsin, 1969, Pasay City, Metro Manila. ETH-Bibliothek Zürich, Bildarchiv. <a href="http://doi.org/10.3932/ethz-a-000988485" target="_blank">http://doi.org/10.3932/ethz-a-000988485</a>.</li>
    <li>Cordero, Ted. 2024. “Star City property eyed for sale; P15B in revenues expected for gov't — DOF.” GMA News Online, August 10. <a href="https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t" target="_blank">https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t</a>.</li>
    <li>Comet Photo AG (Zürich). National Theater/Tanghalang Pambansa by Leandro Locsin, 1969, Pasay City, Metro Manila. ETH-Bibliothek Zürich, Bildarchiv. <a href="http://doi.org/10.3932/ethz-a-000988485" target="_blank">http://doi.org/10.3932/ethz-a-000988485</a>.</li>
    <li>Cordero, Ted. 2024. “Star City property eyed for sale; P15B in revenues expected for gov't — DOF.” GMA News Online, August 10. <a href="https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t" target="_blank">https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t</a>.</li>
    <li>Comet Photo AG (Zürich). National Theater/Tanghalang Pambansa by Leandro Locsin, 1969, Pasay City, Metro Manila. ETH-Bibliothek Zürich, Bildarchiv. <a href="http://doi.org/10.3932/ethz-a-000988485" target="_blank">http://doi.org/10.3932/ethz-a-000988485</a>.</li>
    <li>Cordero, Ted. 2024. “Star City property eyed for sale; P15B in revenues expected for gov't — DOF.” GMA News Online, August 10. <a href="https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t" target="_blank">https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t</a>.</li>
    <li>Comet Photo AG (Zürich). National Theater/Tanghalang Pambansa by Leandro Locsin, 1969, Pasay City, Metro Manila. ETH-Bibliothek Zürich, Bildarchiv. <a href="http://doi.org/10.3932/ethz-a-000988485" target="_blank">http://doi.org/10.3932/ethz-a-000988485</a>.</li>
    <li>Cordero, Ted. 2024. “Star City property eyed for sale; P15B in revenues expected for gov't — DOF.” GMA News Online, August 10. <a href="https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t" target="_blank">https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t</a>.</li>
    <li>Comet Photo AG (Zürich). National Theater/Tanghalang Pambansa by Leandro Locsin, 1969, Pasay City, Metro Manila. ETH-Bibliothek Zürich, Bildarchiv. <a href="http://doi.org/10.3932/ethz-a-000988485" target="_blank">http://doi.org/10.3932/ethz-a-000988485</a>.</li>
    <li>Cordero, Ted. 2024. “Star City property eyed for sale; P15B in revenues expected for gov't — DOF.” GMA News Online, August 10. <a href="https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t" target="_blank">https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t</a>.</li>
    <li>Comet Photo AG (Zürich). National Theater/Tanghalang Pambansa by Leandro Locsin, 1969, Pasay City, Metro Manila. ETH-Bibliothek Zürich, Bildarchiv. <a href="http://doi.org/10.3932/ethz-a-000988485" target="_blank">http://doi.org/10.3932/ethz-a-000988485</a>.</li>
    <li>Cordero, Ted. 2024. “Star City property eyed for sale; P15B in revenues expected for gov't — DOF.” GMA News Online, August 10. <a href="https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t" target="_blank">https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t</a>.</li>
    <li>Comet Photo AG (Zürich). National Theater/Tanghalang Pambansa by Leandro Locsin, 1969, Pasay City, Metro Manila. ETH-Bibliothek Zürich, Bildarchiv. <a href="http://doi.org/10.3932/ethz-a-000988485" target="_blank">http://doi.org/10.3932/ethz-a-000988485</a>.</li>
    <li>Cordero, Ted. 2024. “Star City property eyed for sale; P15B in revenues expected for gov't — DOF.” GMA News Online, August 10. <a href="https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t" target="_blank">https://www.gmanetwork.com/news/money/companies/916623/star-city-property-eyed-for-sale-p15b-in-revenues-expected-for-gov-t</a>.</li>
  </ul>
</section>

<style>
  /* Reset and base styles */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  .about-hero {
    position: relative;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
  }

  .about-hero .overlay {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .hero-content {
    position: relative;
    z-index: 1;
  }

  .subtitle {
    font-size: 1.25rem;
    font-weight: 300;
  }

  .section {
    padding: 3rem 1rem;
  }

  .about-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .gold-separator {
    width: 60px;
    height: 4px;
    background: gold;
    margin: 1rem 0;
  }

  .team-intro {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 2rem;
    font-size: 1.1rem;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .team-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
    transition: transform 0.3s;
  }

  .team-card:hover {
    transform: translateY(-5px);
  }

  .team-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .team-info {
    padding: 1rem;
  }

  .team-role {
    font-weight: bold;
    color: #555;
    margin: 0.5rem 0;
  }

  .references {
    list-style: none;
    padding: 0;
  }

  .references li {
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  .references a {
    color: #0066cc;
    text-decoration: underline;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .about-hero {
      height: 40vh;
    }

    .subtitle {
      font-size: 1rem;
    }

    .section {
      padding: 2rem 1rem;
    }

    .team-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .about-hero {
      height: 35vh;
    }

    .team-intro {
      font-size: 1rem;
    }

    .references li {
      font-size: 0.85rem;
    }
  }
</style>
