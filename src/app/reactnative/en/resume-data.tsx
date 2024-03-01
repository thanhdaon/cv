import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import {
  ClevertechLogo,
  JojoMobileLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Dao Ngoc Thanh",
  initials: "DNT",
  location: "Cau Giay, Ha Noi, Viet Nam",
  locationLink: "https://maps.app.goo.gl/jzejzRdeTB62oKn66",
  about:
    "Full Stack Engineer focused on building products with extra attention to customers, technologies and developer experience.",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. Currently, I work mostly with TypeScript, React, Node.js and Golang. Additionally, I hold the role of a PM - Tech Lead, effectively guiding the team and ensuring an environment where people can do their best work. I have nearly 4 years of experience in software development.",
  avatarUrl: "https://avatars.githubusercontent.com/u/24645009?v=4",
  personalWebsiteUrl: "https://thanhdaon.me",
  contact: {
    email: "thanhdaon89@gmail.com",
    tel: "+84968037260",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/thanhdaon",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/thanhdaon89/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/thanhdaon",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Hanoi University of Science and Technology",
      degree:
        "Bachelor's Degree in Information Technology with Distinction, GPA: 3.32",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "MobiFone IT Center",
      link: "https://it.mobifone.vn/",
      badges: [],
      title: "Full Stack Developer",
      logo: ParabolLogo,
      start: "7/2021",
      end: "Now",
      description:
        "Developing new features, leading the team, conducting research, selecting and building project bases for the department, training new members. Technologies include React/Next.js, TypeScript, Golang, Ant Design, Shadcn-ui, Trpc, Drizzle, MySQL, and Docker.",
    },
    {
      company: "Viettel Cyber Security",
      link: "https://viettelcybersecurity.com",
      badges: [],
      title: "Solution Engineer",
      logo: ClevertechLogo,
      start: "9/2020",
      end: "6/2021",
      description:
        "Researching solutions for common issues faced by product development teams. Technologies include Nomad, Consul, Redis, Kafka, and RabbitMQ.",
    },
    {
      company: "OpenTechiz",
      link: "https://www.opentechiz.com",
      badges: ["Fresher"],
      title: "Fullstack Developer",
      logo: JojoMobileLogo,
      start: "8/2019",
      end: "8/2020",
      description:
        "Developed a module within the Mektoube dating application enabling administrators to approve user-uploaded photos.",
    },
    {
      company: "VNSolution.,LTD",
      link: "https://vnsolution.com.vn",
      badges: ["Fresher"],
      title: "Frontend Developer",
      logo: NSNLogo,
      start: "6/2018",
      end: "2/2019",
      description:
        "Developed interfaces for product showcase websites and custom admin portals as per client specifications.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Golang",
    "React/Next.js",
    "ReactNative/Expo",
    "Node.js",
    "Bun",
    "Antd",
    "Tailwindcss",
    "Shadcn-ui",
    "GraphQL",
    "Websocket/Socketio",
    "RestAPI/Trpc",
    "Mysql/Postgres/Mongo",
    "Drizzle/Prisma",
    "Docker",
    "WebRTC",
  ],
  projects: [
    {
      title: "MobiFone Meet App",
      techStack: ["Lead App Developer", "TypeScript", "ReactNative", "Expo"],
      description:
        "The solution offers online video conferencing for individuals, organizations, businesses, and governmental agencies. It has been recognized as a potential national digital platform since November 29, 2023.",
      link: {
        label: "meet.mobifone.com",
        href: "https://meet.mobifone.vn",
      },
    },
    {
      title: "Fitness App",
      techStack: [
        "TypeScript",
        "Kotlin",
        "C++",
        "ReactNative",
        "SQLite",
        "Google Fit",
      ],
      description:
        "Six fitness apps, including Home Workout, Femaleworkout, Height Increase, Kickboxing Fitness, Hip Hop Workout, and Gym Workout, dominate the top free health and fitness category on Google Play. Their standout feature is the use of 3D models to simulate exercises, offering users an immersive fitness experience.",
    },
    {
      title: "Blockchain Research",
      techStack: [
        "Blockchain",
        "Ethererum",
        "Web3",
        "hyperledger fabric",
        "BigchainDB",
      ],
      description:
        "Study blockchain technology, conduct research, and propose solutions for applying blockchain technology to business challenges at MobiFone. For example, electronic invoice issues, and prepaid card issues.",
    },
    {
      title: "Tool App",
      techStack: ["TypeScript", "Kotlin", "C++", "ReactNative", "SQLite"],
      description:
        "I spearheaded the development of over 10 diverse tools spanning education and healthcare sectors, including but not limited to Wifi Router Manager, Wifi Password Recovery, Get Apk, Language Learning Apps (French, Japanese), Diseases Dictionary, Battery Saver, Auto Click, and File Manager.",
    },
    {
      title: "HashiCorp Research",
      techStack: ["Nomad", "Consul", "Vaul", "Docker"],
      description:
        "Study and master HashiCorp products, propose plans for implementing products such as Nomad, Consul, Vault, etc., to replace existing deployment solutions at Viettel Cyber Security, such as Docker Swarm, Kubernetes.",
      link: {
        label: "hashicorp.com",
        href: "https://www.hashicorp.com/",
      },
    },

    {
      title: "Fullstack Template",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js 14",
        "React-Query",
        "Next-auth",
        "Trpc",
        "Drizzle",
        "Mysql Proxy",
        "Shadcn-ui",
        "Trigger.dev",
        "Soketi",
        "Docker",
      ],
      description:
        "A Fullstack Template that consolidates solutions for common tasks encountered when building a software product. For example, solutions for role-based authentication, real-time interaction, cron job management, etc. These solutions are built around the Next.js framework and follow a serverless approach.",
    },
    {
      title: "Picture Moderator",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "Apollo GraphQL",
        "RabbitMQ",
        "Docker",
        "Kubenetes",
      ],
      description:
        "A module within the Mektoube dating application tasked with providing an interface for Mektoube administrators to approve photos uploaded by users.",
      link: {
        label: "mektoube.fr",
        href: "https://www.mektoube.fr/",
      },
    },
  ],
} as const;
