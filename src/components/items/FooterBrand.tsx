import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { footerData } from "../../data/data";

const FooterBrand = () => {
    return (
        <div className="ft-brand">
            <Link href="/" className="ft-logo">
                <Image src="/images/logo.webp" alt="Logo" width={256} height={50} />
            </Link>
            <p className="ft-tagline">
                India&apos;s #1 DevOps training institute with 100% placement support, GenAI-powered labs & industry mentors.
            </p>
            <div className="ft-socials">
                {footerData.socialLinks.map((social, i) => (
                    <Link key={i} href={social.href} className="ft-social" aria-label={social.label}>
                        {social.icon === 'FaLinkedinIn' && <FaLinkedinIn />}
                        {social.icon === 'FaGithub' && <FaGithub />}
                        {social.icon === 'FaYoutube' && <FaYoutube />}
                        {social.icon === 'FaTwitter' && <FaTwitter />}
                        {social.icon === 'FaInstagram' && <FaInstagram />}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FooterBrand;
