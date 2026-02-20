'use client';
import { useState } from "react";
import { FaTerminal, FaDocker, FaCloud, FaShieldAlt, FaBriefcase } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { GoGear } from "react-icons/go";
import { VscGraph } from "react-icons/vsc";
import SectionTitle from '../layout/SectionTitle';

const categories = [
    {
        id: "all",
        label: "All Skills",
        icon: <GoGear size={16} />,
        color: "#004f44",
    },
    {
        id: "core",
        label: "Core Technical",
        icon: <FaTerminal size={14} />,
        color: "#004f44",
        skills: [
            "Linux fundamentals — shell, files, permissions, processes",
            "Shell scripting / Bash basics",
            "Git & GitHub — commits, branches, pull requests",
            "Build tools (Maven / Gradle) and artifact handling",
            "Basic networking for cloud & containers",
        ],
    },
    {
        id: "cicd",
        label: "CI/CD & Automation",
        icon: <GoGear size={14} />,
        color: "#ff8800",
        skills: [
            "Jenkins pipelines — build/test/deploy automation",
            "Automated testing in CI (unit & integration)",
            "GitOps and multi-branch pipeline workflows",
            "Release strategies: blue/green, canary, rolling",
        ],
    },
    {
        id: "containers",
        label: "Containers & K8s",
        icon: <FaDocker size={14} />,
        color: "#0db7ed",
        skills: [
            "Docker images, containers, Dockerfile",
            "Container registries (Docker Hub / private)",
            "Kubernetes basics: pods, services, deployments",
            "K8s advanced: autoscaling, secrets, configMaps",
            "Helm charts for app packaging",
        ],
    },
    {
        id: "iac",
        label: "IaC & Cloud",
        icon: <FaCloud size={14} />,
        color: "#004f44",
        skills: [
            "Terraform basics — resources, modules, state",
            "Cloud fundamentals (AWS): EC2, S3, VPC basics",
            "Deploy CI/CD on cloud services",
            "Cost awareness & right-sizing resources",
        ],
    },
    {
        id: "monitoring",
        label: "Monitoring",
        icon: <VscGraph size={14} />,
        color: "#00a882",
        skills: [
            "Prometheus metrics collection",
            "Grafana dashboards and visualisation",
            "Log aggregation and alerting basics",
            "Incident management and runbooks",
        ],
    },
    {
        id: "security",
        label: "Config & Security",
        icon: <FaShieldAlt size={14} />,
        color: "#ff8800",
        skills: [
            "Ansible playbooks and roles",
            "Chef concepts or alternate config tools",
            "Container security best practices",
            "Secrets management & least-privilege access",
        ],
    },
    {
        id: "modern",
        label: "Modern DevOps",
        icon: <SiKubernetes size={14} />,
        color: "#004f44",
        skills: [
            "SRE practices: SLAs, SLOs, error budgets",
            "Observability-driven development",
            "CI/CD metrics and quality gates",
            "Chaos engineering (introductory)",
        ],
    },
    {
        id: "career",
        label: "Career Ready",
        icon: <FaBriefcase size={14} />,
        color: "#00a882",
        skills: [
            "4+ deployable capstone projects for GitHub",
            "Resume & LinkedIn optimized for DevOps roles",
            "Mock technical & HR interviews with feedback",
            "Project docs and demo videos for recruiters",
        ],
    },
];

const allSkills = categories.filter(c => c.id !== "all");

const Skills = () => {
    const [active, setActive] = useState("all");

    const visible = active === "all"
        ? allSkills
        : allSkills.filter(c => c.id === active);

    const totalSkills = allSkills.reduce((sum, c) => sum + c.skills!.length, 0);
    const shownSkills = visible.reduce((sum, c) => sum + c.skills!.length, 0);

    return (
        <section className="sk-section">
            <div className="container">

                {/* Header */}
                <SectionTitle
                    title="DevOps"
                    highlight="Skills"
                    suffix="Covered"
                    theme="light"
                    description={`Comprehensive skill map across ${allSkills.length} domains — everything you need to become job-ready.`}
                />

                {/* Filter tabs */}
                <div className="sk-tabs-wrap">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`sk-tab${active === cat.id ? ' sk-tab--active' : ''}`}
                            onClick={() => setActive(cat.id)}
                        >
                            <span className="sk-tab-icon">{cat.icon}</span>
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Counter */}
                <div className="sk-counter">
                    Showing <strong>{shownSkills}</strong> skills
                    {active !== "all" && <> in <strong>{visible[0]?.label}</strong></>}
                    {active === "all" && <> across <strong>{allSkills.length}</strong> categories</>}
                    <span className="sk-counter-dot" />
                    <strong>{totalSkills}</strong> total
                </div>

                {/* Skill cards grid */}
                <div className="sk-grid">
                    {visible.map(cat => (
                        <div key={cat.id} className="sk-category-card" style={{ '--sk-accent': cat.color } as React.CSSProperties}>
                            {/* Decorative floating icon */}
                            <span className="sk-float-icon" style={{ color: cat.color }}>
                                {cat.icon}
                            </span>

                            {/* Card header */}
                            <div className="sk-cat-header">
                                <span className="sk-cat-icon" style={{ background: cat.color, color: '#fff' }}>
                                    {cat.icon}
                                </span>
                                <div className="sk-cat-info">
                                    <h3 className="sk-cat-title">{cat.label}</h3>
                                    <span className="sk-cat-count">{cat.skills!.length} skills</span>
                                </div>
                            </div>

                            {/* Skills as chips */}
                            <div className="sk-chips">
                                {cat.skills!.map((skill, i) => (
                                    <span key={i} className="sk-chip">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;