import { FaDocker, FaAws, FaGitAlt, FaGithub, FaJenkins } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiApachemaven, SiGrafana, SiPrometheus } from 'react-icons/si';
import { GiRadarSweep } from 'react-icons/gi';
import { Tool } from '../../data/data';

interface ToolsCardProps {
    tool: Tool;
}

const ToolsCard = ({ tool }: ToolsCardProps) => {
    const getIcon = () => {
        const iconMap: Record<string, React.ReactNode> = {
            SiApachemaven: <SiApachemaven size={28} />,
            FaGitAlt: <FaGitAlt size={28} />,
            SiKubernetes: <SiKubernetes size={28} />,
            FaDocker: <FaDocker size={28} />,
            FaAws: <FaAws size={28} />,
            SiPrometheus: <SiPrometheus size={28} />,
            SiAnsible: <SiAnsible size={28} />,
            FaGithub: <FaGithub size={28} />,
            FaJenkins: <FaJenkins size={28} />,
            SiTerraform: <SiTerraform size={28} />,
            GiRadarSweep: <GiRadarSweep size={28} />,
            SiGrafana: <SiGrafana size={28} />,
        };
        return iconMap[tool.icon] || null;
    };

    return (
        <div className="tc-card">
            <span className="tc-card-icon" style={{ color: tool.color }}>
                {getIcon()}
            </span>
            <span className="tc-card-name">{tool.name}</span>
        </div>
    );
};

export default ToolsCard;
