import { createClient } from "next-sanity";
import imageUrlBuilder, { createImageUrlBuilder } from '@sanity/image-url';
export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2026-04-30",
    useCdn: false,
})

export function getStaticClient() {
    return createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
        apiVersion: "2026-04-30",
        useCdn: true,
    });
}

const builder = createImageUrlBuilder(client);
export function urlFor(source: any) {
    return builder.image(source);
}