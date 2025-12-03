import { Code2, Smartphone, Terminal, Zap } from "lucide-react";
import popMeals from "../assets/pop_meals_customer.jpg";
import popMealsRider from "../assets/pop_meals_rider.png";
import moneylion from "../assets/moneylion.png";

export interface Project {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    longDescription: string;
    challenges?: string[];
    solutions?: string[];
    features?: string[];
    tech: string[];
    image: string;
    links?: {
        ios?: string;
        android?: string;
        web?: string;
    };
    link?: string;
}

export const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Writing", href: "#writing" },
    { name: "Contact", href: "#contact" },
];

export const NAVBAR_HEIGHT = 80;

export const SKILLS = [
    {
        category: "Mobile & Core Engineering",
        icon: Smartphone,
        items: ["React Native", "iOS (UIKit / SwiftUI)", "Mobile Performance"],
    },
    {
        category: "Web & Frontend Technologies",
        icon: Code2,
        items: ["TypeScript / JavaScript", "React.js / Next.js", "Tailwind CSS", "State Management (Redux/MobX)"],
    },
    {
        category: "Infrastructure & Quality",
        icon: Terminal,
        items: ["CI/CD (Bitrise/Fastlane)", "Testing (Jest/XCTest)", "Design Systems", "App Store & Play Store Deployment"],
    },
    {
        category: "Engineering Leadership",
        icon: Zap,
        items: ["Technical Strategy", "Team Mentorship", "System Architecture", "Cross-functional Leadership"],
    },
];

export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[];
    tech: string[];
}

