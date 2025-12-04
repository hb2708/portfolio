
import { motion } from 'framer-motion';
import { ARTICLES, WRITING_CONTENT } from '../constants';
import { ReadMoreIcon } from './Icons';

const Writing = () => {
    return (
        <section id="writing" className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-text mb-12 flex items-center"
                >
                    <span className="text-primary mr-2">{WRITING_CONTENT.sectionTitle.number}</span> {WRITING_CONTENT.sectionTitle.text}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {ARTICLES.map((article, index) => (
                        <motion.a
                            key={index}
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col h-full bg-surface p-8 rounded-xl border border-white/5 hover:border-primary/30 hover:bg-surface/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                                        {article.platform}
                                    </span>
                                    <span className="text-sm text-muted font-mono">{article.date}</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-primary transition-colors leading-tight">
                                {article.title}
                            </h3>

                            <p className="text-muted text-base leading-relaxed mb-8 flex-grow">
                                {article.description}
                            </p>

                            <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                {WRITING_CONTENT.readArticle}
                                <ReadMoreIcon className="w-4 h-4 ml-2" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Writing;
