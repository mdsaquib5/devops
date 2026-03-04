import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { footerData } from "../../data/data";

const FooterLinks = () => {
    return (
        <>
            {/* Company Column */}
            <div className="ft-col">
                <h4 className="ft-col-title">Company</h4>
                <ul className="ft-links">
                    {footerData.companyLinks.map((link, i) => (
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
                    {footerData.programLinks.map((link, i) => (
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
                    {footerData.contactInfo.map((info, i) => (
                        <li key={i}>
                            <span className="ft-contact-label">{info.label}</span>
                            {info.label === "Email" ? (
                                <a href={`mailto:${info.value}`} className="ft-contact-link">{info.value}</a>
                            ) : info.label === "Phone" ? (
                                <a href={`tel:${info.value.replace(/\s/g, '')}`} className="ft-contact-link">{info.value}</a>
                            ) : (
                                <span>{info.value}</span>
                            )}
                        </li>
                    ))}
                </ul>
                <Link href="/" className="ft-cta-btn">
                    Enroll Now <HiArrowRight />
                </Link>
            </div>
        </>
    );
};

export default FooterLinks;
