import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.REACT_APP_PROJECT_ID,
    dataset: process.env.REACT_APP_DATASET,
    apiVersion: '2023-02-19',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);