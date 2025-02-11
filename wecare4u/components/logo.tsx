import Image from "next/image";
import Link from "next/link";
import logoimg from "@/public/images/logo.png"

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src={logoimg} alt="Logo" height={30} width={30} />
        <p className="text-lg text-neutral-700 pb-1">
          We Care For You Foundation
        </p>
      </div>
    </Link>
  );
};
