/* 个人主页配置文件 - 黄沛明 */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// 启动动画屏幕
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// 动画设置
const illustration = {
  animated: true
};

// 问候语部分
const greeting = {
  username: "黄沛明",
  title: "你好，我是黄沛明",
  subTitle: emoji(
    "一名热爱技术的翻译硕士研究生。专注于AI辅助翻译、大语言模型优化与技术文档工程。擅长将AI技术应用于业务流程优化，致力于通过语言和技术提升商业效率。"
  ),
  resumeLink:
    "https://v01mc2mbc8k.feishu.cn/file/XRZfbF3MsozZIHxUW8ecA95AnLR?from=from_copylink",
  displayGreeting: true,
  // 👇 添加以下两行
  profileImage: require("./assets/images/personal photo.png"),
  displayProfileImage: true
};

// 社交媒体链接
const socialMediaLinks = {
  github: "www.linkedin.com/in/alan-wong-a13589275",
  linkedin: "www.linkedin.com/in/alan-wong-a13589275",
  gmail: "wongpm@qq.com",
  // 可以根据需要添加其他社交媒体
  display: true
};

// 技能部分
const skillsSection = {
  title: "我的专业技能",
  subTitle: "技术驱动的语言服务从业者，探索AI与翻译的无限可能",
  skills: [
    emoji("⚡ AI辅助翻译技术应用与大语言模型Prompt优化"),
    emoji("⚡ 技术文档开发与本地化项目全流程管理"),
    emoji("⚡ Python数据分析、API开发与业务流程自动化")
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "AI/LLM",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "数据分析",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "技术文档",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "CAT工具",
      fontAwesomeClassname: "fas fa-language"
    },
    {
      skillName: "项目管理",
      fontAwesomeClassname: "fas fa-tasks"
    },
    {
      skillName: "Markdown",
      fontAwesomeClassname: "fab fa-markdown"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true
};

// 教育经历
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "浙江财经大学",
      logo: require("./assets/images/zjufeLogo.png"),
      subHeader: "英语笔译硕士",
      duration: "2023年9月 - 至今",
      desc: "研究方向：AI辅助翻译技术，大语言模型Prompt优化",
      descBullets: [
        "核心课程：国际金融翻译、本地化与翻译项目管理、语料库与计算机辅助翻译",
        "2024年研究生学业奖学金一等奖"
      ]
    },
    {
      schoolName: "韶关学院",
      logo: require("./assets/images/sgxyLogo.png"),
      subHeader: "商务英语学士",
      duration: "2019年9月 - 2023年6月",
      desc: "系统学习商务英语与跨境电商运营，培养国际商务沟通能力",
      descBullets: [
        "核心课程：国际市场营销、商务翻译、亚马逊跨境电商运营、微观经济学原理"
      ]
    }
  ]
};

