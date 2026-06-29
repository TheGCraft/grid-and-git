// src/app/projects/[slug]/page.tsx
export const dynamic = 'force-dynamic';
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { getProject } from "@/sanity/sanity-utils";
import Image from 'next/image'
import { PortableTextComponents } from "@/sanity/PortableTextComponents";

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;

    const project = await getProject(slug);

    if (!project) {
        return <div className="p-20 text-center">Project "{slug}" not found in Sanity.</div>;
    }

    return (
        <main className="p-20 max-w-7xl mx-auto">
            <div>
                <header className="block mx-autoflex text-center">
                    <h1 className="text-xl font-semibold group">{project.title}</h1>

                </header>
                <main>
                    {project.image && (
                        <div className="relative w-2/3 h-120 mb-4 overflow-hidden rounded-lg text-center mx-auto">
                            <Image
                                src={project.image?.url || "/placeholder-image.png"}
                                alt={project.image?.altText || project.title || "Project Screenshot"}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"

                            />
                        </div>
                    )}
                    <div className="prose prose-blue max-w-none">
                        <PortableText value={project.content} components={PortableTextComponents} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                        <a
                            className="p-2 text-sm font-bold text-gray-600 rounded-2xl hover:text-blue-600 transition-colors flex items-center gap-2 group mt-10"
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View the Project <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>


                        <div className="flex mt-10 md:justify-end">
                            <Link
                                href="/"
                                className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                            >
                                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                                Back to Projects
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </main>
    );
}