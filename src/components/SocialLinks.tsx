import { FaGithub, FaLinkedin, FaXing, FaBehance } from "react-icons/fa";

export default function SocialLinks() {
    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/guillermosegura/",
            icon: <FaLinkedin className="w-5 h-5" />,
        },
        {
            name: "Xing",
            href: "https://www.xing.com/profile/Guillermo_Segura8/cv",
            icon: <FaXing className="w-5 h-5" />,
        },
        {
            name: "GitHub",
            href: "https://github.com/TheGCraft",
            icon: <FaGithub className="w-5 h-5" />,
        },
        {
            name: "Behance",
            href: "https://www.behance.net/guillermosegura",
            icon: <FaBehance className="w-5 h-5" />,
        },
    ];

    return (
        <div className="w-full text-center mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800/50">
            <h2 className="text-4xl font-bold tracking-tighter mb-6 dark:text-zinc-100">
                Find me elsewhere
            </h2>

            <div className="flex w-fit flex justify-center items-center gap-6 my-6" style={{ display: "inline-flex" }}>
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-zinc-700 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                        aria-label={link.name}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
}