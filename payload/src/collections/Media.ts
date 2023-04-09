import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access';

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'small',
        width: 300,
      },
      {
        name: 'medium',
        width: 600,
      },
      {
        name: 'large',
        width: 1200,
      },
    ],
  },
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
};

export default Media;