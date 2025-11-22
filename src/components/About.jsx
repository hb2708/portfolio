/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { SKILLS } from "../constants";
import profileImage from "../assets/harshal.webp";

const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-surface/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 flex flex-col md:flex-row items-center gap-12"
                >
                    <div className="w-full md:w-1/3">
                        <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/10 group">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                            {/* Replace src with your actual photo path */}
                            <img
                                src={profileImage}
                                alt="Harshal Bhavsar"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 prose prose-invert max-w-none text-muted text-lg leading-relaxed">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">About Me</h2>
                        <p className="mb-4">
                            I am a <strong>Staff Engineer</strong> and <strong>Mobile Specialist</strong> with over 10 years of experience in building high-impact mobile applications.
                            Currently, I lead mobile engineering teams at <strong>MoneyLion Malaysia</strong>, where I helped launch and scale the Marketplace vertical to generate over <strong>$1 million in weekly revenue</strong>.
                        </p>
                        <p>
                            My passion lies in crafting pixel-perfect user interfaces and optimizing app performance. I have successfully architected reusable design systems
                            and led complex integrations like Apple Pay and Google Pay. Beyond code, I am deeply committed to mentorship, having guided over 10 junior engineers
                            and improved engineering processes across diverse, multicultural teams.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SKILLS.map((skill, index) => {
                        const IconComponent = skill.icon;
                        return (
                            <motion.div
                                key={skill.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-surface p-6 rounded-xl border border-white/5 hover:border-primary/20 transition-colors group"
                            >
                                <div className="mb-4 p-3 bg-background rounded-lg w-fit group-hover:bg-primary/10 transition-colors">
                                    <IconComponent className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-text mb-4">{skill.category}</h3>
                                <ul className="space-y-2">
                                    {skill.items.map((item) => (
                                        <li key={item} className="text-muted text-sm flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;
