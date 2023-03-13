import { CollectionConfig } from 'payload/types';
import { isAdmin, isAdminOrHasSiteAccess, isAdminOrSelf } from '../access';

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    depth: 2,
  },
  admin: {
    useAsTitle: 'username',
  },
  access: {
    create: isAdmin,
    read: isAdminOrHasSiteAccess(),
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'email',
      type: 'text',
      saveToJWT: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'username',
          type: 'text',
          required: true,
          saveToJWT: true,
        },
        {
          name: 'lastName',
          type: 'text',
        },
      ],
    },
    {
      name: 'roles',
      saveToJWT: true,
      type: 'select',
      hasMany: true,
      defaultValue: ['kid'],
      admin: {
        position: 'sidebar',
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Kid',
          value: 'kid',
        },
      ],
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'accountId',
          type: 'text',
          unique: true,
        },
        {
          name: 'birthday',
          type: 'date',
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.roles?.includes('kid'),
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'portfolioValue',
          type: 'number',
          admin:
          {
            disabled: true,
          },
        },
        {
          name: 'balance',
          type: 'number',
          defaultValue: 0,
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.roles?.includes('kid'),
      },
    },
    {
      name: 'stocks',
      type: 'array',
      defaultValue: [],
      admin: {
        initCollapsed: true,
        condition: (data, siblingData) => siblingData?.roles?.includes('kid'),
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'stock',
              type: 'relationship',
              relationTo: 'stocks',
            },
            {
              name: 'quantity',
              type: 'number',
            },
          ],
        },
        {
          name: 'dividends',
          type: 'array',
          defaultValue: [],
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'dividend',
                  type: 'relationship',
                  relationTo: 'dividends',
                },
                {
                  name: 'quantity',
                  type: 'number',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'transactions',
      type: 'array',
      defaultValue: [],
      admin: {
        initCollapsed: true,
        condition: (data, siblingData) => siblingData?.roles?.includes('kid'),
      },
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
              label: 'Withdrawal',
              value: 'withdrawal',
            },
          ],
          required: true,
          admin: {
            layout: 'horizontal',
          },
        },
        {
          name: 'status',
          type: 'radio',
          defaultValue: 'completed',
          options: [
            {
              label: 'Pending',
              value: 'pending',
            },
            {
              label: 'Completed',
              value: 'completed',
            },
          ],
          admin: {
            layout: 'horizontal',
          },
        },
        {
          type: 'row',
          fields: [
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
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'stock',
              type: 'relationship',
              relationTo: 'stocks',
            },
            {
              name: 'quantity',
              type: 'number',
            },
            {
              name: 'price',
              type: 'number',
            }
          ],
          admin: {
            condition: (data, siblingData) => siblingData.type === 'buy' || siblingData.type === 'sell',
          },
        },
      ],
    },
  ],
};

export default Users;