# react-my-cv

Simple way to generate CV (resume) in PDF format. For now, only one style is supported.


## File src/description.js

Types:

```ts
type MainItem = {
    time: [from: string | number, to: string | number];
    company?: string;
    name?: string;
    department?: string;
    specialty?: string;
    city: string;
    country: string;
    role?: string;
    description?: string;
    projects?: MainItem[];
    technologies?: string[];
}    
```

```ts
type Description = {
    main: {
        name: string;
        surname : string;
        position: string;
    },
    metrics: Array<[key: string, value: string]>,
    softSkills: Array<[icon: string, value: string]>
    skills: Array<{
        type: 'pointed' | 'linear';
        title: string;
        items: string[];
    }>;
    experience: MainItem[];
    schools: MainItem[];
}
```

File *src/description.js* should looks like:

```ts
const description: Description = {
    ...
};

export default description;
```

## Preview

![cv-demo](https://github.com/laxip/react-my-cv/assets/20876055/dd55e7d2-40c9-4bae-824e-87a7bab230ab)
