import { motion } from 'framer-motion';
import { LionHeartIcon, MentorshipIcon } from './Icons';

const Awards = () => {
    return (
        <section id="awards" className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-text mb-12 flex items-center"
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
                        className="bg-surface p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                    >
                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background transition-all duration-300">
                            <LionHeartIcon className="w-8 h-8" />
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
                        transition={{ duration: 0.2, delay: 0.2 }}
                        className="bg-surface p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                    >
                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background transition-all duration-300">
                            <MentorshipIcon className="w-8 h-8" />
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
