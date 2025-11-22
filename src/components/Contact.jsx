/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 bg-surface/30 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Get In Touch</h2>
                    <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
                        I'm currently open to new opportunities. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>

                    <a
                        href="mailto:hb2708@gmail.com"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-all duration-300 font-medium mb-16"
                    >
                        <Mail className="w-5 h-5" />
                        Say Hello
                    </a>

                    <div className="flex items-center justify-center gap-8 text-muted">
                        <a
                            href="https://github.com/hb2708"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors flex flex-col items-center gap-2 group"
                        >
                            <div className="p-3 bg-surface rounded-full border border-white/5 group-hover:border-primary/20 transition-colors">
                                <Github className="w-6 h-6" />
                            </div>
                            <span className="text-sm">GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/harshal-ios-swift-react-native"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors flex flex-col items-center gap-2 group"
                        >
                            <div className="p-3 bg-surface rounded-full border border-white/5 group-hover:border-primary/20 transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <span className="text-sm">LinkedIn</span>
                        </a>
                    </div>

                    <footer className="mt-20 text-sm text-muted/50">
                        <p>© {new Date().getFullYear()} Harshal Bhavsar. Built with React & Tailwind.</p>
                        <p className="mt-2">
                            <a
                                href="https://github.com/hb2708/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors inline-flex items-center gap-1"
                            >
                                View Source on GitHub
                            </a>
                        </p>
                    </footer>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
