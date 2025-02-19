import { Footer } from "../(home)/_components/footer";
import { Navbar } from "../(home)/_components/navbar";
import Gallery from "./gallery";

export default function GalleryPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}