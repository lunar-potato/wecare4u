import { Footer } from "../(home)/_components/footer";
import { Navbar } from "../(home)/_components/navbar";
import AboutPage from "./about";

export default function GalleryPage() {
  return (
    <main className="h-full">
      <div>
        <Navbar />
      </div>
      <div>
        <AboutPage />
      </div>
      <Footer />
    </main>
  );
}
