import React, { useState, useEffect } from 'react';
import { getApodRange } from '../services/api';
import ImageCard from './ImageCard';
import { format, subDays } from 'date-fns';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const end = new Date();
                const start = subDays(end, 10);
                const data = await getApodRange(format(start, 'yyyy-MM-dd'), format(end, 'yyyy-MM-dd'));
                setImages(data.reverse());
            } catch (error) {
                console.error("Failed to fetch gallery", error);
            } finally {
                setLoading(false);
            }
        };
        fetchGallery();
    }, []);

    if (loading) return <div className="text-center py-20">Loading galaxy...</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img) => (
                <ImageCard key={img.date} data={img} onClick={(data) => console.log(data)} />
            ))}
        </div>
    );
};

export default Gallery;
