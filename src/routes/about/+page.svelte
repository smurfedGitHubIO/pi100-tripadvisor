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
  <div class="references-container">
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
    <li>Cultural Center of the Philippines and Kanto Team. “Facelift: The 53-Year-Old CCP National Theater Is Getting a Much-Needed Overhaul.” Kanto, June 20, 2022. Photos by The Cultural Center of the Philippines and Patrick Kasingsing. <a href="https://kanto.ph/spaces/53-year-old-ccp-national-theater-facelift/" target="_blank">https://kanto.ph/spaces/53-year-old-ccp-national-theater-facelift/</a>.</li>
    <li>designKULTUR. 2010. “CULTURAL CENTER OF THE PHILIPPINES | The Manila Film Center Tragedy.” Design, culture + environment. Last modified January 8, at 11:06. <a href="https://designkultur.wordpress.com/2010/01/08/cultural-center-of-the-philippines-the-manila-film-center-tragedy/" target="_blank">https://designkultur.wordpress.com/2010/01/08/cultural-center-of-the-philippines-the-manila-film-center-tragedy/</a>.</li>
    <li>De Guzman, Susan A. “THROWBACK: Folk Arts Theater, 43 Years After First Miss Universe in PH.” ABS-CBN Lifestyle, January 26, 2017.  <a href="https://www.abs-cbn.com/life/01/25/17/throwback-folk-arts-theater-43-years-after-first-miss-universe-in-ph." target="_blank">https://www.abs-cbn.com/life/01/25/17/throwback-folk-arts-theater-43-years-after-first-miss-universe-in-ph.</a>.</li>
    <li>De Villa, Kathleen. “Imelda Marcos and Her ‘Edifice Complex.’” Inquirer Business, September 17, 2017. <a href="https://business.inquirer.net/236962/imelda-marcos-edifice-complex/amp?utm_source=chatgpt.com." target="_blank">https://business.inquirer.net/236962/imelda-marcos-edifice-complex/amp?utm_source=chatgpt.com.</a>.</li>
    <li>Endriga, Baltazar. 2017. “Account on the 1981 Manila Film Center deaths.” Inquirer.net, November 6. <a href="https://opinion.inquirer.net/108458/account-1981-manila-film-center-deaths" target="_blank">https://opinion.inquirer.net/108458/account-1981-manila-film-center-deaths</a>.</li>
    <li>Enriquez, Ken. "Building with Brute and Beauty." Inquirer Business, June 22, 2019. <a href="https://business.inquirer.net/273069/building-with-brute-and-beauty." target="_blank">https://business.inquirer.net/273069/building-with-brute-and-beauty</a>.</li>
    <li>Espiritu, Talitha. “The Marcos Romance and the Cultural Center of the Philippines: The Melodrama of a Therapeutic Cultural Policy.” Journal of Narrative Theory 45, no. 1 (January 1, 2015): 141–62. <a href="https://doi.org/10.1353/jnt.2015.0003" target="_blank">https://doi.org/10.1353/jnt.2015.0003</a>.</li>
    <li>Forevervocation.com. n.d. “Coconut Palace.” <a href="https://forevervacation.com/manila/coconut-palace." target="_blank">https://forevervacation.com/manila/coconut-palace</a>.</li>
    <li>GMA News Online. 2006. “Multo ng Nakaraan (Ghosts of the Past).” December 31. <a href="https://www.gmanetwork.com/news/publicaffairs/iwitness/25140/multo-ng-nakaraan-ghosts-of-the-past/story/" target="_blank">https://www.gmanetwork.com/news/publicaffairs/iwitness/25140/multo-ng-nakaraan-ghosts-of-the-past/story/</a>.</li>
    <li>Gonzeles, Cathrine. 2019. “Comelec confirms ‘accidental firing’ at PICC.” Last modified May 13, 2019. Philippine Daily Inquirer. <a href="https://newsinfo.inquirer.net/1118133/comelec-confirms-accidental-firing-at-picc" target="_blank">https://newsinfo.inquirer.net/1118133/comelec-confirms-accidental-firing-at-picc</a>.</li>
    <li>L’Officiel. 2022. “The Philippine International Convention Center Celebrates Its 45th Birthday.” Last modified January 18, 2022. <a href="https://www.lofficielph.com/culture/philippine-international-convention-center-45-years." target="_blank">https://www.lofficielph.com/culture/philippine-international-convention-center-45-years</a>.</li>
    <li>Lico, Gerard. 2003. Edifice Complex: Pure, Myth, and Marcos State Architecture. Ateneo De Manila University.</li>
    <li>Maranga, Mark. 2010. “Coconut Palace.” Philippines Tour Guide. <a href="https://www.phtourguide.com/coconut-palace/. " target="_blank">https://www.phtourguide.com/coconut-palace/</a>.</li>
    <li>Marcos, Ferdinand E., proclamation, January 21, 1977. “Proclamation No. 1611.”</li>
    <li>Ocampo, Rosa. 2025. “PICC undergoes major enhancements ahead of 2026 events.” TTGMice. Last modified February 19, 2025. <a href="https://www.ttgmice.com/2025/02/19/picc-undergoes-major-enhancements-ahead-of-2026-events/" target="_blank">https://www.ttgmice.com/2025/02/19/picc-undergoes-major-enhancements-ahead-of-2026-events/</a>.</li>
    <li>Olivares, John Paul. 1974 Leandro Locsin – Folk Arts Theater (Tanghalang Francisco Balagtas). Photograph. Lakbay ng Lakan, September 22, 2019. <a href="https://lakansining.wordpress.com/2019/09/22/the-long-road-to-the-people-power-revolution/21-1974-leandro-locsin-folk-arts-theater-tanghalang-francisco-balagtas/" target="_blank">https://lakansining.wordpress.com/2019/09/22/the-long-road-to-the-people-power-revolution/21-1974-leandro-locsin-folk-arts-theater-tanghalang-francisco-balagtas/</a>.</li>
    <li>Opol, Jon. 2024. “Manila Film Center.” Atlas Obscura. <a href="https://www.atlasobscura.com/places/manila-film-center" target="_blank">https://www.atlasobscura.com/places/manila-film-center</a>.</li>
    <li>Picturejourneys. Mansion for the pope, Coconut palace in Manila, February 26, 2009, photograph. <a href="https://www.flickr.com/photos/picturejourneys/3322492508." target="_blank">https://www.flickr.com/photos/picturejourneys/3322492508</a>.</li>
    <li>Philippine Daily Inquirer. 2007. “Sculpting Society.” <a href="http://opinion.inquirer.net/viewpoints/columns/view/20070610-70434/Sculpting_Society" target="_blank">http://opinion.inquirer.net/viewpoints/columns/view/20070610-70434/Sculpting_Society</a>.</li>
    <li>Philippine International Convention Center. 2023. “Official Statement of the Philippine International Convention Center on the Bomb Threat to the National Privacy Commission.” Last modified May 12, 2023. <a href="https://www.picc.gov.ph/press-release/official-statement-of-the-philippine-international-convention-center-on-the-bomb-threat-to-the-national-privacy-commission/" target="_blank">https://www.picc.gov.ph/press-release/official-statement-of-the-philippine-international-convention-center-on-the-bomb-threat-to-the-national-privacy-commission/</a>.</li>
    <li>Philippine International Convention Center. n.d. “About PICC.” Accessed May 22, 2025. <a href="https://www.picc.gov.ph/about-picc/" target="_blank">https://www.picc.gov.ph/about-picc/</a>.</li>
    <li>Philippine International Convention Center. n.d. “History.” Accessed May 22, 2025. <a href="https://www.picc.gov.ph/discover-picc/#history" target="_blank">https://www.picc.gov.ph/discover-picc/#history</a>.</li>
    <li>Polites, Nicholas. 1977. The architecture of Leandro V. Locsin. New York: Weatherhill.</li>
    <li>Reyes, Juno. “CCP Main Building to Be Renovated From 2022 to 2025.” Rappler, June 21, 2022. <a href="https://www.rappler.com/life-and-style/arts-culture/cultural-center-philippines-main-building-to-be-renovated-2022-2025/" target="_blank">https://www.rappler.com/life-and-style/arts-culture/cultural-center-philippines-main-building-to-be-renovated-2022-2025/</a>.</li>
    <li>Roads, Christopher. 1981. “The Manila National Film Centre: Philippines - (mission).” Development of communication systems, programmes and technologies 4. <a href="https://unesdoc.unesco.org/ark:/48223/pf0000047235" target="_blank">https://unesdoc.unesco.org/ark:/48223/pf0000047235</a>.</li>
    <li>Rubel, Jeffrey. 2023. “The Cultural Center of the Philippines.” The Curiosity Cabinet. <a href="https://jeffreyrubel.substack.com/p/the-cultural-center-of-the-philippines" target="_blank">https://jeffreyrubel.substack.com/p/the-cultural-center-of-the-philippines</a>.</li>
    <li>SOC Staff. 2016. “10 Things You Didn’t Know About the Philippine International Convention Center (PICC).” Accessed 22 May 2025. <a href="https://www.swirlingovercoffee.com/10-things-you-didnt-know-about-the-philippine-international-convention-center-picc/" target="_blank">https://www.swirlingovercoffee.com/10-things-you-didnt-know-about-the-philippine-international-convention-center-picc/</a>.</li>
    <li>VERA Files. 2016. “The Elizalde Family.” Media Ownership Monitor Philippines 2016. Last modified November 16, 2016. <a href="https://philippines-2016.mom-gmr.org/en/owners/individual-owners/detail/owner/owner/show/the-elizalde-family/" target="_blank">https://philippines-2016.mom-gmr.org/en/owners/individual-owners/detail/owner/owner/show/the-elizalde-family/</a>.</li>
  </ul>
  </div>
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

  .references-container {
    max-height: 400px; /* Set a max height */
    overflow-y: auto; /* Enable vertical scrolling */
    padding-right: 10px; /* Space for scrollbar */
    scroll-behavior: smooth; /* Smooth scrolling */
    scrollbar-width: thin; /* Optional: make scrollbar thinner (Firefox) */
    scrollbar-color: #888 #f1f1f1; /* Optional: scrollbar color (Firefox) */
  }

  .references-container::-webkit-scrollbar {
    width: 8px; /* Optional: adjust scrollbar width for Webkit browsers */
  }

  .references-container::-webkit-scrollbar-thumb {
    background-color: #888; /* Color of the scrollbar thumb */
    border-radius: 4px; /* Rounded corners */
  }

  .references-container::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Color of the track */
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
