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
                        <h1 className="text-4xl md:text-6xl font-bold text-text leading-tight mb-6">
                            Building Scalable <br />
                            <span className="text-primary">
                                <TypeAnimation
                                    sequence={[
                                        'Mobile Experiences.',
                                        2000,
                                        'React Native Apps.',
                                        2000,
                                        'Engineering Teams.',
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
                                href="#experience"
                                className="px-8 py-3 bg-primary text-background font-bold rounded-lg hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 border border-muted text-text font-medium rounded-lg hover:border-text hover:bg-white/5 transition-all"
                            >
                                Contact Me
                            </a>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                            className="flex items-center justify-center md:justify-start gap-6 text-muted"
                        >
                            <a href="https://github.com/hb2708" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com/in/harshal-ios-swift-react-native" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="mailto:hb2708@gmail.com" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                                <Mail className="w-6 h-6" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative flex justify-center md:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96">
                            {/* Decorative gradient blob behind */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>

                            <img
                                src={harshalImg}
                                alt="Harshal Bhavsar"
                                className="relative w-full h-full object-cover rounded-full border-4 border-surface shadow-2xl grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
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
                    <StatItem number="10+" label="Years Experience" />
                    <StatItem number="$1M+" label="Weekly Revenue Generated" />
                    <StatItem number="10x" label="Traffic Surge Handling" />
                    <StatItem number="15+" label="Nationalities Collaborated" />
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

const StatItem = ({ number, label }) => (
    <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-text mb-2 font-mono">{number}</div>
        <div className="text-sm text-muted uppercase tracking-wider">{label}</div>
    </div>
);

export default Hero;
