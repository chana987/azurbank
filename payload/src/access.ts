import { Access, FieldAccess } from "payload/types";
import { User } from "./payload-types";

export const isAdmin: Access<any, User> = ({ req: { user } }) => {
  return Boolean(user?.roles?.includes('admin'));
};

export const isAdminFieldLevel: FieldAccess<any, User> = ({ req: { user }, doc }) => {
  return Boolean(user?.accountId === doc.accountId);
};

export const isAdminOrHasSiteAccessOrPublished: Access = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    // If user has role of 'admin'
    if (user.roles?.includes('admin')) return true;

    // If user has role of 'kid' and has access to a site,
    // return a query constraint to restrict the documents this user can edit
    // to only those that are assigned to a site, or have no site assigned
    if (user.roles?.includes('kid') && user.sites?.length > 0) {
      return {
        or: [
          {
            site: {
              in: user.sites
            }
          },
          {
            site: {
              exists: false,
            }
          }
        ]
      };
    }
  }

  // Non-logged in users can only read published docs
  return {
    _status: {
      equals: 'published'
    }
  };
};

export const isAdminOrHasSiteAccess = (siteIDFieldName: string = 'site'): Access => ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    // If user has role of 'admin'
    if (user.roles?.includes('admin')) return true;

    // If user has role of 'kid' and has access to a site,
    // return a query constraint to restrict the documents this user can edit
    // to only those that are assigned to a site, or have no site assigned
    if (user.roles?.includes('kid') && user.sites?.length > 0) {

      // Otherwise, we can restrict it based on the `site` field
      return {
        or: [
          {
            [ siteIDFieldName ]: {
              in: user.sites
            }
          },
          {
            [ siteIDFieldName ]: {
              exists: false,
            }
          }
        ]
      };
    }
  }

  // Reject everyone else
  return false;
};

export const isAdminOrSelf: Access = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    // If user has role of 'admin'
    if (user.roles?.includes('admin')) {
      return true;
    }

    // If any other type of user, only provide access to themselves
    return {
      id: {
        equals: user.id,
      }
    };
  }

  // Reject everyone else
  return false;
};

export const isLoggedIn: Access<any, User> = ({ req: { user } }) => {
  // Return true if user is logged in, false if not
  return Boolean(user);
};