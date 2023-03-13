import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access';
import { setLatestPrice, sortPricesByDate } from '../hooks/collections';

const Stocks: CollectionConfig = {
  slug: 'stocks',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: isAdmin,
    read: () => true,
  },
  hooks: {
    afterChange: [
      sortPricesByDate,
      setLatestPrice,
    ],
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
        },
        {
          name: 'issuerId',
          type: 'number',
        },
        {
          name: 'securityId',
          type: 'number',
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
        {
          name: 'latestPrice',
          type: 'number',
          admin: {
            readOnly: true,
          },
        }
      ],
    },
    {
      name: 'historicPrices',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      defaultValue: [],
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'date',
              type: 'date',
              required: true,
              localized: true,
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
      defaultValue: [],
      fields: [
        {
          name: 'dividend',
          type: 'relationship',
          relationTo: 'dividends',
        },
      ],
    }
  ],
};

export default Stocks;