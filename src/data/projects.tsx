import { Project } from '../app/components/ProjectItem'

const projects: Project[] = [
  {
    id: 'nextjs-tailwind-starter',
    type: ['web'],
    title: 'nextjs-tailwind-starter',
    icon: '🐕',
    description:
      'A starter for Next.js 13.4+ with preconfigured Tailwind CSS, ESLint, VSCode Settings and Prettier.',
    source: 'https://github.com/dinhanhthi/nextjs-tailwind-starter',
    tech: ['nextjs', 'react', 'scss', 'ts', 'tailwindcss']
  },
  {
    id: 'chrome-extension-react-starter',
    type: ['web'],
    title: 'chrome-extension-react-starter',
    icon: '🦖',
    description:
      'A starter for quickly creating a Chrome Extension that uses React and Tailwind CSS by default.',
    source: 'https://github.com/dinhanhthi/chrome-extension-react-starter',
    tech: ['chrome-extension', 'react', 'scss', 'ts', 'tailwindcss']
  },
  {
    id: 'chrome-extension-ts-starter',
    type: ['web'],
    title: 'chrome-extension-ts-starter',
    icon: '🚙',
    description:
      'A starter for developing a Chrome Extension with TypeScript (only, without React) + Webpack + TailwindCSS + ESLint + Prettier.',
    source: 'https://github.com/dinhanhthi/chrome-extension-ts-starter',
    tech: ['chrome-extension', 'js', 'scss', 'tailwindcss', 'ts']
  },
  {
    id: 'vite-react-ts-tailwind-starter',
    type: ['web'],
    title: 'vite-react-ts-tailwind-starter',
    icon: '⚡',
    description:
      'A starter to quickly create a playground for a React app. It includes preconfigured ESLint, Prettier, and VSCode settings.',
    source: 'https://github.com/dinhanhthi/vite-react-ts-tailwind-starter',
    tech: ['react', 'scss', 'tailwindcss', 'ts', 'vite']
  },
  {
    id: 'wordpress-gatsby',
    type: ['web'],
    title: 'wordpress-gatsby',
    icon: '🎒',
    description: 'Build a Gatsby site using source from Wordpress.',
    source: 'https://github.com/dinhanhthi/wordpress-gatsby',
    url: 'https://dinhanhthi.com/build-a-website-using-wordpress-and-gatsby-1/',
    tech: [
      'bash',
      'gatsby',
      'git',
      'graphql',
      'js',
      'php',
      'postman',
      'python',
      'react',
      'scss',
      'tailwindcss',
      'ts',
      'wordpress'
    ]
  },
  {
    id: 'dinhanhthi.com',
    title: 'dinhanhthi.com',
    type: ['web'],
    icon: '⭐',
    description: '11ty theme. Current version of my personal website.',
    source: 'https://github.com/dinhanhthi/dinhanhthi.com',
    url: 'http://dinhanhthi.com',
    tech: [
      'eleventy',
      'git',
      'html5',
      'js',
      'liquid',
      'nodejs',
      'notion',
      'nunjucks',
      'postman',
      'scss',
      'vscode'
    ]
  },
  {
    id: 'dinhanhthi.com-v4',
    type: ['web'],
    title: 'dinhanhthi.com-v4 in gatsby',
    description:
      "An implementation of my personal website (v4) using GatsbyJS and TailwindCSS. It's not complete (and I've discontinued) but it's well written.",
    source: 'https://github.com/dinhanhthi/dinhanhthi.com-v4-gatsby',
    icon: '🥕',
    tech: ['gatsby', 'js', 'react', 'tailwindcss', 'graphql']
  },
  {
    id: 'google-api-playground',
    type: ['web', 'ds', 'other'],
    title: 'Google APIs Playground',
    icon: '🏖',
    description: 'A playground for Google APIs',
    source: 'https://github.com/dinhanhthi/google-api-playground',
    url: 'https://dinhanhthi.com/google-dialogflow-api/',
    tech: ['dialogflow', 'js', 'google-nodejs-api']
  },
  {
    id: 'texmath-rebuild',
    title: 'TEXmath Rebuild',
    type: ['web', 'other'],
    icon: '🧨 ',
    description:
      'New version of TEXmath. A website about LaTeX and Tech Tutorials. This site is a part of our main project - Math2IT.',
    source: 'https://github.com/math2it/texmath-gas',
    url: 'http://texmath.com',
    tech: ['gatsby', 'js', 'react', 'tailwindcss', 'graphql', 'wordpress']
  },
  {
    id: 'data-science-learning',
    type: ['ds'],
    title: 'Data Science Learning',
    description:
      'All the courses, assignments, exercises, mini-projects, and books that I have worked on so far in my self-study of Machine Learning and Data Science.',
    source: 'https://github.com/dinhanhthi/data-science-learning',
    icon: '📊',
    techText: ['many techs']
  },
  {
    id: 'mountain-vs-beach',
    type: ['web', 'ds'],
    title: 'Mountain vs Beach Classifier',
    description: 'A small project to create a classifier: mountain vs beach.',
    source: 'https://github.com/dinhanhthi/mountain-vs-beach',
    icon: '🏖',
    tech: ['bootstrap', 'html5', 'js', 'scss', 'tensorflow']
  },
  {
    id: 'eleventy-elasticlunr-js',
    type: ['web'],
    title: '11ty + ElasticlunrJS',
    description: "A demo of the search function on eleventy's website using Elasticlunr.js.",
    source: 'https://github.com/dinhanhthi/eleventy-elasticlunr-js',
    icon: '🔎',
    tech: ['eleventy', 'js', 'nodejs']
  },
  {
    id: 'web-dev-learning',
    type: ['web'],
    title: 'Web Dev Learning',
    description: 'Everything I have done so far to learn Web Development myself.',
    source: 'https://github.com/dinhanhthi/web-dev-learning',
    icon: '🌐',
    techText: ['many techs']
  },
  {
    id: 'p13-discuss-group',
    type: ['web', 'ds', 'other'],
    title: 'P13 Discussion Group',
    description:
      'Private group to exchange ideas in IT between Vietnamese friends at Sorbonne Paris Nord University',
    source: 'https://github.com/dinhanhthi/P13-discuss-group',
    icon: '💡',
    techText: ['many techs']
  },
  {
    id: 'simple-perso',
    type: ['web'],
    title: 'Simple Perso',
    icon: '🍒',
    description: 'A simple and beautiful personal jekyll theme.',
    source: 'https://github.com/dinhanhthi/simple-perso',
    url: 'https://dinhanhthi.github.io/simple-perso/',
    tech: ['bootstrap', 'docker', 'html5', 'jekyll', 'scss']
  },
  {
    id: 'dinhanhthi.com-v1',
    type: ['web'],
    title: 'dinhanhthi.com-v1',
    description: 'A personal Jekyll theme. The first version of my website.',
    source: 'https://github.com/dinhanhthi/dinhanhthi.com-v1',
    icon: '⛑',
    tech: ['bootstrap', 'html5', 'jekyll', 'scss']
  },
  {
    id: 'dinhanhthi.com-v2',
    type: ['web'],
    title: 'dinhanhthi.com-v2',
    description: 'A personal Jekyll theme. The second version of my website.',
    source: 'https://github.com/dinhanhthi/dinhanhthi.com-v2',
    icon: '🥕',
    tech: ['bootstrap', 'docker', 'html5', 'jekyll', 'scss']
  },
  {
    id: 'dinhanhthi.com-v3',
    type: ['web'],
    title: 'dinhanhthi.com-v3',
    description: 'A personal Jekyll theme. The third version of my website.',
    source: 'https://github.com/dinhanhthi/dinhanhthi.com-v3',
    icon: '🍅',
    tech: ['bootstrap', 'docker', 'html5', 'jekyll', 'scss']
  },
  {
    id: 'cafe-in-hcm',
    type: ['ds'],
    title: 'Cafe in HCM',
    icon: '☕',
    description:
      'A final project for the "Applied Data Science Capstone" course from IBM on Coursera. Setting up a café in Ho Chi Minh City.',
    source: 'https://github.com/dinhanhthi/cafe-in-hcm',
    url: 'https://note.dinhanhthi.com/setting-up-a-cafe-in-hcmc',
    tech: ['foursquare-api', 'jupyter', 'python', 'scikit-learn']
  },
  {
    id: 'thesis-template',
    type: ['other'],
    title: 'ThiThesisTemp',
    icon: '🎨',
    description: 'A simple, beautiful LaTeX theme for books, thesis.',
    source: 'https://github.com/dinhanhthi/ThiThesisTemp',
    tech: ['latex']
  },
  {
    id: 'math2itwp',
    type: ['web'],
    title: 'Math2ITwp',
    icon: '🐘',
    description: 'A nice Wordpress theme based on Bootstrap with different layouts for posts.',
    source: 'https://github.com/dinhanhthi/math2itwp',
    url: 'https://math2it.com',
    tech: ['bootstrap', 'docker', 'html5', 'js', 'mysql', 'nodejs', 'php', 'scss', 'wordpress']
  },
  {
    id: 'note-theme',
    type: ['web'],
    title: 'NoteTheme',
    icon: '📝',
    description: 'An AIO Jekyll theme designed for the purpose of notes.',
    url: 'https://dinhanhthi.github.io/NoteTheme/',
    source: 'https://github.com/dinhanhthi/NoteTheme',
    tech: ['bootstrap', 'docker', 'html5', 'jekyll', 'liquid', 'scss']
  },
  {
    id: 'math2it.com',
    type: ['web', 'ds', 'other'],
    title: 'math2it.com',
    icon: '🔥',
    description: 'A Vietnamese website for intuitive knowledge (math, education and technology).',
    url: 'http://math2it.com',
    tech: ['latex'],
    techText: ['maths', 'IT', 'tutorial']
  },
  {
    id: 'math2it-group',
    type: ['web', 'ds', 'other'],
    title: 'Math2IT Group',
    icon: '🎲',
    description: 'A Vietnamese community about math, education and technology.',
    url: 'https://www.facebook.com/groups/math2it/',
    tech: ['latex'],
    techText: ['community', 'forum', 'Q&A']
  },
  {
    id: 'taniajekyll',
    type: ['web'],
    title: 'TaniaJekyll',
    icon: '🚀',
    description:
      'A beautiful Jekyll personal theme with different layouts for posts, based on Bootstrap & Jekyll.',
    url: 'https://dinhanhthi.github.io/TaniaJekyll',
    source: 'https://github.com/dinhanhthi/TaniaJekyll',
    tech: ['bootstrap', 'docker', 'html5', 'jekyll', 'liquid', 'scss']
  },
  {
    id: 'nxfem',
    type: ['other'],
    title: 'NXFEM',
    icon: '🔢',
    source: 'https://github.com/dinhanhthi/nxfem',
    description: 'A Matlab library for Nitsche - Extended Finite Element Method.',
    tech: ['matlab', 'latex'],
    techText: ['numerical methods', 'maths']
  }
]

export default projects
