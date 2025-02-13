import { Navbar } from "../(home)/_components/navbar";
import Gallery from "./gallery";

export default function GalleryPage() {
    return (
        <main>
            <div>
            <Navbar/>
            </div>
            <div className="pt-16">
            <Gallery/>
            </div>
        </main>
    );
}