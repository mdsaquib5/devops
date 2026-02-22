export interface Feature {
    id: number;
    num: string;
    size: "large" | "small";
    accent: "green" | "orange";
    iconName: string;
    title: string;
    items: string[];
    chips?: string[];
    cta?: string;
}

export interface Demand {
    id: number;
    title: string;
    text: string;
    linkText?: string;
    linkHref?: string;
    iconName: string;
    iconColor: string;
    accent: "green" | "orange" | "teal";
}

export interface Course {
    id: number;
    title: string;
    content: string[];
}

export interface Career {
    id: number;
    category: string;
    icon: string;
    tag?: string;
    title: string;
    items: string[];
}

export interface Agreement {
    id: string;
    icon: string;
    title: string;
    items: string[];
}

export interface Skill {
    id: string;
    label: string;
    icon: string;
    color: string;
    skills?: string[];
}

export interface Tool {
    name: string;
    icon: string;
    color: string;
}

export interface FAQ {
    q: string;
    a: string;
}

export interface Bubble {
    icon: string;
    color: string;
}

export interface ChooseUs {
    title: string;
    icon: string;
    color: string;
    items: string[];
    bubbles: Bubble[];
}

export interface Benefit {
    icon: string;
    title: string;
    text: string;
    color: string;
}

export interface Persona {
    icon: string;
    title: string;
    desc: string;
    color: string;
}

export interface ComparisonRow {
    feature: string;
    ours: string;
    others: string;
}

export interface TrustSection {
    icon: string;
    title: string;
    color: string;
    items: string[];
    tip?: string;
}

export interface Testimonial {
    name: string;
    review: string;
    videoId: string;
    prevRole: string;
    currentRole: string;
    salary: string;
    stars: number;
}

export interface FooterLink {
    label: string;
    href: string;
}

export interface SocialLink {
    icon: string;
    href: string;
    label: string;
}

export interface ContactInfo {
    label: string;
    value: string;
}

export interface MenuItem {
    label: string;
    href: string;
    dropdown?: { label: string; href: string }[];
}

export interface HeaderButton {
    label: string;
    href: string;
    icon?: string;
    variant: 'primary' | 'secondary';
}

export const benefits: Benefit[] = [
    {
        icon: "FiAward",
        title: "Industry-Recognised Certification",
        text: "Get certified in DevOps and increase your chances of getting hired.",
        color: "#004f44",
    },
    {
        icon: "FiTrophy",
        title: "Career Support",
        text: "Get dedicated career support and guidance to help you achieve your career goals.",
        color: "#ff8800",
    },
    {
        icon: "FiUsers",
        title: "Community Support",
        text: "Join a community of like-minded individuals and get support from peers and mentors.",
        color: "#00c49a",
    },
];

export const features: Feature[] = [
    {
        id: 1, num: "01", size: "large", accent: "green",
        iconName: "FiCode",
        title: "Curriculum & Projects",
        cta: "Explore Curriculum",
        chips: ["SRE", "CI/CD", "Cloud Automation"],
        items: [
            "GenAI labs for DevOps — automate scripts, build helpers and speed workflows.",
            "4+ real-world capstone projects you can deploy and add to GitHub.",
            "Role-based tracks so learners follow a job-specific path.",
            "Hands-on labs: Docker, Kubernetes, Jenkins, Terraform, Git.",
        ],
    },
    {
        id: 2, num: "02", size: "large", accent: "orange",
        iconName: "FiBriefcase",
        title: "Career & Placement Support",
        cta: "Explore Career Support",
        items: [
            "Dedicated career coach — resume, LinkedIn profile and interview strategy.",
            "Mock technical and HR interviews with feedback reports.",
            "Direct introductions to vetted hiring partners and recruitment teams.",
            "Outcome dashboard — anonymised alumni hiring trends and role types.",
        ],
    },
    {
        id: 3, num: "03", size: "small", accent: "green",
        iconName: "FiUsers",
        title: "Mentorship & Learning",
        items: [
            "Weekly 1:1 mentor sessions for doubt resolution and career advice.",
            "Small cohort sizes and live code reviews for real feedback.",
            "Recorded sessions and lab playbooks for revision anytime.",
        ],
    },
    {
        id: 4, num: "04", size: "small", accent: "orange",
        iconName: "FiAward",
        title: "Assessment & Certification",
        items: [
            "Project-based assessments with public GitHub demos.",
            "Industry-recognised completion certificate + internship opportunity.",
            "Mini-assessments and a final project grading rubric.",
        ],
    },
    {
        id: 5, num: "05", size: "small", accent: "green",
        iconName: "FiServer",
        title: "Infrastructure & Extras",
        items: [
            "Cloud sandbox access (AWS/Azure credits) for labs and projects.",
            "CI/CD sandbox with pipeline templates reusable in interviews.",
            "Optional advanced modules: Observability, Chaos Engineering, Security.",
        ],
    },
    {
        id: 6, num: "06", size: "small", accent: "orange",
        iconName: "FiCalendar",
        title: "Flexibility & Support",
        items: [
            "Weekend, weekday and self-paced batches for working learners.",
            "Lifetime access to course material and alumni community.",
            "6 months of dedicated active career support after completion.",
        ],
    },
];

