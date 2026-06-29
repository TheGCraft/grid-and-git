# TheGCraft: Grid & Git Portfolio

A premium, modern portfolio website built for a Web Operations Specialist and Designer, demonstrating the philosophy where **layout meets logic**. 

The project features a highly responsive UI built with **Next.js 16** (App Router), styled using **Tailwind CSS v4**, and backed by **Sanity Headless CMS** for dynamic content management and **Resend** for contact form notifications.

---

## 🚀 Key Features

*   **Headless CMS Integration:** Dynamic project pages and professional bio/profile details fetched directly from Sanity.
*   **Modern Design System:** A clean, minimal layout with glassmorphic elements, smooth transition hover effects, and built-in dark/light mode optimization.
*   **Dynamic Routing:** Automatically generates details for projects via dynamic routing at `/projects/[slug]`.
*   **Contact Form with Resend:** Fully functional contact page backed by the Resend email service api to receive inquiries instantly.
*   **Optimized Performance:** Uses Next.js native font loading for `Geist` fonts and automated image optimizations using `next/image` with Sanity image url builders.

---

## 🛠️ Tech Stack

*   **Frontend Framework:** Next.js 16 (React 19)
*   **Styling:** Tailwind CSS v4 & Styled Components (used in studio customization)
*   **Content Management (CMS):** Sanity.io (Headless CMS)
*   **Email Client:** Resend
*   **Type Safety:** TypeScript & Zod (form validation)

---

## 🔌 Sanity Headless CMS Connection

This project connects to Sanity.io using the standard `next-sanity` client wrapper to enable fully customizable, decoupled content management.

### Key Configurations & Connections

1.  **Sanity Configuration:** 
    The studio configuration is managed in [sanity.config.ts](file:///Users/guillermosegura/grid-and-git/sanity.config.ts), setting the target `projectId`, dataset, and embedding the structure tools.
2.  **Sanity Client:**
    Located at [client.ts](file:///Users/guillermosegura/grid-and-git/src/sanity/client.ts). It exports the `client` object initialized with environment variables, as well as a `getStaticClient()` for static page generation and CDN caching helper functions like `urlFor` for image optimization.
3.  **Data Fetching & GROQ Queries:**
    Queries are defined using GROQ (Graph-Relational Object Query) syntax in [sanity-utils.ts](file:///Users/guillermosegura/grid-and-git/src/sanity/sanity-utils.ts).
    *   `getProjects()`: Fetches all project documents.
    *   `getProject(slug)`: Fetches a single project based on its slug.
    *   `getProfile()`: Fetches global profile metadata (bio, name, image, location).
4.  **Rich Text Rendering:**
    Rich text fields returned by Sanity are rendered as React components using `@portabletext/react` with custom rendering rules configured in [PortableTextComponents.tsx](file:///Users/guillermosegura/grid-and-git/src/sanity/PortableTextComponents.tsx).

---

## 📁 File Structure

```text
├── sanity.config.ts              # Sanity.io studio/project configurations
├── src/
│   ├── app/                      # Next.js App Router folders
│   │   ├── layout.tsx            # Global layout, fonts, and dark mode classes
│   │   ├── page.tsx              # Main index page (lists projects)
│   │   ├── about/                # Profile bio & location page
│   │   ├── contact/              # Interactive contact page
│   │   ├── projects/[slug]/      # Dynamic project details pages
│   │   └── api/contact/route.ts  # Contact email endpoint using Resend
│   ├── components/               # Shareable components (Navbar, ContactForm)
│   ├── sanity/                   # Sanity client config, GROQ queries, PortableText component mapping
│   └── Types.ts                  # Shared TypeScript interfaces for Sanity payloads
```
## Future Plans

- [ ] Add a now page,
- [ ] Add more projects

## Credits

Built with ❤️ by Guillermo Segura

Special thanks to **Next.js**, **Tailwind CSS**, **Sanity.io**, **Resend**, **Vercel**, **GitHub**, and **Zod** for making this project possible.

