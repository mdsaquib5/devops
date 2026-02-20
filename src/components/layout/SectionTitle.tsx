interface SectionTitleProps {
    title: string;
    highlight: string;
    suffix?: string;
    description?: string;
    theme?: string;
    headingClass?: string;
}

const SectionTitle = ({
    title,
    highlight,
    suffix,
    description,
    theme = "dark",
    headingClass,
}: SectionTitleProps) => {
    return (
        <div className={`section-title ${theme}-title`}>
            <div className={`section-sub-heading${headingClass ? ` ${headingClass}` : ''}`}>
                {title} <span>{highlight}</span>{suffix ? ` ${suffix}` : ''}
            </div>
            {description && <p>{description}</p>}
        </div>
    );
};

export default SectionTitle;