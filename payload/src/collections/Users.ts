import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'firstName',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
    },
    {
      name: 'email',
      type: 'text',
      required: false,
    },
    {
      name: 'role',
      type: 'radio',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
      required: true,
    },
    {
      name: 'userDetails',
      type: 'group',
      fields: [
        {
          name: 'accountId',
          type: 'text',
          required: true,
          unique: true,
          saveToJWT: true,
        },
        {
          name: 'balance',
          type: 'number',
          defaultValue: 0,
        },
        {
          name: 'stocks',
          type: 'array',
          fields: [
            {
              name: 'amount',
              type: 'number',
              required: true,
            },
            {
              name: 'stockId',
              type: 'relationship',
              relationTo: 'stocks',
              required: true,
              unique: true,
            },
          ],
        },
        {
          name: 'transactions',
          type: 'array',
          fields: [
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
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData.role === 'user',
      },
    },
  ],
};

export default Users;