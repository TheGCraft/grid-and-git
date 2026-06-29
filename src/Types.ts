import { PortableTextBlock } from "@portabletext/react";
export interface Project {
    _id: string;
    _createdAt: string;
    title: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
    shortDescription: PortableTextBlock[];
};

export interface SanityImage {

    url: string;
    src: string;
    title: string;
    altText: string | null;
    _id: string;


}

export interface getProjectsType {
    _id: string;
    _createdAt: string;
    title: string;
    slug: string;
    image: {
        url: string;
        altText: string;
    };
    url: string;
    content: any[];
    shortDescription: any[];
}

export interface Props {
    params: Props;
    title: string;
    image: SanityImage;
    url: string;
    content: PortableTextBlock[];
    shortDescription: PortableTextBlock[];

}


export interface PortableTextImage {
    _type: 'image',
    asset: {
        _ref: string;
        _type: 'reference';
    };
    alt?: string;
    caption?: string;
}