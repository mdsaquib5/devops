'use client';
import SectionTitle from '../layout/SectionTitle';
import { comparisonData } from '../../data/data';
import ComparisonRowCard from '../items/ComparisonRowCard';

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
                                <th className="ct-th ct-th--ours">Our Course</th>
                                <th className="ct-th ct-th--others">Other Institutes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, i) => (
                                <ComparisonRowCard 
                                    key={i}
                                    row={row}
                                    index={i}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
};

export default ComparisonTable;