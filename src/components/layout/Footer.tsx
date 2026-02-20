import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const Footer = () => {
    const companyLinks = [
        { label: "About Us", href: "/" },
        { label: "Careers", href: "/" },
        { label: "Reviews", href: "/" },
        { label: "Blog", href: "/" },
        { label: "FAQ", href: "/" },
    ];

    const programLinks = [
        { label: "DevOps Pro", href: "/" },
        { label: "AWS Cloud", href: "/" },
        { label: "Docker & K8s", href: "/" },
        { label: "CI/CD Pipeline", href: "/" },
        { label: "Terraform IaC", href: "/" },
    ];

    const resourceTags = [
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
    ];

    const socials = [
        { icon: <FaLinkedinIn />, href: "/", label: "LinkedIn" },
        { icon: <FaGithub />, href: "/", label: "GitHub" },
        { icon: <FaYoutube />, href: "/", label: "YouTube" },
        { icon: <FaTwitter />, href: "/", label: "Twitter" },
        { icon: <FaInstagram />, href: "/", label: "Instagram" },
    ];

    return (
        <footer className="ft-section">
            <div className="ft-glow ft-glow--1" />
            <div className="ft-glow ft-glow--2" />

            <div className="container">
                {/* Top Row: 4 Columns */}
                <div className="ft-grid">
                    {/* Brand Column */}
                    <div className="ft-brand">
                        <Link href="/" className="ft-logo">
                            <Image src="/images/logo.webp" alt="Logo" width={630} height={154} />
                        </Link>
                        <p className="ft-tagline">
                            Pune&apos;s #1 DevOps training institute with 100% placement support, GenAI-powered labs & industry mentors.
                        </p>
                        <div className="ft-socials">
                            {socials.map((s, i) => (
                                <Link key={i} href={s.href} className="ft-social" aria-label={s.label}>
                                    {s.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Company Column */}
                    <div className="ft-col">
                        <h4 className="ft-col-title">Company</h4>
                        <ul className="ft-links">
                            {companyLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs Column */}
                    <div className="ft-col">
                        <h4 className="ft-col-title">Programs</h4>
                        <ul className="ft-links">
                            {programLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="ft-col">
                        <h4 className="ft-col-title">Contact Us</h4>
                        <ul className="ft-contact">
                            <li>
                                <span className="ft-contact-label">Address</span>
                                <span>Pune, Maharashtra, India</span>
                            </li>
                            <li>
                                <span className="ft-contact-label">Email</span>
                                <span>info@devopstraining.com</span>
                            </li>
                            <li>
                                <span className="ft-contact-label">Phone</span>
                                <span>+91 XXXXX XXXXX</span>
                            </li>
                        </ul>
                        <Link href="/" className="ft-cta-btn">
                            Enroll Now <HiArrowRight />
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="ft-divider" />

                {/* Resource Tags Section */}
                <div className="ft-resources">
                    <h4 className="ft-resources-title">DevOps Career Resources</h4>
                    <div className="ft-tags">
                        {resourceTags.map((tag, i) => (
                            <Link key={i} href="/" className="ft-tag">
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="ft-bottom">
                    <p className="ft-copy">&copy; 2026 DevOps Training Pune. All rights reserved.</p>
                    <div className="ft-legal">
                        <Link href="/">Privacy Policy</Link>
                        <Link href="/">Terms of Service</Link>
                        <Link href="/">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;