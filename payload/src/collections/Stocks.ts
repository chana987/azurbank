import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access';

const Stocks: CollectionConfig = {
  slug: 'stocks',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: isAdmin,
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'hebrewName',
      type: 'text',
    },
    {
      name: 'marketValue',
      type: 'number',
    },
    {
      name: 'symbol',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'historicPrices',
      type: 'array',
      fields: [
        {
          name: 'date',
          type: 'date',
          required: true,
        },
        {
          name: 'price',
          type: 'number',
          required: true,
        },
      ],
    },
    {
      name: 'dividends',
      type: 'relationship',
      relationTo: 'dividends',
      hasMany: true,
    },
    {
      name: 'owners',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
    },
  ],
};

export default Stocks;