export const demands: Demand[] = [
    {
        id: 1,
        title: "Market Growth",
        text: "DevOps market projected to grow ~21% CAGR — more automation, faster releases and higher hiring demand.",
        linkText: "~21% CAGR",
        linkHref: "/",
        iconName: "TbTrendingUp",
        iconColor: "#004f44",
        accent: "green",
    },
    {
        id: 2,
        title: "Active Hiring",
        text: "80k+ DevOps roles listed on LinkedIn across India — active hiring in Pune and nearby cities.",
        linkText: "See live listing →",
        linkHref: "/",
        iconName: "MdWorkOutline",
        iconColor: "#ff8800",
        accent: "orange",
    },
    {
        id: 3,
        title: "Salary Data",
        text: "According to Coursera, Average DevOps pay in India ≈ ₹9.3 LPA; entry roles typically start ₹4–8 LPA (varies by experience).",
        linkText: "Coursera",
        linkHref: "/",
        iconName: "IoCashOutline",
        iconColor: "#00c49a",
        accent: "teal",
    },
];

export const courses: Course[] = [
    { id: 1, title: "DevOps Basics", content: ["What DevOps means and why companies use it", "DevOps lifecycle and tools overview", "How DevOps works with Agile teams"] },
    { id: 2, title: "Git & GitHub", content: ["Save code with commits and branches", "Work with teams using pull requests", "Manage projects on GitHub"] },
    { id: 3, title: "Build Tools", content: ["Why build tools are needed", "Maven basics and project setup", "Create and run build automation"] },
    { id: 4, title: "Docker Basics", content: ["Containers vs virtual machines", "Create Docker images and containers", "Write simple Dockerfile"] },
    { id: 5, title: "Jenkins CI", content: ["Install and configure Jenkins", "Create CI jobs and pipelines", "Automate builds after code changes"] },
    { id: 6, title: "Continuous Testing", content: ["Unit testing and integration testing", "Run tests in CI pipeline", "Improve code quality with testing"] },
    { id: 7, title: "Docker Commands", content: ["Daily Docker commands practice", "Manage images and containers", "Real-life Docker use cases"] },
    { id: 8, title: "Kubernetes Basics", content: ["Pods, services, deployments", "Run apps on Kubernetes", "Simple cluster setup"] },
    { id: 9, title: "Chef Automation", content: ["Chef concepts and setup", "Write cookbooks and recipes", "Automate server setup"] },
    { id: 10, title: "Ansible Basics", content: ["Install and use Ansible", "Write playbooks", "Automate software installation"] },
    { id: 11, title: "Monitoring with Nagios", content: ["Why monitoring is important", "Setup alerts and checks", "Track server health"] },
    { id: 12, title: "AWS DevOps Tools", content: ["AWS DevOps services overview", "Use CodeBuild and CodeDeploy", "Basic cloud deployment flow"] },
    { id: 13, title: "AWS Architecture Basics", content: ["AWS core services (EC2, S3, VPC)", "Basic cloud design ideas", "Simple cloud project"] },
    { id: 14, title: "Linux Basics", content: ["Linux commands and file system", "Permissions and processes", "Troubleshooting basics"] },
    { id: 15, title: "DevOps Workflow", content: ["Real company DevOps process", "CI/CD pipeline flow", "DevOps best practices"] },
    { id: 16, title: "DevOps on AWS", content: ["Deploy apps on AWS", "Create CI/CD pipeline on cloud", "Manage cloud resources"] },
    { id: 17, title: "Advanced Git", content: ["Resolve merge conflicts", "Branch strategies", "Git best practices"] },
    { id: 18, title: "Advanced Build Tools", content: ["Multi-module builds", "Artifact management", "Improve build speed"] },
    { id: 19, title: "Jenkins Pipelines", content: ["Create full CI/CD pipelines", "Multi-branch pipeline setup", "Automate deployments"] },
    { id: 20, title: "Docker Registry", content: ["Push images to Docker Hub", "Use private registry", "Image version control"] },
    { id: 21, title: "Kubernetes Advanced", content: ["Auto scaling apps", "Rolling updates", "Secrets and config maps"] },
    { id: 22, title: "Ansible Advanced", content: ["Create Ansible roles", "Use templates", "Automate full environments"] },
    { id: 23, title: "Terraform Basics", content: ["Infrastructure as Code concept", "Create cloud resources", "Manage Terraform state"] },
    { id: 24, title: "Prometheus & Grafana", content: ["Collect system metrics", "Create dashboards", "Setup alerts"] },
    { id: 25, title: "Final Capstone Projects", content: ["Build real DevOps project", "Deploy on Kubernetes", "Add monitoring and CI/CD", "Publish project on GitHub"] },
];

