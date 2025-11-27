
import { motion } from 'framer-motion';
import { ARTICLES } from '../constants';

const Writing = () => {
    return (
        <section id="writing" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-text mb-12 flex items-center"
                >
                    <span className="text-primary mr-2">05.</span> Writing
                </motion.h2>

                <div className="max-w-4xl mx-auto grid gap-6">
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
                            className="group block p-8 bg-surface rounded-xl border border-white/5 hover:border-primary/30 hover:bg-surface/80 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-bold px-2 py-1 rounded bg-secondary/10 text-secondary uppercase tracking-wider">
                                            {article.platform}
                                        </span>
                                        <span className="text-sm text-muted font-mono">{article.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed max-w-2xl">
                                        {article.description}
                                    </p>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-muted group-hover:bg-primary group-hover:text-white transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Writing;
