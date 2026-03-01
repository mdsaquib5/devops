interface HomeSectionTitleProps {
    title: string;
    highlight: string;
    suffix?: string;
    heading: string;
    description: string;
    theme?: 'light' | 'dark';
}

const HomeSectionTitle = ({
    title,
    highlight,
    suffix,
    heading,
    description,
    theme = 'dark'
}: HomeSectionTitleProps) => {
    return (
        <div className={`home-section-title ${theme === 'light' ? 'home-section-title--light' : 'home-section-title--dark'}`}>
            {/* Small Title */}
            <div className="home-section-title__small">
                {title} <span>{highlight}</span>{suffix ? ` ${suffix}` : ''}
            </div>

            {/* Main Heading */}
            <h2 className="home-section-title__heading">
                {heading}
            </h2>

            {/* Description */}
            <p className="home-section-title__description">
                {description}
            </p>
        </div>
    );
};

export default HomeSectionTitle;