export const careers: Career[] = [
    {
        id: 1, category: "resume", icon: "FiFileText", tag: "Popular",
        title: "Profile & Resume Review",
        items: ["Resume rewritten with DevOps keywords", "Highlight your real projects and tools", "ATS-friendly resume format", "Up to 3 review rounds with feedback"],
    },
    {
        id: 2, category: "resume", icon: "FiTarget",
        title: "ATS Resume Optimization",
        items: ["Keyword mapping for DevOps roles", "Beat automated screening systems", "Section-by-section scoring", "Optimized for top job boards"],
    },
    {
        id: 3, category: "resume", icon: "FiLink2",
        title: "LinkedIn Profile Setup",
        items: ["Complete profile overhaul", "Headline & summary writing", "Skills & endorsements strategy", "Recruiter visibility boost"],
    },
    {
        id: 4, category: "resume", icon: "FiCodeIcon",
        title: "GitHub Portfolio Review",
        items: ["Project readme improvements", "Pinned repositories strategy", "Contribution graph review", "DevOps project showcasing"],
    },
    {
        id: 5, category: "interview", icon: "FiMic", tag: "Most Popular",
        title: "Mock Technical Interviews",
        items: ["Live 1:1 mock sessions", "DevOps-specific questions", "Instant feedback after each round", "Recorded for self-review"],
    },
    {
        id: 6, category: "interview", icon: "FiLayout",
        title: "System Design Practice",
        items: ["CI/CD pipeline design", "Cloud architecture scenarios", "Infrastructure review walkthroughs", "Whiteboard session with mentor"],
    },
    {
        id: 7, category: "interview", icon: "FiMessageCircle",
        title: "Behavioral Interview Coaching",
        items: ["STAR method training", "HR round preparation", "Common HR question bank", "Confidence-building practice"],
    },
    {
        id: 8, category: "job-search", icon: "FiGlobe",
        title: "Job Portal Setup",
        items: ["Naukri & LinkedIn optimization", "Indeed & AngelList profile", "Profile visibility settings", "Job alert configuration"],
    },
    {
        id: 9, category: "job-search", icon: "FiSend",
        title: "Recruiter Outreach Support",
        items: ["Cold outreach message templates", "Recruiter connection strategy", "Follow-up sequences", "Target company list building"],
    },
    {
        id: 10, category: "job-search", icon: "FiClipboard",
        title: "Application Tracking",
        items: ["Organized job tracker sheet", "Weekly application check-ins", "Pipeline review with mentor", "Rejection analysis & pivot"],
    },
    {
        id: 11, category: "post-offer", icon: "FiFileText", tag: "New",
        title: "Offer Letter Review",
        items: ["Compensation breakdown analysis", "Benefits & perks review", "Red flag identification", "Comparison with market data"],
    },
    {
        id: 12, category: "post-offer", icon: "FiDollarSign",
        title: "Salary Negotiation",
        items: ["Market salary benchmarking", "Negotiation script preparation", "Counter-offer strategy", "Total compensation coaching"],
    },
    {
        id: 13, category: "post-offer", icon: "FiCalendarIcon",
        title: "Notice Period Guidance",
        items: ["Smooth resignation process", "Knowledge transfer planning", "Reference letter tips", "New job onboarding prep"],
    },
];