export const EXPERIENCES: Experience[] = [
    {
        company: "MoneyLion",
        role: "Staff Engineer",
        period: "Dec 2020 - Present",
        location: "Kuala Lumpur, Malaysia",
        description: [
            "Built Mobile Design System used by 35+ engineers across platforms",
            "Optimized performance to handle 10× traffic spikes during major campaigns",
            "Led Apple Pay/Google Pay integration - increased conversion by 15%",
            "Mentored 10+ engineers - 3 promoted to senior roles within a year",
            "Improved CI/CD workflows, reducing deployment time by 40%",
        ],
        tech: ["React Native", "iOS", "Design Systems", "CI/CD"],
    },
    {
        company: "Pop Meals (formerly Dahmakan)",
        role: "Senior iOS Software Engineer",
        period: "Jun 2018 - Dec 2020",
        location: "Kuala Lumpur, Malaysia",
        description: [
            "Led iOS and React Native apps serving 100K+ daily orders",
            "Shipped features for consumer and rider apps with zero downtime",
            "Improved app performance - reduced crash rate by 60%",
            "Collaborated cross-functionally to deliver 20+ features quarterly",
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

export const PROJECTS: Project[] = [
    {
        id: "moneylion",
        title: "MoneyLion App",
        description: "Leading the mobile engineering team for a financial super app. Architected the Marketplace vertical generating $1M+ weekly revenue.",
        longDescription: "As a Staff Engineer at MoneyLion, I lead the mobile engineering efforts for a comprehensive financial super app that serves millions of users. My role involves not just writing code, but defining the technical strategy, mentoring a team of engineers, and ensuring the app's performance and scalability. I played a pivotal role in architecting the Marketplace vertical, a key revenue driver for the company.",
        challenges: [
            "Scaling the app to handle 10x traffic during major marketing campaigns.",
            "Integrating complex third-party financial services while maintaining a seamless user experience.",
            "Ensuring consistency across iOS and Android platforms with a unified design system."
        ],
        solutions: [
            "Implemented a robust caching strategy and optimized API calls to reduce server load.",
            "Developed a modular architecture that allows for easy integration and testing of new features.",
            "Built a custom React Native UI library that is used across all mobile teams."
        ],
        features: [
            "Financial Marketplace",
            "Instacash Advances",
            "RoarMoney Banking",
            "Crypto Trading"
        ],
        tech: ["React Native", "iOS", "Design Systems", "Redux", "Node.js"],
        image: moneylion,
        links: {
            ios: "https://apps.apple.com/us/app/moneylion-banking-cash-back/id1064677082",
            android: "https://play.google.com/store/apps/details?id=com.moneylion.android.beta&hl=en_US"
        }
    },
    {
        id: "dahmakan-rider",
        title: "Pop Meals Rider App",
        subtitle: "Logistics & Delivery",
        description: "The app helps Pop Meals riders to delivery delicious food to the Customers. Features include route optimization, customer chat, and navigation.",
        longDescription: "The Pop Meals Rider App was built to empower our delivery fleet. It's a mission-critical tool that riders use to receive orders, navigate to customers, and communicate with support. The app needed to be extremely reliable, battery-efficient, and easy to use under various outdoor conditions.",
        challenges: [
            "Real-time location tracking without draining the rider's battery.",
            "Handling offline scenarios when riders enter areas with poor connectivity.",
            "Calculating the most efficient delivery routes dynamically."
        ],
        solutions: [
            "Optimized background location updates and implemented batched syncing.",
            "Built a robust offline-first architecture using local storage and sync queues.",
            "Integrated Google Maps API for real-time traffic-aware routing."
        ],
        features: [
            "Real-time Order Acceptance",
            "Turn-by-turn Navigation",
            "Earnings Dashboard",
            "In-app Chat Support"
        ],
        tech: ["React Native", "Navigation", "Real-time Chat", "Google Maps API", "Firebase"],
        image: popMealsRider,
        links: {
            ios: "https://apps.apple.com/us/app/id1435266531",
            android: "https://play.google.com/store/apps/details?id=com.dahmakan.riderapp"
        }
    },
    {
        id: "dahmakan-ios",
        title: "Pop Meals Customer App",
        subtitle: "Food Delivery Platform",
        description: "In-house food delivery service app. Helps users order food at the tap of a fingertip. Includes live order tracking and rider chat.",
        longDescription: "The Dahmakan Consumer App is the face of our food delivery service. It allows users to browse our daily changing menu, place orders, and track their delivery in real-time. The focus was on creating a delightful, buttery-smooth user experience that encourages repeat orders.",
        challenges: [
            "Ensuring 60fps animations and smooth transitions on older iOS devices.",
            "Managing complex state for cart, orders, and user preferences.",
            "Implementing a secure and seamless payment flow."
        ],
        solutions: [
            "Heavily optimized table views and image loading using Texture (AsyncDisplayKit).",
            "Adopted a unidirectional data flow architecture for predictable state management.",
            "Integrated Stripe and local payment gateways with robust error handling."
        ],
        features: [
            "Daily Menu Rotation",
            "Live Order Tracking",
            "Smart Recommendations",
            "Loyalty Rewards Program"
        ],
        tech: ["iOS", "Swift", "Live Tracking", "Real-time Chat", "Core Data", "Stripe"],
        image: popMeals,
        links: {
            ios: "https://apps.apple.com/my/app/id1030383844"
        }
    },
];

export const ARTICLES = [
    {
        title: "5 Years & Billions in Revenue: Shopify’s Epic React Native Journey",
        date: "Nov 2025",
        platform: "LinkedIn",
        link: "https://www.linkedin.com/pulse/5-years-billions-revenue-shopifys-epic-react-native-journey-bhavsar-z9qnf",
        description: "A deep dive into how Shopify leveraged React Native to scale their mobile engineering and drive billions in revenue.",
    },
    {
        title: "Run project on New OS from older Xcode ⌚️ 📱",
        date: "Mar 2018",
        platform: "Medium",
        link: "https://medium.com/@harshalb/run-project-on-new-os-from-older-xcode-%EF%B8%8F-85fe46d766f0",
        description: "A guide on how to debug apps on newer iOS versions using older Xcode versions.",
    },
];
