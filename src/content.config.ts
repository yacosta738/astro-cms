import {
	type SchemaContext,
	defineCollection,
	reference,
	z,
} from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/blog" }),
	schema: ({ image }: SchemaContext) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			lastModified: z.coerce
				.date()
				.optional()
				.default(() => new Date()),
			cover: image().optional(),
			author: reference("authors"),
			tags: z.array(reference("tags")),
			category: reference("categories"),
			draft: z.boolean().optional().default(false),
		}),
});

const tags = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/tags" }),
	schema: z.object({
		title: z.string(),
	}),
});

const categories = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/categories" }),
	schema: z.object({
		title: z.string(),
		order: z.number().optional(),
	}),
});

const authors = defineCollection({
	loader: glob({ pattern: "**/[^_]*.json", base: "./src/data/authors" }),
	schema: z.object({
		name: z.string(),
		email: z.string(),
		avatar: z.string(),
		bio: z.string(),
	}),
});

export const collections = { blog, tags, categories, authors };