export const agreements: Agreement[] = [
    { id: "01", icon: "FiFileText", title: "Sign Agreement", items: ["Read simple placement terms", "Sign agreement online", "No payment before placement"] },
    { id: "02", icon: "FiBriefcase", title: "Get Placement Support", items: ["Resume and interview help", "Recruiter introductions", "Mock interviews with mentors"] },
    { id: "03", icon: "FiCreditCard", title: "Pay After Placement", items: ["Pay career service fee after job offer", "Easy EMI payment options", "Full support during notice period"] },
];

export const skills: Skill[] = [
    { id: "all", label: "All Skills", icon: "GoGear", color: "#004f44" },
    { id: "core", label: "Core Technical", icon: "FaTerminal", color: "#004f44", skills: ["Linux fundamentals — shell, files, permissions, processes", "Shell scripting / Bash basics", "Git & GitHub — commits, branches, pull requests", "Build tools (Maven / Gradle) and artifact handling", "Basic networking for cloud & containers"] },
    { id: "cicd", label: "CI/CD & Automation", icon: "GoGear", color: "#ff8800", skills: ["Jenkins pipelines — build/test/deploy automation", "Automated testing in CI (unit & integration)", "GitOps and multi-branch pipeline workflows", "Release strategies: blue/green, canary, rolling"] },
    { id: "containers", label: "Containers & K8s", icon: "FaDocker", color: "#0db7ed", skills: ["Docker images, containers, Dockerfile", "Container registries (Docker Hub / private)", "Kubernetes basics: pods, services, deployments", "K8s advanced: autoscaling, secrets, configMaps", "Helm charts for app packaging"] },
    { id: "iac", label: "IaC & Cloud", icon: "FaCloud", color: "#004f44", skills: ["Terraform basics — resources, modules, state", "Cloud fundamentals (AWS): EC2, S3, VPC basics", "Deploy CI/CD on cloud services", "Cost awareness & right-sizing resources"] },
    { id: "monitoring", label: "Monitoring", icon: "VscGraph", color: "#00a882", skills: ["Prometheus metrics collection", "Grafana dashboards and visualisation", "Log aggregation and alerting basics", "Incident management and runbooks"] },
    { id: "security", label: "Config & Security", icon: "FaShieldAlt", color: "#ff8800", skills: ["Ansible playbooks and roles", "Chef concepts or alternate config tools", "Container security best practices", "Secrets management & least-privilege access"] },
    { id: "modern", label: "Modern DevOps", icon: "SiKubernetes", color: "#004f44", skills: ["SRE practices: SLAs, SLOs, error budgets", "Observability-driven development", "CI/CD metrics and quality gates", "Chaos engineering (introductory)"] },
    { id: "career", label: "Career Ready", icon: "FaBriefcase", color: "#00a882", skills: ["4+ deployable capstone projects for GitHub", "Resume & LinkedIn optimized for DevOps roles", "Mock technical & HR interviews with feedback", "Project docs and demo videos for recruiters"] },
];

