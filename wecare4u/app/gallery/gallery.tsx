"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
    <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4 px-4">
      <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-emerald-800/30 px-6 pb-16 pt-64 text-center text-black shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <span className="flex max-h-full max-w-full items-center justify-center"></span>
          <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-green-900/10 via-emerald-900 to-green-700"></span>
        </div>
        <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
          We Care For You Foundation
        </h1>
        <p className="max-w-[40ch] text-black/75 sm:max-w-[32ch]">
          First project January 26, 2024 Lorem ipsum odor amet, consectetuer
          adipiscing elit.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex-1 min-w-[250px] max-w-[400px]">
            <Image
              src={image.url}
              alt="Gallery Image"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
