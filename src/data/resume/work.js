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
    name: 'Lexik.ai',
    position: 'Backend Developer',
    url: 'https://lexika.ai',
    startDate: '2024-01-01',
    endDate: '2026-03-29',
    summary:
      'Acted as a backend developer working on a critical project, contributed to improve seed work (private framework) of the company and ensured that all developers agree.​',
    highlights: [
      'Built an internal NestJS seedwork framework adopted across 3 development teams, standardising architecture and reducing onboarding effort.',
      'Completely separated communication protocols, HTTP and gRPC from business logic, making business logic more understandable.',
      'Conducted training sessions for  +4 Engineers  on concepts of DDD and Hexagonal Architecture concepts.',
      'Documented the used architecture and recorded videos explaining the mindset of Domain-Driven Design.',
      'Mentored and onboarded 2 interns, supporting their growth and successful integration into the development team.',
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
      'Collaborated with business experts to establish a ubiquitous language, improving communication across teams',
      'Discovered bounded contexts and made context map while receiving feedback from business experts.',
      'Implemented Hexagonal Architecture and CQRS to develop modular, scalable, and maintainable systems.',
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
      'Developed APIs using REST and GraphQL to support diverse client applications.',
      'Implemented an N-layered architecture in NestJS, ensuring scalability, testability, and clear separation of concerns.',
    ],
  },
];

export default work;