export const tools: Tool[] = [
    { name: 'Maven', icon: 'SiApachemaven', color: '#C71A36' },
    { name: 'Git', icon: 'FaGitAlt', color: '#F05032' },
    { name: 'Kubernetes', icon: 'SiKubernetes', color: '#326CE5' },
    { name: 'Docker', icon: 'FaDocker', color: '#2496ED' },
    { name: 'AWS', icon: 'FaAws', color: '#FF9900' },
    { name: 'Prometheus', icon: 'SiPrometheus', color: '#E6522C' },
    { name: 'Ansible', icon: 'SiAnsible', color: '#EE0000' },
    { name: 'GitHub', icon: 'FaGithub', color: '#181717' },
    { name: 'Jenkins', icon: 'FaJenkins', color: '#D24939' },
];

export const faqs: FAQ[] = [
    { q: 'What is the DevOps course in Pune and who should take it?', a: 'A practical training program that teaches CI/CD, containers, orchestration, IaC and cloud deployments — ideal for freshers, developers, system engineers, and IT pros wanting to move into DevOps.' },
    { q: 'How long is the typical DevOps course (duration) in Pune?', a: 'Most full programs run 3–6 months (part-time/bootcamp format) — short on-ramp courses exist for 1–3 months for focused tool certs. Choose a course that includes hands-on projects and career support.' },
    { q: 'What tools and technologies will I learn (Docker, Kubernetes, Jenkins, Terraform)?', a: 'Expect a toolset that usually includes Git, Docker, Kubernetes, Jenkins (CI), Terraform (IaC), Ansible (config-mgmt), Prometheus/Grafana (monitoring) and cloud basics (AWS). These are the industry-standard DevOps tools hiring teams look for.' },
    { q: 'What projects and hands-on work are included in a job-ready DevOps course?', a: 'Look for 4+ hands-on projects: containerize apps, build CI/CD pipelines, deploy to Kubernetes, create Terraform infra, and add monitoring + alerts — all pushed to GitHub for interview demos.' },
    { q: 'Do I need prior experience or programming skills to join a DevOps course?', a: 'No strict prerequisites — basic Linux, scripting (Bash/Python), and familiarity with software development concepts help you learn faster. Many courses accept freshers and teach fundamentals first.' },
    { q: 'How much can I earn after a DevOps certification in India?', a: 'Entry-level DevOps roles in India commonly start around ₹4–8 LPA, with an average near ₹8–10 LPA depending on city and experience. Senior / specialist roles can earn considerably more.' },
    { q: 'Is there strong demand for DevOps roles in India and Pune specifically?', a: 'Yes — DevOps hiring remains active across India. Job boards and professional networks show thousands of active DevOps listings, reflecting strong demand as companies push automation and cloud adoption.' },
    { q: 'Does the course include placement assistance and recruiter introductions?', a: 'Many reputable courses offer resume & LinkedIn reviews, mock technical/HR interviews, recruiter shortlists and hiring partner introductions as part of a placement or career track.' },
    { q: 'What is an ISA or pay-after-placement plan — is it safe?', a: 'An Income Share Agreement (ISA) means you pay part or all fees after getting a qualifying job. ISAs are private contracts and not uniformly regulated in India — read terms carefully, check caps, grace periods and refund rules before signing.' },
    { q: 'Which companies hire DevOps engineers from Pune courses?', a: 'Hiring companies vary from startups to MNCs (product firms, IT services, GCCs). You\'ll commonly find roles at technology product firms, consulting teams, and cloud/infra teams.' },
    { q: 'Will I get cloud credits and lab access for hands-on practice?', a: 'Good programs provide cloud sandbox access or temporary AWS/Azure credits, CI/CD sandboxes, and container registries so you can complete labs and projects.' },
    { q: 'How is success measured — what does "job-ready" mean for DevOps?', a: 'Job-ready means you can demo working projects on GitHub, build a CI/CD pipeline, deploy to Kubernetes, write Terraform code for infra, and explain incident/monitoring workflows in interviews.' },
    { q: 'Do DevOps courses cover security (DevSecOps) and observability?', a: 'Modern DevOps training increasingly includes DevSecOps basics (container security, secrets management) and observability (Prometheus/Grafana). DevSecOps and security automation are growing areas with dedicated market demand.' },
    { q: 'Which certifications are useful after a DevOps course?', a: 'Common value-adding certs include CKA/CKAD (Kubernetes), AWS Certified DevOps/Cloud certifications, Terraform Associate and vendor tool certs. Certifications help, but recruiters value demonstrable projects most.' },
    { q: 'Do DevOps courses cover security (DevSecOps) and observability?', a: 'Modern DevOps training increasingly includes DevSecOps basics (container security, secrets management) and observability (Prometheus/Grafana). DevSecOps and security automation are growing areas with dedicated market demand.' },
    { q: 'Which certifications are useful after a DevOps course?', a: 'Common value-adding certs include CKA/CKAD (Kubernetes), AWS Certified DevOps/Cloud certifications, Terraform Associate and vendor tool certs. Certifications help, but recruiters value demonstrable projects most.' },
];

