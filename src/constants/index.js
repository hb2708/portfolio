import { Code2, Smartphone, Terminal, Zap } from "lucide-react";

export const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Writing", href: "#writing" },
    { name: "Contact", href: "#contact" },
];

export const SKILLS = [
    {
        category: "Mobile Architecture",
        icon: Smartphone,
        items: ["React Native", "iOS (Swift/SwiftUI)", "Native Modules & Bridging", "Mobile Performance", "Design Systems"],
    },
    {
        category: "Frontend Ecosystem",
        icon: Code2,
        items: ["TypeScript / JavaScript", "React.js / Next.js", "State Management (Redux/MobX)", "Modern CSS / Tailwind", "Modular Architecture"],
    },
    {
        category: "DevOps & Quality",
        icon: Terminal,
        items: ["CI/CD Pipelines (Bitrise)", "Fastlane Automation", "Testing (Jest/Detox)", "App / Play Store Deployments", "Observability"],
    },
    {
        category: "Strategic Leadership",
        icon: Zap,
        items: ["Technical Strategy", "Engineering Mentorship", "System Architecture", "Cross-functional Leadership"],
    },
];

export const EXPERIENCES = [
    {
        company: "MoneyLion",
        role: "Staff Engineer",
        period: "Dec 2020 - Present",
        location: "Kuala Lumpur, Malaysia",
        description: [
            "Spearheaded the MoneyLion Mobile Design System, promoting consistency and faster development across platforms.",
            "Architected high-impact features and optimized mobile performance to support 10× normal traffic during major campaigns.",
            "Drove Apple Pay and Google Pay integration by mentoring payments engineers and guiding secure implementation.",
            "Introduced process improvements such as in-house bug reporting, TDD practices, and improved CI/CD workflows.",
            "Mentored 10+ junior engineers and helped enhance the hiring and onboarding process.",
        ],
        tech: ["React Native", "iOS", "Design Systems", "CI/CD"],
    },
    {
        company: "Pop Meals (formerly Dahmakan)",
        role: "Senior iOS Software Engineer",
        period: "Jun 2018 - Dec 2020",
        location: "Kuala Lumpur, Malaysia",
        description: [
            "Lead developer for the 'dahmakan' iOS app and 'dahmakan rider' React Native app.",
            "Managed day-to-day development and deployment of consumer and rider applications.",
            "Collaborated closely with Design, Product, and Backend teams to translate requirements into features.",
            "Focused on improving customer experience and retention through app optimizations.",
        ],
        tech: ["Swift", "Objective-C", "React Native", "MobX", "Bitrise"],
    },
    {
        company: "UMAI Restaurant Software",
        role: "iOS Engineer",
        period: "Oct 2017 - Jun 2018",
        location: "Kuala Lumpur, Malaysia",
        description: [
            "In charge of the development of 'Umai - For Restaurants' iPad Application.",
            "Worked closely with Design and Product teams to solve problems for restaurants.",
        ],
        tech: ["Swift 4", "iPadOS", "Product Development"],
    },
    {
        company: "Cuelogic Technologies",
        role: "Software Engineer",
        period: "Jul 2017 - Oct 2017",
        location: "Pune, India",
        description: [
            "Worked on a Social Chat application and an IOT-based Application for a kitchen appliance startup.",
            "Mentored new developers on iOS development with Swift and Auto-layout.",
        ],
        tech: ["Swift", "IoT", "Chat"],
    },
    {
        company: "Winjit Technologies",
        role: "Software Developer",
        period: "Jul 2015 - Jun 2017",
        location: "Nashik, India",
        description: [
            "Developed 2 consumer-facing applications and 1 Enterprise Application.",
            "Involved in all phases of Application Development: Prototyping, Developing, and Client Communication.",
            "Received individual and team awards for outstanding performance.",
        ],
        tech: ["Swift", "Objective-C", "Enterprise Apps"],
    },
];

export const PROJECTS = [
    {
        title: "MoneyLion App",
        description: "Leading the mobile engineering team for a financial super app. Architected the Marketplace vertical generating $1M+ weekly revenue.",
        tech: ["React Native", "iOS", "Design Systems"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
        link: "https://moneylion.com",
    },
    {
        title: "Dahmakan Rider App",
        description: "The app helps dahmakan riders to delivery delicious food to the Customers. Features include route optimization, customer chat, and navigation.",
        tech: ["React Native", "Navigation", "Real-time Chat"],
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1374&auto=format&fit=crop",
        link: "https://play.google.com/store/apps/details?id=com.dahmakan.riderapp&hl=en",
    },
    {
        title: "Dahmakan iOS App",
        description: "In-house food delivery service app. Helps users order food at the tap of a fingertip. Includes live order tracking and rider chat.",
        tech: ["iOS", "Swift", "Live Tracking"],
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop",
        link: "https://apps.apple.com/my/app/dahmakan/id1030383844",
    },
];

export const ARTICLES = [
    {
        title: "Run project on New OS from older Xcode ⌚️ 📱",
        date: "Mar 2018",
        platform: "Medium",
        link: "https://medium.com/@harshalb/run-project-on-new-os-from-older-xcode-%EF%B8%8F-85fe46d766f0",
        description: "A guide on how to debug apps on newer iOS versions using older Xcode versions.",
    },
];
