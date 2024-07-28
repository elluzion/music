import { z } from 'zod';

const base = z.object({
  id: z.number().default(0),
  artUrl: z.string().url().trim(),
});

const firstLine = z.object({
  title: z.string().max(100).trim(),
  artists: z.array(z.string().max(100).trim()).min(1),
});

const metadata = z.object({
  permalink: z
    .string()
    .trim()
    .max(100)
    .refine(
      (x) => {
        const reserved = [
          'sitemap.xml',
          'robots.txt',
          'favicon.ico',
          'add',
          'api',
          'songs',
          'login',
        ];
        return !reserved.includes(x.toLowerCase());
      },
      { message: 'Permalink cannot be the name of a reserved keyword' },
    )
    .refine((x) => /^[a-zA-Z0-9-]*$/.test(x), {
      message: 'Permalink can only contain letters aA-zZ, numbers and dashes',
    }),
  tempo: z.optional(z.coerce.number().min(50).max(200).multipleOf(0.01)),
  key: z.optional(z.string().max(15).trim()),
  genre: z.string().max(30).trim(),
  label: z.optional(z.string().max(25).trim()),
  releaseDate: z.coerce.date(),
  type: z.string().max(15).trim(),
});

const links = z.object({
  streamLinks: z.array(z.string().url().trim()).min(1),
  downloadLinks: z
    .array(
      z.object({
        url: z.string().url(),
        edit: z.string(),
        format: z.enum(['mp3', 'wav']),
      }),
    )
    .default([]),
});

/**
 * In sync with {@link Song}
 */
export const songFormSchema = base.merge(firstLine).merge(metadata).merge(links);

/**
 * The inferred type of {@link songFormSchema}.
 */
export type SongFormSchema = z.infer<typeof songFormSchema>;
