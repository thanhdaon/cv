import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

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
      degree: "Bằng giỏi kỹ sư khoa Công Nghệ Thông Tin phân hệ ICT, GPA: 3.32",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "Trung tâm CNTT MobiFone (MobiFone IT)",
      link: "https://it.mobifone.vn/",
      badges: [],
      title: "Lập trình viên Fullstack -> Tổ trưởng tổ Backend",
      logo: ParabolLogo,
      start: "07/2021",
      end: "Nay",
      description:
        "Phát triển các tính năng mới, dẫn dắt đội nhóm, nghiên cứu, lựa chọn cũng như xây dựng base dự án cho phòng, đào tạo các thành viên mới. Công nghệ: React/Nextjs, TypeScript, Golang, Antd, Shadcn-ui, Trpc, Drizzle, Mysql, Docker.",
    },
    {
      company: "Công ty An ning mạng Viettel (Viettel Cyber Security)",
      link: "https://viettelcybersecurity.com",
      badges: [],
      title: "Kỹ sư giải pháp",
      logo: ClevertechLogo,
      start: "09/2020",
      end: "06-2021",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "OpenTechiz",
      link: "https://www.opentechiz.com",
      badges: [],
      title: "Lập trình viên Fullstack",
      logo: JojoMobileLogo,
      start: "08/2019",
      end: "08/2020",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "VNSolution.,LTD",
      link: "https://vnsolution.com.vn",
      badges: [],
      title: "Lập trình viên Frontend",
      logo: NSNLogo,
      start: "06/2018",
      end: "02/2019",
      description: "Creating and testing software for LTE base stations",
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
        "PM",
        "Tech Lead / Fullstack Developer",
        "TypeScript",
        "Next.js",
        "Golang",
        "Node.Js",
        "Antd/Shadcn-ui",
        "Tailwindcss",
        "Prisma/Drizzle",
        "Mysql/Mongo",
        "Socketio",
        "Mediasoup",
        "Janus",
        "WebRTC",
      ],
      description:
        "Giải pháp hội nghị truyền hình trực tuyến cho các cá nhân, tổ chức, doanh nghiệp, cơ quan nhà nước. Giải pháp đã được công nhận là nền tảng số quốc gia tiềm năng vào ngày 29/11/2023.",
      logo: ConsultlyLogo,
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
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
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
      logo: JarockiMeLogo,
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
      logo: MonitoLogo,
      link: {
        label: "aiot.mobifone.vn",
        href: "https://aiot.mobifone.vn/",
      },
    },
    {
      title: "HashiCorp Products Research",
      techStack: ["Nomad", "Consul", "Vaul", "Docker"],
      description:
        "Tìm hiểu và làm chủ các sản phẩm của HashiCorp, đề xuất phương án ứng dụng các sản phẩm như nomad, consul, vaul,.. thay thế các giải pháp triển khai hiện có của Viettel Cyber Security như Docker Swarm, Kubenetes.",
      logo: Minimal,
      link: {
        label: "hashicorp.com",
        href: "https://www.hashicorp.com/",
      },
    },
    {
      title: "Ratelimit Solutions Research",
      techStack: ["Redis", "Kafka", "RabbitMQ", "Golang"],
      description:
        "Nghiên cứu và đề xuất giải pháp Ratelimit cho một số nghiệp vụ cụ thể thường gặp tại Viettel Cyber Security",
      logo: BarepapersLogo,
    },
    {
      title: "Fullstack Template",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Trpc",
        "Drizzle",
        "Mysql Proxy",
        "Shadcn-ui",
        "Trigger.dev",
        "Soketi",
        "Docker",
      ],
      description:
        "Một Fullstack Template tổng hợp lại các giải pháp cho những nhiệp vụ thường gặp khi xây dựng một sản phẩm phần mềm. Ví dụ, giải pháp xác thực phần quyền, giải pháp tương tác thời gian thực, giải pháp cron job, giải pháp message queue, thư viện giảo diện dùng chung, giải pháp triển khai on-cloud, on-premise... Các giải pháp xây dựng xoay quanh framework Next.Js và theo hướng serverless.",
      logo: YearProgressLogo,
    },
    {
      title: "Mektoube Picture Moderator",
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
        "Một mô đun trong ứng dụng hẹn hò Mektoube, có nhiệm vụ cung cấp giao diện cho các nhân viên của Mektoube phê duyệt ảnh do người dùng tải lên.",
      logo: ParabolLogo,
      link: {
        label: "mektoube.fr",
        href: "https://www.mektoube.fr/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
