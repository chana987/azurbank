import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access';

const Dividends: CollectionConfig = {
  slug: 'dividends',
  access: {
    create: isAdmin,
    read: () => true,
  },
  fields: [
    {
      name: 'quarter',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'amount',
      type: 'number',
    },
    {
      name: 'stock',
      type: 'relationship',
      relationTo: 'stocks',
    },
  ],
};

export default Dividends;