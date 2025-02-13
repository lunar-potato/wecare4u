import Image from "next/image";
import { HeroBanner } from "./_components/heroBanner";
import Gallery from "./_components/gallery";

const mainHome = () => {
    return ( 
        <div>
            <HeroBanner/>
            <Gallery/>  
        </div>
      );
};

export default mainHome;