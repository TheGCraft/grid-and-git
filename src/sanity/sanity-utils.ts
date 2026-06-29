import { client } from "@/sanity/client"; // Use your existing client
import { groq } from "next-sanity";
import { getProjectsType } from "@/Types";

export async function getProjects(): Promise<getProjectsType[]> {
    return client.fetch(
        groq`*[_type == "project"] | order(_createdAt desc){
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "image": {
              "url": image.asset->url,
              "altText": image.alt
            },
            url,
            content,
            shortDescription
        }`
    );
}

export async function getProject(slug: string): Promise<getProjectsType> {
    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0] {
            _id,
            _createdAt,
            title, // <--- Change 'name' to 'title' to match your Schema
            "slug": slug.current,
            "image": {
              "url": image.asset->url,
              "altText": image.alt
            },
            url,
            content,
            shortDescription
        }`,
        { slug: slug }
    );
}

//Profile Schema
export async function getProfile() {
    return client.fetch(
        groq`*[_type == "profile"][0]{
            _id,
            name,
            headline,
            bio,
            "image": profileImage.asset->url,
            location,
            fullBio
        }`
    );
}