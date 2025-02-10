import Image from "next/image";
import heroImage from "@/public/images/hero-banner.jpg";

export default function heroBanner() {
    return ( 
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="Background banner"
              width={1920}
              height={800}
              className="object-cover object-center h-full text-center"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
    
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              We Care For You Foundation
            </h1>
            <div className="text-lg text-gray-300">Proverbs 19:17</div>
            <div className="text-lg text-gray-300 mb-8">
              "Whoever is generous to the poor lends to the Lord, and He will repay
              him for his deed"
            </div>
            <a
              href="#"
              className="bg-green-500 text-gray-900 hover:bg-green-400 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Donate Now
            </a>
          </div>
        </div>
      );
};