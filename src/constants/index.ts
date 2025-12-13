import { Code2, Smartphone, Terminal, Zap } from 'lucide-react'
import { DayOneIcon, CrossPlatformIcon, RemoteIcon } from '../components/Icons'
import popMeals from '../assets/pop_meals_customer.webp'
import popMealsRider from '../assets/pop_meals_rider.webp'
import moneylion from '../assets/moneylion.webp'

export interface Project {
  id: string
  title: string
  subtitle?: string
  description: string
  longDescription: string
  challenges?: string[]
  solutions?: string[]
  features?: string[]
  tech: string[]
  image: string
  links?: {
    ios?: string
    android?: string
    web?: string
  }
  link?: string
}

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Writing', href: '#writing' },
  { name: 'Contact', href: '#contact' },
]

export const NAVBAR_HEIGHT = 80

export const HERO_CONTENT = {
  mainHeading: 'I HELP COMPANIES',
  rotatingText: [
    'SCALE TO MILLIONS',
    2000,
    'SHIP FEATURES FASTER',
    2000,
    'BUILD WORLD-CLASS TEAMS',
    2000,
  ],
  subHeading: {
    first: 'STAFF ENGINEER',
    second: 'REACT NATIVE SPECIALIST',
    experience: '10+ YEARS EXP',
    connector: '&',
  },
  intro: {
    prefix: 'Engineering scalable mobile solutions at',
    highlight: 'MoneyLion',
    suffix:
      '. Specializing in high-performance React Native architectures and distributed systems.',
  },
  buttons: {
    primary: 'View Projects',
    secondary: 'Contact Me',
  },
  stats: [
    { number: '10+', label: 'YEARS_EXP' },
    { number: '$1M+', label: 'REVENUE_GEN' },
    { number: '10x', label: 'SCALABILITY' },
    { number: '15+', label: 'GLOBAL_TEAMS' },
  ],
}

