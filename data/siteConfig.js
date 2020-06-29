module.exports = {
  siteTitle: 'Hi! I\'m Brad!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Brad Simpson',
  // twitterUsername: '_franciscodf',
  githubUsername: 'bradsimpson213',
  authorAvatar: '/images/IMG_5567.jpeg',
  authorDescription: `Developer, passionate about what I do. Always interested in how the sites were made, I started to study HTML by hobby. <br />
    In 2012 I started working as a support technician and I approached the developers.
    In 2015, I started to study C # and started to contribute with the team giving maintenance in an application in C # and .NET. <br />
    I currently work as a frontend developer and mainly work with <strong>Javascript, NodeJS e React.</strong>`,
  skills: [
    {
      name: 'Javascript',
      level: 90
    },
    {
      name: 'Python',
      level: 60
    },
    {
      name: 'React',
      level: 75
    },
    {
      name: 'HTML',
      level: 60
    },
    {
      name: 'CSS',
      level: 55
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "App Academy",
      begin: {
        month: 'feb',
        year: '2020'
      },
      duration: null,
      occupation: "Student, Aspiring Software Engineer",
      description: "Training to become a full stack software engineer."
  
    },  {
      company: "New Vistas Corporation",
      begin: {
        month: 'may',
        year: '2010'
      },
      duration: '9 yrs e 9 mos',
      occupation: "Regional Director of Construction, Asset Manger",
      description: "Directed a team of three construction professionals for various home improvement, rehab and maintenance projects in Northern New Jersey."
  
    },  {
      company: "Palmeri Fund Administrators",
      begin: {
        month: 'sept',
        year: '2004'
      },
      duration: '5 yrs e 8 mos',
      occupation: "Accounting Supervisor, Client Relationship Manager",
      description: "Managed all accounting and administrative resources for multiple Private Equity Fund clients while supervising a team of five staff and senior level accounting professionals."
  
    },
  ],
  portifolio: [
    {
      image: "/images/Rockinhood.png",
      description: "Rockinhood - Clone of the Robinhood Investing Website",
      url: "https://rockinhood.herokuapp.com/"
    },
    // {
    //   image: "/images/awesome-grid.png",
    //   description: "Responsive grid for ReactJS",
    //   url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    // },
    /* more portifolio items here */
  ],
  social: {
    // twitter: "https://twitter.com/_franciscodf",
    linkedin: "https://www.linkedin.com/in/brad-simpson-a6b1b7b2/",
    github: "https://github.com/bradsimpson213",
    email: "bradsimpson@icloud.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}