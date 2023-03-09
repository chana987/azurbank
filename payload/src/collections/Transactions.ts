import { CollectionConfig } from 'payload/types';

const Transactions: CollectionConfig = {
  slug: 'transactions',
  admin: {
    useAsTitle: 'id',
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'type',
      type: 'radio',
      options: [
        {
          label: 'Buy',
          value: 'buy',
        },
        {
          label: 'Sell',
          value: 'sell',
        },
        {
          label: 'Deposit',
          value: 'deposit',
        },
        {
          label: 'Withdraw',
          value: 'withdraw',
        },
      ],
      required: true,
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'sum',
      type: 'number',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
    },
    {
      name: 'stock',
      type: 'group',
      fields: [
        {
          name: 'stockId',
          type: 'relationship',
          relationTo: 'stocks',
        },
        {
          name: 'amount',
          type: 'number',
        },
        {
          name: 'price',
          type: 'number',
        }
      ],
      admin: {
        condition: (data, siblingData) => siblingData.type === 'buy' || siblingData.type === 'sell',
        hideGutter: true,
      },
    },
  ],
};

export default Transactions;