import { CollectionConfig } from 'payload/types';
import { isAdmin, isAdminOrHasSiteAccess, isAdminOrSelf } from '../access';
import { addUserToStock, updateUserPortfolioValue } from '../hooks/users';
import { isKid } from '../utils';

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    depth: 2,
  },
  admin: {
    useAsTitle: 'username',
  },
  hooks: {
    afterChange: [
      addUserToStock,
    ],
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
        },
        {
          name: 'birthday',
          type: 'date',
        },
      ],
      admin: {
        condition: (siblingData) => isKid(siblingData),
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
            readOnly: true,
          },
        },
        {
          name: 'balance',
          type: 'number',
          defaultValue: 0,
        },
      ],
      admin: {
        condition: (siblingData) => isKid(siblingData),
      },
    },
    {
      name: 'stocks',
      type: 'array',
      defaultValue: [],
      admin: {
        initCollapsed: true,
        condition: (siblingData) => isKid(siblingData),
      },
      hooks: {
        beforeChange: [
          updateUserPortfolioValue,
        ],
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'stock',
              type: 'relationship',
              relationTo: 'stocks',
              validate: (value, { siblingData }) => {
                if (siblingData?.stocks?.find((stock) => stock.stock === value)) {
                  return 'You already have this stock';
                }
                return true;
              }
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
            readOnly: true,
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
        condition: (siblingData) => isKid(siblingData),
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
