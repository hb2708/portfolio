import { motion } from 'framer-motion';

const Awards = () => {
    return (
        <section id="awards" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-text mb-12 flex items-center"
                >
                    <span className="text-primary mr-2">06.</span> Leadership & Awards
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Awards Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                    >
                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0V5.625a2.25 2.25 0 1 0-4.5 0v9.75m0 0h-4.5" />
                            </svg>
                        </div>

                        <h3 className="text-2xl font-bold text-text mb-4">Lion Heart Award</h3>
                        <p className="text-muted leading-relaxed mb-4">
                            Recognized by the CEO at MoneyLion for exceptional dedication and impact. This award highlights contributions that go beyond code, fostering a culture of excellence and resilience.
                        </p>
                    </motion.div>

                    {/* Mentorship Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-secondary/30 transition-all duration-300 group"
                    >
                        <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                        </div>

                        <h3 className="text-2xl font-bold text-text mb-4">Engineering Mentorship</h3>
                        <p className="text-muted leading-relaxed mb-4">
                            Mentored <span className="text-text font-semibold">10+ junior engineers</span>, significantly improving team velocity and code quality. Spearheaded initiatives to refine hiring processes and onboarding excellence.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
