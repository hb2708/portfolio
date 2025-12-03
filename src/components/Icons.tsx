import {
    MonitorSmartphone,
    Rocket,
    Globe,
    IdCard,
    HeartHandshake,
    Bot,
    TrendingUp,
    Atom,
    Smartphone,
    Network,
    Briefcase,
    Code2,
    ArrowRight,
    Heart,
    Users
} from 'lucide-react';

interface IconProps {
    className?: string;
}

export const AppStoreIcon = ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.698 14.363C16.71 12.383 18.366 11.286 18.441 11.239C17.439 9.776 15.895 9.553 15.341 9.531C13.997 9.393 12.698 10.329 12.022 10.329C11.346 10.329 10.286 9.553 9.178 9.574C7.75 9.596 6.43 10.414 5.706 11.67C4.237 14.223 5.344 18.01 6.771 20.074C7.473 21.074 8.303 22.181 9.412 22.138C10.477 22.096 10.882 21.457 12.171 21.457C13.449 21.457 13.832 22.138 14.961 22.096C16.111 22.053 16.835 21.032 17.516 20.032C18.303 18.883 18.622 17.776 18.644 17.712C18.622 17.712 16.677 16.967 16.698 14.363ZM14.727 7.636C15.323 6.912 15.728 5.912 15.621 4.912C14.748 4.954 13.684 5.486 13.066 6.21C12.513 6.87 12.022 7.891 12.15 8.891C13.108 8.976 14.13 8.359 14.727 7.636Z" />
    </svg>
);

export const PlayStoreIcon = ({ className }: IconProps) => (
    <svg viewBox="0 0 512 512" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5-65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </svg>
);

// About Icons
export const DayOneIcon = ({ className }: IconProps) => (
    <Rocket className={className} />
);

export const CrossPlatformIcon = ({ className }: IconProps) => (
    <MonitorSmartphone className={className} />
);

export const RemoteIcon = ({ className }: IconProps) => (
    <Globe className={className} />
);

export const VisaIcon = ({ className }: IconProps) => (
    <IdCard className={className} />
);

export const PsychologicalSafetyIcon = ({ className }: IconProps) => (
    <HeartHandshake className={className} />
);

export const AutomationIcon = ({ className }: IconProps) => (
    <Bot className={className} />
);

export const ScalableIcon = ({ className }: IconProps) => (
    <TrendingUp className={className} />
);

// Skills Icons
export const ReactNativeIcon = ({ className }: IconProps) => (
    <Atom className={className} />
);

export const IOSIcon = ({ className }: IconProps) => (
    <Smartphone className={className} />
);

export const SystemDesignIcon = ({ className }: IconProps) => (
    <Network className={className} />
);

// Experience Icons
export const BriefcaseIcon = ({ className }: IconProps) => (
    <Briefcase className={className} />
);

export const CodeIcon = ({ className }: IconProps) => (
    <Code2 className={className} />
);

// Writing Icons
export const ReadMoreIcon = ({ className }: IconProps) => (
    <ArrowRight className={className} />
);

// Awards Icons
export const LionHeartIcon = ({ className }: IconProps) => (
    <Heart className={className} />
);

export const MentorshipIcon = ({ className }: IconProps) => (
    <Users className={className} />
);
