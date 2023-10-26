// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const prereqCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    content: z.string(),
  })
});

const cohortCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    content: z.string(),
    startDate: z.string(),
    endDate: z.string(),
  })
});

const roleDescriptions = defineCollection({
  type: 'data',
  schema: z.object({
    role_title: z.string(),
    title1: z.string(),
    title2: z.string(),
    title3: z.string(),
    aboutJobList: z.array(z.string()),
    responsibilitiesList: z.array(z.string()),
    whatsInItForMeList: z.array(z.string()),
  })
})


// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'prereqs': prereqCollection,
  'cohorts': cohortCollection,
  'roles': roleDescriptions
};