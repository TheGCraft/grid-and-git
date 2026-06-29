import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-100 bg-white/80 px-10 py-6 backdrop-blur-md transition-colors duration-300 dark:border-gray-800 dark:bg-zinc-950/80">
            <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-blue-600 transition-colors dark:hover:text-blue-400">
                TheGCraft<span className="text-blue-600">.</span>
            </Link>
            <div className="flex gap-8 text-sm font-medium text-gray-600">
                <Link href="/about" className="text-gray-600 hover:text-black transition-colors dark:text-gray-400 dark:hover:text-white">About</Link>
                <Link href="/contact" className="text-gray-600 hover:text-black transition-colors dark:text-gray-400 dark:hover:text-white">Contact</Link>

            </div>
        </nav>
    )

}