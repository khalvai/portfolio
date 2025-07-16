import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/khalvai',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/khalvai-ozbek',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://t.me/khalvai',
    label: 'Telegram',
    icon: faTelegram,
  },
  {
    link: 'mailto:khalvaiozbek@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
