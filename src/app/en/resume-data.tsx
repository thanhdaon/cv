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
    tel: "+84968037360",
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
      title: "Full Stack Developer → Backend Team Leader",
      logo: ParabolLogo,
      start: "7/2021",
      end: "Nay",
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
      badges: [],
      title: "Lập trình viên Fullstack",
      logo: JojoMobileLogo,
      start: "8/2019",
      end: "8/2020",
      description:
        "Phát triển mô đun trong ứng dụng hẹn hò Mektoube, cho phép quản trị viên phê duyệt ảnh do người dùng tải lên.",
    },
    {
      company: "VNSolution.,LTD",
      link: "https://vnsolution.com.vn",
      badges: [],
      title: "Lập trình viên Frontend",
      logo: NSNLogo,
      start: "6/2018",
      end: "2/2019",
      description:
        "Phát triển giao diện cho các trang web giới thiệu sản phẩm, trang web quản trị theo yêu cầu từ khách hàng",
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
        "Tech Lead / Fullstack Developer",
        "PM",
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
        "Giải pháp hội nghị truyền hình trực tuyến cho các cá nhân, tổ chức, doanh nghiệp, cơ quan nhà nước. Giải pháp đã được công nhận là nền tảng số quốc gia tiềm năng vào ngày 29/11/2023.",
      link: {
        label: "meet.mobifone.com",
        href: "https://meet.mobifone.vn",
      },
    },
    {
      title: "Siphub",
      techStack: [
        "PM",
        "Fullstack Developer",
        "Next.js",
        "Next-auth",
        "Trpc",
        "Java",
        "Sprint Boot",
        "Mysql",
      ],
      description:
        "Giải pháp tổng đài ảo dành cho doanh nghiệp, hỗ trợ đấu nối các tổng đài doanh nghiệp, cung cấp công cụ hỗ trợ bán hàng và chăm sóc khách hàng hiệu quả, giúp nâng cao tỷ lệ bắt máy và tiết kiệm chi phí doanh nghiệp.",
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
        "Tìm hiểu công nghệ Blockchain, nghiên cứu và đề xuất giải pháp ứng dụng công nghệ blockchain vào các bài toán kinh doanh của MobiFone. VD, bài toán hóa đơn điện tử, bài toán thẻ cào.",
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
        "Giải pháp giúp quản lý tập trung các thiết bị IOT, hỗ trợ việc quản lý, giám sát thiết bị, theo dõi hệ thống hay tuỳ biến các kịch bản điều khiển giám sát bất thường.",
      link: {
        label: "aiot.mobifone.vn",
        href: "https://aiot.mobifone.vn/",
      },
    },
    {
      title: "HashiCorp Research",
      techStack: ["Nomad", "Consul", "Vaul", "Docker"],
      description:
        "Tìm hiểu và làm chủ các sản phẩm của HashiCorp, đề xuất phương án ứng dụng các sản phẩm như nomad, consul, vaul,.. thay thế các giải pháp triển khai hiện có của Viettel Cyber Security như Docker Swarm, Kubenetes.",
      link: {
        label: "hashicorp.com",
        href: "https://www.hashicorp.com/",
      },
    },
    {
      title: "Ratelimit Research",
      techStack: ["Redis", "Kafka", "RabbitMQ", "Golang"],
      description:
        "Nghiên cứu và đề xuất giải pháp Ratelimit cho một số nghiệp vụ cụ thể thường gặp tại Viettel Cyber Security",
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
        "Một Fullstack Template tổng hợp lại các giải pháp cho những nhiệp vụ thường gặp khi xây dựng một sản phẩm phần mềm. Ví dụ, giải pháp xác thực phần quyền, giải pháp tương tác thời gian thực, giải pháp cron job,... Các giải pháp xây dựng xoay quanh framework Next.Js và theo hướng serverless.",
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
        "Một mô đun trong ứng dụng hẹn hò Mektoube, có nhiệm vụ cung cấp giao diện cho các quản trị viên của Mektoube phê duyệt ảnh do người dùng tải lên.",
      link: {
        label: "mektoube.fr",
        href: "https://www.mektoube.fr/",
      },
    },
    {
      title: "VinhGia PMS",
      techStack: ["Javascript", "React", "CSS"],
      description:
        "Trang chủ và trang quản trị của nhà thuốc dược phẩm Vinh Gia.",
    },
  ],
} as const;
