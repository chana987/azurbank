import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access';

const Dividends: CollectionConfig = {
  slug: 'dividends',
  admin: {
    useAsTitle: 'stock',
  },
  access: {
    create: isAdmin,
    read: () => true,
  },
  fields: [
    {
      name: 'stock',
      type: 'relationship',
      relationTo: 'stocks',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'quarter',
          type: 'text',
        },
        {
          name: 'dividend',
          type: 'number',
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'date',
          type: 'date',
          required: true,
        },
        {
          name: 'xdate',
          type: 'date',
        },
      ],
    }
  ],
};

export default Dividends;