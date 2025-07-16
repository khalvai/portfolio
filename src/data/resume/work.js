/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Intelika',
    position: 'Software Engineer',
    url: 'https://intelika.ai',
    startDate: '2024-01-01',
    summary:
      'Acted as a backend developer working on a critical project, contributed to improve seed work (private framework) of the company and ensured that all developers agree.​',
    highlights: [
      'Shared knowledge and insights on patterns among coworkers.',
      'Pioneered impleteing Domain model approach in the company and shared the knowledge how it can be beneficial.',
    ],
  },
  {
    name: 'Nobati',
    position: 'Backend Developer',
    url: 'https://noabati.app',
    startDate: '2023-01-01',
    endDate: '2024-01-01',
    summary:
      'An appointment management company offering tailored solutions for efficient scheduling and time management of business',
    highlights: [
      'Applied Domain-Driven Design (DDD) principles to discover bounded contexts.',
      'Employed tactical pattern of DDD for having a framework for the system.',
    ],
  },
  {
    name: 'Azres Group',
    position: 'Backend Developer',
    url: 'https://github.com/Asrez',
    startDate: '2022-02-01',
    endDate: '2023-01-01',
    summary:
      'Consultancy company which offers web technology solutions to its clients. It focuses on providing creative solutions to solve problems with software infrastructure.',
    highlights: [
      'Developed APIs using protocols such as REST and GraphQL.',
      'Used a N-layered architecture in NestJs.',
    ],
  },
];

export default work;