// 技术栈熟练度
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "AI与翻译技术",
      progressPercentage: "90%"
    },
    {
      Stack: "项目管理与流程优化",
      progressPercentage: "85%"
    },
    {
      Stack: "Python与数据分析",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// 工作经历
const workExperiences = {
  display: true,
  experience: [
    {
      role: "技术文档工程师",
      company: "杭州海康威视数字技术股份有限公司",
      companylogo: require("./assets/images/Hikvision.png"),
      date: "2025年3月 - 2025年8月",
      desc: "负责机器视觉产品线技术文档开发与AI翻译优化项目",
      descBullets: [
        "使用Oxygen完成5款机器视觉产品软件用户手册的开发与更新，推动文档缺陷率降低10%",
        "通过设计迭代超过10组高质量提示词，将AI翻译准确率提升25%，创建AI智能体使人工校对工时减少50%",
        "深入分析3家竞品文档体系，输出分析报告并成功应用于SDK文档优化"
      ]
    },
    {
      role: "项目经理",
      company: "译禾（Yeehe）信息技术有限公司",
      companylogo: require("./assets/images/Yihe.png"),
      date: "2024年10月 - 2025年1月",
      desc: "负责游戏本地化项目全流程管理与质量优化",
      descBullets: [
        "协调超过10名内外部译员，管理超过50万字的翻译量，实现95%准时交付",
        "引入Xbench工具进行自动化术语检查，设计标准化审校流程，使客户投诉率下降15%",
        "优化多语言版本同步工作流，将项目平均周期缩短10%"
      ]
    },
    {
      role: "办公室助理",
      company: "浙江泰隆商业银行",
      companylogo: require("./assets/images/Tailong.png"),
      date: "2024年6月 - 2024年9月",
      desc: "负责数字化流程优化与数据分析工作",
      descBullets: [
        "优化OA系统合同分类标签与检索逻辑，有效提升全行合同检索效率",
        "清洗处理超过7万条历史业务数据，利用Excel与Python生成可视化分析报告"
      ]
    }
  ]
};

// 开源项目
const openSource = {
  showGithubProfile: "true",
  display: false
};

// 重点项目
const bigProjects = {
  title: "项目经历",
  subtitle: "技术驱动的创新解决方案",
  projects: [
    {
      image: require("./assets/images/term-api.webp"),
      projectName: "基于ChatGPT API的游戏术语提取辅助工具",
      projectDesc:
        "独立开发的智能术语管理系统，实现术语自动提取、风格智能校准与双语对齐功能，相比人工提取效率提升70%",
      footerLink: [
        {
          name: "查看详情",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/llm-agent.webp"),
      projectName: "翻译AI智能体搭建项目",
      projectDesc:
        "基于公司内部大语言模型创建AI智能体，将特定字符串翻译的人工校对工时减少50%，显著提升翻译效率",
      footerLink: [
        {
          name: "查看详情",
          url: "#"
        }
      ]
    }
  ],
  display: true
};

// 成就与证书
const achievementSection = {
  title: emoji("荣誉与证书 🏆"),
  subtitle: "专业认证与竞赛荣誉",

  achievementsCards: [
    {
      title: "CATTI杯 一等奖",
      subtitle: "2024年CATTI杯全国翻译大赛英语笔译组一等奖",
      image: require("./assets/images/catti-cup.webp"),
      imageAlt: "CATTI Logo",
      footerLink: [
        {
          name: "证书详情",
          url: "#"
        }
      ]
    },
    {
      title: "外研社·国才杯 一等奖",
      subtitle: "2023年外研社·国才杯全国大学生外语能力大赛英语笔译一等奖",
      image: require("./assets/images/waiyanshe.webp"),
      imageAlt: "外研社国才杯 Logo",
      footerLink: [
        {
          name: "证书详情",
          url: "#"
        }
      ]
    },
    {
      title: "英语专业资格认证",
      subtitle: "英语专业八级 | 人事部翻译资格证(CATTI)二级",
      image: require("./assets/images/tem8.webp"),
      imageAlt: "专业认证 Logo",
      footerLink: [{name: "证书详情", url: "#"}]
    }
  ],
  display: true
};

// 博客文章（可选）
const blogSection = {
  title: "技术分享",
  subtitle: "热爱分享AI翻译、技术文档与项目管理的实践经验",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "#",
      title: "如何使用ChatGPT API优化翻译工作流",
      description:
        "分享如何利用ChatGPT API开发自动化术语提取工具，提升翻译效率70%的实践经验"
    },
    {
      url: "#",
      title: "大语言模型Prompt工程在翻译中的应用",
      description:
        "探讨如何通过精心设计的Prompt提示词，将AI翻译准确率提升25%的方法论"
    }
  ],
  display: true
};

// 演讲分享（可选）
const talkSection = {
  title: "分享经历",
  subtitle: emoji("乐于分享技术与翻译的跨界实践经验"),

  talks: [
    {
      title: "AI辅助翻译技术在企业中的应用",
      subtitle: "浙江财经大学研究生学术分享会",
      slides_url: "#",
      event_url: "#"
    }
  ],
  display: false // 如果暂无演讲经历可设为false
};

// 播客（可选）
const podcastSection = {
  title: emoji("播客 🎙️"),
  subtitle: "分享关于AI、翻译与技术的思考",
  podcast: [],
  display: false // 如果暂无播客可设为false
};

// 简历下载
const resumeSection = {
  title: "简历下载",
  subtitle: "欢迎下载我的完整简历",
  display: true
};

// 👇 添加这个配置
// 作品集部分
const portfolioSection = {
  title: "作品集",
  subtitle: "查看我的项目作品与案例展示",
  portfolioLink:
    "https://v01mc2mbc8k.feishu.cn/file/XRZfbF3MsozZIHxUW8ecA95AnLR?from=from_copylink", // 👈 替换为实际链接
  display: true
};

// 联系方式
const contactInfo = {
  title: emoji("联系我 ☎️"),
  subtitle: "有项目合作或交流？欢迎随时联系我",
  number: "微信：GGpeiming",
  email_address: "wongpm@qq.com"
};

// Twitter信息（可选）
const twitterDetails = {
  userName: "wongpm",
  display: false // 如果不使用Twitter可设为false
};

// 求职状态
const isHireable = true; // 应届生找校招

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  portfolioSection
};
