import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full h-14 px-2 border-b shadow-sm bg-white flex items-center">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo/>
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button size="sm" variant="link" asChild>
                        <Link href="/gallery">
                        Gallery
                        </Link>
                    </Button>
                    <Button size="sm" variant="link" asChild>
                        <Link href="/projects">
                        Projects
                        </Link>
                    </Button>
                    <Button size="sm" variant="link" asChild>
                        <Link href="/about">
                        About
                        </Link>
                    </Button>
                    <Button size="sm" variant="primary" asChild>
                        <Link href="/donate">
                        Donate
                        </Link>
                    </Button>
                </div>
            </div>
        </nav>
    )
}