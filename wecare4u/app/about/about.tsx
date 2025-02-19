import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <section className="py-16 lg:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button
              variant="primary"
              className="px-6 py-3 text-sm md:text-base"
            >
              Donate Now
            </Button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              className="w-full max-w-md lg:max-w-lg h-auto rounded-3xl object-cover shadow-lg"
              src="https://media.istockphoto.com/id/1586911323/photo/close-up-of-african-woman-hands-holding-red-heart-in-solidarity.jpg?s=612x612&w=0&k=20&c=of0vz5Ddd-BPWrbUy1g51hzBD8qf842zwPj-7VR4cpU="
              alt="About Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;