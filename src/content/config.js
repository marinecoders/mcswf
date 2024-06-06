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
  schema: z.object({
    product: z.string(),
    description: z.string(),
    background: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    image2: z.object({
      src: z.string(),
      alt: z.string(),
    }),
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

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  prereqs: prereqCollection,
  cohorts: cohortCollection,
  products: productCollection,
  aboutMetrics: aboutMetricsCollection,
  steps: stepsCollection,
};
