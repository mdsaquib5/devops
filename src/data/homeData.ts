import { IconType } from 'react-icons';
import {
  FaMapMarkerAlt, FaUsers, FaGraduationCap, FaBriefcase, FaArrowRight,
  FaLinux, FaGitAlt, FaJenkins, FaDocker, FaAws, FaMicrosoft,
  FaLaptopCode, FaTools, FaRocket, FaCloud, FaEdit, FaMicrophone,
  FaCheckCircle, FaPhone, FaDownload, FaClock, FaDollarSign, FaCertificate
} from 'react-icons/fa';
import { SiKubernetes, SiAnsible, SiTerraform, SiPrometheus } from 'react-icons/si';

// Types
export interface City {
  name: string;
  primary?: boolean;
}

export interface Stat {
  icon?: any;
  value: string;
  label: string;
}

export interface Step {
  icon: any;
  number: string;
  title: string;
  description: string;
}

export interface Tool {
  name: string;
  icon: any;
}

export interface Certification {
  name: string;
  icon: any;
  position: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SectionTitle {
  title: string;
  highlight: string;
  suffix?: string;
  heading: string;
  description: string;
  theme: 'light' | 'dark';
}

// Hero Section Data
export const heroData = {
  badge: "India's Most Trusted DevOps Course",
  guarantee: "100% Job Guarantee",
  heading: "Master DevOps Engineering with India's Leading DevOps Course",
  description: "From beginner-friendly fundamentals to advanced automation, cloud deployments, and real-world DevOps projects. Our DevOps training course is designed to make you job-ready, whether you're in Pune, Delhi, Bangalore, Hyderabad, Gurugram, or anywhere else across India.",
  cities: [
    { name: "Pune", primary: true },
    { name: "Delhi" },
    { name: "Bangalore" },
    { name: "Hyderabad" },
    { name: "Gurugram" },
    { name: "All India" }
  ] as City[],
  stats: [
    { icon: FaUsers, value: "5000+", label: "Students Trained" },
    { icon: FaBriefcase, value: "95%", label: "Placement Rate" },
    { icon: FaGraduationCap, value: "100%", label: "Job Guarantee" },
    { icon: FaMapMarkerAlt, value: "500+", label: "Partner Companies" }
  ] as Stat[]
};

// DevOps Course Section Data
export const devopsCourseData = {
  sectionTitle: {
    title: "DevOps Course",
    highlight: "Journey",
    suffix: "",
    heading: "What is a DevOps Course? Start Your Journey Today",
    description: "A DevOps course isn't just about tools; it's about transforming the way teams deliver software. Our comprehensive DevOps training courses guide you through the entire journey from foundational concepts to expert-level execution. Whether you are looking for a beginner-friendly DevOps course for beginners or an advanced DevOps engineer course, we cover the complete spectrum with practical, industry-aligned modules.",
    theme: "dark"
  } as SectionTitle,
  journeySteps: [
    {
      icon: FaGraduationCap,
      number: "01",
      title: "Fundamentals",
      description: "Start with Linux, Git, and core concepts"
    },
    {
      icon: FaLaptopCode,
      number: "02",
      title: "Automation",
      description: "Master CI/CD with Jenkins and GitHub Actions"
    },
    {
      icon: FaCloud,
      number: "03",
      title: "Cloud & Containers",
      description: "Deploy with Docker, Kubernetes, AWS, Azure"
    },
    {
      icon: FaRocket,
      number: "04",
      title: "Production Ready",
      description: "Infrastructure as Code, monitoring, and SRE"
    }
  ] as Step[],
  bottomText: "Get started with a structured roadmap designed for rapid skill acquisition."
};

// Cloud Technologies Section Data
export const cloudTechnologiesData = {
  sectionTitle: {
    title: "Master Cloud",
    highlight: "Technologies",
    suffix: "AWS & Azure",
    heading: "Master Cloud Technologies: AWS and Azure DevOps Courses",
    description: "In today's tech landscape, the cloud is where everything happens. Whether you are deploying containerized microservices or managing large-scale infrastructure, cloud expertise is non-negotiable. Our DevOps curriculum includes both an AWS DevOps course and an Azure DevOps course, ensuring you are proficient across the two dominant cloud platforms used by enterprises in India and globally.",
    theme: "light"
  } as SectionTitle,
  awsFeatures: [
    "Provision cloud resources",
    "Automate deployments",
    "Manage infrastructure",
    "Secure AWS environments"
  ],
  azureFeatures: [
    "Deploy scalable applications",
    "Microsoft cloud ecosystem",
    "Enterprise integration",
    "In-demand tech skills"
  ]
};

// Course Syllabus Section Data
export const courseSyllabusData = {
  sectionTitle: {
    title: "DevOps Course",
    highlight: "Syllabus",
    suffix: "& Details",
    heading: "Comprehensive DevOps Course Syllabus & Details",
    description: "We believe in complete transparency and delivering the highest quality education. Our DevOps training courses are structured to match current global industry demands, giving you a competitive edge.",
    theme: "dark"
  } as SectionTitle,
  tools: [
    { name: "Linux", icon: FaLinux },
    { name: "Git", icon: FaGitAlt },
    { name: "Jenkins", icon: FaJenkins },
    { name: "Docker", icon: FaDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Ansible", icon: SiAnsible },
    { name: "Terraform", icon: SiTerraform },
    { name: "Prometheus", icon: SiPrometheus },
    { name: "AWS", icon: FaAws },
    { name: "Azure", icon: FaMicrosoft }
  ] as Tool[],
  durationPoints: [
    "Intensive bootcamps",
    "Weekend batches",
    "Self-paced learning"
  ],
  durationText: "Designed to fit your schedule. We offer flexible learning paths, including intensive bootcamps and weekend batches, so you can master the tools at a comfortable pace.",
  feesText: "We offer the most competitive pricing in India for premium tech education, ensuring you get maximum return on your investment.",
  roiText: "Maximum return on your investment"
};

// Certification Course Section Data
export const certificationCourseData = {
  sectionTitle: {
    title: "DevOps",
    highlight: "Certification",
    suffix: "Course",
    heading: "Validate Your Skills with a DevOps Certification Course",
    description: "Stand out to top tech recruiters across the country. Completing our DevOps certificate course provides tangible proof of your technical expertise. This isn't just a basic theoretical overview; it is a rigorous DevOps engineer course that thoroughly prepares you for global certification exams and complex, real-world operational challenges.",
    theme: "light"
  } as SectionTitle,
  certifications: [
    { name: "AWS", icon: FaAws, position: "top-left" },
    { name: "Azure", icon: FaMicrosoft, position: "top-right" },
    { name: "Kubernetes", icon: SiKubernetes, position: "right" },
    { name: "Docker", icon: FaDocker, position: "bottom-right" },
    { name: "Terraform", icon: SiTerraform, position: "bottom-left" },
    { name: "Ansible", icon: SiAnsible, position: "left" },
    { name: "Git", icon: FaGitAlt, position: "top" },
    { name: "Jenkins", icon: FaJenkins, position: "bottom" }
  ] as Certification[]
};

// Placement Assistance Section Data
export const placementAssistanceData = {
  sectionTitle: {
    title: "DevOps Course",
    highlight: "Placement",
    suffix: "Assistance",
    heading: "Secure Your Future: DevOps Course with Placement Assistance",
    description: "Finding the best DevOps course online isn't just about the curriculum; it's about securing your future. We go far beyond classroom teaching. Our dedicated career support team works with hiring partners across India to ensure you get the right interview opportunities. From resume optimization to mock technical interviews, our DevOps course with placement support is specifically tailored to help you land your dream job in the tech industry.",
    theme: "dark"
  } as SectionTitle,
  journeySteps: [
    {
      icon: FaEdit,
      number: "01",
      title: "Resume Building",
      description: "ATS-friendly resume that stands out"
    },
    {
      icon: FaMicrophone,
      number: "02",
      title: "Mock Interviews",
      description: "Practice with real scenarios"
    },
    {
      icon: FaBriefcase,
      number: "03",
      title: "Hiring Partners",
      description: "Direct connections to 500+ companies"
    },
    {
      icon: FaCheckCircle,
      number: "04",
      title: "Job Placement",
      description: "Land your dream role with support"
    }
  ] as Step[],
  stats: [
    { value: "95%", label: "Placement Rate" },
    { value: "500+", label: "Partners" },
    { value: "₹12L+", label: "Avg Salary" }
  ] as Stat[]
};

// Enrol DevOp Section Data
export const enrolDevOpData = {
  sectionTitle: {
    title: "Who Should",
    highlight: "Enroll",
    suffix: "in Our DevOps Course?",
    heading: "Who Should Enroll in Our DevOps Online Course?",
    description: "The beauty of DevOps is that it is accessible to anyone willing to learn the right framework. Whether you are transitioning from a non-IT background or looking to upgrade your current tech stack, our curriculum is built to accommodate diverse learning curves across India.",
    theme: "light"
  } as SectionTitle,
  beginnerTrack: {
    icon: FaGraduationCap,
    title: "The Perfect DevOps Course for Beginners",
    steps: [
      "Non-IT Background",
      "Learn Linux Basics",
      "DevOps Tools",
      "Job Ready"
    ],
    description: "Starting from scratch? No problem. We begin with the absolute fundamentals of Linux, networking, and scripting. Our structured approach ensures that you never feel overwhelmed, making it the ideal DevOps course for beginners looking to break into the tech industry."
  },
  professionalTrack: {
    icon: FaBriefcase,
    title: "Advanced Upskilling for IT Professionals",
    steps: [
      "Developer/SysAdmin",
      "Advanced Automation",
      "Cloud & SRE",
      "Sr DevOps Role"
    ],
    description: "If you are already a developer, system administrator, or tester, this DevOps full course will bridge your knowledge gaps. By mastering advanced automation pipelines and cloud infrastructure, you will evolve from your current role into a highly sought-after DevOps or Site Reliability Engineer (SRE)."
  }
};

// Experiential Learning Section Data
export const experientialLearningData = {
  sectionTitle: {
    title: "Experiential Learning:",
    highlight: "Real-World",
    suffix: "DevOps Training Courses",
    heading: "Experiential Learning: Real-World DevOps Training Courses",
    description: "Theory alone won't get you hired. The best DevOps course is one that forces you to get your hands dirty with real code and real servers. Our devops training courses are built around a project-based methodology. You won't just watch videos; you will build end-to-end CI/CD pipelines, containerize applications using Docker and Kubernetes, and manage infrastructure as code. This practical approach ensures that when you complete your DevOps certificate course, you are ready to tackle complex production environments from day one.",
    theme: "dark"
  } as SectionTitle,
  quote: "THEORY ALONE WON'T GET YOU HIRED",
  statementText: "You'll build end-to-end CI/CD pipelines, containerize applications using Docker and Kubernetes, and manage infrastructure as code. Not just videos—real code and real servers.",
  highlights: [
    "15+ Real Projects",
    "Live Servers",
    "Job-Ready"
  ]
};

// FAQs Section Data
export const faqsData = {
  sectionTitle: {
    title: "Frequently Asked",
    highlight: "Questions",
    suffix: "",
    heading: "Frequently Asked Questions",
    description: "Get answers to common queries about our DevOps course",
    theme: "light"
  } as SectionTitle,
  faqs: [
    {
      question: "What is a DevOps course?",
      answer: "A DevOps course teaches you the cultural philosophies, practices, and tools that increase an organization's ability to deliver applications and services at high velocity. It covers automation, continuous integration, cloud computing, and infrastructure management, bridging the gap between development and operations teams."
    },
    {
      question: "What is the average DevOps course duration?",
      answer: "Our DevOps course duration is optimized to ensure you learn everything comprehensively without rushing. Typically, the intensive program takes about 3 to 4 months to complete, which includes live sessions, hands-on projects, and interview preparation. Check out our DevOps course details page for a full breakdown of the timeline."
    },
    {
      question: "Do you offer a DevOps course with placement assistance?",
      answer: "Yes, absolutely. We pride ourselves on being a top-tier DevOps course with placement support. Our dedicated career team helps you with resume building, mock interviews, and connects you with our network of hiring partners across India to help you kickstart your career."
    },
    {
      question: "Are AWS and Azure included in the curriculum?",
      answer: "Yes, modern DevOps requires strong cloud expertise. Our syllabus includes a dedicated AWS DevOps course module as well as an Azure DevOps course module. You will learn to deploy and manage applications on both of these leading cloud platforms, making you a versatile and highly employable DevOps engineer."
    },
    {
      question: "What are the DevOps course fees?",
      answer: "We believe in providing premium education at accessible price points for students and professionals across India. Our DevOps course fees are highly competitive, and we offer flexible payment plans and EMI options. Please download our brochure or contact our admissions team for the exact pricing structure and ongoing early-bird discounts."
    },
    {
      question: "Can I take this as a DevOps online course?",
      answer: "Yes! Our program is designed as a fully interactive DevOps online course, allowing you to learn from the comfort of your home, anywhere in India. You get access to live interactive classes, recorded sessions, and cloud labs, making it the best DevOps course online for flexible learning."
    }
  ] as FAQ[]
};

// Final CTA Section Data
export const finalCTAData = {
  title: "Best DevOps Course in India",
  cities: ["Pune", "Delhi", "Bangalore", "Hyderabad", "Gurugram"],
  buttonText: "View DevOps Course Details"
};
