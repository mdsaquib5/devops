'use client';
import { useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import SectionTitle from '../layout/SectionTitle';

const faqs = [
    {
        q: 'What is the DevOps course in Pune and who should take it?',
        a: 'A practical training program that teaches CI/CD, containers, orchestration, IaC and cloud deployments — ideal for freshers, developers, system engineers, and IT pros wanting to move into DevOps.',
    },
    {
        q: 'How long is the typical DevOps course (duration) in Pune?',
        a: 'Most full programs run 3–6 months (part-time/bootcamp format) — short on-ramp courses exist for 1–3 months for focused tool certs. Choose a course that includes hands-on projects and career support.',
    },
    {
        q: 'What tools and technologies will I learn (Docker, Kubernetes, Jenkins, Terraform)?',
        a: 'Expect a toolset that usually includes Git, Docker, Kubernetes, Jenkins (CI), Terraform (IaC), Ansible (config-mgmt), Prometheus/Grafana (monitoring) and cloud basics (AWS). These are the industry-standard DevOps tools hiring teams look for.',
    },
    {
        q: 'What projects and hands-on work are included in a job-ready DevOps course?',
        a: 'Look for 4+ hands-on projects: containerize apps, build CI/CD pipelines, deploy to Kubernetes, create Terraform infra, and add monitoring + alerts — all pushed to GitHub for interview demos.',
    },
    {
        q: 'Do I need prior experience or programming skills to join a DevOps course?',
        a: 'No strict prerequisites — basic Linux, scripting (Bash/Python), and familiarity with software development concepts help you learn faster. Many courses accept freshers and teach fundamentals first.',
    },
    {
        q: 'How much can I earn after a DevOps certification in India?',
        a: 'Entry-level DevOps roles in India commonly start around ₹4–8 LPA, with an average near ₹8–10 LPA depending on city and experience. Senior / specialist roles can earn considerably more.',
    },
    {
        q: 'Is there strong demand for DevOps roles in India and Pune specifically?',
        a: 'Yes — DevOps hiring remains active across India. Job boards and professional networks show thousands of active DevOps listings, reflecting strong demand as companies push automation and cloud adoption.',
    },
    {
        q: 'Does the course include placement assistance and recruiter introductions?',
        a: 'Many reputable courses offer resume & LinkedIn reviews, mock technical/HR interviews, recruiter shortlists and hiring partner introductions as part of a placement or career track.',
    },
    {
        q: 'What is an ISA or pay-after-placement plan — is it safe?',
        a: 'An Income Share Agreement (ISA) means you pay part or all fees after getting a qualifying job. ISAs are private contracts and not uniformly regulated in India — read terms carefully, check caps, grace periods and refund rules before signing.',
    },
    {
        q: 'Which companies hire DevOps engineers from Pune courses?',
        a: 'Hiring companies vary from startups to MNCs (product firms, IT services, GCCs). You\'ll commonly find roles at technology product firms, consulting teams, and cloud/infra teams.',
    },
    {
        q: 'Will I get cloud credits and lab access for hands-on practice?',
        a: 'Good programs provide cloud sandbox access or temporary AWS/Azure credits, CI/CD sandboxes, and container registries so you can complete labs and projects.',
    },
    {
        q: 'How is success measured — what does "job-ready" mean for DevOps?',
        a: 'Job-ready means you can demo working projects on GitHub, build a CI/CD pipeline, deploy to Kubernetes, write Terraform code for infra, and explain incident/monitoring workflows in interviews.',
    },
    {
        q: 'Do DevOps courses cover security (DevSecOps) and observability?',
        a: 'Modern DevOps training increasingly includes DevSecOps basics (container security, secrets management) and observability (Prometheus/Grafana). DevSecOps and security automation are growing areas with dedicated market demand.',
    },
    {
        q: 'Which certifications are useful after a DevOps course?',
        a: 'Common value-adding certs include CKA/CKAD (Kubernetes), AWS Certified DevOps/Cloud certifications, Terraform Associate and vendor tool certs. Certifications help, but recruiters value demonstrable projects most.',
    },
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="fq-section">
            <div className="container">

                {/* Header */}
                <SectionTitle
                    title="Frequently Asked"
                    highlight="Questions"
                    theme="light"
                    description="Everything you need to know about DevOps program, tools, career support and enrollment."
                />

                {/* Accordion cards */}
                <div className="fq-list">
                    {faqs.map((faq, i) => (
                        <div key={i} className={`fq-card${openIndex === i ? ' fq-card--open' : ''}`}>
                            <button className="fq-question" onClick={() => toggle(i)}>
                                <span className="fq-num">{String(i + 1).padStart(2, '0')}</span>
                                <span className="fq-q-text">{faq.q}</span>
                                <span className={`fq-chevron${openIndex === i ? ' fq-chevron--open' : ''}`}>
                                    <IoChevronDownOutline size={18} />
                                </span>
                            </button>
                            <div className={`fq-answer${openIndex === i ? ' fq-answer--visible' : ''}`}>
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Faqs;