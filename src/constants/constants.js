import { color } from "framer-motion";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    logo,
    oracle,
    KRIS,
    Thrive,
    PortfolioWebsite,
    cognidex,
    EDH,
    toppan,
    nus_logo,
    EDGE_CLUB,
    EDGE_CLUB_LOGO
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "OCI Learning Part-Time",
      company_name: "Oracle",
      icon: oracle,
      iconBg: "white",
      date: "Jan 2022 - Dec 2022",
      points: [
        "Learning about Oracle Cloud Infrastructure and its services, including Compute, Storage, Stacks, and Instance.",
        "How to use Oracle Cloud Infrastructure to host websites and web applications.",
        "Learn how to manage and maintain Oracle Cloud Infrastructure hosted applications and databases.",
      ],
    },
    {
      title: "Founder",
      company_name: "AlphaLearn",
      icon: logo,
      iconBg: "black",
      date: "March 2022 - June 2023",
      points: [
        "Developing and maintaining a Learning Management System using made using React.js and other relevant technologies.",
        "Using Oracle Cloud Infrastructure to host and maintain the website.",
        "Hosting and maintaining the website using Oracle Cloud Infrastructure.",
        "Designing and developing the website using Figma.",
        "Presenting the website to potential clients and investors at Singapore Week Of Innovation and Technology (SWITCH) 2022.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Toppan Ecquaria",
      icon: toppan,
      iconBg: "black",
      date: "Mar 2023 - Aug 2023",
      points: [
        "Developing Backend Systems using Python and Flask Framework for the company's internal use.",
        "Manual Testing and Automation Testing using Katalon and UIPath.",
        "Wireframing and Prototyping using AxureRP to visualize company Functional Specifics.",
        "Visualizing Data using Tableau to create Dashboards for presentation to clients.",
      ],
    },
    {
      title: "Data Engineering and LLM Optimization Intern",
      company_name: "National University of Singapore",
      icon: nus_logo,
      iconBg: "white",
      date: "Aug 2023 - Oct 2023",
      points: [
        "Assist in building a langchain agent for searching datasets based on user intent from a vector database.",
        "Building a full stack application using React.js, Amazon Web Services and Solidity.",
        "Conducting research on the use of blockchain technology and utilization of LLMs in the data industry.",
        "Researching on the use of machine learning to optimize the langchain agent.",
        "Continuously building and improving the web application and integrate more features researched.",
        "View the project below!",
      ],
    },
    {
      title: "Research Intern",
      company_name: "National University of Singapore",
      icon: nus_logo,
      iconBg: "white",
      date: "Oct 2023 - Current",
      points: [
        "Researching on use cases of Data Sharing and Data Monetization in the industry.",
        "Launching out new features to the web application and improving the user experience.",
        "Conducting research on the use of blockchain technology and utilization of LLMs in the data industry.",
        "Integration of smart contracts and blockchain technology into the web application.",
        "Data crawling and data analysis to improve the web application.",
        "View the project below!",
      ],
    },
    {
      title: "Founder",
      company_name: "EdgeClub",
      icon: EDGE_CLUB_LOGO,
      iconBg: "white",
      date: "Jan 2024 - Current",
      points: [
        "Developing and maintaining a website for nightlife in Singapore using React.js and other related technologies.",
        "Using AWS to host and maintain the website.",
        "AWS Lambda and AWS API Gateway to create serverless functions for the website, storing data in DynamoDB.",
        "Live Data Integration using AWS Lambda and AWS API Gateway to display real-time data on the website.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        `Visit www.edgeclub.shop to view the website!`,
      ],
    }
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Haven't got one yet. Will update when I get one. Or you can give me one.",
      name: "Jia Ye",
      designation: "CEO",
      company: "Myself",
      image: "https://images.rawpixel.com/image_png_250/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LTNkaG9sby1wby0wMjljXzEucG5n.png",
    },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "SQ KRIS+ app",
      description:
        "A mobile application that allows users to buy merchandise and food from multiple locations with the Singapore Airlines Kris+ store using their KrisFlyer miles.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "expo",
          color: "yellow-text-gradient",
        },
        {
          name: "redux",
          color: "purple-text-gradient",
        },
        {
          name: "nodejs",
          color: "cyan-text-gradient",
        },
        {
          name: "expressjs",
          color: "purple-gradient",
        },
      ],
      image: KRIS,
      source_code_link: "https://github.com/JyTey2004/SQ_APP_Challenge",
    },
    {
      name: "Thrive App",
      description:
        "A mobile application which empowers users to take charge of their health and wellbeing by providing them with a platform to track their health, medical records, nutrition and fitness goals.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "expo",
          color: "yellow-text-gradient",
        },
        {
          name: "nodejs",
          color: "cyan-text-gradient",
        },
        {
          name: "expressjs",
          color: "purple-gradient",
        },
      ],
      image: Thrive,
      source_code_link: "https://github.com/JyTey2004/SCS_Challenge/",
    },
    {
      name: "Enterprise Data Hub Backend API",
      description:
        "A backend API for calling data from Singapore's Enterprise Data Hub (EDH) using Python and Flask Framework. The API is used to call data from EDH and store it in a mysql database.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: EDH,
      source_code_link: "https://github.com/JyTey2004/EnterpriseDataHub-BE-API",
    },
    {
      name: "My Portfolio Website",
      description:
        "A website to showcase my portfolio and projects. The website is made using React.js and Tailwind CSS. The one you are currently viewing!",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
        {
          name: "vitejs",
          color: "yellow-text-gradient",
        },
      ],
      image: PortfolioWebsite,
      source_code_link: "https://github.com/JyTey2004",
    },
    {
      name: "Cognidex",
      description:
        "A decentralized application (DApp) that allows users to create, buy, sell data. The DApp is made using React.js, Solidity, and aws. Special thanks to NUS!",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "aws",
          color: "green-text-gradient",
        },
        {
          name: "solidity",
          color: "pink-text-gradient",
        },
        {
          name: "postgres",
          color: "yellow-text-gradient",
        },
      ],
      image: cognidex,
      source_code_link: "https://www.cognidex.net/",
    },
    {
      name: "EdgeClub",
      description:
        "One Stop Solution for nightlife in Singapore. Website made using React.js, AWS and Node.js. Please explore and give feedback!",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "aws",
          color: "yellow-text-gradient",
        },
      ],
      image: EDGE_CLUB,
      source_code_link: "https://www.edgeclub.shop/",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };