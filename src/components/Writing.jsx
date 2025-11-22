/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { ARTICLES } from "../constants";

const Writing = () => {
    return (
        <section id="writing" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Writing</h2>
                    <p className="text-muted text-lg">Thoughts and tutorials on mobile development.</p>
                </motion.div>

                <div className="grid gap-6">
                    {ARTICLES.map((article, index) => (
                        <motion.a
                            key={index}
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group block p-6 bg-surface/50 rounded-xl border border-white/5 hover:border-primary/20 hover:bg-surface/80 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">
                                            {article.platform}
                                        </span>
                                        <span className="text-sm text-muted">{article.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-muted text-sm">{article.description}</p>
                                </div>
                                <ExternalLink className="w-5 h-5 text-muted group-hover:text-primary transition-colors shrink-0" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Writing;
