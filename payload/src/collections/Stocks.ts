import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access';
import {
  setLatestPrice,
  sortPricesByDate,
  addDividendToUsers,
  updateUserPortfolioValues
} from '../hooks/stocks';

const Stocks: CollectionConfig = {
  slug: 'stocks',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
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
      hooks: {
        beforeChange: [
          sortPricesByDate,
          setLatestPrice,
          updateUserPortfolioValues,
        ],
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
      type: 'relationship',
      relationTo: 'dividends',
      maxDepth: 1,
      admin: {
        readOnly: true,
      },
      hasMany: true,
      defaultValue: () => [],
      hooks: {
        afterChange: [
          addDividendToUsers,
        ],
      },
    },
    {
      name: 'users',
      type: 'relationship',
      relationTo: 'users',
      maxDepth: 1,
      admin: {
        readOnly: true,
      },
      hasMany: true,
      defaultValue: () => [],
    },
  ],
};

export default Stocks;