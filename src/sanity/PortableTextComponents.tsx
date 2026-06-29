import type { PortableTextComponents as PortableTextType } from '@portabletext/react';
import type { PortableTextImage } from '@/Types';
import Image from 'next/image';
import { urlFor } from '@/sanity/client';
export const PortableTextComponents: PortableTextType = {
    types: {
        image: ({ value }: { value: PortableTextImage }) => {
            if (!value?.asset) return null;
            return (
                <div className="my-10 text-center">
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || 'Project image'}
                        width={800}
                        height={500}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                    {value.caption && (
                        <p className="mt-2 text-sm text-gray-800 italic dark:text-zinc-200">
                            {value.caption}
                        </p>
                    )}
                </div>
            );
        },
    },
    block: {
        h1: ({ children }: any) => <h1 className="text-4xl font-bold my-4 dark:text-zinc-100">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-2xl font-semibold my-3 text-gray-800 dark:text-zinc-100">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-xl font-semibold my-2 text-gray-800 dark:text-zinc-100">{children}</h3>,
        normal: ({ children }: any) => <p className="text-gray-800 leading-relaxed mb-4 dark:text-zinc-100">{children}</p>,
    },
    list: {
        bullet: ({ children }: any) => <ul className="text-gray-800 leading-relaxed ml-6 list-disc mb-4 dark:text-zinc-100" >{children}</ul>,
    },
    listItem: {
        bullet: ({ children }: any) => <li className="mb-1 dark:text-zinc-100">{children}</li>,
    },
    marks: {
        strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
        link: ({ children, value }: any) => (
            <a href={value.href} target="_blank" rel="noopener" className="text-blue-500 hover:underline">
                {children}
            </a>
        ),
    },
};