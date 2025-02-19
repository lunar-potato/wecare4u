import { Footer } from "../(home)/_components/footer";
import { Navbar } from "../(home)/_components/navbar";
import AboutPage from "./about";

export default function GalleryPage() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
}
