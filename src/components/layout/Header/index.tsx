import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="py-4 sticky top-0">
            <div className="text-white bg-gray-300/30 max-w-4xl mx-auto w-full px-4 h-14 flex items-center rounded-md justify-between">
                <h1 className="text-xl font-bold">Neody Networks</h1>
                <nav className="space-x-4">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <Link href="/" className="hover:underline">
                        Status
                    </Link>
                    <Link href="/" className="hover:underline">
                        Looking glass
                    </Link>
                </nav>
                <Button asChild>
                    <Link href="/contact">Contact</Link>
                </Button>
            </div>
        </header>
    );
};

export default Header;
