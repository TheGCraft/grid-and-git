import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
    title: "Contact | TheGCraft",
    description: "Get in touch with me for Web Development, Marketing and Design projects.",
};

export default function ContactPage() {
    return (
        <main className="max-w-3xl mx-auto p-10 lg:p-20">
            <header className="max-w-2xl mx-auto mb-2 text-center">
                <h1 className="text-4xl font-extrabold tracking-tighter mb-4 dark:text-zinc-100">
                    Let’s Build Something Together<span className="text-blue-600">.</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-zinc-400">
                    Have a project in mind, an Operations bottleneck to solve, or just want to talk shop? Drop a message below.
                </p>
            </header>

            <section className="bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800/50 rounded-2xl p-8 shadow-sm mb-12">
                <ContactForm />
            </section>

            <section className="mt-12 text-center">
                <SocialLinks />

            </section>
        </main>
    );
}