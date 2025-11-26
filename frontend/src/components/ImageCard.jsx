import React from 'react';
import { motion } from 'framer-motion';

const ImageCard = ({ data, onClick }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass-panel overflow-hidden cursor-pointer group"
            onClick={() => onClick(data)}
        >
            <div className="aspect-video overflow-hidden">
                {data.media_type === 'video' ? (
                    <div className="w-full h-full bg-black flex items-center justify-center text-space-100/50">Video Content</div>
                ) : (
                    <img
                        src={data.url}
                        alt={data.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                )}
            </div>
            <div className="p-4">
                <h3 className="text-xl text-white mb-2 line-clamp-1">{data.title}</h3>
                <p className="text-sm text-space-100/60">{data.date}</p>
            </div>
        </motion.div>
    );
};

export default ImageCard;
