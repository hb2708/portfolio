import harshalImg from '../assets/harshal.webp';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center md:text-left z-10"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-text leading-tight mb-6">
                            I help companies <br />
                            <span className="text-primary">
                                <TypeAnimation
                                    sequence={[
                                        'scale to millions of users.',
                                        2000,
                                        'ship features faster.',
                                        2000,
                                        'build world-class teams.',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </span>
                        </h1>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-xl md:text-2xl text-muted mb-6 font-medium"
                        >
                            Staff Engineer & React Native Specialist <span className="hidden md:inline">|</span> <br className="md:hidden" /> 10+ Years Experience
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-lg text-muted mb-8 max-w-2xl leading-relaxed"
                        >
                            Currently leading mobile engineering teams at <span className="text-text font-semibold">MoneyLion</span>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25 text-lg focus:ring-2 focus:ring-primary focus:outline-none"
                            >
                                See My Work
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 border-2 border-primary/30 text-text font-semibold rounded-lg hover:border-primary hover:bg-primary/10 transition-all focus:ring-2 focus:ring-primary focus:outline-none"
                            >
                                Let&apos;s Talk
                            </a>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                            className="flex items-center justify-center md:justify-start gap-6 text-muted"
                        >
                            <a href="https://github.com/hb2708" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-primary transition-colors hover:scale-110 transform duration-200 focus:ring-2 focus:ring-primary focus:outline-none rounded-full">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com/in/harshal-ios-swift-react-native" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-primary transition-colors hover:scale-110 transform duration-200 focus:ring-2 focus:ring-primary focus:outline-none rounded-full">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="mailto:hb2708@gmail.com" aria-label="Email Contact" className="hover:text-primary transition-colors hover:scale-110 transform duration-200 focus:ring-2 focus:ring-primary focus:outline-none rounded-full">
                                <Mail className="w-6 h-6" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center md:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96">
                            {/* Decorative gradient blob behind */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>

                            <img
                                src={harshalImg}
                                alt="Harshal Bhavsar"
                                className="relative w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-2xl shadow-primary/10 hover:border-primary/40 hover:shadow-primary/20 transition-all duration-500"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Statistics Ribbon */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
                >
                    <StatItem
                        number="10+"
                        label="Years Experience"
                        context="Mobile development since 2015"
                    />
                    <StatItem
                        number="$1M+"
                        label="Weekly Revenue Generated"
                        context="MoneyLion Marketplace vertical"
                    />
                    <StatItem
                        number="10x"
                        label="Traffic Surge Handling"
                        context="Optimized for major campaigns"
                    />
                    <StatItem
                        number="15+"
                        label="Nationalities Collaborated"
                        context="Global distributed teams"
                    />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted/50 hidden md:block"
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-1 bg-current rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

interface StatItemProps {
    number: string;
    label: string;
    context?: string;
}

const StatItem = ({ number, label, context }: StatItemProps) => (
    <div className="text-center group relative">
        <div className="text-3xl md:text-4xl font-bold text-text mb-2 font-mono">{number}</div>
        <div className="text-sm text-muted uppercase tracking-wider">{label}</div>

        {/* Tooltip on hover */}
        {context && (
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 bg-surface border border-primary/20 rounded-lg text-xs text-muted whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {context}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-surface"></div>
            </div>
        )}
    </div>
);

export default Hero;
