import planningImage from '../../../assets/images/planning.jpg';
import deploying from '../../../assets/images/wireframing.jpg';
import architecting from '../../../assets/images/architicting.jpg';
import coding from '../../../assets/images/coding.jpg';


export const headerData = {
  title: 'Building webApps',
  description: 'Ich unterstütze Sie beim Aufbau Ihrer Anwendung – von der Planung über die Programmierung bis zur Auslieferung an die Endkunden.',
};

const columns = [
  {
    id: 1,
    name: 'projektplanung',
    title: 'Planung',
    description: 'Analyse der Anforderungen und Erstellung eines Fahrplans für Softwareprojekte',
    clickable: true,
    active: false,
    image: planningImage,
},
{
    id: 2,
    name: 'softwarearchitektur',
    title: 'Architektur',
    description: 'Entwurf der Hauptkomponenten, Services und UI-Struktur von Projekten',
    clickable: true,
    active: false,
    image: architecting,
},
{
    id: 3,
    name: 'programmierung',
    title: 'Programmierung',
    description: 'Schreiben von testbarem, wartbarem und skalierbarem Code in C#, Python, Java, PHP',
    clickable: true,
    active: true,
    image: coding,
},
{
    id: 4,
    name: 'testen',
    title: 'Testing',
    description: 'Funktionale, Integrations- und automatisierte Tests von Anwendungen',
    clickable: true,
    active: false,
    image: deploying,
},
{
    id: 5,
    name: 'deployment',
    title: 'Deployment',
    description: 'Kontinuierliche Integration und Auslieferung von Softwareprojekten an Kunden',
    clickable: true,
    active: false,
    image: deploying,
},

];
export default columns;
