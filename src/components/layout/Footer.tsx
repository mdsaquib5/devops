import FooterBrand from '../items/FooterBrand';
import FooterLinks from '../items/FooterLinks';
import FooterResources from '../items/FooterResources';

const Footer = () => {
    return (
        <footer className="ft-section">
            <div className="ft-glow ft-glow--1" />
            <div className="ft-glow ft-glow--2" />

            <div className="container">
                {/* Top Row: 4 Columns */}
                <div className="ft-grid">
                    <FooterBrand />
                    <FooterLinks />
                </div>

                <FooterResources />
            </div>
        </footer>
    );
};

export default Footer;