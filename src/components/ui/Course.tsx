'use client';
import { useState, useRef, useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import SectionTitle from '../layout/SectionTitle';

const Course = () => {
    const [activeTab, setActiveTab] = useState(0);
    const stripRef = useRef<HTMLDivElement>(null);

    const tabs = [
        { title: "DevOps Basics", content: ["What DevOps means and why companies use it", "DevOps lifecycle and tools overview", "How DevOps works with Agile teams"] },
        { title: "Git & GitHub", content: ["Save code with commits and branches", "Work with teams using pull requests", "Manage projects on GitHub"] },
        { title: "Build Tools", content: ["Why build tools are needed", "Maven basics and project setup", "Create and run build automation"] },
        { title: "Docker Basics", content: ["Containers vs virtual machines", "Create Docker images and containers", "Write simple Dockerfile"] },
        { title: "Jenkins CI", content: ["Install and configure Jenkins", "Create CI jobs and pipelines", "Automate builds after code changes"] },
        { title: "Continuous Testing", content: ["Unit testing and integration testing", "Run tests in CI pipeline", "Improve code quality with testing"] },
        { title: "Docker Commands", content: ["Daily Docker commands practice", "Manage images and containers", "Real-life Docker use cases"] },
        { title: "Kubernetes Basics", content: ["Pods, services, deployments", "Run apps on Kubernetes", "Simple cluster setup"] },
        { title: "Chef Automation", content: ["Chef concepts and setup", "Write cookbooks and recipes", "Automate server setup"] },
        { title: "Ansible Basics", content: ["Install and use Ansible", "Write playbooks", "Automate software installation"] },
        { title: "Monitoring with Nagios", content: ["Why monitoring is important", "Setup alerts and checks", "Track server health"] },
        { title: "AWS DevOps Tools", content: ["AWS DevOps services overview", "Use CodeBuild and CodeDeploy", "Basic cloud deployment flow"] },
        { title: "AWS Architecture Basics", content: ["AWS core services (EC2, S3, VPC)", "Basic cloud design ideas", "Simple cloud project"] },
        { title: "Linux Basics", content: ["Linux commands and file system", "Permissions and processes", "Troubleshooting basics"] },
        { title: "DevOps Workflow", content: ["Real company DevOps process", "CI/CD pipeline flow", "DevOps best practices"] },
        { title: "DevOps on AWS", content: ["Deploy apps on AWS", "Create CI/CD pipeline on cloud", "Manage cloud resources"] },
        { title: "Advanced Git", content: ["Resolve merge conflicts", "Branch strategies", "Git best practices"] },
        { title: "Advanced Build Tools", content: ["Multi-module builds", "Artifact management", "Improve build speed"] },
        { title: "Jenkins Pipelines", content: ["Create full CI/CD pipelines", "Multi-branch pipeline setup", "Automate deployments"] },
        { title: "Docker Registry", content: ["Push images to Docker Hub", "Use private registry", "Image version control"] },
        { title: "Kubernetes Advanced", content: ["Auto scaling apps", "Rolling updates", "Secrets and config maps"] },
        { title: "Ansible Advanced", content: ["Create Ansible roles", "Use templates", "Automate full environments"] },
        { title: "Terraform Basics", content: ["Infrastructure as Code concept", "Create cloud resources", "Manage Terraform state"] },
        { title: "Prometheus & Grafana", content: ["Collect system metrics", "Create dashboards", "Setup alerts"] },
        { title: "Final Capstone Projects", content: ["Build real DevOps project", "Deploy on Kubernetes", "Add monitoring and CI/CD", "Publish project on GitHub"] },
    ];

    const goTo = (index: number) => {
        if (index < 0 || index >= tabs.length) return;
        setActiveTab(index);
    };

    // Auto-scroll active pill into center of strip
    useEffect(() => {
        const strip = stripRef.current;
        if (!strip) return;
        const pill = strip.children[activeTab] as HTMLElement;
        if (!pill) return;
        strip.scrollTo({
            left: pill.offsetLeft - strip.offsetWidth / 2 + pill.offsetWidth / 2,
            behavior: 'smooth',
        });
    }, [activeTab]);

    const progress = Math.round(((activeTab + 1) / tabs.length) * 100);

    return (
        <>
            <section className="cr-section">
                <div className="container">
                    <SectionTitle
                        title="DevOps Course"
                        highlight="Curriculum"
                        suffix="25 Modules"
                        theme="light"
                        description="Discover our featured courses, specially curated to help you gain in-demand skills"
                    />
                    <div className="cr-strip-wrapper">
                        <button
                            className="cr-arrow"
                            onClick={() => goTo(activeTab - 1)}
                            disabled={activeTab === 0}
                            aria-label="Previous module"
                        >
                            <IoChevronBack />
                        </button>
                        <div className="cr-strip" ref={stripRef}>
                            {tabs.map((_, i) => (
                                <button
                                    key={i}
                                    className={`cr-pill${activeTab === i ? ' cr-pill--active' : ''}${i < activeTab ? ' cr-pill--done' : ''}`}
                                    onClick={() => goTo(i)}
                                    aria-label={`Module ${i + 1}`}
                                >
                                    Module {i + 1}
                                </button>
                            ))}
                        </div>
                        <button
                            className="cr-arrow"
                            onClick={() => goTo(activeTab + 1)}
                            disabled={activeTab === tabs.length - 1}
                            aria-label="Next module"
                        >
                            <IoChevronForward />
                        </button>
                    </div>
                    <div className="cr-card">
                        <div className="cr-card-head">
                            <div className="cr-meta">
                                <span className="cr-module-badge">
                                    Module <strong>{String(activeTab + 1).padStart(2, '0')}</strong> of 25
                                </span>
                                <span className="cr-tag">{tabs[activeTab].title}</span>
                            </div>
                            <h3 className="cr-title">{tabs[activeTab].title}</h3>
                        </div>
                        <div className="cr-topics">
                            {tabs[activeTab].content.map((item, i) => (
                                <div key={i} className="cr-chip">
                                    <FaBookmark className="cr-chip-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="cr-card-foot">
                            <div className="cr-progress-wrap">
                                <div className="cr-progress-bar">
                                    <div className="cr-progress-fill" style={{ width: `${progress}%` }}></div>
                                </div>
                                <span className="cr-progress-label">{progress}% complete</span>
                            </div>
                            <div className="cr-nav-btns">
                                <button
                                    className="cr-nav-btn"
                                    onClick={() => goTo(activeTab - 1)}
                                    disabled={activeTab === 0}
                                >
                                    <IoChevronBack /> Prev
                                </button>
                                <button
                                    className="cr-nav-btn cr-nav-btn--primary"
                                    onClick={() => goTo(activeTab + 1)}
                                    disabled={activeTab === tabs.length - 1}
                                >
                                    Next <IoChevronForward />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Course;