export const SKILLS = [
  {
    category: 'Mobile & Core Engineering',
    icon: Smartphone,
    items: ['React Native', 'iOS (UIKit / SwiftUI)', 'Mobile Performance'],
  },
  {
    category: 'Web & Frontend Technologies',
    icon: Code2,
    items: [
      'TypeScript / JavaScript',
      'React.js / Next.js',
      'Tailwind CSS',
      'State Management (Redux/MobX)',
    ],
  },
  {
    category: 'Infrastructure & Quality',
    icon: Terminal,
    items: [
      'CI/CD (Bitrise/Fastlane)',
      'Testing (Jest/XCTest)',
      'Design Systems',
      'App Store & Play Store Deployment',
    ],
  },
  {
    category: 'Engineering Leadership',
    icon: Zap,
    items: [
      'Technical Strategy',
      'Team Mentorship',
      'System Architecture',
      'Cross-functional Leadership',
    ],
  },
]

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  description: string[]
  tech: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    company: 'MoneyLion',
    role: 'Staff Engineer',
    period: 'Dec 2020 - Present',
    location: 'Kuala Lumpur, Malaysia',
    description: [
      'Built Mobile Design System used by 35+ engineers across platforms',
      'Optimized performance to handle 10× traffic spikes during major campaigns',
      'Led Apple Pay/Google Pay integration - increased conversion by 15%',
      'Mentored 10+ engineers - 3 promoted to senior roles within a year',
      'Improved CI/CD workflows, reducing deployment time by 40%',
    ],
    tech: ['React Native', 'iOS', 'Design Systems', 'CI/CD'],
  },
  {
    company: 'Pop Meals (formerly Dahmakan)',
    role: 'Senior iOS Software Engineer',
    period: 'Jun 2018 - Dec 2020',
    location: 'Kuala Lumpur, Malaysia',
    description: [
      'Led iOS and React Native apps serving 100K+ daily orders',
      'Shipped features for consumer and rider apps with zero downtime',
      'Improved app performance - reduced crash rate by 60%',
      'Collaborated cross-functionally to deliver 20+ features quarterly',
    ],
    tech: ['Swift', 'Objective-C', 'React Native', 'MobX', 'Bitrise'],
  },
  {
    company: 'UMAI Restaurant Software',
    role: 'iOS Engineer',
    period: 'Oct 2017 - Jun 2018',
    location: 'Kuala Lumpur, Malaysia',
    description: [
      "In charge of the development of 'Umai - For Restaurants' iPad Application.",
      'Worked closely with Design and Product teams to solve problems for restaurants.',
    ],
    tech: ['Swift 4', 'iPadOS', 'Product Development'],
  },
  {
    company: 'Cuelogic Technologies',
    role: 'Software Engineer',
    period: 'Jul 2017 - Oct 2017',
    location: 'Pune, India',
    description: [
      'Worked on a Social Chat application and an IOT-based Application for a kitchen appliance startup.',
      'Mentored new developers on iOS development with Swift and Auto-layout.',
    ],
    tech: ['Swift', 'IoT', 'Chat'],
  },
  {
    company: 'Winjit Technologies',
    role: 'Software Developer',
    period: 'Jul 2015 - Jun 2017',
    location: 'Nashik, India',
    description: [
      'Developed 2 consumer-facing applications and 1 Enterprise Application.',
      'Involved in all phases of Application Development: Prototyping, Developing, and Client Communication.',
      'Received individual and team awards for outstanding performance.',
    ],
    tech: ['Swift', 'Objective-C', 'Enterprise Apps'],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'moneylion',
    title: 'MoneyLion App',
    description:
      'Leading the mobile engineering team for a financial super app. Architected the Marketplace vertical generating $1M+ weekly revenue.',
    longDescription:
      "As a Staff Engineer at MoneyLion, I lead the mobile engineering efforts for a comprehensive financial super app that serves millions of users. My role involves not just writing code, but defining the technical strategy, mentoring a team of engineers, and ensuring the app's performance and scalability. I played a pivotal role in architecting the Marketplace vertical, a key revenue driver for the company.",
    challenges: [
      'Scaling the app to handle 10x traffic during major marketing campaigns.',
      'Integrating complex third-party financial services while maintaining a seamless user experience.',
      'Ensuring consistency across iOS and Android platforms with a unified design system.',
    ],
    solutions: [
      'Implemented a robust caching strategy and optimized API calls to reduce server load.',
      'Developed a modular architecture that allows for easy integration and testing of new features.',
      'Built a custom React Native UI library that is used across all mobile teams.',
    ],
    features: [
      'Financial Marketplace',
      'Instacash Advances',
      'RoarMoney Banking',
      'Crypto Trading',
    ],
    tech: ['React Native', 'iOS', 'Design Systems', 'Redux', 'Node.js'],
    image: moneylion,
    links: {
      ios: 'https://apps.apple.com/us/app/moneylion-banking-cash-back/id1064677082',
      android:
        'https://play.google.com/store/apps/details?id=com.moneylion.android.beta&hl=en_US',
    },
  },
  {
    id: 'dahmakan-rider',
    title: 'Pop Meals Rider App',
    subtitle: 'Logistics & Delivery',
    description:
      'The app helps Pop Meals riders to delivery delicious food to the Customers. Features include route optimization, customer chat, and navigation.',
    longDescription:
      "The Pop Meals Rider App was built to empower our delivery fleet. It's a mission-critical tool that riders use to receive orders, navigate to customers, and communicate with support. The app needed to be extremely reliable, battery-efficient, and easy to use under various outdoor conditions.",
    challenges: [
      "Real-time location tracking without draining the rider's battery.",
      'Handling offline scenarios when riders enter areas with poor connectivity.',
      'Calculating the most efficient delivery routes dynamically.',
    ],
    solutions: [
      'Optimized background location updates and implemented batched syncing.',
      'Built a robust offline-first architecture using local storage and sync queues.',
      'Integrated Google Maps API for real-time traffic-aware routing.',
    ],
    features: [
      'Real-time Order Acceptance',
      'Turn-by-turn Navigation',
      'Earnings Dashboard',
      'In-app Chat Support',
    ],
    tech: [
      'React Native',
      'Navigation',
      'Real-time Chat',
      'Google Maps API',
      'Firebase',
    ],
    image: popMealsRider,
    links: {
      ios: 'https://apps.apple.com/us/app/id1435266531',
      android:
        'https://play.google.com/store/apps/details?id=com.dahmakan.riderapp',
    },
  },
  {
    id: 'dahmakan-ios',
    title: 'Pop Meals Customer App',
    subtitle: 'Food Delivery Platform',
    description:
      'In-house food delivery service app. Helps users order food at the tap of a fingertip. Includes live order tracking and rider chat.',
    longDescription:
      'The Dahmakan Consumer App is the face of our food delivery service. It allows users to browse our daily changing menu, place orders, and track their delivery in real-time. The focus was on creating a delightful, buttery-smooth user experience that encourages repeat orders.',
    challenges: [
      'Ensuring 60fps animations and smooth transitions on older iOS devices.',
      'Managing complex state for cart, orders, and user preferences.',
      'Implementing a secure and seamless payment flow.',
    ],
    solutions: [
      'Heavily optimized table views and image loading using Texture (AsyncDisplayKit).',
      'Adopted a unidirectional data flow architecture for predictable state management.',
      'Integrated Stripe and local payment gateways with robust error handling.',
    ],
    features: [
      'Daily Menu Rotation',
      'Live Order Tracking',
      'Smart Recommendations',
      'Loyalty Rewards Program',
    ],
    tech: [
      'iOS',
      'Swift',
      'Live Tracking',
      'Real-time Chat',
      'Core Data',
      'Stripe',
    ],
    image: popMeals,
    links: {
      ios: 'https://apps.apple.com/my/app/id1030383844',
    },
  },
]

