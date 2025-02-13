"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = () => {
  const [images, setImages] = useState<string[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/slider");

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Fetched Images:", data);

        setImages(data.map((item: { url: string }) => item.url));
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };

    fetchImages();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Slider Container */}
      <div className="overflow-hidden relative z-10" ref={emblaRef}>
        <div className="flex space-x-4">
          {images.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-auto h-[400px]">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full shadow-lg hover:bg-black transition z-50"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full shadow-lg hover:bg-black transition z-50"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default ImageSlider;
