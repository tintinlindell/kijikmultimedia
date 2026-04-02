import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { postSchema, projectSchema, workItemSchema } from "./src/sanity/schemas";

export default defineConfig({
  name: "kijik-multimedia",
  title: "Kijik Multimedia",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  basePath: "/studio",

  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: "2026-04-02" }),
  ],

  schema: {
    types: [postSchema, projectSchema, workItemSchema],
  },
});
