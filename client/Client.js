import { createClient } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_REACT_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2025-02-06',
  useCdn: true,
  token: import.meta.env.VITE_REACT_SANITY_PROJECT_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