export const ARTICLES = [
  {
    title: '5 Years & Billions in Revenue: Shopify’s Epic React Native Journey',
    date: 'Nov 2025',
    platform: 'LinkedIn',
    link: 'https://www.linkedin.com/pulse/5-years-billions-revenue-shopifys-epic-react-native-journey-bhavsar-z9qnf',
    description:
      'A deep dive into how Shopify leveraged React Native to scale their mobile engineering and drive billions in revenue.',
  },
  {
    title: 'Run project on New OS from older Xcode ⌚️ 📱',
    date: 'Mar 2018',
    platform: 'Medium',
    link: 'https://medium.com/@harshalb/run-project-on-new-os-from-older-xcode-%EF%B8%8F-85fe46d766f0',
    description:
      'A guide on how to debug apps on newer iOS versions using older Xcode versions.',
  },
]

export const SOCIAL_LINKS = {
  github: {
    url: 'https://github.com/hb2708',
    label: 'GitHub',
  },
  linkedin: {
    url: 'https://linkedin.com/in/harshal-ios-swift-react-native',
    label: 'LinkedIn',
  },
  x: {
    url: 'https://x.com/harshalb_',
    label: 'X (Twitter)',
  },
  email: {
    address: 'hb2708@gmail.com',
    url: 'mailto:hb2708@gmail.com',
    label: 'Email',
  },
  portfolioRepo: 'https://github.com/hb2708/portfolio',
  resume: '/resume.pdf',
}

export const NAVBAR_CONTENT = {
  logo: {
    first: 'HARSHAL',
    second: ' BHAVSAR',
  },
  resumeButton: 'Resume',
  mobileMenu: {
    close: 'Close menu',
    open: 'Open menu',
  },
}

export const ABOUT_CONTENT = {
  sectionTitle: {
    number: '01.',
    text: 'About Me',
  },
  role: {
    title: 'Staff Engineer & ',
    highlight: 'Product Builder',
  },
  intro: [
    {
      text: 'I specialize in ',
      highlight1: 'React Native',
      text2: ' and ',
      highlight2: 'iOS',
      text3:
        ' development. With 10+ years of experience, I build apps that work well and are easy to use.',
    },
    {
      text: 'Currently leading mobile engineering at ',
      highlight: 'MoneyLion',
      text2:
        ', I help the team solve hard technical problems to reach business goals.',
    },
  ],
  visaStatus: 'No visa sponsorship required (Malaysia / India)',
  leadership: {
    title: 'How I Lead',
    stats:
      'Mentored 10+ engineers • Built systems serving millions • Led teams across 3 continents',
    philosophy:
      'My leadership philosophy: Empower people, automate toil, ship value.',
  },
  pillars: {
    title: 'Great engineering teams are built on ',
    highlight: 'three pillars',
    items: [
      {
        title: 'Psychological Safety',
        description:
          'Creating a safe space where everyone can share ideas and learn from mistakes.',
      },
      {
        title: 'Automation First',
        description:
          'Automating repetitive tasks so the team can focus on building new features.',
      },
      {
        title: 'Scalable Architecture',
        description:
          'Building simple, maintainable systems that grow with the business.',
      },
    ],
  },
  valueProps: {
    title: 'Why ',
    highlight: 'Work With Me',
  },
}

