import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'yz4oom2n',         // your project ID
  dataset: 'production',         // your dataset
  apiVersion: '2023-06-20',      // today's date or Sanity API version
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)
export function urlFor(source: any) {
  return builder.image(source)
}
