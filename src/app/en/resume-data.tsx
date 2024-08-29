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
    "As a Full Stack Engineer, I have successfully taken numerous products from 0 to 1. Currently, I primarily work with TypeScript, React, Node.js, and Golang. Additionally, I hold the role of a PM - Tech Lead, effectively leading teams and ensuring an environment where everyone can unleash their full potential. In terms of experience, I have nearly 5 years of software development expertise.",
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
      company: "Picket Homes",
      link: "https://app.pickethomes.com",
      badges: [],
      title: "Fullstack Developer",
      logo: ParabolLogo,
      start: "01/2024",
      end: "Now",
      description:
        "Developed and Implemented new features for Picket real-estate platform.",
    },
    {
      company: "MobiFone IT Center",
      link: "https://it.mobifone.vn/",
      badges: [],
      title: "Fullstack Developer - Backend Team Leader",
      logo: ParabolLogo,
      start: "07/2021",
      end: "01/2024",
      description:
        "Leading the development of the Mobifone Meet platform. Technologies: React/Next.js, TypeScript, Golang, Antd, Shadcn-ui, Trpc, Drizzle, MySQL, Docker.",
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
        "Advising on solutions for common issues for software development teams. Technologies involved include Nomad, Consul, Redis, Kafka, and RabbitMQ.",
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
    "Python",
    "React/Next.js",
    "Node.js",
    "Antd",
    "Tailwindcss",
    "GraphQL",
    "Websocket",
    "Mysql/Postgres/Mongo",
    "Drizzle/Prisma",
    "Docker",
    "WebRTC",
  ],
  projects: [
    {
      title: "Picket",
      techStack: ["React", "Typescript", "Nodejs", "Python", "K8s", "Docker"],
      description:
        "A one-stop real estate solution for buy, sell, and manage investments with ease.",
      link: {
        label: "pickethomes.com",
        href: "https://app.pickethomes.com",
      },
    },
    {
      title: "MobiFone Meet",
      techStack: [
        "Fullstack Developer / Tech Lead",
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
        "An online video conferencing solution for individuals, organizations, businesses, and state agencies.",
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
        "A virtual switchboard solution that connects business phone systems, enhances sales support, and reduces costs.",
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
        "A Fullstack Template summarizes solutions for common tasks when building a software product.",
    },
    {
      title: "MobiFone eContract",
      techStack: [
        "Blockchain",
        "Ethererum",
        "Web3",
        "hyperledger fabric",
        "BigchainDB",
      ],
      description:
        "Research and propose solutions to apply blockchain technology to MobiFone eContract system.",
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
      description: "A solution to centrally manage IoT devices.",
      link: {
        label: "aiot.mobifone.vn",
        href: "https://aiot.mobifone.vn/",
      },
    },

    {
      title: "Ratelimit Research",
      techStack: ["Redis", "Kafka", "RabbitMQ", "Golang"],
      description:
        "Research and propose rate-limiting solutions for common operations at VCS to prevent abuse and ensure system stability.",
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
      description: "Picture Moderator module in Mekoube, a Dating app",
      link: {
        label: "mektoube.fr",
        href: "https://www.mektoube.fr/",
      },
    },
    {
      title: "VinhGia PMS",
      techStack: ["Javascript", "Typescript", "React", "Bootstrap"],
      description:
        "Homepage and admin page of Vinh Gia pharmaceutical pharmacy.",
    },
  ],
} as const;