export const personasData: Persona[] = [
    { icon: 'FaUserGraduate', title: 'Freshers', desc: 'Starting IT career with no prior experience', color: '#004f44' },
    { icon: 'FaCode', title: 'Developers', desc: 'Wanting to move into DevOps roles', color: '#ff8800' },
    { icon: 'FaServer', title: 'System Admins', desc: 'System admins and support engineers', color: '#00a882' },
    { icon: 'FaCloud', title: 'Cloud Engineers', desc: 'Cloud engineers and testers', color: '#326CE5' },
    { icon: 'FaCogs', title: 'Automation Enthusiasts', desc: 'Anyone interested in automation and cloud computing', color: '#ff8800' },
];

export const benefitsData: Benefit[] = [
    { icon: 'FaRocket', title: 'Faster Releases', text: 'Faster software releases using CI/CD pipelines', color: '#00c49a' },
    { icon: 'FaBriefcase', title: 'Better Jobs', text: 'Better job opportunities in cloud and automation roles', color: '#ff8800' },
    { icon: 'FaChartLine', title: 'Higher Salary', text: 'Higher salary growth compared to many IT roles', color: '#326CE5' },
    { icon: 'FaBuilding', title: 'High Demand', text: 'Skills in demand across startups, MNCs, and product companies', color: '#ff8800' },
    { icon: 'FaUserTie', title: 'Career Growth', text: 'Opportunity to move into DevOps engineer, cloud engineer, SRE or platform engineer roles', color: '#00c49a' },
];

export const comparisonData: ComparisonRow[] = [
    { feature: 'Curriculum', ours: 'Updated with CI/CD, Docker, Kubernetes, Terraform, AWS, DevOps security', others: 'Often outdated or tool-only training' },
    { feature: 'Hands-On Projects', ours: '4+ real projects with GitHub portfolio', others: 'Limited demo projects' },
    { feature: 'Mentor Support', ours: 'Weekly 1-to-1 mentor sessions', others: 'Group sessions only' },
    { feature: 'Career Support', ours: 'Resume review, LinkedIn help, mock interviews', others: 'Basic placement tips' },
    { feature: 'Placement Assistance', ours: 'Recruiter introductions + job alerts', others: 'No structured placement help' },
    { feature: 'Cloud Lab Access', ours: 'Real cloud sandbox practice', others: 'Local system practice only' },
    { feature: 'Batch Size', ours: 'Small batches for personal attention', others: 'Large batches' },
    { feature: 'Learning Mode', ours: 'Live online + recorded sessions', others: 'Recorded videos only' },
    { feature: 'Flexible Schedule', ours: 'Weekend & weekday batches', others: 'Fixed timing' },
    { feature: 'Transparent Fees', ours: 'Clear fee plan with EMI options', others: 'Hidden charges possible' },
    { feature: 'Support After Course', ours: 'Placement support window + alumni help', others: 'Support ends after training' },
];

