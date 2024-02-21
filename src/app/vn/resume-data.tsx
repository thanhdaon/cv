import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import {
  ClevertechLogo,
  JojoMobileLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Đào Ngọc Thành",
  initials: "ĐNT",
  location: "Cầu Giấy, Hà Nội, Việt Nam",
  locationLink: "https://maps.app.goo.gl/jzejzRdeTB62oKn66",
  about:
    "Full Stack Engineer tập trung vào việc xây dựng sản phẩm với sự chú ý đặc biệt đến khách hàng, công nghệ và chất lượng sản phẩm.",
  summary:
    "Là một Kỹ sư Full Stack, tôi đã thành công trong việc đưa nhiều sản phẩm từ 0 đến 1. Hiện tại, tôi làm việc chủ yếu với TypeScript, React, Node.js và Golang. Ngoài ra, Tôi có đảm nhiệm vai trò là một PM - Tech Lead dẫn dắt đội nhóm một cách hiệu quả, đảm bảo môi trường làm việc mà ở đó mọi người có thể phát huy hết khả năng của mình. Về kinh nghiệm, tôi có gần 4 năm làm việc trong lĩnh vực phát triển phần mềm.",
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
      school: "Đại Học Bách Khoa Hà Nội",
      degree:
        "Trình độ chuyên môn: Kỹ sư Công Nghệ Thông Tin - Bằng giỏi - phân hệ ICT, GPA: 3.32",
      start: "2016",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Trung tâm CNTT MobiFone (MobiFone IT)",
      link: "https://it.mobifone.vn/",
      badges: [],
      title: "Lập trình viên Fullstack - Tổ trưởng tổ Backend",
      logo: ParabolLogo,
      start: "07/2021",
      end: "Nay",
      description:
        "Định hướng, phát triển các tính năng mới và xây dựng base cho dự án. Dẫn dắt đội nhóm thực hiện các nhiệm vụ về phát triển phần mềm. Điều phối, chịu trách nhiệm về chất lượng và tiến độ từ giai đầu của dự án. Đào tạo đội ngũ nhân viên mới. Công nghệ: React/Nextjs, TypeScript, Golang, Antd, Shadcn-ui, Trpc, Drizzle, Mysql, Docker.",
    },
    {
      company: "Công ty An ninh mạng Viettel (Viettel Cyber Security)",
      link: "https://viettelcybersecurity.com",
      badges: [],
      title: "Kỹ sư giải pháp",
      logo: ClevertechLogo,
      start: "05/2020",
      end: "06/2021",
      description:
        "Tư vấn giải pháp về những vấn đề thường gặp (giải pháp triển khai ứng dụng, giải pháp giới hạn lượng truy cập phân tán, ...) của các đội nhóm phát triển sản phẩm phần mềm DDOS Protection, DLP, SOC. Công nghệ: Nomad, Consul, Redis, Kafka, RabbitMQ.",
    },
    {
      company: "OpenTechiz",
      link: "https://www.opentechiz.com",
      badges: ["Fresher"],
      title: "Lập trình viên Fullstack",
      logo: JojoMobileLogo,
      start: "06/2018",
      end: "04/2020",
      description:
        "Phát triển app chấm công sử dụng cho nội bộ trong công ty. Phát triển và kiểm thử mô đun phê duyệt ảnh trong ứng dụng Mektoube.",
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
        "Xây dựng và phát triển ứng dụng MobiFone Meet trở thành giải pháp hội nghị truyền hình trực tuyến cho các cá nhân, tổ chức, doanh nghiệp, cơ quan nhà nước. Giải pháp đã được công nhận là nền tảng số quốc gia tiềm năng vào ngày 29/11/2023 và đã được đưa vào sử dụng thực tế.",
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
        "Giải pháp tổng đài ảo dành cho doanh nghiệp, hỗ trợ đấu nối các tổng đài doanh nghiệp, cung cấp công cụ hỗ trợ bán hàng và chăm sóc khách hàng hiệu quả, giúp nâng cao tỷ lệ bắt máy và tiết kiệm chi phí doanh nghiệp.",
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
        "Nghiên cứu và đề xuất giải pháp Ratelimit cho một số nghiệp vụ cụ thể thường gặp tại Viettel Cyber Security.",
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
        "Một mô đun trong ứng dụng hẹn hò Mektoube, có nghiệm vụ cung cấp giao diện cho các quản trị viên của Mektoube phê duyệt ảnh do người dùng tải lên.",
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
