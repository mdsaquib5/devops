import Hero from "@/components/home/Hero";
import DevopsCourse from "@/components/home/DevopsCourse";
import CloudTechnologies from "@/components/home/CloudTechnologies";
import CourseSyllabus from "@/components/home/CourseSyllabus";
import CertificationCourse from "@/components/home/CertificationCourse";
import PlacementAssistance from "@/components/home/PlacementAssistance";
import EnrolDevOp from "@/components/home/EnrolDevOp";
import ExperientialLearning from "@/components/home/ExperientialLearning";
import FAQs from "@/components/home/FAQs";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
    return (
        <>
            <Hero />
            <DevopsCourse />
            <CloudTechnologies />
            <CourseSyllabus />
            <CertificationCourse />
            <PlacementAssistance />
            <EnrolDevOp />
            <ExperientialLearning />
            <FAQs />
            <FinalCTA />
        </>
    );
}