export const trustData: TrustSection[] = [
    { icon: 'FaUserCheck', title: 'Trusted by Real Learners', color: '#00c49a', items: ['4.5+ average student rating (with real reviews)', 'Alumni working in startups, product companies and MNCs', 'Verified student testimonials with LinkedIn profiles', 'Real GitHub projects created during course'], tip: 'Link testimonials to student LinkedIn profiles for credibility.' },
    { icon: 'FaBookOpen', title: 'Industry-Relevant Curriculum', color: '#ff8800', items: ['Covers modern DevOps tools: Git, Docker, Kubernetes, Jenkins, Terraform, AWS', 'Updated syllabus based on real company workflows', 'Real project portfolio for interviews', 'Cloud lab access for hands-on practice'] },
    { icon: 'FaChalkboardTeacher', title: 'Mentor & Instructor Credibility', color: '#326CE5', items: ['Trainers with real industry DevOps experience', 'Mentors who worked in product and cloud companies', 'Weekly 1-to-1 doubt solving sessions', 'Live code reviews and project feedback'], tip: 'Add trainer LinkedIn profiles for trust.' },
];

export const testimonialsData: Testimonial[] = [
    {
        name: 'Rahul Sharma',
        review: 'This course completely changed my career. The hands-on projects and mentor support were outstanding.',
        videoId: 'dQw4w9WgXcQ',
        prevRole: 'QA Engineer',
        currentRole: 'DevOps Engineer',
        salary: '₹12 LPA',
        stars: 5,
    },
    {
        name: 'Priya Menon',
        review: 'Landed my dream job within 2 months of completing the course. Best investment I made.',
        videoId: 'dQw4w9WgXcQ',
        prevRole: 'Software Developer',
        currentRole: 'SRE Engineer',
        salary: '₹14 LPA',
        stars: 5,
    },
    {
        name: 'Amit Kulkarni',
        review: 'The CI/CD and Kubernetes modules were exceptional. Real projects made all the difference.',
        videoId: 'dQw4w9WgXcQ',
        prevRole: 'System Admin',
        currentRole: 'Cloud Engineer',
        salary: '₹10 LPA',
        stars: 5,
    },
    {
        name: 'Sneha Patil',
        review: 'From a fresher to a DevOps role in 4 months. The placement support was incredible.',
        videoId: 'dQw4w9WgXcQ',
        prevRole: 'Fresher (B.Tech)',
        currentRole: 'DevOps Engineer',
        salary: '₹8 LPA',
        stars: 5,
    },
    {
        name: 'Vikram Joshi',
        review: 'Excellent mentors who actually work in the industry. The 1-to-1 sessions were game changers.',
        videoId: 'dQw4w9WgXcQ',
        prevRole: 'IT Support',
        currentRole: 'Platform Engineer',
        salary: '₹11 LPA',
        stars: 4,
    },
];

export const headerData = {
    menuItems: [
        { label: 'Home', href: '/' },
        {
            label: 'Dropdown 1',
            href: '#',
            dropdown: [
                { label: 'Dropdown Item 1', href: '/' },
                { label: 'Dropdown Item 2', href: '/' },
                { label: 'Dropdown Item 3', href: '/' },
                { label: 'Dropdown Item 4', href: '/' },
                { label: 'Dropdown Item 5', href: '/' },
                { label: 'Dropdown Item 6', href: '/' },
            ]
        },
        { label: 'Course Curriculum', href: '/' },
        {
            label: 'Dropdown 2',
            href: '#',
            dropdown: [
                { label: 'Dropdown Item 1', href: '/' },
                { label: 'Dropdown Item 2', href: '/' },
                { label: 'Dropdown Item 3', href: '/' },
                { label: 'Dropdown Item 4', href: '/' },
                { label: 'Dropdown Item 5', href: '/' },
                { label: 'Dropdown Item 6', href: '/' },
            ]
        },
        { label: 'Reviews', href: '/about' },
    ],
    headerButtons: [
        { label: 'Download Syllabus', href: '/', icon: 'BsDownload', variant: 'primary' },
        { label: 'Enroll Now', href: '/', variant: 'secondary' },
    ],
};

