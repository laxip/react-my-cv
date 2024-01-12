const name = 'John';
const surname = 'Doe';

const description = {
  main: {
    name,
    surname,
    position: 'programmer'
  },
  metrics: [
    ['name', `${name} ${surname}`],
    ['age', 101],
    ['city', 'Warsaw / remote'],
    ['phone', '--- --- ---'],
    ['email', 'johndoe@example.com'],
    ['languages', 'Polish, English'],
    ['hobbies', 'movies, coding']
  ],
  softSkills: [
    ['bulb', 'example 1'],
    ['brain', 'example 2'],
    ['people', 'example 3']
  ],
  skills: [
    {
      type: 'pointed',
      title: 'Pointed list',
      items: ['example 1', 'example 2']
    },
    {
      type: 'linear',
      title: 'Inline list',
      items: ['example 1', 'example 2', 'example 3', 'example 4']
    },
    {
      type: 'linear',
      title: 'Second inline list',
      items: ['example 1', 'example 2', 'example 3', 'example 4', 'example 5', 'example 6', 'example 7', 'example 8']
    }
  ],
  experience: [
    {
      time: [2022, 'now'],
      company: 'Company name',
      city: 'New York',
      country: 'United States',
      role: 'Architect',
      description: 'Interesting description.'
    },
    {
      time: [2015, 2021],
      company: 'Company name',
      city: 'Berlin',
      country: 'Germany',
      role: 'Senior Frontend Developer',
      description: 'Projects listed below:',
      projects: [
        {
          company: 'Interesting project 1',
          city: 'Berlin',
          country: 'Germany',
          description: 'Interesting description for project 1.',
          technologies: ['TypeScript', 'React']
        },

        {
          company: 'Interesting project 2',
          city: 'Copenhagen',
          country: 'Denmark',
          description: 'Interesting description for project 2.',
          technologies: ['C++', 'Go']
        }
      ]
    }
  ],
  schools: [
    {
      time: [2000, 2005],
      name: 'University of Technology, Faculty name',
      department: 'Department name',
      specialty: 'Specialty',
      projects: [
        {
          company: 'Company name',
          city: 'Paris',
          country: 'France',
          role: 'Practices as developer',
          description: 'Interesting description.',
          technologies: ['Java', 'XML']
        }
      ]
    }
  ]
};

export default description;
