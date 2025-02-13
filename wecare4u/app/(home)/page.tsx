import { HeroBanner } from "./_components/heroBanner";
import ImageSlider from "./_components/slider";

const mainHome = () => {
  return (
    <main>
      <section>
        <HeroBanner />
      </section>
      {/* Part of the gallery section */}
      <section className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold">Our Impact</h2>
          <p className="mt-4 text-gray-700">
            We provide support and aid to communities in need. Our foundation helps with
            ..., ..., ... See some of our best moments in the slider!
          </p>
        </div>
        <div className="pb-12 sm:pb-10 md:pb-8 lg:pb-6">
            <ImageSlider/>
        </div>
      </section>
    </main>
  );
};

export default mainHome;
