import shared from "./astro.config.shared.mjs";
import { defineConfig } from "astro/config";

export default defineConfig({
  ...shared,
  site: "https://porticosport.com",
  srcDir: "./src/en",
  redirects: {
    "/ru/новости": "/",
    "/pt": "/",
    "/un-proyecto-increible-en-finlandia": "/news/un-proyecto-increible-en-finlandia",
    "/en/portico-sport-in-california": "/news/portico-sport-in-california",
    "/portico-sport-uk": "/news/portico-sport-uk",
    "/portico-sport-suiza": "/news/portico-sport-suiza",
    "/en/portico-sport-in-usa": "/news/portico-sport-in-usa",
    "/ru": "/",
    "/pista-panoramica-de-portico-sport-en-ispo-munich": "/news/pista-panoramica-de-portico-sport-en-ispo-munich/news/portico-sport-at-ispo-munich",
    "/el-padel-apunta-a-estados-unidos-de-manera-indiscutible-2": "/news/el-padel-apunta-a-estados-unidos-de-manera-indiscutible-2",
    "/portico-sport-en-colombia-la-fiebre-del-padel-toma-bogota": "/news/portico-sport-en-colombia-la-fiebre-del-padel-toma-bogota",
    "/en/hexagon-cup-signs-portico-sport-as-court-supplier": "/news/hexagon-cup-signs-portico-sport-as-court-supplier",
    "/en/portico-sport-inaugurates-the-largest-factory-of-padel-covers-and-courts-in-the-sector": "/news/portico-sport-inaugurates-the-largest-factory-of-padel-covers-and-courts-in-the-sector",
    "/nl": "/",
    "/pistas-de-padel-en-croacia": "/news/pistas-de-padel-en-croacia",
    "/nuevo-destino-puerto-rico": "/news/nuevo-destino-puerto-rico",
    "/portico-sport-en-new-york-y-houston": "/news/portico-sport-en-new-york-y-houston",
    "/financiacion": "/",
    "/en/padelcourts": "/padel-courts",
    "/en/constructive-process": "/",
    "/en/pistas-panoramica": "/padel-courts/panoramic",
    "/de/los-ingenieros-de-portico-sport": "/news/los-ingenieros-de-portico-sport",
    "/fr/los-ingenieros-de-portico-sport": "/news/los-ingenieros-de-portico-sport",
    "/en/portico-sport-engineers": "/news/los-ingenieros-de-portico-sport",
    "/fr/alderley-park": "/projects",
    "/de/portico-sport-en-california": "/news/los-ingenieros-de-portico-sport",
    "/it/cingoli-forza-80": "/padel-courts/club-force-80",
    "/de/alderley-park": "/projects",
    "/de/portico-sport-uk": "/projects",
    "/en/contact": "/client-contact",
    "/pt/portico-sport-na-ispo-munique": "/projects",
    "/it/mini-tracce": "/padel-courts/mini",
    "/it/piste-panoramiche": "/padel-courts/panoramic",
    "/instalaciones-en-sabadell": "/news/instalaciones-en-sabadell",
    "/de/portico-sport-at-ispo-munich": "/news/portico-sport-at-ispo-munich/news/portico-sport-at-ispo-munich",
    "/elfsborg-boras": "/news",
    "/impresionantes-vistas-de-las-pistas-de-padel-y-cubiertas": "/news/impresionantes-vistas-de-las-pistas-de-padel-y-cubiertas",
    "/nuevo-proyecto-de-construccion-de-pistas-de-padel-en-finlandia": "/news/nuevo-proyecto-de-construccion-de-pistas-de-padel-en-finlandia",
    "/portico-sport-alta-ingenieria": "/news",
    "/portico-sport-contara-en-2022-con-una-gran-fabrica-de-cubiertas-y-pistas-de-padel-con-la-tecnologia-mas-puntera-del-mercado":
      "/news/portico-sport-contara-en-2022-con-una-gran-fabrica-de-cubiertas-y-pistas-de-padel-con-la-tecnologia-mas-puntera-del-mercado",
    "/pistas-de-padel-en-madrid-club-urban-padel-alcobendas": "/news/pistas-de-padel-en-madrid-club-urban-padel-alcobendas",
    "/hexagon-cup-signs-portico-sport-as-court-supplier": "/news/hexagon-cup-signs-portico-sport-as-court-supplier",
    "/contacto": "/client-contact",
    "/de/unsere-Fabrik": "/our-factory",
    "/portico-sport-en-ispo-munich-2022": "/news/portico-sport-en-ispo-munich-2022/news/portico-sport-at-ispo-munich",
    "/pt/apresentação-da-pista-hexagonal-da-copa-na-Plaza-de-Colon-em-Madri":
      "/news/hexagon-cup-signs-portico-sport-as-court-supplier",
    "/en/alderley-park": "/projects",
    "/pista-flotante-en-finlandia": "/news/pista-flotante-en-finlandia",
    "/tailandia-y-colombia": "/news/tailandia-y-colombia",
    "/en/ultra-64-court": "/padel-courts/club-force-80",
    "/pistas-panoramica-flow": "/padel-courts/flow",
    "/tipos-de-pistas": "/padel-courts",
    "/da": "/",
    "/en/el-crecimento-del-padel-a-nivel-mundial": "/news/el-crecimento-del-padel-a-nivel-mundial",
    "/pt/etiqueta/construçãopistaspadel": "/news",
    "/nueva-pista-adaptada-a-futwall": "/news/nueva-pista-adaptada-a-futwall",
    "/portico-sport-presenta-al-mercado-esta-innovadora-pista-de-padel-que-se-diseno-en-exclusiva-para-el-torneo-hexagon-cup":
      "/news/portico-sport-presenta-al-mercado-esta-innovadora-pista-de-padel-que-se-diseno-en-exclusiva-para-el-torneo-hexagon-cup",
    "/cimentacion": "/padel-courts",
    "/pt/esporte-pórtico-na-austrália": "/news",
    "/pt/jovens-promessas": "/news",
    "/iluminacion": "/padel-courts",
    "/the-padel-club-uk": "/projects",
    "/en/news": "/news",
    "/pistas-panoramica": "/padel-courts/panoramic",
    "/repsol-y-portico-sport-firman-un-acuerdo-para-impulsar-la-energia-renovable-y-movilidad-sostenible-en-el-sector-del-padel": "/news/repsol-y-portico-sport-firman-un-acuerdo-para-impulsar-la-energia-renovable-y-movilidad-sostenible-en-el-sector-del-padel",
    "/en/our-factory": "/our-factory",
    "/en/virtual-assistant": "/client-contact",
    "/en/tracks-installed-in-croatia": "/news/pistas-instaladas-en-croacia",
    "/pistas-instaladas-en-croacia": "/news/pistas-instaladas-en-croacia",
    "/portico-sport-at-racquetx": "news/portico-sport-at-racquetx",
    "/en/elevated-platform": "/elevated-platform",
    "/fr/suit-le-flux-panoramique": "/padel-courts/flow",
    "/pt/encostas-panorâmicas": "/padel-courts/panoramic",
    "/fr/notre-usine": "/our-factory",
    "/en/installation-finished-in-the-netherlands": "/news",
    "/pt/vidrios": "/padel-courts",
    "/pistas-mini": "/padel-courts/mini",
    "/en/young-promises": "/news",
    "/en/lighting": "/padel-courts",
    "/en/courts-club": "/padel-courts/club",
    "/da/spor-ultra-64": "/padel-courts/club-force-80",
    "/it/tizona-sport-portico-sport": "/news/tizona-sport-portico-sport",
    "/cubiertas": "/canopies",
    "/en/foundation": "/padel-courts",
    "/da/portico-sport-in-gashoren-belgium": "/news/portico-sport-in-gashoren-belgium",
    "/en/pistas-instaladas-en-croacia": "/news/pistas-instaladas-en-croacia",
    "/sv": "/",
    "/tizona-sport-portico-sport": "/news/tizona-sport-portico-sport",
    "/portico-sport-en-sudafrica": "/news/portico-sport-en-sudafrica",
    "/portico-sport-at-ispo-munich": "/news/portico-sport-at-ispo-munich",
    "/los-mejores-jugadores-del-mundo": "/news/los-mejores-jugadores-del-mundo",
    "/en/financing": "/",
    "/instalacion-finalizada-en-holanda": "/news/instalacion-finalizada-en-holanda",
    "/en/pistas-force-80": "/padel-courts/club-force-80",
    "/cesped": "/padel-courts",
    "/cespedartificial": "/padel-courts",
    "/en/glasses": "/padel-courts",
    "/fr/pista-panoramica-de-portico-sport-en-ispo-munich": "/news/portico-sport-at-ispo-munich",
    "/pista-movil": "/padel-courts/mobile",
    "/portico-sport-in-usa": "/news/portico-sport-in-usa",
    "/en/mobile-courts": "/padel-courts/mobile",
    "/en/presentation-of-the-hexagon-cup-track-in-the-plaza-de-colon-in-madrid":
      "/news/hexagon-cup-signs-portico-sport-as-court-supplier",
    "/privacy-policy-and-general-conditions": "/privacy",
    "/it/informativa-sulla-privacy-e-condizioni-generali": "/privacy",
    "/en/in-copenhagen-denmark": "news/in-copenhagen-denmark",
    "/el-fuerte-crecimiento": "news/el-fuerte-crecimiento",
    "/fr/blog": "/news",
    "/en/authorized-dealer": "/authorized-distributor",
    "/en/the-padel-club-uk": "/projects",
    "/en/customization": "/padel-courts",
    "/porticosportnuevapistaoficialdelafep": "/news/porticosportnuevapistaoficialdelafep",
    "/en/canopies": "/canopies",
    "/en/modular-structures": "/padel-courts",
    "/fr/couvert": "/canopies",
    "/constantly-expanding": "/news/constantly-expanding",
    "/da/Malaga-spor-installationsprocessen-i-mijas": "/projects",
    "/portico-sport-factura-en-medio-ano-su-cifra-de-ventas-total-de-2022": "/news/portico-sport-factura-en-medio-ano-su-cifra-de-ventas-total-de-2022",
    "/en/continues-its-growth": "/",
    "/en/portico-sport-in-australia": "/projects",
    "/en/portico-sport-invoices-its-total-sales-figure-for-2022-in-half-a-year": "/news/portico-sport-factura-en-medio-ano-su-cifra-de-ventas-total-de-2022",
    "/en/global-growth": "/",
    "/de/noticias": "/news",
    "/da/blog/side/2": "/news",
    "/en/sudafrica": "/news/portico-sport-en-sudafrica",
    "/pistas-club": "/padel-courts/club",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=fr&gurl=vidrios": "/",
    "/en/pistas-panoramica-flow": "/padel-courts/flow",
    "/pistas-movil": "/padel-courts/mobile",
    "/en/pistas-single": "/padel-courts/single",
    "/club-bapadel": "/projects",
    "/en/mini-court": "/padel-courts/mini",
    "/pistas-force-80": "/padel-courts/club-force-80",
    "/pt/cobre": "/canopies",
    "/en/continues": "/news/continues",
    "/de/cubiertas": "/canopies",
    "/en/floating-track-in-finland": "/news/pista-flotante-en-finlandia",
    "/pistas-club-plus": "/padel-courts/club-plus",
    "/de/instalaciones-en-sabadell": "/news/instalaciones-en-sabadell",
    "/en/portico-sport-installed-in-south-africa": "news/portico-sport-en-sudafrica",
    "/en/facilities-in-sabadell": "/news/instalaciones-en-sabadell",
    "/da/tipos-de-pistas": "/padel-courts",
    "/en/structures": "/padel-courts",
    "/estructuras-modulares": "/padel-courts",
    "/fr/contact": "/client-contact",
    "/fr/repsol-et-portico-sport-signent-un-accord-pour-promouvoir-les-énergies-renouvelables-et-la-mobilité-durable-dans-le-secteur-du-padel": "/news/repsol-y-portico-sport-firman-un-acuerdo-para-impulsar-la-energia-renovable-y-movilidad-sostenible-en-el-sector-del-padel",
    "/en/author/portico": "/news",
    "/en/repsol-and-portico-sport-sign-an-agreement-to-promote-renewable-energy-and-sustainable-mobility-in-the-padel-sector": "/news/repsol-y-portico-sport-firman-un-acuerdo-para-impulsar-la-energia-renovable-y-movilidad-sostenible-en-el-sector-del-padel",
    "/pistas-single": "/padel-courts/single",
    "/fr/politique-de-confidentialité-et-conditions-générales": "/privacy",
    "/author/portico": "/news",
    "/sv/Portico-Sport-kommer-2022-att-ha-en-stor-fabrik-för-paddeltennisbanor-och-däck-med-den-mest-banbrytande-tekniken-på-marknaden": "/news/portico-sport-contara-en-2022-con-una-gran-fabrica-de-cubiertas-y-pistas-de-padel-con-la-tecnologia-mas-puntera-del-mercado",
    "/ru/Repsol-и-Portico-Sport-подписывают-соглашение-о-продвижении-возобновляемых-источников-энергии-и-устойчивой-мобильности-в-секторе-весла": "/news/repsol-y-portico-sport-firman-un-acuerdo-para-impulsar-la-energia-renovable-y-movilidad-sostenible-en-el-sector-del-padel",
    "/en/pista-movil": "/padel-courts/mobile",
    "/fr/instalaciones-en-europa-por-portico-sport": "/news/instalaciones-en-europa-por-portico-sport",
    "/en/blog": "/news",
    "/estructuras": "/padel-courts",
    "/las-pistas-de-padel-valen-la-pena": "/news/las-pistas-de-padel-valen-la-pena",
    "/en/thinking-padel-thinking-portico-sport-why": "/",
    "/noticias": "/news",
    "/asistente-virtual": "/client-contact",
    "/malaga-proceso-de-instalacion-de-pistas-en-mijas": "/news/malaga-proceso-de-instalacion-de-pistas-en-mijas",
    "/blog": "/news",
    "/it/customizacion": "/padel-courts",
    "/nl/customizacion": "/padel-courts",
    "/sv/cubiertas": "/canopies",
    "/sv/spårtyper": "/padel-courts",
    "/it/cubiertas": "/canopies",
    "/plataforma-elevada": "/elevated-platform",
    "/fr/customizacion": "/padel-courts",
    "/da/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/en/club-plus-courts": "/padel-courts/club-plus",
    "/pt/tipos-de-pistas": "/padel-courts",
    "/en/privacy-policy-and-general-conditions": "/privacy",
    "/pt/estructuras": "/padel-courts",
    "/confianza": "/news/confianza",
    "/da/estructuras": "/padel-courts",
    "/en/blog/page/2": "/news",
    "/sv/estructuras": "/padel-courts",
    "/de/tipos-de-pistas": "/padel-courts",
    "/ru/privacy-policy-and-general-conditions": "/privacy",
    "/da/in-copenhagen-denmark": "news/in-copenhagen-denmark",
    "/vidrios": "/padel-courts",
    "/pistas-ultra-64": "/padel-courts/club-force-80",
    "/customizacion": "/padel-courts",
    "/en/new-project-completed-in-hillero": "/news/new-project-completed-in-hillero",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=ru&gurl=cubiertas": "/canopies",
    "/it/illuminazione": "/padel-courts",
    "/fr/iluminacion": "/padel-courts",
    "/mobile-court": "/padel-courts/mobile",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=de&gurl=iluminacion": "/padel-courts",
    "/da/blog": "/news",
    "/fr/estructuras": "/padel-courts",
    "/nl/privacy-policy-and-general-conditions": "/privacy",
    "/en/cespedartificial": "/padel-courts",
    "/it/tipos-de-pistas": "/padel-courts",
    "/fr/types-de-piste": "/padel-courts",
    "/en/portico-sport-in-new-york-and-houston": "/projects",
    "/portico-sport-y-even-padel-unen-fuerzas": "/news/portico-sport-y-even-padel-unen-fuerzas",
    "/sv/portico-sport-contara-en-2022-con-una-gran-fabrica-de-cubiertas-y-pistas-de-padel-con-la-tecnologia-mas-puntera-del-mercado": "/news/portico-sport-contara-en-2022-con-una-gran-fabrica-de-cubiertas-y-pistas-de-padel-con-la-tecnologia-mas-puntera-del-mercado",
    "/da/cubiertas": "/canopies",
    "/portico-sport-en-europa": "/news/portico-sport-en-europa",
    "/it/estructuras": "/padel-courts",
    "/portico-sport-internacional": "/news/portico-sport-internacional",
    "/portico-sport-in-gashoren-belgium": "/news/portico-sport-in-gashoren-belgium",
    "/da/portico-sport-inaugura-la-mayor-fabrica-de-cubiertas-y-pistas-de-padel-del-sector": "/news/portico-sport-inaugura-la-mayor-fabrica-de-cubiertas-y-pistas-de-padel-del-sector",
    "/pt/privacy-policy-and-general-conditions": "/privacy",
    "/sv/cespedartificial": "/padel-courts",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=nl&gurl=iluminacion": "/padel-courts",
    "/crecimiento-a-nivel-mundial": "/news/crecimiento-a-nivel-mundial",
    "/de/estructuras-modulares": "/padel-courts",
    "/sv/privacy-policy-and-general-conditions": "/privacy",
    "/it/blog": "/news",
    "/fr/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/ru/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/da/customizacion": "/padel-courts",
    "/da/kneippbyn-isla-de-gotland-suecia-bella-perfeccion": "/news/kneippbyn-isla-de-gotland-suecia-bella-perfeccion",
    "/sv/portico-sport-belgica": "/news/portico-sport-in-gashoren-belgium",
    "/sv/blog/page/2": "/news",
    "/pt/blog": "/news",
    "/nl/blog": "/news",
    "/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/sv/vidrios": "/padel-courts",
    "/sv/blogg": "/news",
    "/ru/author/marketing": "/news",
    "/ru/las-pistas-de-padel-valen-la-pena": "/news/las-pistas-de-padel-valen-la-pena",
    "/da/iluminacion": "/padel-courts",
    "/da/contacto": "/client-contact",
    "/sv/Författaren/marknadsföring": "/news",
    "/sv/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/club-setubal": "/projects",
    "/sv/contacto": "/client-contact",
    "/ru/cespedartificial": "/padel-courts",
    "/de/Die-besten-Spieler-der-Welt": "/news/los-mejores-jugadores-del-mundo",
    "/de/Portico-Sport-landet-in-Afrika-mit-Paddle-Tennisplätzen": "/news/portico-sport-aterriza-en-africa-con-pistas-de-padel",
    "/pt/contacto": "/client-contact",
    "/de/Portico-Sport-in-New-York-und-Houston": "/news/portico-sport-en-new-york-y-houston",
    "/da/privacy-policy-and-general-conditions": "/privacy",
    "/sv/portico-sport-aterriza-en-africa-con-pistas-de-padel": "/news/portico-sport-aterriza-en-africa-con-pistas-de-padel",
    "/en/the-strong-growth": "/news/el-fuerte-crecimiento",
    "/en/portico-sport-at-ispo-munich-2022": "/news/portico-sport-at-ispo-munich",
    "/sv/pistas-instaladas-en-croacia": "/news/pistas-instaladas-en-croacia",
    "/en/the-highest-guarantee": "/",
    "/it/vidrios": "/padel-courts",
    "/en/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/it/cespedartificial": "/padel-courts",
    "/fi/seuraa-panoraamavirtausta": "/padel-courts/flow",
    "/it/asistente-virtual": "/client-contact",
    "/sv/iluminacion": "/padel-courts",
    "/it/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural": "/news/trabajos-integrados-en-pista-de-padel-de-hotel-spa-rural",
    "/nl/contacto": "/client-contact",
    "/continues": "/news/continues",
    "/en/portico-sport-in-abc-newspaper-innovation-and-vanguard-in-the-five-continents": "/news",
    "/it/portico-sport-en-california": "/news",
    "/da/vidrios": "/padel-courts",
    "/en/instalaciones-en-europa-por-portico-sport": "/news/instalaciones-en-europa-por-portico-sport",
    "/da/portico-sport-en-colombia-la-fiebre-del-padel-toma-bogota": "/news/portico-sport-en-colombia-la-fiebre-del-padel-toma-bogota",
    "/fr/noticias": "/news",
    "/portico-sport-aterriza-en-africa-con-pistas-de-padel": "/news/portico-sport-aterriza-en-africa-con-pistas-de-padel",
    "/wp-content/plugins/gtranslate/url_addon/gtranslate.php?glang=da&gurl=malaga-proceso-de-instalacion-de-pistas-en-mijas": "/news/malaga-proceso-de-instalacion-de-pistas-en-mijas",
    "/it/donacion-para-frenar-la-pandemia-de-covid-19": "/news/donacion-para-frenar-la-pandemia-de-covid-19",
    "/en/blog/page/8": "/news",
    "/los-ingenieros-de-portico-sport": "/news/los-ingenieros-de-portico-sport",
    "/en/portico-sport-high-engineering": "/news/los-ingenieros-de-portico-sport",
    "/en/own-laquared-plant": "/news/own-laquared-plant",
    "/kneippbyn-isla-de-gotland-suecia-bella-perfeccion": "/news/kneippbyn-isla-de-gotland-suecia-bella-perfeccion",
  },
});