export const footerData = {
    companyLinks: [
        { label: "About Us", href: "/" },
        { label: "Careers", href: "/" },
        { label: "Reviews", href: "/" },
        { label: "Blog", href: "/" },
        { label: "FAQ", href: "/" },
    ],
    programLinks: [
        { label: "DevOps Pro", href: "/" },
        { label: "AWS Cloud", href: "/" },
        { label: "Docker & K8s", href: "/" },
        { label: "CI/CD Pipeline", href: "/" },
        { label: "Terraform IaC", href: "/" },
    ],
    resourceTags: [
        "DevOps Salary Guide",
        "Resume Building for DevOps",
        "Interview Questions & Answers",
        "Career Roadmap 2026",
        "AWS vs Azure Comparison",
        "Docker vs Kubernetes",
        "CI/CD Pipeline Guide",
        "Linux Administration Tips",
        "Terraform Getting Started",
        "Ansible Automation Guide",
        "Git & GitHub Mastery",
        "Cloud Job Market Trends",
        "Jenkins Deep Dive",
        "SRE Career Path",
        "Monitoring & Logging Guide",
        "Kubernetes Certification",
        "Free DevOps Labs",
        "DevOps Tools Comparison",
        "DevSecOps Fundamentals",
        "Prometheus & Grafana Setup",
        "Chaos Engineering Basics",
        "Microservices Architecture",
    ],
    socialLinks: [
        { icon: "FaLinkedinIn", href: "/", label: "LinkedIn" },
        { icon: "FaGithub", href: "/", label: "GitHub" },
        { icon: "FaYoutube", href: "/", label: "YouTube" },
        { icon: "FaTwitter", href: "/", label: "Twitter" },
        { icon: "FaInstagram", href: "/", label: "Instagram" },
    ],
    contactInfo: [
        { label: "Address", value: "Pune, Maharashtra, India" },
        { label: "Email", value: "info@devopstraining.com" },
        { label: "Phone", value: "+91 XXXXX XXXXX" },
    ],
};

export const chooseUs: ChooseUs[] = [
    {
        title: 'Real Industry Curriculum',
        icon: 'HiAcademicCap',
        color: '#004f44',
        items: ['Covers CI/CD, Docker, Kubernetes, Terraform, AWS, Linux, Ansible', 'Includes DevOps automation, monitoring, and cloud deployment', 'Updated syllabus based on real company projects'],
        bubbles: [
            { icon: 'SiDocker', color: '#2496ED' },
            { icon: 'SiKubernetes', color: '#326CE5' },
            { icon: 'SiTerraform', color: '#7B42BC' },
            { icon: 'FaAws', color: '#FF9900' },
        ],
    },
    {
        title: 'Hands-On Learning',
        icon: 'FaLaptopCode',
        color: '#ff8800',
        items: ['Live instructor-led classes', '4+ real DevOps capstone projects', 'Cloud lab access for practice', 'GitHub portfolio building'],
        bubbles: [
            { icon: 'MdLiveTv', color: '#004f44' },
            { icon: 'FaGitAlt', color: '#F05032' },
            { icon: 'MdCloudQueue', color: '#0db7ed' },
            { icon: 'SiJenkins', color: '#D24939' },
        ],
    },
    {
        title: 'Career & Placement Support',
        icon: 'FaBriefcase',
        color: '#00a882',
        items: ['Resume and LinkedIn optimization', 'Mock technical and HR interviews', 'Recruiter introductions and job alerts', 'Guidance until placement support period ends'],
        bubbles: [
            { icon: 'SiAnsible', color: '#EE0000' },
            { icon: 'FaLinux', color: '#333' },
            { icon: 'SiPrometheus', color: '#E6522C' },
        ],
    },
    {
        title: 'Flexible Learning Options',
        icon: 'FaCalendarAlt',
        color: '#004f44',
        items: ['Weekend and weekday batches', 'Online live classes from anywhere', 'Recorded sessions for revision'],
        bubbles: [
            { icon: 'MdVideoLibrary', color: '#ff8800' },
            { icon: 'MdLiveTv', color: '#00a882' },
            { icon: 'MdCloudQueue', color: '#326CE5' },
        ],
    },
];