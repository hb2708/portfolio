import { memo } from 'react';
import { motion } from 'framer-motion';
import {
    VisaIcon,
    PsychologicalSafetyIcon,
    AutomationIcon,
    ScalableIcon
} from './Icons';
import { ABOUT_CONTENT, ABOUT_VALUE_PROPS } from '../constants';

const About = () => {
    // valueProps moved to constants

    return (
        <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-start mb-24">
                    {/* Bio Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-text mb-12 flex items-center">
                            <span className="text-primary mr-2">{ABOUT_CONTENT.sectionTitle.number}</span> {ABOUT_CONTENT.sectionTitle.text}
                        </h2>
                        <h3 className="text-2xl font-bold text-text mb-6">
                            {ABOUT_CONTENT.role.title}<span className="text-primary">{ABOUT_CONTENT.role.highlight}</span>
                        </h3>
                        <p className="text-muted mb-6 leading-relaxed text-lg">
                            {ABOUT_CONTENT.intro[0].text}<span className="text-text font-medium">{ABOUT_CONTENT.intro[0].highlight1}</span>{ABOUT_CONTENT.intro[0].text2}<span className="text-text font-medium">{ABOUT_CONTENT.intro[0].highlight2}</span>{ABOUT_CONTENT.intro[0].text3}
                        </p>
                        <p className="text-muted mb-6 leading-relaxed text-lg">
                            {ABOUT_CONTENT.intro[1].text}<span className="text-text font-medium">{ABOUT_CONTENT.intro[1].highlight}</span>{ABOUT_CONTENT.intro[1].text2}
                        </p>

                        {/* Subtle visa status badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm">
                            <VisaIcon className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 font-medium">{ABOUT_CONTENT.visaStatus}</span>
                        </div>
                    </motion.div>

                    {/* Philosophy Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full md:w-1/2 bg-surface p-8 rounded-2xl border border-white/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <h3 className="text-2xl font-bold text-text mb-6">{ABOUT_CONTENT.leadership.title}</h3>

                        {/* Impact-focused intro instead of generic quote */}
                        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                            <p className="text-lg text-text font-semibold mb-2">
                                {ABOUT_CONTENT.leadership.stats}
                            </p>
                            <p className="text-muted text-sm">
                                {ABOUT_CONTENT.leadership.philosophy}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Three Pillars - Full Width Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-24"
                >
                    <h3 className="text-2xl font-bold text-text mb-8 text-center">
                        {ABOUT_CONTENT.pillars.title}<span className="text-primary">{ABOUT_CONTENT.pillars.highlight}</span>
                    </h3>

                    {/* Enhanced bullet points with icons */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-start gap-4 p-6 bg-surface rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1">
                            <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                <PsychologicalSafetyIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-text font-bold mb-2 text-lg">{ABOUT_CONTENT.pillars.items[0].title}</h4>
                                <p className="text-muted text-sm leading-relaxed">{ABOUT_CONTENT.pillars.items[0].description}</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-4 p-6 bg-surface rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1">
                            <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                <AutomationIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-text font-bold mb-2 text-lg">{ABOUT_CONTENT.pillars.items[1].title}</h4>
                                <p className="text-muted text-sm leading-relaxed">{ABOUT_CONTENT.pillars.items[1].description}</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-4 p-6 bg-surface rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1">
                            <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                <ScalableIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-text font-bold mb-2 text-lg">{ABOUT_CONTENT.pillars.items[2].title}</h4>
                                <p className="text-muted text-sm leading-relaxed">{ABOUT_CONTENT.pillars.items[2].description}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Why Work With Me - Employer Value Props */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold text-text mb-8 text-center">
                        {ABOUT_CONTENT.valueProps.title}<span className="text-primary">{ABOUT_CONTENT.valueProps.highlight}</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ABOUT_VALUE_PROPS.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                            className="bg-surface p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-2 group"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background transition-all duration-300">
                                <value.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-text mb-3">{value.title}</h4>
                            <p className="text-base text-muted leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(About);
