import React from 'react';

const defaultValue = {
  main: {},
  schools: [],
  experience: [],
  metrics: [],
  softSkills: [],
  skills: []
};

const cvContext = React.createContext(defaultValue);

export default cvContext;
