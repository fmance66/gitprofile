// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'fmance66', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Proyectos en Github',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // List of repository names to display
        projects: ['fmance66/gitprofile', 'fmance66/tiendapro-mern'],
      },
    },
    external: {
      header: 'Mis Proyectos',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Proyecto 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Proyecto 2',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  // eslint-disable-next-line prettier/prettier
  seo: { title: 'Portfolio de Fernando Mancevich', description: '', imageURL: '' },
  social: {
    linkedin: 'fernando-mancevich',
    x: 'volvamos90',
    mastodon: 'fmancevich@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: 'fmancevich',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'fmancevich',
    dev: 'main-it',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://react-portfolio-gqwl.onrender.com',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      // Empty fileUrl will hide the `Download Resume` button.
      // 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      'https://1drv.ms/w/c/e5451c34f8f8470f/IQAPR_j4NBxFIIDlMPkBAAAAAReI3Av8gq1Tg-BmtYNfcBI?e=r1nNSm',
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'Oracledb',
    'MongoDB',
    'DB2',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'React Suite',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Agencia de Recaudación y Control Aduanero',
      position: 'Consejero Técnico',
      from: 'Octubre 2024',
      to: 'Presente',
      companyLink: 'https://arca.gob.ar',
    },
    {
      company: 'Administración Federal de Ingresos Públicos',
      position: 'Consejero Técnico',
      from: 'Enero 2024',
      to: 'Octubre 2024',
      companyLink: 'https://afip.gob.ar',
    },
    {
      company: 'Administración Federal de Ingresos Públicos',
      position: 'Jefe de Departamento',
      from: 'Agosto 2020',
      to: 'Enero 2024',
      companyLink: 'https://afip.gob.ar',
    },
    {
      company: 'Administración Federal de Ingresos Públicos',
      position: 'Líder de Proyecto',
      from: 'Julio 2003',
      to: 'Agosto 2020',
      companyLink: 'https://afip.gob.ar',
    },
    {
      company: 'IBM Argentina',
      position: 'Líder de Proyecto',
      from: 'Julio 1993',
      to: 'Julio 2003',
      companyLink: 'https://ibm.com.ar',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Universidad de Morón',
      degree: 'Licenciatura en Sistemas',
      from: '2003',
      to: '2007',
    },
    {
      institution: 'Universidad de Buenos Aires',
      degree: 'Licenciatura en Sistemas',
      from: '1987',
      to: '1993',
    },
    {
      institution: 'Escuela Nacional de Educación Técnica N° 28',
      degree: 'Técnico en Electrónica',
      from: '1980',
      to: '1986',
    },
  ],
  publications: [
    {
      title: 'Título de la Publicación',
      conferenceName: '',
      journalName: 'Nombre del artículo',
      authors: 'Guillermo García',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Título de la Publicación',
      conferenceName: 'Nombre de la Conferencia',
      journalName: '',
      authors: 'Carlos Fernando Alcaráz',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'main-it', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Realizado con <a 
      class="text-primary" href="https://github.com/fmance66/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> y ❤️`,

  enablePWA: true,
};

export default CONFIG;
