import {
  frontend, backend, tools, teamwork
} from '../../../assets/icons/svgIconsMap';

import html from '../../../assets/icons/png/html.png';
import csharp from '../../../assets/icons/png/c-sharp.png';
import python from '../../../assets/icons/png/python.png';
import java from '../../../assets/icons/png/java.png';
import php from '../../../assets/icons/png/php.png';
import mysql from '../../../assets/icons/png/mysql.png';
import github from '../../../assets/icons/png/social.png';
import IDEs from '../../../assets/icons/png/vscode.png';
import atlassian from '../../../assets/icons/png/atlassian.png';
import sketch from '../../../assets/icons/png/sketch.png';

export const headerData = {
  title: 'Skills and TechStack',
  description: 'My experience skills:',
};

const contentData = [
  {
    title: 'Front End',
    icon: frontend,
    listItems: [
      {
        title: 'HTML & CSS',
        subTitle: 'Struktur moderner Webseiten',
        icon: html,
      },
    ],
  },
  {
    title: 'Back End / Datenbanken',
    icon: backend,
    listItems: [
      {
        title: 'C#',
        subTitle: 'OOP, WPF',
        icon: csharp,
      },
      {
        title: 'Python',
        subTitle: 'Grundlagen, PCAP & PCEP',
        icon: python,
      },
      {
        title: 'Java',
        subTitle: 'Oracle-Zertifizierung, OOP',
        icon: java,
      },
      {
        title: 'PHP',
        subTitle: 'Webentwicklung mit MySQL',
        icon: php,
      },
      {
        title: 'MySQL',
        subTitle: 'Relationale Datenbanken',
        icon: mysql,
      },
    ],
  },
  {
    title: 'Developer Tools',
    icon: tools,
    listItems: [
      {
        title: 'Github',
        subTitle: 'Versionskontrolle, GitHub',
        icon: github,
      },
      {
        title: 'IDEs',
        subTitle: 'Visual Studio, PyCharm, Eclipse, VS Code',
        icon: IDEs,
      },
    ],
  },
  {
    title: 'Teamarbeit',
    icon: teamwork,
    listItems: [
      {
        title: 'Projektarbeit',
        subTitle: 'Selbstständige Umsetzung & Zusammenarbeit',
        icon: atlassian,
      },
      {
        title: 'Design / Planung',
        subTitle: 'AutoCAD, Allplan, Gimp',
        icon: sketch,
      },
    ],
  },
];

export default contentData;
