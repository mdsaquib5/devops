'use client';

import { useState } from "react";

import { GoGear } from "react-icons/go";

import SectionTitle from '../layout/SectionTitle';

import { skills } from '../../data/data';

import SkillsCard from '../items/SkillsCard';



const Skills = () => {

    const [active, setActive] = useState("all");



    const allSkills = skills.filter(s => s.id !== "all");

    const visible = active === "all" ? allSkills : allSkills.filter(s => s.id === active);



    const totalSkills = allSkills.reduce((sum, s) => sum + (s.skills?.length || 0), 0);

    const shownSkills = visible.reduce((sum, s) => sum + (s.skills?.length || 0), 0);



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

                    {skills.map(skill => (

                        <button

                            key={skill.id}

                            className={`sk-tab${active === skill.id ? ' sk-tab--active' : ''}`}

                            onClick={() => setActive(skill.id)}

                        >

                            <span className="sk-tab-icon">

                                {skill.id === "all" ? <GoGear size={16} /> : 

                                 skill.id === "core" ? <GoGear size={16} /> :

                                 skill.id === "cicd" ? <GoGear size={16} /> :

                                 skill.id === "containers" ? <GoGear size={16} /> :

                                 skill.id === "iac" ? <GoGear size={16} /> :

                                 skill.id === "monitoring" ? <GoGear size={16} /> :

                                 skill.id === "security" ? <GoGear size={16} /> :

                                 skill.id === "modern" ? <GoGear size={16} /> :

                                 skill.id === "career" ? <GoGear size={16} /> :

                                 <GoGear size={16} />}

                            </span>

                            {skill.label}

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

                    {visible.map(skill => (

                        <SkillsCard 

                            key={skill.id}

                            skill={skill}

                        />

                    ))}

                </div>



            </div>

        </section>

    );

};



export default Skills;