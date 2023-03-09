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
      type: 'row',
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
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'symbol',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'ISIN',
          type: 'text',
          unique: true,
        },
        {
          name: 'issuerId',
          type: 'number',
          unique: true,
        },
        {
          name: 'securityId',
          type: 'number',
          unique: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'PE',
          type: 'number',
        },
        {
          name: 'DPR',
          type: 'number',
        },
        {
          name: 'capital',
          type: 'number',
        },
      ],
    },
    {
      name: 'historicPrices',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          type: 'row',
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
      ],
    },
    {
      name: 'dividends',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          type: 'row',
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
              name: 'xdate',
              type: 'date',
            },
            {
              name: 'amount',
              type: 'number',
            },
          ],
        }
      ],
    },
  ],
};

export default Stocks;