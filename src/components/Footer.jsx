import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-background border-t border-white/10 py-20">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Ready to Scale Your Mobile Team?</h2>
                    <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
                        I&apos;m always open to discussing technical leadership roles and complex engineering challenges.
                        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>

                    <a
                        href="mailto:hb2708@gmail.com"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 mb-16"
                    >
                        <Mail className="w-5 h-5" />
                        Let&apos;s Chat
                    </a>

                    <div className="flex items-center justify-center gap-8 mb-16">
                        <a
                            href="https://github.com/hb2708"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-primary transition-colors flex flex-col items-center gap-2 group"
                        >
                            <div className="p-4 bg-surface rounded-full border border-white/5 group-hover:border-primary/30 transition-colors">
                                <Github className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/harshal-ios-swift-react-native"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-primary transition-colors flex flex-col items-center gap-2 group"
                        >
                            <div className="p-4 bg-surface rounded-full border border-white/5 group-hover:border-primary/30 transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">LinkedIn</span>
                        </a>
                    </div>

                    <div className="pt-8 border-t border-white/5 text-sm text-muted/60">
                        <p className="mb-4">© {new Date().getFullYear()} Harshal Bhavsar. All rights reserved.</p>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <a
                                href="https://github.com/hb2708/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors flex items-center gap-2"
                            >
                                <Github className="w-4 h-4" />
                                View Source
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
