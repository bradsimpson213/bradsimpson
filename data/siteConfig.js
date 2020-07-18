module.exports = {
  siteTitle: "Hi! I'm Brad Simpson!",
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Brad Simpson',
  // twitterUsername: '_franciscodf',
  githubUsername: 'bradsimpson213',
  authorAvatar: 'https://brad-simpson-website.s3.amazonaws.com/myheadshot.jpg',
  authorDescription: `Aspiring software engineer with previous careers in the financial and property management/construction industries. <br/>
  I have a passion for building, whether its a website, an app, or an addition on my house...  <br/> I take great pride in my work.
  I live in Hawthorne, NJ (30 minutes outside of NYC) and enjoy spending my free time working on DIY projects or reading a good book in my hammock`,

  skills: [
    {
      name: 'Javascript',
      level: 95,
    },
    {
      name: 'Python',
      level: 75,
    },
    {
      name: 'React',
      level: 70,
    },
    {
      name: 'HTML',
      level: 60,
    },
    {
      name: 'CSS',
      level: 55,
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: 'App Academy',
      begin: {
        month: 'feb',
        year: '2020',
      },
      duration: null,
      occupation: 'Student, Aspiring Software Engineer',
      description: 'Training to become a full stack software engineer.',
    },
    {
      company: 'New Vistas Corporation',
      begin: {
        month: 'may',
        year: '2010',
      },
      duration: '9 yrs & 9 mos',
      occupation: 'Regional Director of Construction, Asset Manger',
      description:
        'Directed a team of three construction professionals for various home improvement, rehab and maintenance projects in Northern New Jersey.',
    },
    {
      company: 'Palmeri Fund Administrators',
      begin: {
        month: 'sept',
        year: '2004',
      },
      duration: '5 yrs & 8 mos',
      occupation: 'Accounting Supervisor, Client Relationship Manager',
      description:
        'Managed all accounting and administrative resources for multiple Private Equity Fund clients while supervising a team of five staff and senior level accounting professionals.',
    },
    {
      company: 'Ernst & Young LLP',
      begin: {
        month: 'jan',
        year: '2001',
      },
      duration: '2 yrs & 9 mos',
      occupation: 'Accounting Intern, Center for Mobility Services',
      description:
        'Reconcile and report on relocation expense accounts for the firm’s domestic employee transfers as well as facilitate payroll for expatriate employees.',
    },
  ],
  portfolio: [
    {
      image: "https://brad-simpson-website.s3.amazonaws.com/StarTrader.png",
      description: "StarTrader, the best starship trading app in the whole galaxy!",
      url: "https://github.com/bradsimpson213/star_trader_server.git"
    },
    {
      image: 'https://brad-simpson-website.s3.amazonaws.com/Rockinhood.png',
      description: 'Rockinhood - Clone of the Robinhood Investing Website',
      url: 'https://rockinhood.herokuapp.com/',
    },
    /* more portifolio items here */
  ],
  social: {
    // twitter: "https://twitter.com/_franciscodf",
    linkedin: 'https://www.linkedin.com/in/brad-simpson-a6b1b7b2/',
    github: 'https://github.com/bradsimpson213',
    email: 'bradsimpson@icloud.com',
  },
  siteUrl: 'https://bradsimpson213.github.io/bradsimpson/',
  pathPrefix: '/bradsimpson', // Note: it must *not* have a trailing slash.
  siteCover: '/images/waves.jpg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
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
      url:
        'https://docs.google.com/document/d/e/2PACX-1vTMfL4Vkb8OxkFugRcOqJkWJnu_-_QA2AjxIX7sm1AAQfCpr9own76W1cxpdu9eHOvCi_sL-xcgSPhD/pub',
    },
  ],
}