"use client";
import { useEffect, useState } from "react";

interface ImageData {
    id: string;
    url: string;
}

const Gallery = () => {
    const [images, setImages] = useState<ImageData[]>([]);

    useEffect(() => {
        async function fetchImages() {
            try {
                const res = await fetch("/api/gallery");
                if (!res.ok) throw new Error("Failed to fetch images");
                const data: ImageData[] = await res.json();
                setImages(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchImages();
    }, []);

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {images.map((image) => (
                <div key={image.id} className="overflow-hidden rounded-lg">
                <img
                    src={image.url}
                    alt="Gallery Image"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
                </div>
            ))}
        </div>
    );
};

export default Gallery;