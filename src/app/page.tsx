// src/app/page.tsx
import { PortableText } from "@portabletext/react";
import { getProfile, getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import type { getProjectsType } from "@/Types";
import Image from 'next/image'
import { PortableTextComponents } from "@/sanity/PortableTextComponents";



export default async function IndexPage() {
  const [projects, profile] = await Promise.all([
    getProjects(),
    getProfile()
  ]);

  return (
    <main className="p-10 max-w-7xl mx-auto">
      <header className="max-w-3xl mx-auto mb-20 text-center">
        <h1 className="text-5xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-linear-to-b from-blue-600 to-cyan-400">
            Grid &
          </span>
          <span className="bg-clip-text text-transparent bg-linear-to-b from-cyan-400 to-blue-600"> Git
          </span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed dark:text-zinc-400">
          A place where <span className="font-semibold text-black dark:text-white">layout</span> meets <span className="font-semibold text-black dark:text-white">logic</span>.

        </p>
        <div className="mt-10 flex flex-col items-center">
          <div className="h-1 w-16 bg-blue-600 rounded-full mb-4"></div>
          <p className="text-lg uppercase tracking-[0.3em] font-bold mb-6 text-gray-700 dark:text-zinc-500">
            Projects
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed mb-4 dark:text-zinc-100">This is a collection of projects that I have worked on over the years. Some are more recent than others, but all of them are a testament to my growth as a developer and designer.</p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {projects.map((project: getProjectsType, index: number) => (
          <div className="border border-gray-100 bg-white p-6 rounded-lg shadow-sm transition-all hover:shadow-md dark:border-zinc-900 dark:bg-zinc-900/50" key={project._id}>

            <Link href={`/projects/${project.slug}`} className="group">
              <h2 className="text-xl  mb-4 font-semibold group hover:text-blue-600 transition-colors">{project.title}</h2>

              {project.image && (
                <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={project.image?.url || "/placeholder-image.png"}
                    alt={project.image?.altText || project.title || "Project Screenshot"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 2}
                  />
                </div>
              )}
            </Link>




            <div className="prose prose-blue max-w-none">
              <PortableText value={project.shortDescription} components={PortableTextComponents} />
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-100 text-blue-800 font-bold text-sm px-2 py-1 rounded hover:bg-blue-500 hover:text-white transition-colors"
            >
              View Project <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>



          </div>


        ))}
      </div>
    </main>
  );
}