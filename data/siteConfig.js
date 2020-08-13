module.exports = {
  siteTitle: "Hi! I'm Brad Simpson!",
  siteDescription: `My personal website to show off resume and projects`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  googleAnalyticsId: 'UA-175194752-2',
  authorName: 'Brad Simpson',
  githubUsername: 'bradsimpson213',
  authorAvatar: 'https://brad-simpson-website.s3.amazonaws.com/myheadshot.jpg',
  authorDescription: `I am a software engineer with previous careers in the financial and property management/ construction industries. <br/>
  I have a passion for building, whether its a website, an app, or an addition on my house...  <br/> I take great pride in my work.
  I live in Hawthorne, NJ (30 minutes outside of NYC) and enjoy spending my free time working on DIY projects, gardening, hiking and camping with my family, or reading a good book in my hammock.`,

  skills: [
    {
      name: 'JavaScript',
      icon: 'JavaScript',
      level: 97,
    },
    {
      name: 'Python / Flask',
      icon: 'Python',
      level: 94,
    },
    {
      name: 'React',
      icon: 'React',
      level: 89,
    },
    {
      name: 'HTML5',
      icon: 'HTML5',
      level: 88,
    },
    {
      name: 'CSS3',
      icon: 'CSS3',
      level: 86,
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: 'App Academy',
      begin: {
        month: 'Feb',
        year: '2020',
      },
      duration: '6 months',
      occupation: 'Student, Software Engineer',
      description: '• Sharpening my skills as a full stack software engineer. <br/>• App Academy is an immersive 1,000+ hour full-stack web development course with under a 3% acceptance rate',
    },
    {
      company: 'New Vistas Corporation',
      begin: {
        month: 'May',
        year: '2010',
      },
      duration: '10 years',
      occupation: 'Regional Director of Construction, Asset Manger',
      description: '• Directed a team of 4 construction technicians for various home improvement, rehabilitation, and maintenance projects <br/>• Oversaw a portfolio of 12 properties, including  residential and commercial l buildings <br/>• Became a trained HERS Rater, using a software set to determine home environmental efficiency with 1000’s of data inputs <br/>• Utilized Yardi Property Management software to  control the financial reporting, rent collection and bill paying requirements',
    },
    {
      company: 'Palmeri Fund Administrators',
      begin: {
        month: 'Sept',
        year: '2004',
      },
      duration: '5 years & 8 months',
      occupation: 'Accounting Supervisor, Client Relationship Manager',
      description: '• Managed all accounting and administrative resources for 6 to 7 private equity fund clients <br/>• Supervised a team of five staff and senior- level accounting professionals in all aspects of the financial reporting cycle <br/>• Tested Equitrak accounting software, developed procedures manuals for the software, and trained all levels of employees',
    },
    {
      company: 'Ernst & Young LLP',
      begin: {
        month: 'Jan',
        year: '2001',
      },
      duration: '2 years & 9 months',
      occupation: 'Accounting Intern, Center for Mobility Services',
      description: 'Reconcile and report on relocation expense accounts for the firm’s domestic employee transfers as well as facilitate payroll for expatriate employees.',
    },
    {
      company: 'Ramapo College of NJ',
      begin: {
        month: 'Sept',
        year: '1999',
      },
      duration: '4 years',
      occupation: 'Bachelors of Science in Accounting',
      description: 'I learned how to count, really well.  I also took several business courses in finance, marketing, economics, and management.',
    },
  ],
  portfolio: [
    {
      image: "https://ben.perlmutter.io/assets/img/star-trader-demo-full.gif",
      title: "StarTrader",
      description: "The best starship trading app in the whole galaxy!",
      tech: "Created with Python / Flask Server and React Client",
      url: "https://startrader-app.herokuapp.com/"
    },
    {
      image: "https://brad-simpson-website.s3.amazonaws.com/Mello-video.gif",
      title: "Mello",
      description: "A Zen themed Kanban board inspired by Trello with drag and drop functionality!",
      tech: "Created with Python / Flask Server, React Client (with Hooks), and React Beautiful DND",
      url: "https://mello-app1.herokuapp.com"
    },
    {
      image: 'https://brad-simpson-website.s3.amazonaws.com/Rockinhood.png',
      title: 'RockinHood',
      description: "A Stock / Portfolio Investing application inspired by RobinHood.",
      tech:  "Created with an Express Server and PUG Templating",
      url: 'https://rockinhood.herokuapp.com/',
    },
    /* more portifolio items here */
  ],
  social: {
    angel: "https://angel.co/u/brad-simpson-8",
    linkedin: 'https://www.linkedin.com/in/brad-simpson-a6b1b7b2/',
    github: 'https://github.com/bradsimpson213',
    email: 'bradsimpson@icloud.com',
  },
  siteUrl: 'https://brad-simpson-website.herokuapp.com/',
  // pathPrefix: '/bradsimpson213', // Note: it must *not* have a trailing slash.
  siteCover: '/images/waves.jpg',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: './src/assets/BS-16x16.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    },
    {
      label: 'Resume',
      url: 'https://docs.google.com/document/d/1SdwDGH71NDvTywBrMY0WY9kEAzaZxpl7PHQt_RXj3sg/export?format=pdf',
    },
  ],
}