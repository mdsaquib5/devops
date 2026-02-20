'use client';
import { BsCheckCircleFill, BsXCircleFill, BsStarFill } from 'react-icons/bs';
import SectionTitle from '../layout/SectionTitle';

const rows = [
    {
        feature: 'Curriculum',
        ours: 'Updated with CI/CD, Docker, Kubernetes, Terraform, AWS, DevOps security',
        others: 'Often outdated or tool-only training',
    },
    {
        feature: 'Hands-On Projects',
        ours: '4+ real projects with GitHub portfolio',
        others: 'Limited demo projects',
    },
    {
        feature: 'Mentor Support',
        ours: 'Weekly 1-to-1 mentor sessions',
        others: 'Group sessions only',
    },
    {
        feature: 'Career Support',
        ours: 'Resume review, LinkedIn help, mock interviews',
        others: 'Basic placement tips',
    },
    {
        feature: 'Placement Assistance',
        ours: 'Recruiter introductions + job alerts',
        others: 'No structured placement help',
    },
    {
        feature: 'Cloud Lab Access',
        ours: 'Real cloud sandbox practice',
        others: 'Local system practice only',
    },
    {
        feature: 'Batch Size',
        ours: 'Small batches for personal attention',
        others: 'Large batches',
    },
    {
        feature: 'Learning Mode',
        ours: 'Live online + recorded sessions',
        others: 'Recorded videos only',
    },
    {
        feature: 'Flexible Schedule',
        ours: 'Weekend & weekday batches',
        others: 'Fixed timing',
    },
    {
        feature: 'Transparent Fees',
        ours: 'Clear fee plan with EMI options',
        others: 'Hidden charges possible',
    },
    {
        feature: 'Support After Course',
        ours: 'Placement support window + alumni help',
        others: 'Support ends after training',
    },
];

const ComparisonTable = () => {
    return (
        <section className="ct-section">
            <div className="ct-glow ct-glow--1" />
            <div className="ct-glow ct-glow--2" />

            <div className="container">

                {/* Header */}
                <SectionTitle
                    title="DevOps Course"
                    highlight="Comparison"
                    suffix="Table"
                    theme="dark"
                    headingClass="ct-heading"
                />

                {/* Table wrapper */}
                <div className="ct-table-wrap">
                    <table className="ct-table">
                        <thead>
                            <tr>
                                <th className="ct-th ct-th--feature">Feature</th>
                                <th className="ct-th ct-th--ours">
                                    <BsStarFill className="ct-star" />
                                    Our DevOps Course
                                </th>
                                <th className="ct-th ct-th--others">Other Institutes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr key={i} className={`ct-row${i % 2 === 0 ? ' ct-row--even' : ''}`}>
                                    <td className="ct-td ct-td--feature">{row.feature}</td>
                                    <td className="ct-td ct-td--ours">
                                        <BsCheckCircleFill className="ct-icon ct-icon--check" />
                                        <span>{row.ours}</span>
                                    </td>
                                    <td className="ct-td ct-td--others">
                                        <BsXCircleFill className="ct-icon ct-icon--cross" />
                                        <span>{row.others}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
};

export default ComparisonTable;