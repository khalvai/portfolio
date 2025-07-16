const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Typescript',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'gRPC',
    competency: 3,
    category: ['Protocols'],
  },
  {
    title: 'Socket.io',
    competency: 4,
    category: ['Protocols'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: [],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Express.JS',
    competency: 5,
    category: ['Frameworks'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools'],
  },

  {
    title: 'MVC',
    competency: 4,
    category: ['Architectures'],
  },
  {
    title: 'N-Layered Architecture',
    competency: 5,
    category: ['Architectures'],
  },
  {
    title: 'Hexagonal Architecture',
    competency: 4,
    category: ['Architectures'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
