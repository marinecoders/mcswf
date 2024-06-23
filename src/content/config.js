// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const prereqCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    content: z.string(),
  }),
});

const cohortCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    content: z.string(),
    startDate: z.string(),
    link: z.string(),
  }),
});

const productCollection = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    product: z.string(),
    description: z.string(),
    background: image(),
    image: image(),
    imageAlt: z.string(),
    image2: image(),
    order: z.number(),
    heading: z.string(),
    bullets: z.array(z.string()),
    metrics: z.array(
      z.object({
        icon: z.string(),
        value: z.string(),
        metric: z.string(),
      })
    ),
  }),
});

const aboutMetricsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    metrics: z.array(
      z.object({
        icon: z.string(),
        value: z.string(),
        metric: z.string(),
      })
    ),
  }),
});

const stepsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    step: z.number(),
    title: z.string(),
    contentTitle: z.string(),
    content: z.array(z.string()),
  }),
});

const contactUsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    heading: z.string(),
    description: z.string(),
    shortDescription: z.string(),
    background: image(),
    backgroundAlt: z.string(),
    buttonLink: z.string(),
    buttonText: z.string(),
    externalLink: z.boolean(),
  }),
});

const rolesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    role: z.string(),
    // url: z.string(),
    image: image(),
    image_wide: image(),
    icon: z.string(),
    image_alt_text: z.string(),
    image_focus: z.string(),
    about: z.string(),
  })
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  prereqs: prereqCollection,
  cohorts: cohortCollection,
  products: productCollection,
  aboutMetrics: aboutMetricsCollection,
  steps: stepsCollection,
  contactUs: contactUsCollection,
  roles: rolesCollection,
};
