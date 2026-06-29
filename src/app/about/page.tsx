import { getProfile } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@/sanity/PortableTextComponents";
import Image from "next/image";

export default async function AboutPage() {
    const profile = await getProfile();
    if (!profile) return <div>Loading profile...</div>;

    return (
        <main className="max-w-3xl mx-auto p-10 lg:p-20 bg-zinc-50/50 dark:bg-zinc-900/20 rounded-2xl">
            <div className="flex flex-col items-center text-center mb-12">
                {profile.image && (
                    <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-blue-600 shadow-xl">
                        <Image
                            src={profile.image}
                            alt={profile.image.alt}
                            fill
                            className="object-cover"
                        />
                    </div>

                )}
                <h1 className="text-4xl font-extrabold tracking-tighter dark:text-zinc-100">
                    {profile.name}
                </h1>
                <p className="text-blue-600 font-medium text-lg">{profile.location}</p>
            </div>
            <div className="prose prose-zinc dark:prose-invert max-w-none">
                <PortableText value={profile.fullBio} components={PortableTextComponents} />
            </div>
        </main>

    );

}