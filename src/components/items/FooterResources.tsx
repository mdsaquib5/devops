import Link from "next/link";
import { footerData } from "../../data/data";

const FooterResources = () => {
    return (
        <>
            {/* Divider */}
            <div className="ft-divider" />

            {/* Resource Tags Section */}
            <div className="ft-resources">
                <h4 className="ft-resources-title">Locations</h4>
                <div className="ft-tags">
                    {footerData.resourceTags.map((tag, i) => {
                        // Convert tag to URL format
                        const cityUrl = tag.toLowerCase()
                            .replace('devops course in ', '')
                            .replace(' ', '-');
                        return (
                            <Link key={i} href={`/devops-course-in-${cityUrl}`} className="ft-tag">
                                {tag}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="ft-bottom">
                <p className="ft-copy">&copy; 2026 DevOps Training India. All rights reserved.</p>
                <div className="ft-legal">
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">Terms of Service</Link>
                    <Link href="/">Sitemap</Link>
                </div>
            </div>
        </>
    );
};

export default FooterResources;
