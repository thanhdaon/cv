import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { ClevertechLogo, JojoMobileLogo, ParabolLogo } from "@/images/logos";

export const RESUME_DATA = {
  name: "DAO NGOC THANH",
  initials: "DNT",
  location: "Cau Giay, Ha Noi, Viet Nam",
  locationLink: "https://maps.app.goo.gl/jzejzRdeTB62oKn66",
  about:
    "A Full Stack Engineer focusing on building products with special attention to customers, technology, and developer experience",
  summary:
    "As a Full Stack Engineer, I have successfully taken numerous products from 0 to 1. Currently, I primarily work with TypeScript, React, Node.js, and Golang. Additionally, I hold the role of a PM - Tech Lead, effectively leading teams and ensuring an environment where everyone can unleash their full potential. In terms of experience, I have nearly 4 years of software development expertise.",
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
        "Bachelor of Information Technology - Excellent degree - ICT specialization, GPA: 3.32",
      start: "2016",
      end: "2021",
    },
  ],
  work: [
    {
      company: "MobiFone IT Center",
      link: "https://it.mobifone.vn/",
      badges: [],
      title: "Fullstack Developer - Backend Team Leader",
      logo: ParabolLogo,
      start: "07/2021",
      end: "Now",
      description:
        "Direction, development of new features and establishment of project bases. Leading the team in software development tasks. Coordinating and taking responsibility for the quality and progress from the project's inception. Training new team members. Technologies: React/Next.js, TypeScript, Golang, Antd, Shadcn-ui, Trpc, Drizzle, MySQL, Docker.",
    },
    {
      company: "Viettel Cyber Security",
      link: "https://viettelcybersecurity.com",
      badges: [],
      title: "Solution Engineer",
      logo: ClevertechLogo,
      start: "05/2020",
      end: "06/2021",
      description:
        "Advising on solutions for common issues such as application deployment strategies, distributed access limitation solutions, etc., for software development teams. Technologies involved include Nomad, Consul, Redis, Kafka, and RabbitMQ.",
    },
    {
      company: "OpenTechiz",
      link: "https://www.opentechiz.com",
      badges: ["Fresher"],
      title: "Fullstack Developer",
      logo: JojoMobileLogo,
      start: "06/2018",
      end: "04/2020",
      description:
        "Develop timekeeping app for internal use within the company. Develop and test photo approval module in Mektoube application.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Golang",
    "Java",
    "React/Next.js",
    "Node.js",
    "Bun",
    "Antd",
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
      title: "MobiFone Meet",
      techStack: [
        "Fullstack Developer / Tech Lead / PM",
        "TypeScript",
        "Next.js",
        "Golang",
        "Node.Js",
        "Antd/Shadcn-ui",
        "Tailwindcss",
        "Prisma/Drizzle",
        "Mysql/Mongo",
        "Socketio",
        "WebRTC",
      ],
      description:
        "Build and develop the MobiFone Meet application to become an online video conferencing solution for individuals, organizations, businesses, and state agencies. The solution was recognized as a potential national digital platform on November 29, 2023 and has been put into practical use.",
      link: {
        label: "meet.mobifone.com",
        href: "https://meet.mobifone.vn",
      },
    },
    {
      title: "Siphub",
      techStack: [
        "Fullstack Developer / PM",
        "Next.js",
        "Next-auth",
        "Trpc",
        "Java",
        "Sprint Boot",
        "Mysql",
      ],
      description:
        "Virtual switchboard solution for businesses, supporting the connection of business switchboards, providing effective sales support and customer care tools, helping to improve call pick-up rates and save business costs.",
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
        "A Fullstack Template summarizes solutions for common tasks when building a software product. For example, authentication/authorization solutions, real-time interaction solutions, cron job solutions,... Solutions built around the Next.Js framework and design with serverless concerns.",
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
        "Learn Blockchain technology, research and propose solutions to apply blockchain technology to MobiFone's business problems. For example, electronic invoice problem, phonecard problem.",
    },
    {
      title: "AIOT",
      techStack: [
        "Backend Developer",
        "TypeScript",
        "Next.js",
        "Golang",
        "Mainflux",
        "InfluxDB",
      ],
      description:
        "A solution to centrally manage IoT devices, supporting device management, monitoring, system tracking, or customizing control scenarios for anomaly detection.",
      link: {
        label: "aiot.mobifone.vn",
        href: "https://aiot.mobifone.vn/",
      },
    },
    {
      title: "HashiCorp Research",
      techStack: ["Nomad", "Consul", "Vaul", "Docker"],
      description:
        "Learn and master HashiCorp's products, propose plans to apply products such as nomad, consul, vaul,... to replace Viettel Cyber Security's existing deployment solutions such as Docker Swarm, Kubenetes.",
      link: {
        label: "hashicorp.com",
        href: "https://www.hashicorp.com/",
      },
    },
    {
      title: "Ratelimit Research",
      techStack: ["Redis", "Kafka", "RabbitMQ", "Golang"],
      description:
        "Research and propose Ratelimit solutions for some specific, common operations at Viettel Cyber Security.",
    },

    {
      title: "Picture Moderator",
      techStack: [
        "Fullstack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "Apollo GraphQL",
        "RabbitMQ",
        "Docker",
        "Kubenetes",
      ],
      description:
        "A module in the Mektoube dating application, which provides an interface for Mektoube administrators to approve photos uploaded by users.",
      link: {
        label: "mektoube.fr",
        href: "https://www.mektoube.fr/",
      },
    },
    {
      title: "VinhGia PMS",
      techStack: ["Javascript", "React", "CSS"],
      description:
        "Homepage and admin page of Vinh Gia pharmaceutical pharmacy.",
    },
  ],
} as const;
