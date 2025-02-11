import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full p-4 border-t bg-slate-300">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
       <Logo/>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full text-stone-500">
          &copy; Sukiluna 2025
        </div>
      </div>
    </footer>
  );
};
