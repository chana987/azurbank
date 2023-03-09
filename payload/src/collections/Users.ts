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
      name: 'username',
      type: 'text',
      required: true,
      saveToJWT: true,
    },
    {
      name: 'lastName',
      type: 'text',
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'roles',
      saveToJWT: true,
      type: 'select',
      hasMany: true,
      defaultValue: ['kid'],
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
      name: 'userDetails',
      type: 'group',
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
        {
          name: 'balance',
          type: 'number',
          defaultValue: 0,
        },
        {
          name: 'stocks',
          type: 'array',
          defaultValue: [],
          fields: [
            {
              name: 'amount',
              type: 'number',
            },
            {
              name: 'stockId',
              type: 'relationship',
              relationTo: 'stocks',
            },
          ],
        },
        {
          name: 'dividends',
          type: 'array',
          defaultValue: [],
          fields: [
            {
              name: 'amount',
              type: 'number',
            },
            {
              name: 'dividendId',
              type: 'relationship',
              relationTo: 'dividends',
            },
          ],
        }
      ],
      admin: {
        condition: (data, siblingData) => siblingData.roles.includes('kid'),
      },
    },
  ],
};

export default Users;