/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-primary font-medium text-lg mb-4 tracking-wide">
                        Hi, my name is
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-text mb-6 leading-tight">
                        Harshal Bhavsar.
                        <span className="block text-muted">
                            <TypeAnimation
                                sequence={[
                                    'I build mobile apps.',
                                    2000,
                                    'I craft pixel-perfect UIs.',
                                    2000,
                                    'I lead engineering teams.',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <p className="text-muted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                        Staff Engineer & React Native Developer with 10+ years of experience.
                        I specialize in building scalable, high-performance mobile apps that
                        drive business growth. Currently leading mobile engineering at MoneyLion.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#projects"
                            className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-all duration-300 font-medium"
                        >
                            Check out my work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-surface text-text border border-white/5 rounded-lg hover:bg-white/5 transition-all duration-300 font-medium"
                        >
                            <Download className="w-4 h-4" />
                            Resume
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-6 text-muted">
                        <a
                            href="https://github.com/hb2708"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/harshal-ios-swift-react-native"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:hb2708@gmail.com"
                            className="hover:text-primary transition-colors"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted/50"
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

export default Hero;
