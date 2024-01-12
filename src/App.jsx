import Front from './components/Front/Component';
import Footer from './components/Footer/Component';
import ImageWithText from './components/ImageWithText/Component';
import TeamSection from './components/TeamSection/Component';
import Divider from './components/Divider/Component';
import Header from './components/Header/Component';
import Quote from './components/Quote/Component';
import Text from './components/Text/Component';
import Cards from './components/Cards/Component';
import HoloCards from './components/HoloCards/Component';
import Images from './components/Images/Component';
import Concept from './components/Concept/Component';
import styles from './App.module.css';
import './fonts.module.css';

function App() {
  const content1 = [
    {
      type: "paragraph",
      text: "Aan het begin van het project werd er een design sprint gehouden. Tijdens deze design sprint gingen we in een week een heel ontwerpproces doorlopen. Daarom hadden wij aan het einde van dezze design sprint een weekend en getest prototype waar wij weer mee verder konden. Hier kwamen wij door eerest een aantal oplossingen te verzinnen voor onze opdracht. Een van deze oplossingen was de uitbreiding van de IP-car door middel van VR. De reden hierachter was om zo de ervaring die de gebruikers hebben te verrijken. Dit hebben wij vervolgens geprototyped door met een 360 graden camera te filmen en deze beelden om te zetten naar VR. Tijdens de laatste dag van de designsprint hebben wij dit prototype getest met een aantal medestudenten. Hier haalden wij verschillende resultaten uit zoals:"
    },
    {
      type: "list",
      content: [
        "Niet iedereen kan tegen VR dus hoe ga je dat doen",
        "Heel leuk, de hele tijd aan het lachen",
        "Als ze echt zelf niet naar buiten kunnen dan denk ik dat het wel helpt"
      ]
    }
  ];

  const content2 = [
    {
      type: "paragraph",
      text: "Om de opdracht en de doelgroep beter te begrijpen zijn wij onderzoek gaan doen. Wij zijn begonnen met het doen van veel deskresearch. Wij hebben hierbij onderzoek gedaan naar dingen zoals het onderwerp zelf, het gebruik van de IP-car, de doelgroep en naar potentiële uitwerkingen.\n\nMeer weten? Download onze Design Srint & Research Report.",
    },
    {
      type: "button",
      text: "Download Design Sprint & Research Report",
      link: "drive-link"
    }
  ]


  return (
    <div class={styles.App}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bungee&display=swap"
        />

      <Header />
      <Front />
      <div class={styles.content}>
        <TeamSection />
        <Text title="De Case" content={"Fox Connect ontwikkelt de IP-car, een internet gestuurde robot auto voor in de zorg. De IP-Car geeft mensen met een lichamelijke beperking de mogelijkheid digitaal plekken te bezoeken waar ze fysiek niet meer heen kunnen. Denk hierbij aan bossen stranden, parken, musea, etc. Een belangrijk punt is dat ze zo weer meer eigen regie krijgen en zo het gevoel hebben onderdeel te zijn binnen de maatschappij.\n\nHet ontwerp van de web app interface van de IP-car van wat er nu is is niet goed aangepast op de wensen en behoefte van de doelgroep. Het moet zo ontwikkeld worden dat mensen met een beperking makkelijk zelfstandig met de IP-Car kunnen rijden. De specifieke doelgroep waarmee Fox Connect naar ons toe is gekomen zijn mensen met MS die rolstoelgebonden zijn. Voor deze mensen met MS moeten wij een web app interface ontwerpen die toegankelijk is voor mensen met MS."} />
        <Quote title="Ontwerpvraag" content="Hoe kunnen we de gebruikerservaring van de IP-car voor mensen met MS verbeteren, zodat ze met zo min mogelijk begeleiding de buitenwereld kunnen verkennen en een gevoel van vrijheid en zelfstandigheid ervaren?"/>
        <Divider image="/images/team-image.png" title="Design Sprint" />
        <ImageWithText img="/images/team-image-2.png" content={content1} />
        <Cards
          cards={[
            "“Niet iedereen kan tegen VR dus hoe ga je dat doen.”",
            "“Heel leuk, de hele tijd aan het lachen“",
            "“Als ze echt zelf niet naar buiten kunnen dan denk ik dat het wel helpt.“"
          ]}
          color="#677AC0"
          style={{
            "font-size": "1.8em",
            "font-weight": 650
          }}
        />
        <Divider title="Research" />
        <ImageWithText img="/images/ip-car.png" content={content2} />
        <h2>Belangrijkste Inzichten</h2>
        <Cards
          cards={["“Niet iedereen kan tegen VR dus hoe ga je dat doen.”", "“Heel leuk, de hele tijd aan het lachen“", "“Als ze echt zelf niet naar buiten kunnen dan denk ik dat het wel helpt.“"]}
          color="#2DB2A2"
          style={{
            "font-size": "1.8em",
            "font-weight": 650
          }}
        />
        <h3>Persona doelgroep</h3>
        <Images images={[{image: "/images/persona.png", alt: "Persona" }]} />
        <h3>Customer journeys</h3>
        <Images images={[
          {image: "/images/customer-journey-1.png", alt: "Customer journey 1"},
          {image: "/images/customer-journey-2.png", alt: "Customer journey 2"}
        ]} />
        <h2>Onze Ontwerprichtlijnen</h2>
        <HoloCards cards={[
          {
            title: "Weinig prikkels",
            text: "Mensen met MS kunnen slecht tegen prikkels. Door veel prikkels raken ze snel vermoeid. Daarom moeten we in het interface wat we ontwerpen ervoor zorgen dat er weinig prikkels voorkomen."
          },
          {
            title: "Autonomie",
            text: "Het interface moet ervoor zorgen dat mensen met MS zoveel mogelijk zelfstandig kunnen doen en zo weinig mogelijk begeleiding nodig hebben."
          },
          {
            title: "Gebruik met controller",
            text: "De applicatie dient uiteindelijk bestuurd te worden met de speciaal ontworpen controller. Het ontwerp dient hier mogelijk ook aangepast op te worden, zodat er geen verwarring ontstaat."
          }
        ]} />
        <Divider title="Concept" />
        <Concept
          conceptNumber={1}
          title="VR-Car"
          text="De VR-car is de IP-car die uitgebreid is met een VR functie. Dit concept is erop gericht om de ervaring van de IP-car uit te breiden. Dit doormiddel van VR maar ook door audio voor een meeslepende ervaring."
          img="/images/concept-1.png"
          left={false}
        />
        <Concept
          conceptNumber={2}
          title="Interface 1"
          text="Concept 2 is de eerste versie van de interfaces voor de IP-car. Bij dit concept moet je inloggen met een gebruikersnaam en wachtwoord en kan je de IP-car met het interface koppelen doormiddel van een koppelcode. Tijdens het rijden is er een balk te zien waar de batterij en de connectie van de auto te zien zijn."
          img="/images/concept-2.png"
          left={true}
        />
        <Concept
          conceptNumber={3}
          title="Interface 2"
          text="Concept 3 is de tweede versie van de interfaces voor de IP-car. Bij dit concept kan je inloggen met een gebruikersnaam en wachtwoord maar kan je ook inloggen door op quick connect te klikken, dit zou voor de doelgroep makkelijk zijn. Daarnaast kan je de IP-car met het interface koppelen doormiddel van een stappenplan te volgen. Tijdens het rijden heb je een kaart om te zien waar de IP-car is en kan je linksboven de informatie van de IP-car zien."
          img="/images/concept-3.png"
          left={false}
        />
        <h2>Gekozen Concept</h2>
        <p style={{padding: "0 100px"}}>We hebben na onze assessment besloten om de twee interfaces samen te voegen op basis van de feedback die we hebben gekregen bij het testen. Zodoende hebben we meerdere interaties gemaakt en getest met het gekozen gecombineerde concept.</p>
        <Divider title="Prototype" />
        <h2>Prototype 1</h2>
        <p style={{padding: "0 300px"}}>In het eerste prototype hebben we de twee concepten bij elkaar toegevoegd. Hierin hebben we de beste punten van de concepten gebruikt zoals: het inlog stappenplan, de kaart om te zien waar de IP-car staat en de informatie op het rij-scherm.</p>
        <Images images={[
          {image: "/images/prototype-1-1.png", alt: "prototype-1-1"},
          {image: "/images/prototype-1-2.png", alt: "prototype-1-2"},
          {image: "/images/prototype-1-3.png", alt: "prototype-1-3"}
        ]} />
        <h3>Testresultaten</h3>
        <Cards
          cards={[
            "“Grote knoppen zouden fijner en beter zijn”",
            "“Is er een mogelijkheid om te wisselen van auto's?”",
            "“Het zou voor de doelgroep fijn zijn als je niet hoeft door te klikken”",
          ]}
          color="#677AC0"
          style={{
            "font-size": "1.8em",
            "font-weight": 650
          }}
        />
        <div class={styles.line} />
        <h2>Prototype 2</h2>
        <p style={{padding: "0 300px"}}>In het tweede prototype hebben we de testresultaten van het vorige prototype toegepast. Zo zijn er grotere knoppen toegevoegd, kan je bij de instellingen wisselen van auto en hoef je bij het stappenplan niet meer te klikken op een knop.</p>
        <Images images={[
          {image: "/images/prototype-2-1.png", alt: "prototype-2-1"},
          {image: "/images/prototype-2-2.png", alt: "prototype-2-2"},
          {image: "/images/prototype-2-3.png", alt: "prototype-2-3"}
        ]} />
        <h3>Testresultaten</h3>
        <Cards
          cards={[
            "“De snelheid van de IP-car word niet gemeten. Er zijn alleen 3 standen.”",
            "“Niet teveel info op het scherm, maak het zo basic mogelijk”",
            "“Instellingen onderdeel is nu niet zelfstandig uit te voeren, misschien anders vormgeven”",
          ]}
          color="#677AC0"
          style={{
            "font-size": "1.8em",
            "font-weight": 650
          }}
        />
        <div class={styles.line} />
        <h2>Prototype 3</h2>
        <p style={{padding: "0 300px"}}>In het derde prototype hebben we de testresultaten van het vorige prototype toegepast. Zo staat er nu niet meer bij het rijscherm km/u maar zijn er drie standen. Daarnaast was er bij dit scherm ook nog teveel info, dit hebben we ook zo min mogelijk gemaakt en allemaal onderin een balk gedaan zodat het basic is en niet teveel informatie. Als laatste hebben we ook de instellingen anders vormgegeven waar je de auto’s kan toevoegen, hierdoor werd het veel overzichtelijker.</p>
        <Images images={[
          {image: "/images/prototype-3-1.png", alt: "prototype-3-1"},
          {image: "/images/prototype-3-2.png", alt: "prototype-3-2"},
          {image: "/images/prototype-3-3.png", alt: "prototype-3-3"}
        ]} />
        <h3>Testresultaten</h3>
        <Cards
          cards={[
            "“Is er een manier om naar je profiel te gaan en iets aan te passen?”",
            "“Nog onduidelijk waar je kan wisselen van autos en nieuwe auto’s kan toevoegen”",
            "“Duidelijk prototype wat goed te gebruiken is.”",
          ]}
          color="#677AC0"
          style={{
            "font-size": "1.8em",
            "font-weight": 650
          }}
        />
        <div class={styles.line} />
        <Concept
          title="Definitieve Prototype"
          text="Na dat we meerdere prototype iteraties hadden gemaakt, hebben we uiteindelijk een definitief prototype gemaakt en ook getest door middel van meerdere usability tests uit te voeren aan studenten, docenten, experts, medestudenten die aan de IP-Car werken etc. En zodoende ook feedback te kunnen krijgen om zo een definitieve prototype te kunnen maken. Helaas konden we het niet voor elkaar krijgen om in contact te komen met de doelgroep om de prototypes te kunnen testen. Dit kwam voornamelijk dat de doelgroep heel slecht te bereiken is ook al hebben we ons best gedaan om ze te kunnen contacteren. Verder hebben we geprobeerd om de definitieve prototype te coderen. Dit hebben we gedaan in React JS en we hebben alleen de design gecodeerd, om zo een makkelijker te kunnen intergreren met de huidige IP-Car eco-systeem."
          img="/images/definitieve-prototype.png"
          left={true}
        />
        <ImageWithText img="/images/prototype-login.png" content={[
          {
            type: "title",
            text: "Login"
          },
          {
            type: "paragraph",
            text: "Om in het interface te komen moet er worden ingelogd met je e-mail adres en je wachtwoord."
          },
        ]}
        left={false}
        />
        <ImageWithText img="/images/prototype-ip-car-koppelen.png" content={[
          {
            type: "title",
            text: "IP-Car koppelen"
          },
          {
            type: "paragraph",
            text: "De IP-car kan je op twee manieren koppelen aan het interface. Dit kan door middel van een QR-code die te vinden is op de IP-car. Daarnaast kan je ook een koppelcode gebruiken die voor elke IP-car anders is."
          }
        ]}
        left={true}
        />
        <ImageWithText img="/images/prototype-home.png" content={[
          {
            type: "title",
            text: "Home"
          },
          {
            type: "paragraph",
            text: "Dit is het scherm waar je op komt als je hebt ingelogd en de begin stappen hebt doorkopen. In het Home-scherm kan je drie dingen doen. Je kan met de IP-car die gekoppeld is gaan rijden, je kan de live locatie van de IP-car bekijken zodat je kan zien waar deze zich bevindt, ook kan je naar je profiel gaan."
          }
        ]}
        left={false}
        />
        <ImageWithText img="/images/prototype-profiel.png" content={[
          {
            type: "title",
            text: "Profiel"
          },
          {
            type: "paragraph",
            text: "In het profiel kan je je eigen gegevens bekijken en aanpassen. Daarnaast kan je ook naar jouw auto’s gaan, hier kan je een auto selecteren of toevoegen."
          }
        ]}
        left={true}
        />
        <ImageWithText img="/images/prototype-rijden.png" content={[
          {
            type: "title",
            text: "Rijden"
          },
          {
            type: "paragraph",
            text: "In het rij-scherm kan je zelfstandig met de IP-car rondrijden. De IP-car heeft drie rijstanden, van langzaam tot normaal en als laatste een snelle stand. In dit scherm kan je ook de verbinding van de IP-car zien en hoeveel batterij deze nog heeft."
          }
        ]}
        left={false}
        />
        <div class={styles.thingContainer}>
          <div class={styles.card}>
            <p class={styles.text}>Meer weten over het definitieve prototype? Kilk dan op de onderstaande knoppen die leiden naar de clickable Figma prototype en naar de werkende webapp.</p>
          </div>
          <div class={styles.buttons}>
            <a href="" class={styles.button}>Figma clickable prototype</a>
            <a href="" class={styles.button}>React JS webapp</a>
          </div>
        </div>
        <h2>Styleguide</h2>
        <Images images={[{image: "/images/styleguide.png", alt: "styleguide"}]}/>
        <h2>Case video</h2>
        <iframe class={styles.video} src="https://www.youtube.com/embed/Yy0Xhldoq1k?si=muf4DgoMFYBrLQmz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default App;

