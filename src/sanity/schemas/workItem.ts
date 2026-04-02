import { defineType, defineField } from "sanity";

export const workItemSchema = defineType({
  name: "workItem",
  title: "Work / Portfolio Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Film & TV", value: "Film & TV" },
          { title: "Animation", value: "Animation" },
          { title: "Documentary", value: "Documentary" },
          { title: "Branding", value: "Branding" },
          { title: "Music Video", value: "Music Video" },
          { title: "Immersive", value: "Immersive" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "filters",
      title: "Additional Filter Tags",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Film & TV", value: "Film & TV" },
              { title: "Animation", value: "Animation" },
              { title: "Documentary", value: "Documentary" },
              { title: "Branding", value: "Branding" },
              { title: "Music Video", value: "Music Video" },
              { title: "Immersive", value: "Immersive" },
            ],
          },
        },
      ],
      description: "Items can appear under multiple filters",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags / Highlights",
      type: "array",
      of: [{ type: "string" }],
      description: "E.g. 4 Awards, Slamdance, Branded Content",
    }),
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string" }),
      ],
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 99,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "client", media: "coverImage" },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
