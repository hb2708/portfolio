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
  Users,
} from 'lucide-react'

interface IconProps {
  className?: string
}

export const AppStoreIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
  </svg>
)

export const PlayStoreIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
  </svg>
)

export const XIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

// About Icons
export const DayOneIcon = ({ className }: IconProps) => (
  <Rocket className={className} />
)

export const CrossPlatformIcon = ({ className }: IconProps) => (
  <MonitorSmartphone className={className} />
)

export const RemoteIcon = ({ className }: IconProps) => (
  <Globe className={className} />
)

export const VisaIcon = ({ className }: IconProps) => (
  <IdCard className={className} />
)

export const PsychologicalSafetyIcon = ({ className }: IconProps) => (
  <HeartHandshake className={className} />
)

export const AutomationIcon = ({ className }: IconProps) => (
  <Bot className={className} />
)

export const ScalableIcon = ({ className }: IconProps) => (
  <TrendingUp className={className} />
)

// Skills Icons
export const ReactNativeIcon = ({ className }: IconProps) => (
  <Atom className={className} />
)

export const IOSIcon = ({ className }: IconProps) => (
  <Smartphone className={className} />
)

export const SystemDesignIcon = ({ className }: IconProps) => (
  <Network className={className} />
)

// Experience Icons
export const BriefcaseIcon = ({ className }: IconProps) => (
  <Briefcase className={className} />
)

export const CodeIcon = ({ className }: IconProps) => (
  <Code2 className={className} />
)

// Writing Icons
export const ReadMoreIcon = ({ className }: IconProps) => (
  <ArrowRight className={className} />
)

// Awards Icons
export const LionHeartIcon = ({ className }: IconProps) => (
  <Heart className={className} />
)

export const MentorshipIcon = ({ className }: IconProps) => (
  <Users className={className} />
)