export const ABOUT_VALUE_PROPS = [
  {
    title: 'Day One Impact',
    description:
      "I've shipped production code on my first week at every company. No 6-month ramp-up I dive into legacy codebases and start delivering immediately.",
    icon: DayOneIcon,
  },
  {
    title: 'Cross-Platform Expertise',
    description:
      'Fluent in React Native, iOS native, and web. I can architect solutions that share code intelligently and ship features across all platforms simultaneously.',
    icon: CrossPlatformIcon,
  },
  {
    title: 'Remote-First Mindset',
    description:
      "Led distributed teams across 3 continents. I excel at async communication, documentation, and building systems that don't require me to be the bottleneck.",
    icon: RemoteIcon,
  },
]

export const PROJECTS_CONTENT = {
  sectionTitle: {
    number: '02.',
    text: 'Selected Works',
  },
  viewCaseStudy: 'View Case Study',
  viewProject: 'View Project',
}

export const SKILLS_CONTENT = {
  sectionTitle: {
    number: '03.',
    text: 'Technical Arsenal',
  },
  coreExpertise: 'Core Expertise',
  alsoProficientIn: 'Also Proficient In',
}

export const FEATURED_SKILLS = [
  {
    name: 'React Native',
    level: 'Expert',
    years: '6+',
    description:
      "Built and shipped 10+ production apps serving millions of users. Architected MoneyLion's mobile platform handling $1M+ weekly transactions.",
    highlights: [
      'New Architecture (Fabric)',
      'TurboModules & JSI',
      'Performance optimization',
      'Native modules',
    ],
  },
  {
    name: 'iOS Native',
    level: 'Expert',
    years: '10+',
    description:
      'Deep expertise in UIKit and SwiftUI. Led iOS development for food delivery app serving 100K+ daily orders with zero downtime.',
    highlights: [
      'Swift',
      'UIKit',
      'SwiftUI',
      'Core Data',
      'Performance tuning',
    ],
  },
  {
    name: 'System Design',
    level: 'Advanced',
    years: '6+',
    description:
      'Architected scalable mobile systems handling 10× traffic spikes. Built design systems used by 35+ engineers across platforms.',
    highlights: [
      'Microservices',
      'CI/CD pipelines',
      'Design systems',
      'Performance at scale',
    ],
  },
]

export const OTHER_SKILLS = {
  'Frontend & Web': ['TypeScript', 'React.js', 'Next.js', 'Tailwind CSS'],
  'Backend & APIs': ['Node.js', 'REST APIs', 'GraphQL', 'Firebase'],
  'DevOps & Tools': ['Bitrise CI/CD', 'Fastlane', 'Git', 'Xcode'],
  'Payments & Integration': [
    'Apple Pay',
    'Google Pay',
    'Stripe',
    'In-App Purchases',
  ],
}

export const EXPERIENCE_CONTENT = {
  sectionTitle: {
    number: '04.',
    text: 'Experience',
  },
}

export const WRITING_CONTENT = {
  sectionTitle: {
    number: '05.',
    text: 'Writing',
  },
  readArticle: 'Read Article',
}

export const FOOTER_CONTENT = {
  title: "Let's Build Something Exceptional",
  description:
    "I'm always open to discussing technical leadership roles and complex engineering challenges. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  cta: 'Get In Touch',
  copyright: `© ${new Date().getFullYear()} Harshal Bhavsar. All rights reserved.`,
  viewSource: 'View Source',
}
