import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ data }) => {
    if (!data) return null;

    return (
        <section className="relative min-h-[80vh] flex items-center rounded-3xl overflow-hidden my-6">
            <div className="absolute inset-0 z-0">
                {data.media_type === 'video' ? (
                    <iframe
                        src={data.url}
                        title={data.title}
                        className="w-full h-full object-cover"
                        allowFullScreen
                    />
                ) : (
                    <img src={data.hdurl || data.url} alt={data.title} className="w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/60 to-transparent" />
            </div>

            <div className="relative z-10 p-12 max-w-4xl">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-4 py-1 rounded-full bg-accent-500/20 text-accent-400 border border-accent-500/30 mb-4"
                >
                    Astronomy Picture of the Day
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl text-white mb-6"
                >
                    {data.title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-space-100/90 max-w-2xl mb-8 leading-relaxed line-clamp-3"
                >
                    {data.explanation}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <span className="text-sm text-space-100/60">{data.date} • {data.copyright ? `© ${data.copyright}` : 'Public Domain'}</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
