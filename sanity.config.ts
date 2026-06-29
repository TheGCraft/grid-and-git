import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
    projectId: "diwjtu4d",
    dataset: "production",
    title: "The GCraft: Grid & Git",
    apiVersion: "2026-04-30",
    basePath: "/admin",
    plugins: [structureTool()]
});

export default config;

