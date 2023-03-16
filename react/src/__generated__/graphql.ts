/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean'];
  dividends?: Maybe<DividendsAccess>;
  stocks?: Maybe<StocksAccess>;
  users?: Maybe<UsersAccess>;
};

export type Dividend = {
  __typename?: 'Dividend';
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  dividend: Scalars['Float'];
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  quarter?: Maybe<Scalars['String']>;
  stock: Stock;
  updatedAt: Scalars['DateTime'];
  xdate?: Maybe<Scalars['DateTime']>;
};

export type Dividend_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Dividend_Date_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Dividend_Dividend_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Dividend_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Dividend_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Dividend_Quarter_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Dividend_Stock_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Dividend_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Dividend_Where = {
  AND?: InputMaybe<Array<InputMaybe<Dividend_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Dividend_Where_Or>>>;
  createdAt?: InputMaybe<Dividend_CreatedAt_Operator>;
  date?: InputMaybe<Dividend_Date_Operator>;
  dividend?: InputMaybe<Dividend_Dividend_Operator>;
  id?: InputMaybe<Dividend_Id_Operator>;
  name?: InputMaybe<Dividend_Name_Operator>;
  quarter?: InputMaybe<Dividend_Quarter_Operator>;
  stock?: InputMaybe<Dividend_Stock_Operator>;
  updatedAt?: InputMaybe<Dividend_UpdatedAt_Operator>;
  xdate?: InputMaybe<Dividend_Xdate_Operator>;
};

export type Dividend_Where_And = {
  createdAt?: InputMaybe<Dividend_CreatedAt_Operator>;
  date?: InputMaybe<Dividend_Date_Operator>;
  dividend?: InputMaybe<Dividend_Dividend_Operator>;
  id?: InputMaybe<Dividend_Id_Operator>;
  name?: InputMaybe<Dividend_Name_Operator>;
  quarter?: InputMaybe<Dividend_Quarter_Operator>;
  stock?: InputMaybe<Dividend_Stock_Operator>;
  updatedAt?: InputMaybe<Dividend_UpdatedAt_Operator>;
  xdate?: InputMaybe<Dividend_Xdate_Operator>;
};

export type Dividend_Where_Or = {
  createdAt?: InputMaybe<Dividend_CreatedAt_Operator>;
  date?: InputMaybe<Dividend_Date_Operator>;
  dividend?: InputMaybe<Dividend_Dividend_Operator>;
  id?: InputMaybe<Dividend_Id_Operator>;
  name?: InputMaybe<Dividend_Name_Operator>;
  quarter?: InputMaybe<Dividend_Quarter_Operator>;
  stock?: InputMaybe<Dividend_Stock_Operator>;
  updatedAt?: InputMaybe<Dividend_UpdatedAt_Operator>;
  xdate?: InputMaybe<Dividend_Xdate_Operator>;
};

export type Dividend_Xdate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Dividends = {
  __typename?: 'Dividends';
  docs?: Maybe<Array<Maybe<Dividend>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type DividendsCreateAccess = {
  __typename?: 'DividendsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DividendsCreateDocAccess = {
  __typename?: 'DividendsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DividendsDeleteAccess = {
  __typename?: 'DividendsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DividendsDeleteDocAccess = {
  __typename?: 'DividendsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DividendsDocAccessFields = {
  __typename?: 'DividendsDocAccessFields';
  date?: Maybe<DividendsDocAccessFields_Date>;
  dividend?: Maybe<DividendsDocAccessFields_Dividend>;
  name?: Maybe<DividendsDocAccessFields_Name>;
  quarter?: Maybe<DividendsDocAccessFields_Quarter>;
  stock?: Maybe<DividendsDocAccessFields_Stock>;
  xdate?: Maybe<DividendsDocAccessFields_Xdate>;
};

export type DividendsDocAccessFields_Date = {
  __typename?: 'DividendsDocAccessFields_date';
  create?: Maybe<DividendsDocAccessFields_Date_Create>;
  delete?: Maybe<DividendsDocAccessFields_Date_Delete>;
  read?: Maybe<DividendsDocAccessFields_Date_Read>;
  update?: Maybe<DividendsDocAccessFields_Date_Update>;
};

export type DividendsDocAccessFields_Date_Create = {
  __typename?: 'DividendsDocAccessFields_date_Create';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Date_Delete = {
  __typename?: 'DividendsDocAccessFields_date_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Date_Read = {
  __typename?: 'DividendsDocAccessFields_date_Read';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Date_Update = {
  __typename?: 'DividendsDocAccessFields_date_Update';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Dividend = {
  __typename?: 'DividendsDocAccessFields_dividend';
  create?: Maybe<DividendsDocAccessFields_Dividend_Create>;
  delete?: Maybe<DividendsDocAccessFields_Dividend_Delete>;
  read?: Maybe<DividendsDocAccessFields_Dividend_Read>;
  update?: Maybe<DividendsDocAccessFields_Dividend_Update>;
};

export type DividendsDocAccessFields_Dividend_Create = {
  __typename?: 'DividendsDocAccessFields_dividend_Create';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Dividend_Delete = {
  __typename?: 'DividendsDocAccessFields_dividend_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Dividend_Read = {
  __typename?: 'DividendsDocAccessFields_dividend_Read';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Dividend_Update = {
  __typename?: 'DividendsDocAccessFields_dividend_Update';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Name = {
  __typename?: 'DividendsDocAccessFields_name';
  create?: Maybe<DividendsDocAccessFields_Name_Create>;
  delete?: Maybe<DividendsDocAccessFields_Name_Delete>;
  read?: Maybe<DividendsDocAccessFields_Name_Read>;
  update?: Maybe<DividendsDocAccessFields_Name_Update>;
};

export type DividendsDocAccessFields_Name_Create = {
  __typename?: 'DividendsDocAccessFields_name_Create';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Name_Delete = {
  __typename?: 'DividendsDocAccessFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Name_Read = {
  __typename?: 'DividendsDocAccessFields_name_Read';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Name_Update = {
  __typename?: 'DividendsDocAccessFields_name_Update';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Quarter = {
  __typename?: 'DividendsDocAccessFields_quarter';
  create?: Maybe<DividendsDocAccessFields_Quarter_Create>;
  delete?: Maybe<DividendsDocAccessFields_Quarter_Delete>;
  read?: Maybe<DividendsDocAccessFields_Quarter_Read>;
  update?: Maybe<DividendsDocAccessFields_Quarter_Update>;
};

export type DividendsDocAccessFields_Quarter_Create = {
  __typename?: 'DividendsDocAccessFields_quarter_Create';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Quarter_Delete = {
  __typename?: 'DividendsDocAccessFields_quarter_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Quarter_Read = {
  __typename?: 'DividendsDocAccessFields_quarter_Read';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Quarter_Update = {
  __typename?: 'DividendsDocAccessFields_quarter_Update';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Stock = {
  __typename?: 'DividendsDocAccessFields_stock';
  create?: Maybe<DividendsDocAccessFields_Stock_Create>;
  delete?: Maybe<DividendsDocAccessFields_Stock_Delete>;
  read?: Maybe<DividendsDocAccessFields_Stock_Read>;
  update?: Maybe<DividendsDocAccessFields_Stock_Update>;
};

export type DividendsDocAccessFields_Stock_Create = {
  __typename?: 'DividendsDocAccessFields_stock_Create';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Stock_Delete = {
  __typename?: 'DividendsDocAccessFields_stock_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Stock_Read = {
  __typename?: 'DividendsDocAccessFields_stock_Read';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Stock_Update = {
  __typename?: 'DividendsDocAccessFields_stock_Update';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Xdate = {
  __typename?: 'DividendsDocAccessFields_xdate';
  create?: Maybe<DividendsDocAccessFields_Xdate_Create>;
  delete?: Maybe<DividendsDocAccessFields_Xdate_Delete>;
  read?: Maybe<DividendsDocAccessFields_Xdate_Read>;
  update?: Maybe<DividendsDocAccessFields_Xdate_Update>;
};

export type DividendsDocAccessFields_Xdate_Create = {
  __typename?: 'DividendsDocAccessFields_xdate_Create';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Xdate_Delete = {
  __typename?: 'DividendsDocAccessFields_xdate_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Xdate_Read = {
  __typename?: 'DividendsDocAccessFields_xdate_Read';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Xdate_Update = {
  __typename?: 'DividendsDocAccessFields_xdate_Update';
  permission: Scalars['Boolean'];
};

export type DividendsFields = {
  __typename?: 'DividendsFields';
  date?: Maybe<DividendsFields_Date>;
  dividend?: Maybe<DividendsFields_Dividend>;
  name?: Maybe<DividendsFields_Name>;
  quarter?: Maybe<DividendsFields_Quarter>;
  stock?: Maybe<DividendsFields_Stock>;
  xdate?: Maybe<DividendsFields_Xdate>;
};

export type DividendsFields_Date = {
  __typename?: 'DividendsFields_date';
  create?: Maybe<DividendsFields_Date_Create>;
  delete?: Maybe<DividendsFields_Date_Delete>;
  read?: Maybe<DividendsFields_Date_Read>;
  update?: Maybe<DividendsFields_Date_Update>;
};

export type DividendsFields_Date_Create = {
  __typename?: 'DividendsFields_date_Create';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Date_Delete = {
  __typename?: 'DividendsFields_date_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Date_Read = {
  __typename?: 'DividendsFields_date_Read';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Date_Update = {
  __typename?: 'DividendsFields_date_Update';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Dividend = {
  __typename?: 'DividendsFields_dividend';
  create?: Maybe<DividendsFields_Dividend_Create>;
  delete?: Maybe<DividendsFields_Dividend_Delete>;
  read?: Maybe<DividendsFields_Dividend_Read>;
  update?: Maybe<DividendsFields_Dividend_Update>;
};

export type DividendsFields_Dividend_Create = {
  __typename?: 'DividendsFields_dividend_Create';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Dividend_Delete = {
  __typename?: 'DividendsFields_dividend_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Dividend_Read = {
  __typename?: 'DividendsFields_dividend_Read';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Dividend_Update = {
  __typename?: 'DividendsFields_dividend_Update';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Name = {
  __typename?: 'DividendsFields_name';
  create?: Maybe<DividendsFields_Name_Create>;
  delete?: Maybe<DividendsFields_Name_Delete>;
  read?: Maybe<DividendsFields_Name_Read>;
  update?: Maybe<DividendsFields_Name_Update>;
};

export type DividendsFields_Name_Create = {
  __typename?: 'DividendsFields_name_Create';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Name_Delete = {
  __typename?: 'DividendsFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Name_Read = {
  __typename?: 'DividendsFields_name_Read';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Name_Update = {
  __typename?: 'DividendsFields_name_Update';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Quarter = {
  __typename?: 'DividendsFields_quarter';
  create?: Maybe<DividendsFields_Quarter_Create>;
  delete?: Maybe<DividendsFields_Quarter_Delete>;
  read?: Maybe<DividendsFields_Quarter_Read>;
  update?: Maybe<DividendsFields_Quarter_Update>;
};

export type DividendsFields_Quarter_Create = {
  __typename?: 'DividendsFields_quarter_Create';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Quarter_Delete = {
  __typename?: 'DividendsFields_quarter_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Quarter_Read = {
  __typename?: 'DividendsFields_quarter_Read';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Quarter_Update = {
  __typename?: 'DividendsFields_quarter_Update';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Stock = {
  __typename?: 'DividendsFields_stock';
  create?: Maybe<DividendsFields_Stock_Create>;
  delete?: Maybe<DividendsFields_Stock_Delete>;
  read?: Maybe<DividendsFields_Stock_Read>;
  update?: Maybe<DividendsFields_Stock_Update>;
};

export type DividendsFields_Stock_Create = {
  __typename?: 'DividendsFields_stock_Create';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Stock_Delete = {
  __typename?: 'DividendsFields_stock_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Stock_Read = {
  __typename?: 'DividendsFields_stock_Read';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Stock_Update = {
  __typename?: 'DividendsFields_stock_Update';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Xdate = {
  __typename?: 'DividendsFields_xdate';
  create?: Maybe<DividendsFields_Xdate_Create>;
  delete?: Maybe<DividendsFields_Xdate_Delete>;
  read?: Maybe<DividendsFields_Xdate_Read>;
  update?: Maybe<DividendsFields_Xdate_Update>;
};

export type DividendsFields_Xdate_Create = {
  __typename?: 'DividendsFields_xdate_Create';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Xdate_Delete = {
  __typename?: 'DividendsFields_xdate_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Xdate_Read = {
  __typename?: 'DividendsFields_xdate_Read';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Xdate_Update = {
  __typename?: 'DividendsFields_xdate_Update';
  permission: Scalars['Boolean'];
};

export type DividendsReadAccess = {
  __typename?: 'DividendsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DividendsReadDocAccess = {
  __typename?: 'DividendsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DividendsUpdateAccess = {
  __typename?: 'DividendsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DividendsUpdateDocAccess = {
  __typename?: 'DividendsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDividend?: Maybe<Dividend>;
  createStock?: Maybe<Stock>;
  createUser?: Maybe<User>;
  deleteDividend?: Maybe<Dividend>;
  deletePreference?: Maybe<Preference>;
  deleteStock?: Maybe<Stock>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars['Boolean'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean'];
  updateDividend?: Maybe<Dividend>;
  updatePreference?: Maybe<Preference>;
  updateStock?: Maybe<Stock>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateDividendArgs = {
  data: MutationDividendInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateStockArgs = {
  data: MutationStockInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteDividendArgs = {
  id: Scalars['String'];
};


export type MutationDeletePreferenceArgs = {
  key: Scalars['String'];
};


export type MutationDeleteStockArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  expiration?: InputMaybe<Scalars['Int']>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationRefreshTokenUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String'];
};


export type MutationUpdateDividendArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationDividendUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdatePreferenceArgs = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['JSON']>;
};


export type MutationUpdateStockArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationStockUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export type Preference = {
  __typename?: 'Preference';
  createdAt: Scalars['DateTime'];
  key: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value?: Maybe<Scalars['JSON']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Dividend?: Maybe<Dividend>;
  Dividends?: Maybe<Dividends>;
  Preference?: Maybe<Preference>;
  Stock?: Maybe<Stock>;
  Stocks?: Maybe<Stocks>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  docAccessDividend?: Maybe<DividendsDocAccess>;
  docAccessStock?: Maybe<StocksDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']>;
  meUser?: Maybe<UsersMe>;
};


export type QueryDividendArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryDividendsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Dividend_Where>;
};


export type QueryPreferenceArgs = {
  key?: InputMaybe<Scalars['String']>;
};


export type QueryStockArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryStocksArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Stock_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<User_Where>;
};


export type QueryDocAccessDividendArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessStockArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String'];
};

export type Stock = {
  __typename?: 'Stock';
  DPR?: Maybe<Scalars['Float']>;
  ISIN?: Maybe<Scalars['String']>;
  PE?: Maybe<Scalars['Float']>;
  capital?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  dividends?: Maybe<Array<Dividend>>;
  hebrewName?: Maybe<Scalars['String']>;
  historicPrices?: Maybe<Array<Stock_HistoricPrices>>;
  id?: Maybe<Scalars['String']>;
  issuerId?: Maybe<Scalars['Float']>;
  latestPrice?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  securityId?: Maybe<Scalars['Float']>;
  symbol: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users?: Maybe<Array<User>>;
};

export type Stock_Dpr_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Stock_HistoricPrices = {
  __typename?: 'Stock_HistoricPrices';
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type Stock_Isin_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Stock_Pe_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Stock_Capital_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Stock_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Stock_Date_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Stock_Dividends_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Stock_HebrewName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Stock_HistoricPrices__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Stock_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Stock_IssuerId_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Stock_LatestPrice_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Stock_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Stock_Price_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Stock_SecurityId_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Stock_Symbol_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Stock_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Stock_Users_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Stock_Where = {
  AND?: InputMaybe<Array<InputMaybe<Stock_Where_And>>>;
  DPR?: InputMaybe<Stock_Dpr_Operator>;
  ISIN?: InputMaybe<Stock_Isin_Operator>;
  OR?: InputMaybe<Array<InputMaybe<Stock_Where_Or>>>;
  PE?: InputMaybe<Stock_Pe_Operator>;
  capital?: InputMaybe<Stock_Capital_Operator>;
  createdAt?: InputMaybe<Stock_CreatedAt_Operator>;
  date?: InputMaybe<Stock_Date_Operator>;
  dividends?: InputMaybe<Stock_Dividends_Operator>;
  hebrewName?: InputMaybe<Stock_HebrewName_Operator>;
  historicPrices__id?: InputMaybe<Stock_HistoricPrices__Id_Operator>;
  id?: InputMaybe<Stock_Id_Operator>;
  issuerId?: InputMaybe<Stock_IssuerId_Operator>;
  latestPrice?: InputMaybe<Stock_LatestPrice_Operator>;
  name?: InputMaybe<Stock_Name_Operator>;
  price?: InputMaybe<Stock_Price_Operator>;
  securityId?: InputMaybe<Stock_SecurityId_Operator>;
  symbol?: InputMaybe<Stock_Symbol_Operator>;
  updatedAt?: InputMaybe<Stock_UpdatedAt_Operator>;
  users?: InputMaybe<Stock_Users_Operator>;
};

export type Stock_Where_And = {
  DPR?: InputMaybe<Stock_Dpr_Operator>;
  ISIN?: InputMaybe<Stock_Isin_Operator>;
  PE?: InputMaybe<Stock_Pe_Operator>;
  capital?: InputMaybe<Stock_Capital_Operator>;
  createdAt?: InputMaybe<Stock_CreatedAt_Operator>;
  date?: InputMaybe<Stock_Date_Operator>;
  dividends?: InputMaybe<Stock_Dividends_Operator>;
  hebrewName?: InputMaybe<Stock_HebrewName_Operator>;
  historicPrices__id?: InputMaybe<Stock_HistoricPrices__Id_Operator>;
  id?: InputMaybe<Stock_Id_Operator>;
  issuerId?: InputMaybe<Stock_IssuerId_Operator>;
  latestPrice?: InputMaybe<Stock_LatestPrice_Operator>;
  name?: InputMaybe<Stock_Name_Operator>;
  price?: InputMaybe<Stock_Price_Operator>;
  securityId?: InputMaybe<Stock_SecurityId_Operator>;
  symbol?: InputMaybe<Stock_Symbol_Operator>;
  updatedAt?: InputMaybe<Stock_UpdatedAt_Operator>;
  users?: InputMaybe<Stock_Users_Operator>;
};

export type Stock_Where_Or = {
  DPR?: InputMaybe<Stock_Dpr_Operator>;
  ISIN?: InputMaybe<Stock_Isin_Operator>;
  PE?: InputMaybe<Stock_Pe_Operator>;
  capital?: InputMaybe<Stock_Capital_Operator>;
  createdAt?: InputMaybe<Stock_CreatedAt_Operator>;
  date?: InputMaybe<Stock_Date_Operator>;
  dividends?: InputMaybe<Stock_Dividends_Operator>;
  hebrewName?: InputMaybe<Stock_HebrewName_Operator>;
  historicPrices__id?: InputMaybe<Stock_HistoricPrices__Id_Operator>;
  id?: InputMaybe<Stock_Id_Operator>;
  issuerId?: InputMaybe<Stock_IssuerId_Operator>;
  latestPrice?: InputMaybe<Stock_LatestPrice_Operator>;
  name?: InputMaybe<Stock_Name_Operator>;
  price?: InputMaybe<Stock_Price_Operator>;
  securityId?: InputMaybe<Stock_SecurityId_Operator>;
  symbol?: InputMaybe<Stock_Symbol_Operator>;
  updatedAt?: InputMaybe<Stock_UpdatedAt_Operator>;
  users?: InputMaybe<Stock_Users_Operator>;
};

export type Stocks = {
  __typename?: 'Stocks';
  docs?: Maybe<Array<Maybe<Stock>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type StocksCreateAccess = {
  __typename?: 'StocksCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type StocksCreateDocAccess = {
  __typename?: 'StocksCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type StocksDeleteAccess = {
  __typename?: 'StocksDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type StocksDeleteDocAccess = {
  __typename?: 'StocksDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type StocksDocAccessFields = {
  __typename?: 'StocksDocAccessFields';
  DPR?: Maybe<StocksDocAccessFields_Dpr>;
  ISIN?: Maybe<StocksDocAccessFields_Isin>;
  PE?: Maybe<StocksDocAccessFields_Pe>;
  capital?: Maybe<StocksDocAccessFields_Capital>;
  dividends?: Maybe<StocksDocAccessFields_Dividends>;
  hebrewName?: Maybe<StocksDocAccessFields_HebrewName>;
  historicPrices?: Maybe<StocksDocAccessFields_HistoricPrices>;
  issuerId?: Maybe<StocksDocAccessFields_IssuerId>;
  latestPrice?: Maybe<StocksDocAccessFields_LatestPrice>;
  name?: Maybe<StocksDocAccessFields_Name>;
  securityId?: Maybe<StocksDocAccessFields_SecurityId>;
  symbol?: Maybe<StocksDocAccessFields_Symbol>;
  users?: Maybe<StocksDocAccessFields_Users>;
};

export type StocksDocAccessFields_Dpr = {
  __typename?: 'StocksDocAccessFields_DPR';
  create?: Maybe<StocksDocAccessFields_Dpr_Create>;
  delete?: Maybe<StocksDocAccessFields_Dpr_Delete>;
  read?: Maybe<StocksDocAccessFields_Dpr_Read>;
  update?: Maybe<StocksDocAccessFields_Dpr_Update>;
};

export type StocksDocAccessFields_Dpr_Create = {
  __typename?: 'StocksDocAccessFields_DPR_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Dpr_Delete = {
  __typename?: 'StocksDocAccessFields_DPR_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Dpr_Read = {
  __typename?: 'StocksDocAccessFields_DPR_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Dpr_Update = {
  __typename?: 'StocksDocAccessFields_DPR_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Isin = {
  __typename?: 'StocksDocAccessFields_ISIN';
  create?: Maybe<StocksDocAccessFields_Isin_Create>;
  delete?: Maybe<StocksDocAccessFields_Isin_Delete>;
  read?: Maybe<StocksDocAccessFields_Isin_Read>;
  update?: Maybe<StocksDocAccessFields_Isin_Update>;
};

export type StocksDocAccessFields_Isin_Create = {
  __typename?: 'StocksDocAccessFields_ISIN_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Isin_Delete = {
  __typename?: 'StocksDocAccessFields_ISIN_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Isin_Read = {
  __typename?: 'StocksDocAccessFields_ISIN_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Isin_Update = {
  __typename?: 'StocksDocAccessFields_ISIN_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Pe = {
  __typename?: 'StocksDocAccessFields_PE';
  create?: Maybe<StocksDocAccessFields_Pe_Create>;
  delete?: Maybe<StocksDocAccessFields_Pe_Delete>;
  read?: Maybe<StocksDocAccessFields_Pe_Read>;
  update?: Maybe<StocksDocAccessFields_Pe_Update>;
};

export type StocksDocAccessFields_Pe_Create = {
  __typename?: 'StocksDocAccessFields_PE_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Pe_Delete = {
  __typename?: 'StocksDocAccessFields_PE_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Pe_Read = {
  __typename?: 'StocksDocAccessFields_PE_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Pe_Update = {
  __typename?: 'StocksDocAccessFields_PE_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Capital = {
  __typename?: 'StocksDocAccessFields_capital';
  create?: Maybe<StocksDocAccessFields_Capital_Create>;
  delete?: Maybe<StocksDocAccessFields_Capital_Delete>;
  read?: Maybe<StocksDocAccessFields_Capital_Read>;
  update?: Maybe<StocksDocAccessFields_Capital_Update>;
};

export type StocksDocAccessFields_Capital_Create = {
  __typename?: 'StocksDocAccessFields_capital_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Capital_Delete = {
  __typename?: 'StocksDocAccessFields_capital_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Capital_Read = {
  __typename?: 'StocksDocAccessFields_capital_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Capital_Update = {
  __typename?: 'StocksDocAccessFields_capital_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Dividends = {
  __typename?: 'StocksDocAccessFields_dividends';
  create?: Maybe<StocksDocAccessFields_Dividends_Create>;
  delete?: Maybe<StocksDocAccessFields_Dividends_Delete>;
  read?: Maybe<StocksDocAccessFields_Dividends_Read>;
  update?: Maybe<StocksDocAccessFields_Dividends_Update>;
};

export type StocksDocAccessFields_Dividends_Create = {
  __typename?: 'StocksDocAccessFields_dividends_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Dividends_Delete = {
  __typename?: 'StocksDocAccessFields_dividends_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Dividends_Read = {
  __typename?: 'StocksDocAccessFields_dividends_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Dividends_Update = {
  __typename?: 'StocksDocAccessFields_dividends_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HebrewName = {
  __typename?: 'StocksDocAccessFields_hebrewName';
  create?: Maybe<StocksDocAccessFields_HebrewName_Create>;
  delete?: Maybe<StocksDocAccessFields_HebrewName_Delete>;
  read?: Maybe<StocksDocAccessFields_HebrewName_Read>;
  update?: Maybe<StocksDocAccessFields_HebrewName_Update>;
};

export type StocksDocAccessFields_HebrewName_Create = {
  __typename?: 'StocksDocAccessFields_hebrewName_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HebrewName_Delete = {
  __typename?: 'StocksDocAccessFields_hebrewName_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HebrewName_Read = {
  __typename?: 'StocksDocAccessFields_hebrewName_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HebrewName_Update = {
  __typename?: 'StocksDocAccessFields_hebrewName_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices = {
  __typename?: 'StocksDocAccessFields_historicPrices';
  create?: Maybe<StocksDocAccessFields_HistoricPrices_Create>;
  delete?: Maybe<StocksDocAccessFields_HistoricPrices_Delete>;
  fields?: Maybe<StocksDocAccessFields_HistoricPrices_Fields>;
  read?: Maybe<StocksDocAccessFields_HistoricPrices_Read>;
  update?: Maybe<StocksDocAccessFields_HistoricPrices_Update>;
};

export type StocksDocAccessFields_HistoricPrices_Create = {
  __typename?: 'StocksDocAccessFields_historicPrices_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Delete = {
  __typename?: 'StocksDocAccessFields_historicPrices_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Fields = {
  __typename?: 'StocksDocAccessFields_historicPrices_Fields';
  date?: Maybe<StocksDocAccessFields_HistoricPrices_Date>;
  id?: Maybe<StocksDocAccessFields_HistoricPrices_Id>;
  price?: Maybe<StocksDocAccessFields_HistoricPrices_Price>;
};

export type StocksDocAccessFields_HistoricPrices_Read = {
  __typename?: 'StocksDocAccessFields_historicPrices_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Update = {
  __typename?: 'StocksDocAccessFields_historicPrices_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Date = {
  __typename?: 'StocksDocAccessFields_historicPrices_date';
  create?: Maybe<StocksDocAccessFields_HistoricPrices_Date_Create>;
  delete?: Maybe<StocksDocAccessFields_HistoricPrices_Date_Delete>;
  read?: Maybe<StocksDocAccessFields_HistoricPrices_Date_Read>;
  update?: Maybe<StocksDocAccessFields_HistoricPrices_Date_Update>;
};

export type StocksDocAccessFields_HistoricPrices_Date_Create = {
  __typename?: 'StocksDocAccessFields_historicPrices_date_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Date_Delete = {
  __typename?: 'StocksDocAccessFields_historicPrices_date_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Date_Read = {
  __typename?: 'StocksDocAccessFields_historicPrices_date_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Date_Update = {
  __typename?: 'StocksDocAccessFields_historicPrices_date_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Id = {
  __typename?: 'StocksDocAccessFields_historicPrices_id';
  create?: Maybe<StocksDocAccessFields_HistoricPrices_Id_Create>;
  delete?: Maybe<StocksDocAccessFields_HistoricPrices_Id_Delete>;
  read?: Maybe<StocksDocAccessFields_HistoricPrices_Id_Read>;
  update?: Maybe<StocksDocAccessFields_HistoricPrices_Id_Update>;
};

export type StocksDocAccessFields_HistoricPrices_Id_Create = {
  __typename?: 'StocksDocAccessFields_historicPrices_id_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Id_Delete = {
  __typename?: 'StocksDocAccessFields_historicPrices_id_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Id_Read = {
  __typename?: 'StocksDocAccessFields_historicPrices_id_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Id_Update = {
  __typename?: 'StocksDocAccessFields_historicPrices_id_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Price = {
  __typename?: 'StocksDocAccessFields_historicPrices_price';
  create?: Maybe<StocksDocAccessFields_HistoricPrices_Price_Create>;
  delete?: Maybe<StocksDocAccessFields_HistoricPrices_Price_Delete>;
  read?: Maybe<StocksDocAccessFields_HistoricPrices_Price_Read>;
  update?: Maybe<StocksDocAccessFields_HistoricPrices_Price_Update>;
};

export type StocksDocAccessFields_HistoricPrices_Price_Create = {
  __typename?: 'StocksDocAccessFields_historicPrices_price_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Price_Delete = {
  __typename?: 'StocksDocAccessFields_historicPrices_price_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Price_Read = {
  __typename?: 'StocksDocAccessFields_historicPrices_price_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Price_Update = {
  __typename?: 'StocksDocAccessFields_historicPrices_price_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_IssuerId = {
  __typename?: 'StocksDocAccessFields_issuerId';
  create?: Maybe<StocksDocAccessFields_IssuerId_Create>;
  delete?: Maybe<StocksDocAccessFields_IssuerId_Delete>;
  read?: Maybe<StocksDocAccessFields_IssuerId_Read>;
  update?: Maybe<StocksDocAccessFields_IssuerId_Update>;
};

export type StocksDocAccessFields_IssuerId_Create = {
  __typename?: 'StocksDocAccessFields_issuerId_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_IssuerId_Delete = {
  __typename?: 'StocksDocAccessFields_issuerId_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_IssuerId_Read = {
  __typename?: 'StocksDocAccessFields_issuerId_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_IssuerId_Update = {
  __typename?: 'StocksDocAccessFields_issuerId_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_LatestPrice = {
  __typename?: 'StocksDocAccessFields_latestPrice';
  create?: Maybe<StocksDocAccessFields_LatestPrice_Create>;
  delete?: Maybe<StocksDocAccessFields_LatestPrice_Delete>;
  read?: Maybe<StocksDocAccessFields_LatestPrice_Read>;
  update?: Maybe<StocksDocAccessFields_LatestPrice_Update>;
};

export type StocksDocAccessFields_LatestPrice_Create = {
  __typename?: 'StocksDocAccessFields_latestPrice_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_LatestPrice_Delete = {
  __typename?: 'StocksDocAccessFields_latestPrice_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_LatestPrice_Read = {
  __typename?: 'StocksDocAccessFields_latestPrice_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_LatestPrice_Update = {
  __typename?: 'StocksDocAccessFields_latestPrice_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Name = {
  __typename?: 'StocksDocAccessFields_name';
  create?: Maybe<StocksDocAccessFields_Name_Create>;
  delete?: Maybe<StocksDocAccessFields_Name_Delete>;
  read?: Maybe<StocksDocAccessFields_Name_Read>;
  update?: Maybe<StocksDocAccessFields_Name_Update>;
};

export type StocksDocAccessFields_Name_Create = {
  __typename?: 'StocksDocAccessFields_name_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Name_Delete = {
  __typename?: 'StocksDocAccessFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Name_Read = {
  __typename?: 'StocksDocAccessFields_name_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Name_Update = {
  __typename?: 'StocksDocAccessFields_name_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_SecurityId = {
  __typename?: 'StocksDocAccessFields_securityId';
  create?: Maybe<StocksDocAccessFields_SecurityId_Create>;
  delete?: Maybe<StocksDocAccessFields_SecurityId_Delete>;
  read?: Maybe<StocksDocAccessFields_SecurityId_Read>;
  update?: Maybe<StocksDocAccessFields_SecurityId_Update>;
};

export type StocksDocAccessFields_SecurityId_Create = {
  __typename?: 'StocksDocAccessFields_securityId_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_SecurityId_Delete = {
  __typename?: 'StocksDocAccessFields_securityId_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_SecurityId_Read = {
  __typename?: 'StocksDocAccessFields_securityId_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_SecurityId_Update = {
  __typename?: 'StocksDocAccessFields_securityId_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Symbol = {
  __typename?: 'StocksDocAccessFields_symbol';
  create?: Maybe<StocksDocAccessFields_Symbol_Create>;
  delete?: Maybe<StocksDocAccessFields_Symbol_Delete>;
  read?: Maybe<StocksDocAccessFields_Symbol_Read>;
  update?: Maybe<StocksDocAccessFields_Symbol_Update>;
};

export type StocksDocAccessFields_Symbol_Create = {
  __typename?: 'StocksDocAccessFields_symbol_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Symbol_Delete = {
  __typename?: 'StocksDocAccessFields_symbol_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Symbol_Read = {
  __typename?: 'StocksDocAccessFields_symbol_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Symbol_Update = {
  __typename?: 'StocksDocAccessFields_symbol_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Users = {
  __typename?: 'StocksDocAccessFields_users';
  create?: Maybe<StocksDocAccessFields_Users_Create>;
  delete?: Maybe<StocksDocAccessFields_Users_Delete>;
  read?: Maybe<StocksDocAccessFields_Users_Read>;
  update?: Maybe<StocksDocAccessFields_Users_Update>;
};

export type StocksDocAccessFields_Users_Create = {
  __typename?: 'StocksDocAccessFields_users_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Users_Delete = {
  __typename?: 'StocksDocAccessFields_users_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Users_Read = {
  __typename?: 'StocksDocAccessFields_users_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Users_Update = {
  __typename?: 'StocksDocAccessFields_users_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields = {
  __typename?: 'StocksFields';
  DPR?: Maybe<StocksFields_Dpr>;
  ISIN?: Maybe<StocksFields_Isin>;
  PE?: Maybe<StocksFields_Pe>;
  capital?: Maybe<StocksFields_Capital>;
  dividends?: Maybe<StocksFields_Dividends>;
  hebrewName?: Maybe<StocksFields_HebrewName>;
  historicPrices?: Maybe<StocksFields_HistoricPrices>;
  issuerId?: Maybe<StocksFields_IssuerId>;
  latestPrice?: Maybe<StocksFields_LatestPrice>;
  name?: Maybe<StocksFields_Name>;
  securityId?: Maybe<StocksFields_SecurityId>;
  symbol?: Maybe<StocksFields_Symbol>;
  users?: Maybe<StocksFields_Users>;
};

export type StocksFields_Dpr = {
  __typename?: 'StocksFields_DPR';
  create?: Maybe<StocksFields_Dpr_Create>;
  delete?: Maybe<StocksFields_Dpr_Delete>;
  read?: Maybe<StocksFields_Dpr_Read>;
  update?: Maybe<StocksFields_Dpr_Update>;
};

export type StocksFields_Dpr_Create = {
  __typename?: 'StocksFields_DPR_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_Dpr_Delete = {
  __typename?: 'StocksFields_DPR_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_Dpr_Read = {
  __typename?: 'StocksFields_DPR_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_Dpr_Update = {
  __typename?: 'StocksFields_DPR_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_Isin = {
  __typename?: 'StocksFields_ISIN';
  create?: Maybe<StocksFields_Isin_Create>;
  delete?: Maybe<StocksFields_Isin_Delete>;
  read?: Maybe<StocksFields_Isin_Read>;
  update?: Maybe<StocksFields_Isin_Update>;
};

export type StocksFields_Isin_Create = {
  __typename?: 'StocksFields_ISIN_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_Isin_Delete = {
  __typename?: 'StocksFields_ISIN_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_Isin_Read = {
  __typename?: 'StocksFields_ISIN_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_Isin_Update = {
  __typename?: 'StocksFields_ISIN_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_Pe = {
  __typename?: 'StocksFields_PE';
  create?: Maybe<StocksFields_Pe_Create>;
  delete?: Maybe<StocksFields_Pe_Delete>;
  read?: Maybe<StocksFields_Pe_Read>;
  update?: Maybe<StocksFields_Pe_Update>;
};

export type StocksFields_Pe_Create = {
  __typename?: 'StocksFields_PE_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_Pe_Delete = {
  __typename?: 'StocksFields_PE_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_Pe_Read = {
  __typename?: 'StocksFields_PE_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_Pe_Update = {
  __typename?: 'StocksFields_PE_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_Capital = {
  __typename?: 'StocksFields_capital';
  create?: Maybe<StocksFields_Capital_Create>;
  delete?: Maybe<StocksFields_Capital_Delete>;
  read?: Maybe<StocksFields_Capital_Read>;
  update?: Maybe<StocksFields_Capital_Update>;
};

export type StocksFields_Capital_Create = {
  __typename?: 'StocksFields_capital_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_Capital_Delete = {
  __typename?: 'StocksFields_capital_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_Capital_Read = {
  __typename?: 'StocksFields_capital_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_Capital_Update = {
  __typename?: 'StocksFields_capital_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_Dividends = {
  __typename?: 'StocksFields_dividends';
  create?: Maybe<StocksFields_Dividends_Create>;
  delete?: Maybe<StocksFields_Dividends_Delete>;
  read?: Maybe<StocksFields_Dividends_Read>;
  update?: Maybe<StocksFields_Dividends_Update>;
};

export type StocksFields_Dividends_Create = {
  __typename?: 'StocksFields_dividends_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_Dividends_Delete = {
  __typename?: 'StocksFields_dividends_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_Dividends_Read = {
  __typename?: 'StocksFields_dividends_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_Dividends_Update = {
  __typename?: 'StocksFields_dividends_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_HebrewName = {
  __typename?: 'StocksFields_hebrewName';
  create?: Maybe<StocksFields_HebrewName_Create>;
  delete?: Maybe<StocksFields_HebrewName_Delete>;
  read?: Maybe<StocksFields_HebrewName_Read>;
  update?: Maybe<StocksFields_HebrewName_Update>;
};

export type StocksFields_HebrewName_Create = {
  __typename?: 'StocksFields_hebrewName_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_HebrewName_Delete = {
  __typename?: 'StocksFields_hebrewName_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_HebrewName_Read = {
  __typename?: 'StocksFields_hebrewName_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_HebrewName_Update = {
  __typename?: 'StocksFields_hebrewName_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices = {
  __typename?: 'StocksFields_historicPrices';
  create?: Maybe<StocksFields_HistoricPrices_Create>;
  delete?: Maybe<StocksFields_HistoricPrices_Delete>;
  fields?: Maybe<StocksFields_HistoricPrices_Fields>;
  read?: Maybe<StocksFields_HistoricPrices_Read>;
  update?: Maybe<StocksFields_HistoricPrices_Update>;
};

export type StocksFields_HistoricPrices_Create = {
  __typename?: 'StocksFields_historicPrices_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Delete = {
  __typename?: 'StocksFields_historicPrices_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Fields = {
  __typename?: 'StocksFields_historicPrices_Fields';
  date?: Maybe<StocksFields_HistoricPrices_Date>;
  id?: Maybe<StocksFields_HistoricPrices_Id>;
  price?: Maybe<StocksFields_HistoricPrices_Price>;
};

export type StocksFields_HistoricPrices_Read = {
  __typename?: 'StocksFields_historicPrices_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Update = {
  __typename?: 'StocksFields_historicPrices_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Date = {
  __typename?: 'StocksFields_historicPrices_date';
  create?: Maybe<StocksFields_HistoricPrices_Date_Create>;
  delete?: Maybe<StocksFields_HistoricPrices_Date_Delete>;
  read?: Maybe<StocksFields_HistoricPrices_Date_Read>;
  update?: Maybe<StocksFields_HistoricPrices_Date_Update>;
};

export type StocksFields_HistoricPrices_Date_Create = {
  __typename?: 'StocksFields_historicPrices_date_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Date_Delete = {
  __typename?: 'StocksFields_historicPrices_date_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Date_Read = {
  __typename?: 'StocksFields_historicPrices_date_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Date_Update = {
  __typename?: 'StocksFields_historicPrices_date_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Id = {
  __typename?: 'StocksFields_historicPrices_id';
  create?: Maybe<StocksFields_HistoricPrices_Id_Create>;
  delete?: Maybe<StocksFields_HistoricPrices_Id_Delete>;
  read?: Maybe<StocksFields_HistoricPrices_Id_Read>;
  update?: Maybe<StocksFields_HistoricPrices_Id_Update>;
};

export type StocksFields_HistoricPrices_Id_Create = {
  __typename?: 'StocksFields_historicPrices_id_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Id_Delete = {
  __typename?: 'StocksFields_historicPrices_id_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Id_Read = {
  __typename?: 'StocksFields_historicPrices_id_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Id_Update = {
  __typename?: 'StocksFields_historicPrices_id_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Price = {
  __typename?: 'StocksFields_historicPrices_price';
  create?: Maybe<StocksFields_HistoricPrices_Price_Create>;
  delete?: Maybe<StocksFields_HistoricPrices_Price_Delete>;
  read?: Maybe<StocksFields_HistoricPrices_Price_Read>;
  update?: Maybe<StocksFields_HistoricPrices_Price_Update>;
};

export type StocksFields_HistoricPrices_Price_Create = {
  __typename?: 'StocksFields_historicPrices_price_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Price_Delete = {
  __typename?: 'StocksFields_historicPrices_price_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Price_Read = {
  __typename?: 'StocksFields_historicPrices_price_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Price_Update = {
  __typename?: 'StocksFields_historicPrices_price_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_IssuerId = {
  __typename?: 'StocksFields_issuerId';
  create?: Maybe<StocksFields_IssuerId_Create>;
  delete?: Maybe<StocksFields_IssuerId_Delete>;
  read?: Maybe<StocksFields_IssuerId_Read>;
  update?: Maybe<StocksFields_IssuerId_Update>;
};

export type StocksFields_IssuerId_Create = {
  __typename?: 'StocksFields_issuerId_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_IssuerId_Delete = {
  __typename?: 'StocksFields_issuerId_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_IssuerId_Read = {
  __typename?: 'StocksFields_issuerId_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_IssuerId_Update = {
  __typename?: 'StocksFields_issuerId_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_LatestPrice = {
  __typename?: 'StocksFields_latestPrice';
  create?: Maybe<StocksFields_LatestPrice_Create>;
  delete?: Maybe<StocksFields_LatestPrice_Delete>;
  read?: Maybe<StocksFields_LatestPrice_Read>;
  update?: Maybe<StocksFields_LatestPrice_Update>;
};

export type StocksFields_LatestPrice_Create = {
  __typename?: 'StocksFields_latestPrice_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_LatestPrice_Delete = {
  __typename?: 'StocksFields_latestPrice_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_LatestPrice_Read = {
  __typename?: 'StocksFields_latestPrice_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_LatestPrice_Update = {
  __typename?: 'StocksFields_latestPrice_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_Name = {
  __typename?: 'StocksFields_name';
  create?: Maybe<StocksFields_Name_Create>;
  delete?: Maybe<StocksFields_Name_Delete>;
  read?: Maybe<StocksFields_Name_Read>;
  update?: Maybe<StocksFields_Name_Update>;
};

export type StocksFields_Name_Create = {
  __typename?: 'StocksFields_name_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_Name_Delete = {
  __typename?: 'StocksFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_Name_Read = {
  __typename?: 'StocksFields_name_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_Name_Update = {
  __typename?: 'StocksFields_name_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_SecurityId = {
  __typename?: 'StocksFields_securityId';
  create?: Maybe<StocksFields_SecurityId_Create>;
  delete?: Maybe<StocksFields_SecurityId_Delete>;
  read?: Maybe<StocksFields_SecurityId_Read>;
  update?: Maybe<StocksFields_SecurityId_Update>;
};

export type StocksFields_SecurityId_Create = {
  __typename?: 'StocksFields_securityId_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_SecurityId_Delete = {
  __typename?: 'StocksFields_securityId_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_SecurityId_Read = {
  __typename?: 'StocksFields_securityId_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_SecurityId_Update = {
  __typename?: 'StocksFields_securityId_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_Symbol = {
  __typename?: 'StocksFields_symbol';
  create?: Maybe<StocksFields_Symbol_Create>;
  delete?: Maybe<StocksFields_Symbol_Delete>;
  read?: Maybe<StocksFields_Symbol_Read>;
  update?: Maybe<StocksFields_Symbol_Update>;
};

export type StocksFields_Symbol_Create = {
  __typename?: 'StocksFields_symbol_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_Symbol_Delete = {
  __typename?: 'StocksFields_symbol_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_Symbol_Read = {
  __typename?: 'StocksFields_symbol_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_Symbol_Update = {
  __typename?: 'StocksFields_symbol_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_Users = {
  __typename?: 'StocksFields_users';
  create?: Maybe<StocksFields_Users_Create>;
  delete?: Maybe<StocksFields_Users_Delete>;
  read?: Maybe<StocksFields_Users_Read>;
  update?: Maybe<StocksFields_Users_Update>;
};

export type StocksFields_Users_Create = {
  __typename?: 'StocksFields_users_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_Users_Delete = {
  __typename?: 'StocksFields_users_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_Users_Read = {
  __typename?: 'StocksFields_users_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_Users_Update = {
  __typename?: 'StocksFields_users_Update';
  permission: Scalars['Boolean'];
};

export type StocksReadAccess = {
  __typename?: 'StocksReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type StocksReadDocAccess = {
  __typename?: 'StocksReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type StocksUpdateAccess = {
  __typename?: 'StocksUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type StocksUpdateDocAccess = {
  __typename?: 'StocksUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type User = {
  __typename?: 'User';
  accountId?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  birthday?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lockUntil?: Maybe<Scalars['DateTime']>;
  loginAttempts?: Maybe<Scalars['Float']>;
  password: Scalars['String'];
  portfolioValue?: Maybe<Scalars['Float']>;
  resetPasswordExpiration?: Maybe<Scalars['DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  roles: Array<User_Roles>;
  stocks?: Maybe<Array<User_Stocks>>;
  transactions?: Maybe<Array<User_Transactions>>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export enum UserUpdate_Roles_MutationInput {
  Admin = 'admin',
  Kid = 'kid'
}

export type User_Stocks = {
  __typename?: 'User_Stocks';
  dividends?: Maybe<Array<User_Stocks_Dividends>>;
  id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  stock?: Maybe<Stock>;
};

export type User_Stocks_Dividends = {
  __typename?: 'User_Stocks_Dividends';
  dividend?: Maybe<Dividend>;
  id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type User_Transactions = {
  __typename?: 'User_Transactions';
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  status?: Maybe<User_Transactions_Status>;
  stock?: Maybe<Stock>;
  sum?: Maybe<Scalars['Float']>;
  type?: Maybe<User_Transactions_Type>;
};

export enum User_Transactions_Status {
  Completed = 'completed',
  Pending = 'pending'
}

export enum User_Transactions_Type {
  Buy = 'buy',
  Deposit = 'deposit',
  Sell = 'sell',
  Withdrawal = 'withdrawal'
}

export type User_AccountId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Balance_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type User_Birthday_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Date_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Dividend_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type User_LastName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_PortfolioValue_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type User_Price_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type User_Quantity_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export enum User_Roles {
  Admin = 'admin',
  Kid = 'kid'
}

export enum User_Roles_Input {
  Admin = 'admin',
  Kid = 'kid'
}

export enum User_Roles_MutationInput {
  Admin = 'admin',
  Kid = 'kid'
}

export type User_Roles_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  equals?: InputMaybe<User_Roles_Input>;
  in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  not_equals?: InputMaybe<User_Roles_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
};

export type User_Stock_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Stocks__Dividends__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Stocks__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Sum_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type User_Transactions__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum User_Transactions__Status_Input {
  Completed = 'completed',
  Pending = 'pending'
}

export type User_Transactions__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Transactions__Status_Input>>>;
  equals?: InputMaybe<User_Transactions__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<User_Transactions__Status_Input>>>;
  not_equals?: InputMaybe<User_Transactions__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Transactions__Status_Input>>>;
};

export enum User_Transactions__Type_Input {
  Buy = 'buy',
  Deposit = 'deposit',
  Sell = 'sell',
  Withdrawal = 'withdrawal'
}

export type User_Transactions__Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Transactions__Type_Input>>>;
  equals?: InputMaybe<User_Transactions__Type_Input>;
  in?: InputMaybe<Array<InputMaybe<User_Transactions__Type_Input>>>;
  not_equals?: InputMaybe<User_Transactions__Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Transactions__Type_Input>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Username_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  accountId?: InputMaybe<User_AccountId_Operator>;
  balance?: InputMaybe<User_Balance_Operator>;
  birthday?: InputMaybe<User_Birthday_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  date?: InputMaybe<User_Date_Operator>;
  dividend?: InputMaybe<User_Dividend_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  portfolioValue?: InputMaybe<User_PortfolioValue_Operator>;
  price?: InputMaybe<User_Price_Operator>;
  quantity?: InputMaybe<User_Quantity_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  stock?: InputMaybe<User_Stock_Operator>;
  stocks__dividends__id?: InputMaybe<User_Stocks__Dividends__Id_Operator>;
  stocks__id?: InputMaybe<User_Stocks__Id_Operator>;
  sum?: InputMaybe<User_Sum_Operator>;
  transactions__id?: InputMaybe<User_Transactions__Id_Operator>;
  transactions__status?: InputMaybe<User_Transactions__Status_Operator>;
  transactions__type?: InputMaybe<User_Transactions__Type_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  username?: InputMaybe<User_Username_Operator>;
};

export type User_Where_And = {
  accountId?: InputMaybe<User_AccountId_Operator>;
  balance?: InputMaybe<User_Balance_Operator>;
  birthday?: InputMaybe<User_Birthday_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  date?: InputMaybe<User_Date_Operator>;
  dividend?: InputMaybe<User_Dividend_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  portfolioValue?: InputMaybe<User_PortfolioValue_Operator>;
  price?: InputMaybe<User_Price_Operator>;
  quantity?: InputMaybe<User_Quantity_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  stock?: InputMaybe<User_Stock_Operator>;
  stocks__dividends__id?: InputMaybe<User_Stocks__Dividends__Id_Operator>;
  stocks__id?: InputMaybe<User_Stocks__Id_Operator>;
  sum?: InputMaybe<User_Sum_Operator>;
  transactions__id?: InputMaybe<User_Transactions__Id_Operator>;
  transactions__status?: InputMaybe<User_Transactions__Status_Operator>;
  transactions__type?: InputMaybe<User_Transactions__Type_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  username?: InputMaybe<User_Username_Operator>;
};

export type User_Where_Or = {
  accountId?: InputMaybe<User_AccountId_Operator>;
  balance?: InputMaybe<User_Balance_Operator>;
  birthday?: InputMaybe<User_Birthday_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  date?: InputMaybe<User_Date_Operator>;
  dividend?: InputMaybe<User_Dividend_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  portfolioValue?: InputMaybe<User_PortfolioValue_Operator>;
  price?: InputMaybe<User_Price_Operator>;
  quantity?: InputMaybe<User_Quantity_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  stock?: InputMaybe<User_Stock_Operator>;
  stocks__dividends__id?: InputMaybe<User_Stocks__Dividends__Id_Operator>;
  stocks__id?: InputMaybe<User_Stocks__Id_Operator>;
  sum?: InputMaybe<User_Sum_Operator>;
  transactions__id?: InputMaybe<User_Transactions__Id_Operator>;
  transactions__status?: InputMaybe<User_Transactions__Status_Operator>;
  transactions__type?: InputMaybe<User_Transactions__Type_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  username?: InputMaybe<User_Username_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  accountId?: Maybe<UsersDocAccessFields_AccountId>;
  balance?: Maybe<UsersDocAccessFields_Balance>;
  birthday?: Maybe<UsersDocAccessFields_Birthday>;
  email?: Maybe<UsersDocAccessFields_Email>;
  lastName?: Maybe<UsersDocAccessFields_LastName>;
  password?: Maybe<UsersDocAccessFields_Password>;
  portfolioValue?: Maybe<UsersDocAccessFields_PortfolioValue>;
  roles?: Maybe<UsersDocAccessFields_Roles>;
  stocks?: Maybe<UsersDocAccessFields_Stocks>;
  transactions?: Maybe<UsersDocAccessFields_Transactions>;
  username?: Maybe<UsersDocAccessFields_Username>;
};

export type UsersDocAccessFields_AccountId = {
  __typename?: 'UsersDocAccessFields_accountId';
  create?: Maybe<UsersDocAccessFields_AccountId_Create>;
  delete?: Maybe<UsersDocAccessFields_AccountId_Delete>;
  read?: Maybe<UsersDocAccessFields_AccountId_Read>;
  update?: Maybe<UsersDocAccessFields_AccountId_Update>;
};

export type UsersDocAccessFields_AccountId_Create = {
  __typename?: 'UsersDocAccessFields_accountId_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_AccountId_Delete = {
  __typename?: 'UsersDocAccessFields_accountId_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_AccountId_Read = {
  __typename?: 'UsersDocAccessFields_accountId_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_AccountId_Update = {
  __typename?: 'UsersDocAccessFields_accountId_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Balance = {
  __typename?: 'UsersDocAccessFields_balance';
  create?: Maybe<UsersDocAccessFields_Balance_Create>;
  delete?: Maybe<UsersDocAccessFields_Balance_Delete>;
  read?: Maybe<UsersDocAccessFields_Balance_Read>;
  update?: Maybe<UsersDocAccessFields_Balance_Update>;
};

export type UsersDocAccessFields_Balance_Create = {
  __typename?: 'UsersDocAccessFields_balance_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Balance_Delete = {
  __typename?: 'UsersDocAccessFields_balance_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Balance_Read = {
  __typename?: 'UsersDocAccessFields_balance_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Balance_Update = {
  __typename?: 'UsersDocAccessFields_balance_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Birthday = {
  __typename?: 'UsersDocAccessFields_birthday';
  create?: Maybe<UsersDocAccessFields_Birthday_Create>;
  delete?: Maybe<UsersDocAccessFields_Birthday_Delete>;
  read?: Maybe<UsersDocAccessFields_Birthday_Read>;
  update?: Maybe<UsersDocAccessFields_Birthday_Update>;
};

export type UsersDocAccessFields_Birthday_Create = {
  __typename?: 'UsersDocAccessFields_birthday_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Birthday_Delete = {
  __typename?: 'UsersDocAccessFields_birthday_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Birthday_Read = {
  __typename?: 'UsersDocAccessFields_birthday_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Birthday_Update = {
  __typename?: 'UsersDocAccessFields_birthday_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_LastName = {
  __typename?: 'UsersDocAccessFields_lastName';
  create?: Maybe<UsersDocAccessFields_LastName_Create>;
  delete?: Maybe<UsersDocAccessFields_LastName_Delete>;
  read?: Maybe<UsersDocAccessFields_LastName_Read>;
  update?: Maybe<UsersDocAccessFields_LastName_Update>;
};

export type UsersDocAccessFields_LastName_Create = {
  __typename?: 'UsersDocAccessFields_lastName_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_LastName_Delete = {
  __typename?: 'UsersDocAccessFields_lastName_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_LastName_Read = {
  __typename?: 'UsersDocAccessFields_lastName_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_LastName_Update = {
  __typename?: 'UsersDocAccessFields_lastName_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password = {
  __typename?: 'UsersDocAccessFields_password';
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: 'UsersDocAccessFields_password_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_PortfolioValue = {
  __typename?: 'UsersDocAccessFields_portfolioValue';
  create?: Maybe<UsersDocAccessFields_PortfolioValue_Create>;
  delete?: Maybe<UsersDocAccessFields_PortfolioValue_Delete>;
  read?: Maybe<UsersDocAccessFields_PortfolioValue_Read>;
  update?: Maybe<UsersDocAccessFields_PortfolioValue_Update>;
};

export type UsersDocAccessFields_PortfolioValue_Create = {
  __typename?: 'UsersDocAccessFields_portfolioValue_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_PortfolioValue_Delete = {
  __typename?: 'UsersDocAccessFields_portfolioValue_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_PortfolioValue_Read = {
  __typename?: 'UsersDocAccessFields_portfolioValue_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_PortfolioValue_Update = {
  __typename?: 'UsersDocAccessFields_portfolioValue_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Roles = {
  __typename?: 'UsersDocAccessFields_roles';
  create?: Maybe<UsersDocAccessFields_Roles_Create>;
  delete?: Maybe<UsersDocAccessFields_Roles_Delete>;
  read?: Maybe<UsersDocAccessFields_Roles_Read>;
  update?: Maybe<UsersDocAccessFields_Roles_Update>;
};

export type UsersDocAccessFields_Roles_Create = {
  __typename?: 'UsersDocAccessFields_roles_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Roles_Delete = {
  __typename?: 'UsersDocAccessFields_roles_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Roles_Read = {
  __typename?: 'UsersDocAccessFields_roles_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Roles_Update = {
  __typename?: 'UsersDocAccessFields_roles_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks = {
  __typename?: 'UsersDocAccessFields_stocks';
  create?: Maybe<UsersDocAccessFields_Stocks_Create>;
  delete?: Maybe<UsersDocAccessFields_Stocks_Delete>;
  fields?: Maybe<UsersDocAccessFields_Stocks_Fields>;
  read?: Maybe<UsersDocAccessFields_Stocks_Read>;
  update?: Maybe<UsersDocAccessFields_Stocks_Update>;
};

export type UsersDocAccessFields_Stocks_Create = {
  __typename?: 'UsersDocAccessFields_stocks_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Delete = {
  __typename?: 'UsersDocAccessFields_stocks_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Fields = {
  __typename?: 'UsersDocAccessFields_stocks_Fields';
  dividends?: Maybe<UsersDocAccessFields_Stocks_Dividends>;
  id?: Maybe<UsersDocAccessFields_Stocks_Id>;
  quantity?: Maybe<UsersDocAccessFields_Stocks_Quantity>;
  stock?: Maybe<UsersDocAccessFields_Stocks_Stock>;
};

export type UsersDocAccessFields_Stocks_Read = {
  __typename?: 'UsersDocAccessFields_stocks_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Update = {
  __typename?: 'UsersDocAccessFields_stocks_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends = {
  __typename?: 'UsersDocAccessFields_stocks_dividends';
  create?: Maybe<UsersDocAccessFields_Stocks_Dividends_Create>;
  delete?: Maybe<UsersDocAccessFields_Stocks_Dividends_Delete>;
  fields?: Maybe<UsersDocAccessFields_Stocks_Dividends_Fields>;
  read?: Maybe<UsersDocAccessFields_Stocks_Dividends_Read>;
  update?: Maybe<UsersDocAccessFields_Stocks_Dividends_Update>;
};

export type UsersDocAccessFields_Stocks_Dividends_Create = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Delete = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Fields = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_Fields';
  dividend?: Maybe<UsersDocAccessFields_Stocks_Dividends_Dividend>;
  id?: Maybe<UsersDocAccessFields_Stocks_Dividends_Id>;
  quantity?: Maybe<UsersDocAccessFields_Stocks_Dividends_Quantity>;
};

export type UsersDocAccessFields_Stocks_Dividends_Read = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Update = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Dividend = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_dividend';
  create?: Maybe<UsersDocAccessFields_Stocks_Dividends_Dividend_Create>;
  delete?: Maybe<UsersDocAccessFields_Stocks_Dividends_Dividend_Delete>;
  read?: Maybe<UsersDocAccessFields_Stocks_Dividends_Dividend_Read>;
  update?: Maybe<UsersDocAccessFields_Stocks_Dividends_Dividend_Update>;
};

export type UsersDocAccessFields_Stocks_Dividends_Dividend_Create = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_dividend_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Dividend_Delete = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_dividend_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Dividend_Read = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_dividend_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Dividend_Update = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_dividend_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Id = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_id';
  create?: Maybe<UsersDocAccessFields_Stocks_Dividends_Id_Create>;
  delete?: Maybe<UsersDocAccessFields_Stocks_Dividends_Id_Delete>;
  read?: Maybe<UsersDocAccessFields_Stocks_Dividends_Id_Read>;
  update?: Maybe<UsersDocAccessFields_Stocks_Dividends_Id_Update>;
};

export type UsersDocAccessFields_Stocks_Dividends_Id_Create = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Id_Delete = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Id_Read = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Id_Update = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Quantity = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_quantity';
  create?: Maybe<UsersDocAccessFields_Stocks_Dividends_Quantity_Create>;
  delete?: Maybe<UsersDocAccessFields_Stocks_Dividends_Quantity_Delete>;
  read?: Maybe<UsersDocAccessFields_Stocks_Dividends_Quantity_Read>;
  update?: Maybe<UsersDocAccessFields_Stocks_Dividends_Quantity_Update>;
};

export type UsersDocAccessFields_Stocks_Dividends_Quantity_Create = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_quantity_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Quantity_Delete = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_quantity_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Quantity_Read = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_quantity_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Quantity_Update = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_quantity_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Id = {
  __typename?: 'UsersDocAccessFields_stocks_id';
  create?: Maybe<UsersDocAccessFields_Stocks_Id_Create>;
  delete?: Maybe<UsersDocAccessFields_Stocks_Id_Delete>;
  read?: Maybe<UsersDocAccessFields_Stocks_Id_Read>;
  update?: Maybe<UsersDocAccessFields_Stocks_Id_Update>;
};

export type UsersDocAccessFields_Stocks_Id_Create = {
  __typename?: 'UsersDocAccessFields_stocks_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Id_Delete = {
  __typename?: 'UsersDocAccessFields_stocks_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Id_Read = {
  __typename?: 'UsersDocAccessFields_stocks_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Id_Update = {
  __typename?: 'UsersDocAccessFields_stocks_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Quantity = {
  __typename?: 'UsersDocAccessFields_stocks_quantity';
  create?: Maybe<UsersDocAccessFields_Stocks_Quantity_Create>;
  delete?: Maybe<UsersDocAccessFields_Stocks_Quantity_Delete>;
  read?: Maybe<UsersDocAccessFields_Stocks_Quantity_Read>;
  update?: Maybe<UsersDocAccessFields_Stocks_Quantity_Update>;
};

export type UsersDocAccessFields_Stocks_Quantity_Create = {
  __typename?: 'UsersDocAccessFields_stocks_quantity_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Quantity_Delete = {
  __typename?: 'UsersDocAccessFields_stocks_quantity_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Quantity_Read = {
  __typename?: 'UsersDocAccessFields_stocks_quantity_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Quantity_Update = {
  __typename?: 'UsersDocAccessFields_stocks_quantity_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Stock = {
  __typename?: 'UsersDocAccessFields_stocks_stock';
  create?: Maybe<UsersDocAccessFields_Stocks_Stock_Create>;
  delete?: Maybe<UsersDocAccessFields_Stocks_Stock_Delete>;
  read?: Maybe<UsersDocAccessFields_Stocks_Stock_Read>;
  update?: Maybe<UsersDocAccessFields_Stocks_Stock_Update>;
};

export type UsersDocAccessFields_Stocks_Stock_Create = {
  __typename?: 'UsersDocAccessFields_stocks_stock_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Stock_Delete = {
  __typename?: 'UsersDocAccessFields_stocks_stock_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Stock_Read = {
  __typename?: 'UsersDocAccessFields_stocks_stock_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Stock_Update = {
  __typename?: 'UsersDocAccessFields_stocks_stock_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions = {
  __typename?: 'UsersDocAccessFields_transactions';
  create?: Maybe<UsersDocAccessFields_Transactions_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Delete>;
  fields?: Maybe<UsersDocAccessFields_Transactions_Fields>;
  read?: Maybe<UsersDocAccessFields_Transactions_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Update>;
};

export type UsersDocAccessFields_Transactions_Create = {
  __typename?: 'UsersDocAccessFields_transactions_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Fields = {
  __typename?: 'UsersDocAccessFields_transactions_Fields';
  date?: Maybe<UsersDocAccessFields_Transactions_Date>;
  id?: Maybe<UsersDocAccessFields_Transactions_Id>;
  price?: Maybe<UsersDocAccessFields_Transactions_Price>;
  quantity?: Maybe<UsersDocAccessFields_Transactions_Quantity>;
  status?: Maybe<UsersDocAccessFields_Transactions_Status>;
  stock?: Maybe<UsersDocAccessFields_Transactions_Stock>;
  sum?: Maybe<UsersDocAccessFields_Transactions_Sum>;
  type?: Maybe<UsersDocAccessFields_Transactions_Type>;
};

export type UsersDocAccessFields_Transactions_Read = {
  __typename?: 'UsersDocAccessFields_transactions_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Update = {
  __typename?: 'UsersDocAccessFields_transactions_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Date = {
  __typename?: 'UsersDocAccessFields_transactions_date';
  create?: Maybe<UsersDocAccessFields_Transactions_Date_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Date_Delete>;
  read?: Maybe<UsersDocAccessFields_Transactions_Date_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Date_Update>;
};

export type UsersDocAccessFields_Transactions_Date_Create = {
  __typename?: 'UsersDocAccessFields_transactions_date_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Date_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_date_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Date_Read = {
  __typename?: 'UsersDocAccessFields_transactions_date_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Date_Update = {
  __typename?: 'UsersDocAccessFields_transactions_date_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Id = {
  __typename?: 'UsersDocAccessFields_transactions_id';
  create?: Maybe<UsersDocAccessFields_Transactions_Id_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Id_Delete>;
  read?: Maybe<UsersDocAccessFields_Transactions_Id_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Id_Update>;
};

export type UsersDocAccessFields_Transactions_Id_Create = {
  __typename?: 'UsersDocAccessFields_transactions_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Id_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Id_Read = {
  __typename?: 'UsersDocAccessFields_transactions_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Id_Update = {
  __typename?: 'UsersDocAccessFields_transactions_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Price = {
  __typename?: 'UsersDocAccessFields_transactions_price';
  create?: Maybe<UsersDocAccessFields_Transactions_Price_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Price_Delete>;
  read?: Maybe<UsersDocAccessFields_Transactions_Price_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Price_Update>;
};

export type UsersDocAccessFields_Transactions_Price_Create = {
  __typename?: 'UsersDocAccessFields_transactions_price_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Price_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_price_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Price_Read = {
  __typename?: 'UsersDocAccessFields_transactions_price_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Price_Update = {
  __typename?: 'UsersDocAccessFields_transactions_price_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Quantity = {
  __typename?: 'UsersDocAccessFields_transactions_quantity';
  create?: Maybe<UsersDocAccessFields_Transactions_Quantity_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Quantity_Delete>;
  read?: Maybe<UsersDocAccessFields_Transactions_Quantity_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Quantity_Update>;
};

export type UsersDocAccessFields_Transactions_Quantity_Create = {
  __typename?: 'UsersDocAccessFields_transactions_quantity_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Quantity_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_quantity_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Quantity_Read = {
  __typename?: 'UsersDocAccessFields_transactions_quantity_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Quantity_Update = {
  __typename?: 'UsersDocAccessFields_transactions_quantity_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Status = {
  __typename?: 'UsersDocAccessFields_transactions_status';
  create?: Maybe<UsersDocAccessFields_Transactions_Status_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Status_Delete>;
  read?: Maybe<UsersDocAccessFields_Transactions_Status_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Status_Update>;
};

export type UsersDocAccessFields_Transactions_Status_Create = {
  __typename?: 'UsersDocAccessFields_transactions_status_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Status_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_status_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Status_Read = {
  __typename?: 'UsersDocAccessFields_transactions_status_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Status_Update = {
  __typename?: 'UsersDocAccessFields_transactions_status_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Stock = {
  __typename?: 'UsersDocAccessFields_transactions_stock';
  create?: Maybe<UsersDocAccessFields_Transactions_Stock_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Stock_Delete>;
  read?: Maybe<UsersDocAccessFields_Transactions_Stock_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Stock_Update>;
};

export type UsersDocAccessFields_Transactions_Stock_Create = {
  __typename?: 'UsersDocAccessFields_transactions_stock_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Stock_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_stock_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Stock_Read = {
  __typename?: 'UsersDocAccessFields_transactions_stock_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Stock_Update = {
  __typename?: 'UsersDocAccessFields_transactions_stock_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Sum = {
  __typename?: 'UsersDocAccessFields_transactions_sum';
  create?: Maybe<UsersDocAccessFields_Transactions_Sum_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Sum_Delete>;
  read?: Maybe<UsersDocAccessFields_Transactions_Sum_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Sum_Update>;
};

export type UsersDocAccessFields_Transactions_Sum_Create = {
  __typename?: 'UsersDocAccessFields_transactions_sum_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Sum_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_sum_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Sum_Read = {
  __typename?: 'UsersDocAccessFields_transactions_sum_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Sum_Update = {
  __typename?: 'UsersDocAccessFields_transactions_sum_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Type = {
  __typename?: 'UsersDocAccessFields_transactions_type';
  create?: Maybe<UsersDocAccessFields_Transactions_Type_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Type_Delete>;
  read?: Maybe<UsersDocAccessFields_Transactions_Type_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Type_Update>;
};

export type UsersDocAccessFields_Transactions_Type_Create = {
  __typename?: 'UsersDocAccessFields_transactions_type_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Type_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_type_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Type_Read = {
  __typename?: 'UsersDocAccessFields_transactions_type_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Type_Update = {
  __typename?: 'UsersDocAccessFields_transactions_type_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Username = {
  __typename?: 'UsersDocAccessFields_username';
  create?: Maybe<UsersDocAccessFields_Username_Create>;
  delete?: Maybe<UsersDocAccessFields_Username_Delete>;
  read?: Maybe<UsersDocAccessFields_Username_Read>;
  update?: Maybe<UsersDocAccessFields_Username_Update>;
};

export type UsersDocAccessFields_Username_Create = {
  __typename?: 'UsersDocAccessFields_username_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Username_Delete = {
  __typename?: 'UsersDocAccessFields_username_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Username_Read = {
  __typename?: 'UsersDocAccessFields_username_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Username_Update = {
  __typename?: 'UsersDocAccessFields_username_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  accountId?: Maybe<UsersFields_AccountId>;
  balance?: Maybe<UsersFields_Balance>;
  birthday?: Maybe<UsersFields_Birthday>;
  email?: Maybe<UsersFields_Email>;
  lastName?: Maybe<UsersFields_LastName>;
  password?: Maybe<UsersFields_Password>;
  portfolioValue?: Maybe<UsersFields_PortfolioValue>;
  roles?: Maybe<UsersFields_Roles>;
  stocks?: Maybe<UsersFields_Stocks>;
  transactions?: Maybe<UsersFields_Transactions>;
  username?: Maybe<UsersFields_Username>;
};

export type UsersFields_AccountId = {
  __typename?: 'UsersFields_accountId';
  create?: Maybe<UsersFields_AccountId_Create>;
  delete?: Maybe<UsersFields_AccountId_Delete>;
  read?: Maybe<UsersFields_AccountId_Read>;
  update?: Maybe<UsersFields_AccountId_Update>;
};

export type UsersFields_AccountId_Create = {
  __typename?: 'UsersFields_accountId_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_AccountId_Delete = {
  __typename?: 'UsersFields_accountId_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_AccountId_Read = {
  __typename?: 'UsersFields_accountId_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_AccountId_Update = {
  __typename?: 'UsersFields_accountId_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Balance = {
  __typename?: 'UsersFields_balance';
  create?: Maybe<UsersFields_Balance_Create>;
  delete?: Maybe<UsersFields_Balance_Delete>;
  read?: Maybe<UsersFields_Balance_Read>;
  update?: Maybe<UsersFields_Balance_Update>;
};

export type UsersFields_Balance_Create = {
  __typename?: 'UsersFields_balance_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Balance_Delete = {
  __typename?: 'UsersFields_balance_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Balance_Read = {
  __typename?: 'UsersFields_balance_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Balance_Update = {
  __typename?: 'UsersFields_balance_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Birthday = {
  __typename?: 'UsersFields_birthday';
  create?: Maybe<UsersFields_Birthday_Create>;
  delete?: Maybe<UsersFields_Birthday_Delete>;
  read?: Maybe<UsersFields_Birthday_Read>;
  update?: Maybe<UsersFields_Birthday_Update>;
};

export type UsersFields_Birthday_Create = {
  __typename?: 'UsersFields_birthday_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Birthday_Delete = {
  __typename?: 'UsersFields_birthday_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Birthday_Read = {
  __typename?: 'UsersFields_birthday_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Birthday_Update = {
  __typename?: 'UsersFields_birthday_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_LastName = {
  __typename?: 'UsersFields_lastName';
  create?: Maybe<UsersFields_LastName_Create>;
  delete?: Maybe<UsersFields_LastName_Delete>;
  read?: Maybe<UsersFields_LastName_Read>;
  update?: Maybe<UsersFields_LastName_Update>;
};

export type UsersFields_LastName_Create = {
  __typename?: 'UsersFields_lastName_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_LastName_Delete = {
  __typename?: 'UsersFields_lastName_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_LastName_Read = {
  __typename?: 'UsersFields_lastName_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_LastName_Update = {
  __typename?: 'UsersFields_lastName_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password = {
  __typename?: 'UsersFields_password';
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: 'UsersFields_password_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Delete = {
  __typename?: 'UsersFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Read = {
  __typename?: 'UsersFields_password_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Update = {
  __typename?: 'UsersFields_password_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_PortfolioValue = {
  __typename?: 'UsersFields_portfolioValue';
  create?: Maybe<UsersFields_PortfolioValue_Create>;
  delete?: Maybe<UsersFields_PortfolioValue_Delete>;
  read?: Maybe<UsersFields_PortfolioValue_Read>;
  update?: Maybe<UsersFields_PortfolioValue_Update>;
};

export type UsersFields_PortfolioValue_Create = {
  __typename?: 'UsersFields_portfolioValue_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_PortfolioValue_Delete = {
  __typename?: 'UsersFields_portfolioValue_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_PortfolioValue_Read = {
  __typename?: 'UsersFields_portfolioValue_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_PortfolioValue_Update = {
  __typename?: 'UsersFields_portfolioValue_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Roles = {
  __typename?: 'UsersFields_roles';
  create?: Maybe<UsersFields_Roles_Create>;
  delete?: Maybe<UsersFields_Roles_Delete>;
  read?: Maybe<UsersFields_Roles_Read>;
  update?: Maybe<UsersFields_Roles_Update>;
};

export type UsersFields_Roles_Create = {
  __typename?: 'UsersFields_roles_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Roles_Delete = {
  __typename?: 'UsersFields_roles_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Roles_Read = {
  __typename?: 'UsersFields_roles_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Roles_Update = {
  __typename?: 'UsersFields_roles_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks = {
  __typename?: 'UsersFields_stocks';
  create?: Maybe<UsersFields_Stocks_Create>;
  delete?: Maybe<UsersFields_Stocks_Delete>;
  fields?: Maybe<UsersFields_Stocks_Fields>;
  read?: Maybe<UsersFields_Stocks_Read>;
  update?: Maybe<UsersFields_Stocks_Update>;
};

export type UsersFields_Stocks_Create = {
  __typename?: 'UsersFields_stocks_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Delete = {
  __typename?: 'UsersFields_stocks_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Fields = {
  __typename?: 'UsersFields_stocks_Fields';
  dividends?: Maybe<UsersFields_Stocks_Dividends>;
  id?: Maybe<UsersFields_Stocks_Id>;
  quantity?: Maybe<UsersFields_Stocks_Quantity>;
  stock?: Maybe<UsersFields_Stocks_Stock>;
};

export type UsersFields_Stocks_Read = {
  __typename?: 'UsersFields_stocks_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Update = {
  __typename?: 'UsersFields_stocks_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends = {
  __typename?: 'UsersFields_stocks_dividends';
  create?: Maybe<UsersFields_Stocks_Dividends_Create>;
  delete?: Maybe<UsersFields_Stocks_Dividends_Delete>;
  fields?: Maybe<UsersFields_Stocks_Dividends_Fields>;
  read?: Maybe<UsersFields_Stocks_Dividends_Read>;
  update?: Maybe<UsersFields_Stocks_Dividends_Update>;
};

export type UsersFields_Stocks_Dividends_Create = {
  __typename?: 'UsersFields_stocks_dividends_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Delete = {
  __typename?: 'UsersFields_stocks_dividends_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Fields = {
  __typename?: 'UsersFields_stocks_dividends_Fields';
  dividend?: Maybe<UsersFields_Stocks_Dividends_Dividend>;
  id?: Maybe<UsersFields_Stocks_Dividends_Id>;
  quantity?: Maybe<UsersFields_Stocks_Dividends_Quantity>;
};

export type UsersFields_Stocks_Dividends_Read = {
  __typename?: 'UsersFields_stocks_dividends_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Update = {
  __typename?: 'UsersFields_stocks_dividends_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Dividend = {
  __typename?: 'UsersFields_stocks_dividends_dividend';
  create?: Maybe<UsersFields_Stocks_Dividends_Dividend_Create>;
  delete?: Maybe<UsersFields_Stocks_Dividends_Dividend_Delete>;
  read?: Maybe<UsersFields_Stocks_Dividends_Dividend_Read>;
  update?: Maybe<UsersFields_Stocks_Dividends_Dividend_Update>;
};

export type UsersFields_Stocks_Dividends_Dividend_Create = {
  __typename?: 'UsersFields_stocks_dividends_dividend_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Dividend_Delete = {
  __typename?: 'UsersFields_stocks_dividends_dividend_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Dividend_Read = {
  __typename?: 'UsersFields_stocks_dividends_dividend_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Dividend_Update = {
  __typename?: 'UsersFields_stocks_dividends_dividend_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Id = {
  __typename?: 'UsersFields_stocks_dividends_id';
  create?: Maybe<UsersFields_Stocks_Dividends_Id_Create>;
  delete?: Maybe<UsersFields_Stocks_Dividends_Id_Delete>;
  read?: Maybe<UsersFields_Stocks_Dividends_Id_Read>;
  update?: Maybe<UsersFields_Stocks_Dividends_Id_Update>;
};

export type UsersFields_Stocks_Dividends_Id_Create = {
  __typename?: 'UsersFields_stocks_dividends_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Id_Delete = {
  __typename?: 'UsersFields_stocks_dividends_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Id_Read = {
  __typename?: 'UsersFields_stocks_dividends_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Id_Update = {
  __typename?: 'UsersFields_stocks_dividends_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Quantity = {
  __typename?: 'UsersFields_stocks_dividends_quantity';
  create?: Maybe<UsersFields_Stocks_Dividends_Quantity_Create>;
  delete?: Maybe<UsersFields_Stocks_Dividends_Quantity_Delete>;
  read?: Maybe<UsersFields_Stocks_Dividends_Quantity_Read>;
  update?: Maybe<UsersFields_Stocks_Dividends_Quantity_Update>;
};

export type UsersFields_Stocks_Dividends_Quantity_Create = {
  __typename?: 'UsersFields_stocks_dividends_quantity_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Quantity_Delete = {
  __typename?: 'UsersFields_stocks_dividends_quantity_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Quantity_Read = {
  __typename?: 'UsersFields_stocks_dividends_quantity_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Quantity_Update = {
  __typename?: 'UsersFields_stocks_dividends_quantity_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Id = {
  __typename?: 'UsersFields_stocks_id';
  create?: Maybe<UsersFields_Stocks_Id_Create>;
  delete?: Maybe<UsersFields_Stocks_Id_Delete>;
  read?: Maybe<UsersFields_Stocks_Id_Read>;
  update?: Maybe<UsersFields_Stocks_Id_Update>;
};

export type UsersFields_Stocks_Id_Create = {
  __typename?: 'UsersFields_stocks_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Id_Delete = {
  __typename?: 'UsersFields_stocks_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Id_Read = {
  __typename?: 'UsersFields_stocks_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Id_Update = {
  __typename?: 'UsersFields_stocks_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Quantity = {
  __typename?: 'UsersFields_stocks_quantity';
  create?: Maybe<UsersFields_Stocks_Quantity_Create>;
  delete?: Maybe<UsersFields_Stocks_Quantity_Delete>;
  read?: Maybe<UsersFields_Stocks_Quantity_Read>;
  update?: Maybe<UsersFields_Stocks_Quantity_Update>;
};

export type UsersFields_Stocks_Quantity_Create = {
  __typename?: 'UsersFields_stocks_quantity_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Quantity_Delete = {
  __typename?: 'UsersFields_stocks_quantity_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Quantity_Read = {
  __typename?: 'UsersFields_stocks_quantity_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Quantity_Update = {
  __typename?: 'UsersFields_stocks_quantity_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Stock = {
  __typename?: 'UsersFields_stocks_stock';
  create?: Maybe<UsersFields_Stocks_Stock_Create>;
  delete?: Maybe<UsersFields_Stocks_Stock_Delete>;
  read?: Maybe<UsersFields_Stocks_Stock_Read>;
  update?: Maybe<UsersFields_Stocks_Stock_Update>;
};

export type UsersFields_Stocks_Stock_Create = {
  __typename?: 'UsersFields_stocks_stock_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Stock_Delete = {
  __typename?: 'UsersFields_stocks_stock_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Stock_Read = {
  __typename?: 'UsersFields_stocks_stock_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Stock_Update = {
  __typename?: 'UsersFields_stocks_stock_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions = {
  __typename?: 'UsersFields_transactions';
  create?: Maybe<UsersFields_Transactions_Create>;
  delete?: Maybe<UsersFields_Transactions_Delete>;
  fields?: Maybe<UsersFields_Transactions_Fields>;
  read?: Maybe<UsersFields_Transactions_Read>;
  update?: Maybe<UsersFields_Transactions_Update>;
};

export type UsersFields_Transactions_Create = {
  __typename?: 'UsersFields_transactions_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Delete = {
  __typename?: 'UsersFields_transactions_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Fields = {
  __typename?: 'UsersFields_transactions_Fields';
  date?: Maybe<UsersFields_Transactions_Date>;
  id?: Maybe<UsersFields_Transactions_Id>;
  price?: Maybe<UsersFields_Transactions_Price>;
  quantity?: Maybe<UsersFields_Transactions_Quantity>;
  status?: Maybe<UsersFields_Transactions_Status>;
  stock?: Maybe<UsersFields_Transactions_Stock>;
  sum?: Maybe<UsersFields_Transactions_Sum>;
  type?: Maybe<UsersFields_Transactions_Type>;
};

export type UsersFields_Transactions_Read = {
  __typename?: 'UsersFields_transactions_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Update = {
  __typename?: 'UsersFields_transactions_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Date = {
  __typename?: 'UsersFields_transactions_date';
  create?: Maybe<UsersFields_Transactions_Date_Create>;
  delete?: Maybe<UsersFields_Transactions_Date_Delete>;
  read?: Maybe<UsersFields_Transactions_Date_Read>;
  update?: Maybe<UsersFields_Transactions_Date_Update>;
};

export type UsersFields_Transactions_Date_Create = {
  __typename?: 'UsersFields_transactions_date_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Date_Delete = {
  __typename?: 'UsersFields_transactions_date_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Date_Read = {
  __typename?: 'UsersFields_transactions_date_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Date_Update = {
  __typename?: 'UsersFields_transactions_date_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Id = {
  __typename?: 'UsersFields_transactions_id';
  create?: Maybe<UsersFields_Transactions_Id_Create>;
  delete?: Maybe<UsersFields_Transactions_Id_Delete>;
  read?: Maybe<UsersFields_Transactions_Id_Read>;
  update?: Maybe<UsersFields_Transactions_Id_Update>;
};

export type UsersFields_Transactions_Id_Create = {
  __typename?: 'UsersFields_transactions_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Id_Delete = {
  __typename?: 'UsersFields_transactions_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Id_Read = {
  __typename?: 'UsersFields_transactions_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Id_Update = {
  __typename?: 'UsersFields_transactions_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Price = {
  __typename?: 'UsersFields_transactions_price';
  create?: Maybe<UsersFields_Transactions_Price_Create>;
  delete?: Maybe<UsersFields_Transactions_Price_Delete>;
  read?: Maybe<UsersFields_Transactions_Price_Read>;
  update?: Maybe<UsersFields_Transactions_Price_Update>;
};

export type UsersFields_Transactions_Price_Create = {
  __typename?: 'UsersFields_transactions_price_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Price_Delete = {
  __typename?: 'UsersFields_transactions_price_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Price_Read = {
  __typename?: 'UsersFields_transactions_price_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Price_Update = {
  __typename?: 'UsersFields_transactions_price_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Quantity = {
  __typename?: 'UsersFields_transactions_quantity';
  create?: Maybe<UsersFields_Transactions_Quantity_Create>;
  delete?: Maybe<UsersFields_Transactions_Quantity_Delete>;
  read?: Maybe<UsersFields_Transactions_Quantity_Read>;
  update?: Maybe<UsersFields_Transactions_Quantity_Update>;
};

export type UsersFields_Transactions_Quantity_Create = {
  __typename?: 'UsersFields_transactions_quantity_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Quantity_Delete = {
  __typename?: 'UsersFields_transactions_quantity_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Quantity_Read = {
  __typename?: 'UsersFields_transactions_quantity_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Quantity_Update = {
  __typename?: 'UsersFields_transactions_quantity_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Status = {
  __typename?: 'UsersFields_transactions_status';
  create?: Maybe<UsersFields_Transactions_Status_Create>;
  delete?: Maybe<UsersFields_Transactions_Status_Delete>;
  read?: Maybe<UsersFields_Transactions_Status_Read>;
  update?: Maybe<UsersFields_Transactions_Status_Update>;
};

export type UsersFields_Transactions_Status_Create = {
  __typename?: 'UsersFields_transactions_status_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Status_Delete = {
  __typename?: 'UsersFields_transactions_status_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Status_Read = {
  __typename?: 'UsersFields_transactions_status_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Status_Update = {
  __typename?: 'UsersFields_transactions_status_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Stock = {
  __typename?: 'UsersFields_transactions_stock';
  create?: Maybe<UsersFields_Transactions_Stock_Create>;
  delete?: Maybe<UsersFields_Transactions_Stock_Delete>;
  read?: Maybe<UsersFields_Transactions_Stock_Read>;
  update?: Maybe<UsersFields_Transactions_Stock_Update>;
};

export type UsersFields_Transactions_Stock_Create = {
  __typename?: 'UsersFields_transactions_stock_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Stock_Delete = {
  __typename?: 'UsersFields_transactions_stock_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Stock_Read = {
  __typename?: 'UsersFields_transactions_stock_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Stock_Update = {
  __typename?: 'UsersFields_transactions_stock_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Sum = {
  __typename?: 'UsersFields_transactions_sum';
  create?: Maybe<UsersFields_Transactions_Sum_Create>;
  delete?: Maybe<UsersFields_Transactions_Sum_Delete>;
  read?: Maybe<UsersFields_Transactions_Sum_Read>;
  update?: Maybe<UsersFields_Transactions_Sum_Update>;
};

export type UsersFields_Transactions_Sum_Create = {
  __typename?: 'UsersFields_transactions_sum_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Sum_Delete = {
  __typename?: 'UsersFields_transactions_sum_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Sum_Read = {
  __typename?: 'UsersFields_transactions_sum_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Sum_Update = {
  __typename?: 'UsersFields_transactions_sum_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Type = {
  __typename?: 'UsersFields_transactions_type';
  create?: Maybe<UsersFields_Transactions_Type_Create>;
  delete?: Maybe<UsersFields_Transactions_Type_Delete>;
  read?: Maybe<UsersFields_Transactions_Type_Read>;
  update?: Maybe<UsersFields_Transactions_Type_Update>;
};

export type UsersFields_Transactions_Type_Create = {
  __typename?: 'UsersFields_transactions_type_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Type_Delete = {
  __typename?: 'UsersFields_transactions_type_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Type_Read = {
  __typename?: 'UsersFields_transactions_type_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Type_Update = {
  __typename?: 'UsersFields_transactions_type_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Username = {
  __typename?: 'UsersFields_username';
  create?: Maybe<UsersFields_Username_Create>;
  delete?: Maybe<UsersFields_Username_Delete>;
  read?: Maybe<UsersFields_Username_Read>;
  update?: Maybe<UsersFields_Username_Update>;
};

export type UsersFields_Username_Create = {
  __typename?: 'UsersFields_username_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Username_Delete = {
  __typename?: 'UsersFields_username_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Username_Read = {
  __typename?: 'UsersFields_username_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Username_Update = {
  __typename?: 'UsersFields_username_Update';
  permission: Scalars['Boolean'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DividendsAccess = {
  __typename?: 'dividendsAccess';
  create?: Maybe<DividendsCreateAccess>;
  delete?: Maybe<DividendsDeleteAccess>;
  fields?: Maybe<DividendsFields>;
  read?: Maybe<DividendsReadAccess>;
  update?: Maybe<DividendsUpdateAccess>;
};

export type DividendsDocAccess = {
  __typename?: 'dividendsDocAccess';
  create?: Maybe<DividendsCreateDocAccess>;
  delete?: Maybe<DividendsDeleteDocAccess>;
  fields?: Maybe<DividendsDocAccessFields>;
  read?: Maybe<DividendsReadDocAccess>;
  update?: Maybe<DividendsUpdateDocAccess>;
};

export type MutationDividendInput = {
  date: Scalars['String'];
  dividend: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  quarter?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['String']>;
  xdate?: InputMaybe<Scalars['String']>;
};

export type MutationDividendUpdateInput = {
  date?: InputMaybe<Scalars['String']>;
  dividend?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  quarter?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['String']>;
  xdate?: InputMaybe<Scalars['String']>;
};

export type MutationStockInput = {
  DPR?: InputMaybe<Scalars['Float']>;
  ISIN?: InputMaybe<Scalars['String']>;
  PE?: InputMaybe<Scalars['Float']>;
  capital?: InputMaybe<Scalars['Float']>;
  dividends?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hebrewName?: InputMaybe<Scalars['String']>;
  historicPrices?: InputMaybe<Array<InputMaybe<MutationStock_HistoricPricesInput>>>;
  issuerId?: InputMaybe<Scalars['Float']>;
  latestPrice?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  securityId?: InputMaybe<Scalars['Float']>;
  symbol: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MutationStockUpdateInput = {
  DPR?: InputMaybe<Scalars['Float']>;
  ISIN?: InputMaybe<Scalars['String']>;
  PE?: InputMaybe<Scalars['Float']>;
  capital?: InputMaybe<Scalars['Float']>;
  dividends?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hebrewName?: InputMaybe<Scalars['String']>;
  historicPrices?: InputMaybe<Array<InputMaybe<MutationStockUpdate_HistoricPricesInput>>>;
  issuerId?: InputMaybe<Scalars['Float']>;
  latestPrice?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  securityId?: InputMaybe<Scalars['Float']>;
  symbol?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MutationStockUpdate_HistoricPricesInput = {
  date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  price: Scalars['Float'];
};

export type MutationStock_HistoricPricesInput = {
  date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  price: Scalars['Float'];
};

export type MutationUserInput = {
  accountId?: InputMaybe<Scalars['String']>;
  balance?: InputMaybe<Scalars['Float']>;
  birthday?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  password: Scalars['String'];
  portfolioValue?: InputMaybe<Scalars['Float']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  roles: Array<InputMaybe<User_Roles_MutationInput>>;
  stocks?: InputMaybe<Array<InputMaybe<MutationUser_StocksInput>>>;
  transactions?: InputMaybe<Array<InputMaybe<MutationUser_TransactionsInput>>>;
  username: Scalars['String'];
};

export type MutationUserUpdateInput = {
  accountId?: InputMaybe<Scalars['String']>;
  balance?: InputMaybe<Scalars['Float']>;
  birthday?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  password?: InputMaybe<Scalars['String']>;
  portfolioValue?: InputMaybe<Scalars['Float']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<InputMaybe<UserUpdate_Roles_MutationInput>>>;
  stocks?: InputMaybe<Array<InputMaybe<MutationUserUpdate_StocksInput>>>;
  transactions?: InputMaybe<Array<InputMaybe<MutationUserUpdate_TransactionsInput>>>;
  username?: InputMaybe<Scalars['String']>;
};

export type MutationUserUpdate_StocksInput = {
  dividends?: InputMaybe<Array<InputMaybe<MutationUserUpdate_Stocks_DividendsInput>>>;
  id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  stock?: InputMaybe<Scalars['String']>;
};

export type MutationUserUpdate_Stocks_DividendsInput = {
  dividend?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type MutationUserUpdate_TransactionsInput = {
  date: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['String']>;
  sum: Scalars['Float'];
  type: Scalars['String'];
};

export type MutationUser_StocksInput = {
  dividends?: InputMaybe<Array<InputMaybe<MutationUser_Stocks_DividendsInput>>>;
  id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  stock?: InputMaybe<Scalars['String']>;
};

export type MutationUser_Stocks_DividendsInput = {
  dividend?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type MutationUser_TransactionsInput = {
  date: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['String']>;
  sum: Scalars['Float'];
  type: Scalars['String'];
};

export type StocksAccess = {
  __typename?: 'stocksAccess';
  create?: Maybe<StocksCreateAccess>;
  delete?: Maybe<StocksDeleteAccess>;
  fields?: Maybe<StocksFields>;
  read?: Maybe<StocksReadAccess>;
  update?: Maybe<StocksUpdateAccess>;
};

export type StocksDocAccess = {
  __typename?: 'stocksDocAccess';
  create?: Maybe<StocksCreateDocAccess>;
  delete?: Maybe<StocksDeleteDocAccess>;
  fields?: Maybe<StocksDocAccessFields>;
  read?: Maybe<StocksReadDocAccess>;
  update?: Maybe<StocksUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String'];
  email: Scalars['EmailAddress'];
  roles: Array<UsersJwt_Roles>;
};

export enum UsersJwt_Roles {
  Admin = 'admin',
  Kid = 'kid'
}

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']>;
  refreshedToken?: Maybe<Scalars['String']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean'];
  dividends?: Maybe<DividendsAccess>;
  stocks?: Maybe<StocksAccess>;
  users?: Maybe<UsersAccess>;
};

export type Dividend = {
  __typename?: 'Dividend';
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  dividend: Scalars['Float'];
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  quarter?: Maybe<Scalars['String']>;
  stock: Stock;
  updatedAt: Scalars['DateTime'];
  xdate?: Maybe<Scalars['DateTime']>;
};

export type Dividend_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Dividend_Date_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Dividend_Dividend_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Dividend_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Dividend_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Dividend_Quarter_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Dividend_Stock_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Dividend_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Dividend_Where = {
  AND?: InputMaybe<Array<InputMaybe<Dividend_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Dividend_Where_Or>>>;
  createdAt?: InputMaybe<Dividend_CreatedAt_Operator>;
  date?: InputMaybe<Dividend_Date_Operator>;
  dividend?: InputMaybe<Dividend_Dividend_Operator>;
  id?: InputMaybe<Dividend_Id_Operator>;
  name?: InputMaybe<Dividend_Name_Operator>;
  quarter?: InputMaybe<Dividend_Quarter_Operator>;
  stock?: InputMaybe<Dividend_Stock_Operator>;
  updatedAt?: InputMaybe<Dividend_UpdatedAt_Operator>;
  xdate?: InputMaybe<Dividend_Xdate_Operator>;
};

export type Dividend_Where_And = {
  createdAt?: InputMaybe<Dividend_CreatedAt_Operator>;
  date?: InputMaybe<Dividend_Date_Operator>;
  dividend?: InputMaybe<Dividend_Dividend_Operator>;
  id?: InputMaybe<Dividend_Id_Operator>;
  name?: InputMaybe<Dividend_Name_Operator>;
  quarter?: InputMaybe<Dividend_Quarter_Operator>;
  stock?: InputMaybe<Dividend_Stock_Operator>;
  updatedAt?: InputMaybe<Dividend_UpdatedAt_Operator>;
  xdate?: InputMaybe<Dividend_Xdate_Operator>;
};

export type Dividend_Where_Or = {
  createdAt?: InputMaybe<Dividend_CreatedAt_Operator>;
  date?: InputMaybe<Dividend_Date_Operator>;
  dividend?: InputMaybe<Dividend_Dividend_Operator>;
  id?: InputMaybe<Dividend_Id_Operator>;
  name?: InputMaybe<Dividend_Name_Operator>;
  quarter?: InputMaybe<Dividend_Quarter_Operator>;
  stock?: InputMaybe<Dividend_Stock_Operator>;
  updatedAt?: InputMaybe<Dividend_UpdatedAt_Operator>;
  xdate?: InputMaybe<Dividend_Xdate_Operator>;
};

export type Dividend_Xdate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Dividends = {
  __typename?: 'Dividends';
  docs?: Maybe<Array<Maybe<Dividend>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type DividendsCreateAccess = {
  __typename?: 'DividendsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DividendsCreateDocAccess = {
  __typename?: 'DividendsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DividendsDeleteAccess = {
  __typename?: 'DividendsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DividendsDeleteDocAccess = {
  __typename?: 'DividendsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DividendsDocAccessFields = {
  __typename?: 'DividendsDocAccessFields';
  date?: Maybe<DividendsDocAccessFields_Date>;
  dividend?: Maybe<DividendsDocAccessFields_Dividend>;
  name?: Maybe<DividendsDocAccessFields_Name>;
  quarter?: Maybe<DividendsDocAccessFields_Quarter>;
  stock?: Maybe<DividendsDocAccessFields_Stock>;
  xdate?: Maybe<DividendsDocAccessFields_Xdate>;
};

export type DividendsDocAccessFields_Date = {
  __typename?: 'DividendsDocAccessFields_date';
  create?: Maybe<DividendsDocAccessFields_Date_Create>;
  delete?: Maybe<DividendsDocAccessFields_Date_Delete>;
  read?: Maybe<DividendsDocAccessFields_Date_Read>;
  update?: Maybe<DividendsDocAccessFields_Date_Update>;
};

export type DividendsDocAccessFields_Date_Create = {
  __typename?: 'DividendsDocAccessFields_date_Create';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Date_Delete = {
  __typename?: 'DividendsDocAccessFields_date_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Date_Read = {
  __typename?: 'DividendsDocAccessFields_date_Read';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Date_Update = {
  __typename?: 'DividendsDocAccessFields_date_Update';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Dividend = {
  __typename?: 'DividendsDocAccessFields_dividend';
  create?: Maybe<DividendsDocAccessFields_Dividend_Create>;
  delete?: Maybe<DividendsDocAccessFields_Dividend_Delete>;
  read?: Maybe<DividendsDocAccessFields_Dividend_Read>;
  update?: Maybe<DividendsDocAccessFields_Dividend_Update>;
};

export type DividendsDocAccessFields_Dividend_Create = {
  __typename?: 'DividendsDocAccessFields_dividend_Create';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Dividend_Delete = {
  __typename?: 'DividendsDocAccessFields_dividend_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Dividend_Read = {
  __typename?: 'DividendsDocAccessFields_dividend_Read';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Dividend_Update = {
  __typename?: 'DividendsDocAccessFields_dividend_Update';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Name = {
  __typename?: 'DividendsDocAccessFields_name';
  create?: Maybe<DividendsDocAccessFields_Name_Create>;
  delete?: Maybe<DividendsDocAccessFields_Name_Delete>;
  read?: Maybe<DividendsDocAccessFields_Name_Read>;
  update?: Maybe<DividendsDocAccessFields_Name_Update>;
};

export type DividendsDocAccessFields_Name_Create = {
  __typename?: 'DividendsDocAccessFields_name_Create';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Name_Delete = {
  __typename?: 'DividendsDocAccessFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Name_Read = {
  __typename?: 'DividendsDocAccessFields_name_Read';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Name_Update = {
  __typename?: 'DividendsDocAccessFields_name_Update';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Quarter = {
  __typename?: 'DividendsDocAccessFields_quarter';
  create?: Maybe<DividendsDocAccessFields_Quarter_Create>;
  delete?: Maybe<DividendsDocAccessFields_Quarter_Delete>;
  read?: Maybe<DividendsDocAccessFields_Quarter_Read>;
  update?: Maybe<DividendsDocAccessFields_Quarter_Update>;
};

export type DividendsDocAccessFields_Quarter_Create = {
  __typename?: 'DividendsDocAccessFields_quarter_Create';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Quarter_Delete = {
  __typename?: 'DividendsDocAccessFields_quarter_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Quarter_Read = {
  __typename?: 'DividendsDocAccessFields_quarter_Read';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Quarter_Update = {
  __typename?: 'DividendsDocAccessFields_quarter_Update';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Stock = {
  __typename?: 'DividendsDocAccessFields_stock';
  create?: Maybe<DividendsDocAccessFields_Stock_Create>;
  delete?: Maybe<DividendsDocAccessFields_Stock_Delete>;
  read?: Maybe<DividendsDocAccessFields_Stock_Read>;
  update?: Maybe<DividendsDocAccessFields_Stock_Update>;
};

export type DividendsDocAccessFields_Stock_Create = {
  __typename?: 'DividendsDocAccessFields_stock_Create';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Stock_Delete = {
  __typename?: 'DividendsDocAccessFields_stock_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Stock_Read = {
  __typename?: 'DividendsDocAccessFields_stock_Read';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Stock_Update = {
  __typename?: 'DividendsDocAccessFields_stock_Update';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Xdate = {
  __typename?: 'DividendsDocAccessFields_xdate';
  create?: Maybe<DividendsDocAccessFields_Xdate_Create>;
  delete?: Maybe<DividendsDocAccessFields_Xdate_Delete>;
  read?: Maybe<DividendsDocAccessFields_Xdate_Read>;
  update?: Maybe<DividendsDocAccessFields_Xdate_Update>;
};

export type DividendsDocAccessFields_Xdate_Create = {
  __typename?: 'DividendsDocAccessFields_xdate_Create';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Xdate_Delete = {
  __typename?: 'DividendsDocAccessFields_xdate_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Xdate_Read = {
  __typename?: 'DividendsDocAccessFields_xdate_Read';
  permission: Scalars['Boolean'];
};

export type DividendsDocAccessFields_Xdate_Update = {
  __typename?: 'DividendsDocAccessFields_xdate_Update';
  permission: Scalars['Boolean'];
};

export type DividendsFields = {
  __typename?: 'DividendsFields';
  date?: Maybe<DividendsFields_Date>;
  dividend?: Maybe<DividendsFields_Dividend>;
  name?: Maybe<DividendsFields_Name>;
  quarter?: Maybe<DividendsFields_Quarter>;
  stock?: Maybe<DividendsFields_Stock>;
  xdate?: Maybe<DividendsFields_Xdate>;
};

export type DividendsFields_Date = {
  __typename?: 'DividendsFields_date';
  create?: Maybe<DividendsFields_Date_Create>;
  delete?: Maybe<DividendsFields_Date_Delete>;
  read?: Maybe<DividendsFields_Date_Read>;
  update?: Maybe<DividendsFields_Date_Update>;
};

export type DividendsFields_Date_Create = {
  __typename?: 'DividendsFields_date_Create';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Date_Delete = {
  __typename?: 'DividendsFields_date_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Date_Read = {
  __typename?: 'DividendsFields_date_Read';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Date_Update = {
  __typename?: 'DividendsFields_date_Update';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Dividend = {
  __typename?: 'DividendsFields_dividend';
  create?: Maybe<DividendsFields_Dividend_Create>;
  delete?: Maybe<DividendsFields_Dividend_Delete>;
  read?: Maybe<DividendsFields_Dividend_Read>;
  update?: Maybe<DividendsFields_Dividend_Update>;
};

export type DividendsFields_Dividend_Create = {
  __typename?: 'DividendsFields_dividend_Create';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Dividend_Delete = {
  __typename?: 'DividendsFields_dividend_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Dividend_Read = {
  __typename?: 'DividendsFields_dividend_Read';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Dividend_Update = {
  __typename?: 'DividendsFields_dividend_Update';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Name = {
  __typename?: 'DividendsFields_name';
  create?: Maybe<DividendsFields_Name_Create>;
  delete?: Maybe<DividendsFields_Name_Delete>;
  read?: Maybe<DividendsFields_Name_Read>;
  update?: Maybe<DividendsFields_Name_Update>;
};

export type DividendsFields_Name_Create = {
  __typename?: 'DividendsFields_name_Create';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Name_Delete = {
  __typename?: 'DividendsFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Name_Read = {
  __typename?: 'DividendsFields_name_Read';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Name_Update = {
  __typename?: 'DividendsFields_name_Update';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Quarter = {
  __typename?: 'DividendsFields_quarter';
  create?: Maybe<DividendsFields_Quarter_Create>;
  delete?: Maybe<DividendsFields_Quarter_Delete>;
  read?: Maybe<DividendsFields_Quarter_Read>;
  update?: Maybe<DividendsFields_Quarter_Update>;
};

export type DividendsFields_Quarter_Create = {
  __typename?: 'DividendsFields_quarter_Create';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Quarter_Delete = {
  __typename?: 'DividendsFields_quarter_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Quarter_Read = {
  __typename?: 'DividendsFields_quarter_Read';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Quarter_Update = {
  __typename?: 'DividendsFields_quarter_Update';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Stock = {
  __typename?: 'DividendsFields_stock';
  create?: Maybe<DividendsFields_Stock_Create>;
  delete?: Maybe<DividendsFields_Stock_Delete>;
  read?: Maybe<DividendsFields_Stock_Read>;
  update?: Maybe<DividendsFields_Stock_Update>;
};

export type DividendsFields_Stock_Create = {
  __typename?: 'DividendsFields_stock_Create';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Stock_Delete = {
  __typename?: 'DividendsFields_stock_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Stock_Read = {
  __typename?: 'DividendsFields_stock_Read';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Stock_Update = {
  __typename?: 'DividendsFields_stock_Update';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Xdate = {
  __typename?: 'DividendsFields_xdate';
  create?: Maybe<DividendsFields_Xdate_Create>;
  delete?: Maybe<DividendsFields_Xdate_Delete>;
  read?: Maybe<DividendsFields_Xdate_Read>;
  update?: Maybe<DividendsFields_Xdate_Update>;
};

export type DividendsFields_Xdate_Create = {
  __typename?: 'DividendsFields_xdate_Create';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Xdate_Delete = {
  __typename?: 'DividendsFields_xdate_Delete';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Xdate_Read = {
  __typename?: 'DividendsFields_xdate_Read';
  permission: Scalars['Boolean'];
};

export type DividendsFields_Xdate_Update = {
  __typename?: 'DividendsFields_xdate_Update';
  permission: Scalars['Boolean'];
};

export type DividendsReadAccess = {
  __typename?: 'DividendsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DividendsReadDocAccess = {
  __typename?: 'DividendsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DividendsUpdateAccess = {
  __typename?: 'DividendsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DividendsUpdateDocAccess = {
  __typename?: 'DividendsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDividend?: Maybe<Dividend>;
  createStock?: Maybe<Stock>;
  createUser?: Maybe<User>;
  deleteDividend?: Maybe<Dividend>;
  deletePreference?: Maybe<Preference>;
  deleteStock?: Maybe<Stock>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars['Boolean'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean'];
  updateDividend?: Maybe<Dividend>;
  updatePreference?: Maybe<Preference>;
  updateStock?: Maybe<Stock>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateDividendArgs = {
  data: MutationDividendInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateStockArgs = {
  data: MutationStockInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteDividendArgs = {
  id: Scalars['String'];
};


export type MutationDeletePreferenceArgs = {
  key: Scalars['String'];
};


export type MutationDeleteStockArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  expiration?: InputMaybe<Scalars['Int']>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationRefreshTokenUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String'];
};


export type MutationUpdateDividendArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationDividendUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdatePreferenceArgs = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['JSON']>;
};


export type MutationUpdateStockArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationStockUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export type Preference = {
  __typename?: 'Preference';
  createdAt: Scalars['DateTime'];
  key: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value?: Maybe<Scalars['JSON']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Dividend?: Maybe<Dividend>;
  Dividends?: Maybe<Dividends>;
  Preference?: Maybe<Preference>;
  Stock?: Maybe<Stock>;
  Stocks?: Maybe<Stocks>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  docAccessDividend?: Maybe<DividendsDocAccess>;
  docAccessStock?: Maybe<StocksDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']>;
  meUser?: Maybe<UsersMe>;
};


export type QueryDividendArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryDividendsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Dividend_Where>;
};


export type QueryPreferenceArgs = {
  key?: InputMaybe<Scalars['String']>;
};


export type QueryStockArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryStocksArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Stock_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<User_Where>;
};


export type QueryDocAccessDividendArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessStockArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String'];
};

export type Stock = {
  __typename?: 'Stock';
  DPR?: Maybe<Scalars['Float']>;
  ISIN?: Maybe<Scalars['String']>;
  PE?: Maybe<Scalars['Float']>;
  capital?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  dividends?: Maybe<Array<Dividend>>;
  hebrewName?: Maybe<Scalars['String']>;
  historicPrices?: Maybe<Array<Stock_HistoricPrices>>;
  id?: Maybe<Scalars['String']>;
  issuerId?: Maybe<Scalars['Float']>;
  latestPrice?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  securityId?: Maybe<Scalars['Float']>;
  symbol: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users?: Maybe<Array<User>>;
};

export type Stock_Dpr_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Stock_HistoricPrices = {
  __typename?: 'Stock_HistoricPrices';
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type Stock_Isin_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Stock_Pe_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Stock_Capital_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Stock_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Stock_Date_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Stock_Dividends_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Stock_HebrewName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Stock_HistoricPrices__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Stock_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Stock_IssuerId_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Stock_LatestPrice_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Stock_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Stock_Price_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Stock_SecurityId_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Stock_Symbol_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Stock_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Stock_Users_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Stock_Where = {
  AND?: InputMaybe<Array<InputMaybe<Stock_Where_And>>>;
  DPR?: InputMaybe<Stock_Dpr_Operator>;
  ISIN?: InputMaybe<Stock_Isin_Operator>;
  OR?: InputMaybe<Array<InputMaybe<Stock_Where_Or>>>;
  PE?: InputMaybe<Stock_Pe_Operator>;
  capital?: InputMaybe<Stock_Capital_Operator>;
  createdAt?: InputMaybe<Stock_CreatedAt_Operator>;
  date?: InputMaybe<Stock_Date_Operator>;
  dividends?: InputMaybe<Stock_Dividends_Operator>;
  hebrewName?: InputMaybe<Stock_HebrewName_Operator>;
  historicPrices__id?: InputMaybe<Stock_HistoricPrices__Id_Operator>;
  id?: InputMaybe<Stock_Id_Operator>;
  issuerId?: InputMaybe<Stock_IssuerId_Operator>;
  latestPrice?: InputMaybe<Stock_LatestPrice_Operator>;
  name?: InputMaybe<Stock_Name_Operator>;
  price?: InputMaybe<Stock_Price_Operator>;
  securityId?: InputMaybe<Stock_SecurityId_Operator>;
  symbol?: InputMaybe<Stock_Symbol_Operator>;
  updatedAt?: InputMaybe<Stock_UpdatedAt_Operator>;
  users?: InputMaybe<Stock_Users_Operator>;
};

export type Stock_Where_And = {
  DPR?: InputMaybe<Stock_Dpr_Operator>;
  ISIN?: InputMaybe<Stock_Isin_Operator>;
  PE?: InputMaybe<Stock_Pe_Operator>;
  capital?: InputMaybe<Stock_Capital_Operator>;
  createdAt?: InputMaybe<Stock_CreatedAt_Operator>;
  date?: InputMaybe<Stock_Date_Operator>;
  dividends?: InputMaybe<Stock_Dividends_Operator>;
  hebrewName?: InputMaybe<Stock_HebrewName_Operator>;
  historicPrices__id?: InputMaybe<Stock_HistoricPrices__Id_Operator>;
  id?: InputMaybe<Stock_Id_Operator>;
  issuerId?: InputMaybe<Stock_IssuerId_Operator>;
  latestPrice?: InputMaybe<Stock_LatestPrice_Operator>;
  name?: InputMaybe<Stock_Name_Operator>;
  price?: InputMaybe<Stock_Price_Operator>;
  securityId?: InputMaybe<Stock_SecurityId_Operator>;
  symbol?: InputMaybe<Stock_Symbol_Operator>;
  updatedAt?: InputMaybe<Stock_UpdatedAt_Operator>;
  users?: InputMaybe<Stock_Users_Operator>;
};

export type Stock_Where_Or = {
  DPR?: InputMaybe<Stock_Dpr_Operator>;
  ISIN?: InputMaybe<Stock_Isin_Operator>;
  PE?: InputMaybe<Stock_Pe_Operator>;
  capital?: InputMaybe<Stock_Capital_Operator>;
  createdAt?: InputMaybe<Stock_CreatedAt_Operator>;
  date?: InputMaybe<Stock_Date_Operator>;
  dividends?: InputMaybe<Stock_Dividends_Operator>;
  hebrewName?: InputMaybe<Stock_HebrewName_Operator>;
  historicPrices__id?: InputMaybe<Stock_HistoricPrices__Id_Operator>;
  id?: InputMaybe<Stock_Id_Operator>;
  issuerId?: InputMaybe<Stock_IssuerId_Operator>;
  latestPrice?: InputMaybe<Stock_LatestPrice_Operator>;
  name?: InputMaybe<Stock_Name_Operator>;
  price?: InputMaybe<Stock_Price_Operator>;
  securityId?: InputMaybe<Stock_SecurityId_Operator>;
  symbol?: InputMaybe<Stock_Symbol_Operator>;
  updatedAt?: InputMaybe<Stock_UpdatedAt_Operator>;
  users?: InputMaybe<Stock_Users_Operator>;
};

export type Stocks = {
  __typename?: 'Stocks';
  docs?: Maybe<Array<Maybe<Stock>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type StocksCreateAccess = {
  __typename?: 'StocksCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type StocksCreateDocAccess = {
  __typename?: 'StocksCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type StocksDeleteAccess = {
  __typename?: 'StocksDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type StocksDeleteDocAccess = {
  __typename?: 'StocksDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type StocksDocAccessFields = {
  __typename?: 'StocksDocAccessFields';
  DPR?: Maybe<StocksDocAccessFields_Dpr>;
  ISIN?: Maybe<StocksDocAccessFields_Isin>;
  PE?: Maybe<StocksDocAccessFields_Pe>;
  capital?: Maybe<StocksDocAccessFields_Capital>;
  dividends?: Maybe<StocksDocAccessFields_Dividends>;
  hebrewName?: Maybe<StocksDocAccessFields_HebrewName>;
  historicPrices?: Maybe<StocksDocAccessFields_HistoricPrices>;
  issuerId?: Maybe<StocksDocAccessFields_IssuerId>;
  latestPrice?: Maybe<StocksDocAccessFields_LatestPrice>;
  name?: Maybe<StocksDocAccessFields_Name>;
  securityId?: Maybe<StocksDocAccessFields_SecurityId>;
  symbol?: Maybe<StocksDocAccessFields_Symbol>;
  users?: Maybe<StocksDocAccessFields_Users>;
};

export type StocksDocAccessFields_Dpr = {
  __typename?: 'StocksDocAccessFields_DPR';
  create?: Maybe<StocksDocAccessFields_Dpr_Create>;
  delete?: Maybe<StocksDocAccessFields_Dpr_Delete>;
  read?: Maybe<StocksDocAccessFields_Dpr_Read>;
  update?: Maybe<StocksDocAccessFields_Dpr_Update>;
};

export type StocksDocAccessFields_Dpr_Create = {
  __typename?: 'StocksDocAccessFields_DPR_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Dpr_Delete = {
  __typename?: 'StocksDocAccessFields_DPR_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Dpr_Read = {
  __typename?: 'StocksDocAccessFields_DPR_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Dpr_Update = {
  __typename?: 'StocksDocAccessFields_DPR_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Isin = {
  __typename?: 'StocksDocAccessFields_ISIN';
  create?: Maybe<StocksDocAccessFields_Isin_Create>;
  delete?: Maybe<StocksDocAccessFields_Isin_Delete>;
  read?: Maybe<StocksDocAccessFields_Isin_Read>;
  update?: Maybe<StocksDocAccessFields_Isin_Update>;
};

export type StocksDocAccessFields_Isin_Create = {
  __typename?: 'StocksDocAccessFields_ISIN_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Isin_Delete = {
  __typename?: 'StocksDocAccessFields_ISIN_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Isin_Read = {
  __typename?: 'StocksDocAccessFields_ISIN_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Isin_Update = {
  __typename?: 'StocksDocAccessFields_ISIN_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Pe = {
  __typename?: 'StocksDocAccessFields_PE';
  create?: Maybe<StocksDocAccessFields_Pe_Create>;
  delete?: Maybe<StocksDocAccessFields_Pe_Delete>;
  read?: Maybe<StocksDocAccessFields_Pe_Read>;
  update?: Maybe<StocksDocAccessFields_Pe_Update>;
};

export type StocksDocAccessFields_Pe_Create = {
  __typename?: 'StocksDocAccessFields_PE_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Pe_Delete = {
  __typename?: 'StocksDocAccessFields_PE_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Pe_Read = {
  __typename?: 'StocksDocAccessFields_PE_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Pe_Update = {
  __typename?: 'StocksDocAccessFields_PE_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Capital = {
  __typename?: 'StocksDocAccessFields_capital';
  create?: Maybe<StocksDocAccessFields_Capital_Create>;
  delete?: Maybe<StocksDocAccessFields_Capital_Delete>;
  read?: Maybe<StocksDocAccessFields_Capital_Read>;
  update?: Maybe<StocksDocAccessFields_Capital_Update>;
};

export type StocksDocAccessFields_Capital_Create = {
  __typename?: 'StocksDocAccessFields_capital_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Capital_Delete = {
  __typename?: 'StocksDocAccessFields_capital_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Capital_Read = {
  __typename?: 'StocksDocAccessFields_capital_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Capital_Update = {
  __typename?: 'StocksDocAccessFields_capital_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Dividends = {
  __typename?: 'StocksDocAccessFields_dividends';
  create?: Maybe<StocksDocAccessFields_Dividends_Create>;
  delete?: Maybe<StocksDocAccessFields_Dividends_Delete>;
  read?: Maybe<StocksDocAccessFields_Dividends_Read>;
  update?: Maybe<StocksDocAccessFields_Dividends_Update>;
};

export type StocksDocAccessFields_Dividends_Create = {
  __typename?: 'StocksDocAccessFields_dividends_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Dividends_Delete = {
  __typename?: 'StocksDocAccessFields_dividends_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Dividends_Read = {
  __typename?: 'StocksDocAccessFields_dividends_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Dividends_Update = {
  __typename?: 'StocksDocAccessFields_dividends_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HebrewName = {
  __typename?: 'StocksDocAccessFields_hebrewName';
  create?: Maybe<StocksDocAccessFields_HebrewName_Create>;
  delete?: Maybe<StocksDocAccessFields_HebrewName_Delete>;
  read?: Maybe<StocksDocAccessFields_HebrewName_Read>;
  update?: Maybe<StocksDocAccessFields_HebrewName_Update>;
};

export type StocksDocAccessFields_HebrewName_Create = {
  __typename?: 'StocksDocAccessFields_hebrewName_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HebrewName_Delete = {
  __typename?: 'StocksDocAccessFields_hebrewName_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HebrewName_Read = {
  __typename?: 'StocksDocAccessFields_hebrewName_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HebrewName_Update = {
  __typename?: 'StocksDocAccessFields_hebrewName_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices = {
  __typename?: 'StocksDocAccessFields_historicPrices';
  create?: Maybe<StocksDocAccessFields_HistoricPrices_Create>;
  delete?: Maybe<StocksDocAccessFields_HistoricPrices_Delete>;
  fields?: Maybe<StocksDocAccessFields_HistoricPrices_Fields>;
  read?: Maybe<StocksDocAccessFields_HistoricPrices_Read>;
  update?: Maybe<StocksDocAccessFields_HistoricPrices_Update>;
};

export type StocksDocAccessFields_HistoricPrices_Create = {
  __typename?: 'StocksDocAccessFields_historicPrices_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Delete = {
  __typename?: 'StocksDocAccessFields_historicPrices_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Fields = {
  __typename?: 'StocksDocAccessFields_historicPrices_Fields';
  date?: Maybe<StocksDocAccessFields_HistoricPrices_Date>;
  id?: Maybe<StocksDocAccessFields_HistoricPrices_Id>;
  price?: Maybe<StocksDocAccessFields_HistoricPrices_Price>;
};

export type StocksDocAccessFields_HistoricPrices_Read = {
  __typename?: 'StocksDocAccessFields_historicPrices_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Update = {
  __typename?: 'StocksDocAccessFields_historicPrices_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Date = {
  __typename?: 'StocksDocAccessFields_historicPrices_date';
  create?: Maybe<StocksDocAccessFields_HistoricPrices_Date_Create>;
  delete?: Maybe<StocksDocAccessFields_HistoricPrices_Date_Delete>;
  read?: Maybe<StocksDocAccessFields_HistoricPrices_Date_Read>;
  update?: Maybe<StocksDocAccessFields_HistoricPrices_Date_Update>;
};

export type StocksDocAccessFields_HistoricPrices_Date_Create = {
  __typename?: 'StocksDocAccessFields_historicPrices_date_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Date_Delete = {
  __typename?: 'StocksDocAccessFields_historicPrices_date_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Date_Read = {
  __typename?: 'StocksDocAccessFields_historicPrices_date_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Date_Update = {
  __typename?: 'StocksDocAccessFields_historicPrices_date_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Id = {
  __typename?: 'StocksDocAccessFields_historicPrices_id';
  create?: Maybe<StocksDocAccessFields_HistoricPrices_Id_Create>;
  delete?: Maybe<StocksDocAccessFields_HistoricPrices_Id_Delete>;
  read?: Maybe<StocksDocAccessFields_HistoricPrices_Id_Read>;
  update?: Maybe<StocksDocAccessFields_HistoricPrices_Id_Update>;
};

export type StocksDocAccessFields_HistoricPrices_Id_Create = {
  __typename?: 'StocksDocAccessFields_historicPrices_id_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Id_Delete = {
  __typename?: 'StocksDocAccessFields_historicPrices_id_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Id_Read = {
  __typename?: 'StocksDocAccessFields_historicPrices_id_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Id_Update = {
  __typename?: 'StocksDocAccessFields_historicPrices_id_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Price = {
  __typename?: 'StocksDocAccessFields_historicPrices_price';
  create?: Maybe<StocksDocAccessFields_HistoricPrices_Price_Create>;
  delete?: Maybe<StocksDocAccessFields_HistoricPrices_Price_Delete>;
  read?: Maybe<StocksDocAccessFields_HistoricPrices_Price_Read>;
  update?: Maybe<StocksDocAccessFields_HistoricPrices_Price_Update>;
};

export type StocksDocAccessFields_HistoricPrices_Price_Create = {
  __typename?: 'StocksDocAccessFields_historicPrices_price_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Price_Delete = {
  __typename?: 'StocksDocAccessFields_historicPrices_price_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Price_Read = {
  __typename?: 'StocksDocAccessFields_historicPrices_price_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_HistoricPrices_Price_Update = {
  __typename?: 'StocksDocAccessFields_historicPrices_price_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_IssuerId = {
  __typename?: 'StocksDocAccessFields_issuerId';
  create?: Maybe<StocksDocAccessFields_IssuerId_Create>;
  delete?: Maybe<StocksDocAccessFields_IssuerId_Delete>;
  read?: Maybe<StocksDocAccessFields_IssuerId_Read>;
  update?: Maybe<StocksDocAccessFields_IssuerId_Update>;
};

export type StocksDocAccessFields_IssuerId_Create = {
  __typename?: 'StocksDocAccessFields_issuerId_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_IssuerId_Delete = {
  __typename?: 'StocksDocAccessFields_issuerId_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_IssuerId_Read = {
  __typename?: 'StocksDocAccessFields_issuerId_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_IssuerId_Update = {
  __typename?: 'StocksDocAccessFields_issuerId_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_LatestPrice = {
  __typename?: 'StocksDocAccessFields_latestPrice';
  create?: Maybe<StocksDocAccessFields_LatestPrice_Create>;
  delete?: Maybe<StocksDocAccessFields_LatestPrice_Delete>;
  read?: Maybe<StocksDocAccessFields_LatestPrice_Read>;
  update?: Maybe<StocksDocAccessFields_LatestPrice_Update>;
};

export type StocksDocAccessFields_LatestPrice_Create = {
  __typename?: 'StocksDocAccessFields_latestPrice_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_LatestPrice_Delete = {
  __typename?: 'StocksDocAccessFields_latestPrice_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_LatestPrice_Read = {
  __typename?: 'StocksDocAccessFields_latestPrice_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_LatestPrice_Update = {
  __typename?: 'StocksDocAccessFields_latestPrice_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Name = {
  __typename?: 'StocksDocAccessFields_name';
  create?: Maybe<StocksDocAccessFields_Name_Create>;
  delete?: Maybe<StocksDocAccessFields_Name_Delete>;
  read?: Maybe<StocksDocAccessFields_Name_Read>;
  update?: Maybe<StocksDocAccessFields_Name_Update>;
};

export type StocksDocAccessFields_Name_Create = {
  __typename?: 'StocksDocAccessFields_name_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Name_Delete = {
  __typename?: 'StocksDocAccessFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Name_Read = {
  __typename?: 'StocksDocAccessFields_name_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Name_Update = {
  __typename?: 'StocksDocAccessFields_name_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_SecurityId = {
  __typename?: 'StocksDocAccessFields_securityId';
  create?: Maybe<StocksDocAccessFields_SecurityId_Create>;
  delete?: Maybe<StocksDocAccessFields_SecurityId_Delete>;
  read?: Maybe<StocksDocAccessFields_SecurityId_Read>;
  update?: Maybe<StocksDocAccessFields_SecurityId_Update>;
};

export type StocksDocAccessFields_SecurityId_Create = {
  __typename?: 'StocksDocAccessFields_securityId_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_SecurityId_Delete = {
  __typename?: 'StocksDocAccessFields_securityId_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_SecurityId_Read = {
  __typename?: 'StocksDocAccessFields_securityId_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_SecurityId_Update = {
  __typename?: 'StocksDocAccessFields_securityId_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Symbol = {
  __typename?: 'StocksDocAccessFields_symbol';
  create?: Maybe<StocksDocAccessFields_Symbol_Create>;
  delete?: Maybe<StocksDocAccessFields_Symbol_Delete>;
  read?: Maybe<StocksDocAccessFields_Symbol_Read>;
  update?: Maybe<StocksDocAccessFields_Symbol_Update>;
};

export type StocksDocAccessFields_Symbol_Create = {
  __typename?: 'StocksDocAccessFields_symbol_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Symbol_Delete = {
  __typename?: 'StocksDocAccessFields_symbol_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Symbol_Read = {
  __typename?: 'StocksDocAccessFields_symbol_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Symbol_Update = {
  __typename?: 'StocksDocAccessFields_symbol_Update';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Users = {
  __typename?: 'StocksDocAccessFields_users';
  create?: Maybe<StocksDocAccessFields_Users_Create>;
  delete?: Maybe<StocksDocAccessFields_Users_Delete>;
  read?: Maybe<StocksDocAccessFields_Users_Read>;
  update?: Maybe<StocksDocAccessFields_Users_Update>;
};

export type StocksDocAccessFields_Users_Create = {
  __typename?: 'StocksDocAccessFields_users_Create';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Users_Delete = {
  __typename?: 'StocksDocAccessFields_users_Delete';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Users_Read = {
  __typename?: 'StocksDocAccessFields_users_Read';
  permission: Scalars['Boolean'];
};

export type StocksDocAccessFields_Users_Update = {
  __typename?: 'StocksDocAccessFields_users_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields = {
  __typename?: 'StocksFields';
  DPR?: Maybe<StocksFields_Dpr>;
  ISIN?: Maybe<StocksFields_Isin>;
  PE?: Maybe<StocksFields_Pe>;
  capital?: Maybe<StocksFields_Capital>;
  dividends?: Maybe<StocksFields_Dividends>;
  hebrewName?: Maybe<StocksFields_HebrewName>;
  historicPrices?: Maybe<StocksFields_HistoricPrices>;
  issuerId?: Maybe<StocksFields_IssuerId>;
  latestPrice?: Maybe<StocksFields_LatestPrice>;
  name?: Maybe<StocksFields_Name>;
  securityId?: Maybe<StocksFields_SecurityId>;
  symbol?: Maybe<StocksFields_Symbol>;
  users?: Maybe<StocksFields_Users>;
};

export type StocksFields_Dpr = {
  __typename?: 'StocksFields_DPR';
  create?: Maybe<StocksFields_Dpr_Create>;
  delete?: Maybe<StocksFields_Dpr_Delete>;
  read?: Maybe<StocksFields_Dpr_Read>;
  update?: Maybe<StocksFields_Dpr_Update>;
};

export type StocksFields_Dpr_Create = {
  __typename?: 'StocksFields_DPR_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_Dpr_Delete = {
  __typename?: 'StocksFields_DPR_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_Dpr_Read = {
  __typename?: 'StocksFields_DPR_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_Dpr_Update = {
  __typename?: 'StocksFields_DPR_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_Isin = {
  __typename?: 'StocksFields_ISIN';
  create?: Maybe<StocksFields_Isin_Create>;
  delete?: Maybe<StocksFields_Isin_Delete>;
  read?: Maybe<StocksFields_Isin_Read>;
  update?: Maybe<StocksFields_Isin_Update>;
};

export type StocksFields_Isin_Create = {
  __typename?: 'StocksFields_ISIN_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_Isin_Delete = {
  __typename?: 'StocksFields_ISIN_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_Isin_Read = {
  __typename?: 'StocksFields_ISIN_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_Isin_Update = {
  __typename?: 'StocksFields_ISIN_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_Pe = {
  __typename?: 'StocksFields_PE';
  create?: Maybe<StocksFields_Pe_Create>;
  delete?: Maybe<StocksFields_Pe_Delete>;
  read?: Maybe<StocksFields_Pe_Read>;
  update?: Maybe<StocksFields_Pe_Update>;
};

export type StocksFields_Pe_Create = {
  __typename?: 'StocksFields_PE_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_Pe_Delete = {
  __typename?: 'StocksFields_PE_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_Pe_Read = {
  __typename?: 'StocksFields_PE_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_Pe_Update = {
  __typename?: 'StocksFields_PE_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_Capital = {
  __typename?: 'StocksFields_capital';
  create?: Maybe<StocksFields_Capital_Create>;
  delete?: Maybe<StocksFields_Capital_Delete>;
  read?: Maybe<StocksFields_Capital_Read>;
  update?: Maybe<StocksFields_Capital_Update>;
};

export type StocksFields_Capital_Create = {
  __typename?: 'StocksFields_capital_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_Capital_Delete = {
  __typename?: 'StocksFields_capital_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_Capital_Read = {
  __typename?: 'StocksFields_capital_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_Capital_Update = {
  __typename?: 'StocksFields_capital_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_Dividends = {
  __typename?: 'StocksFields_dividends';
  create?: Maybe<StocksFields_Dividends_Create>;
  delete?: Maybe<StocksFields_Dividends_Delete>;
  read?: Maybe<StocksFields_Dividends_Read>;
  update?: Maybe<StocksFields_Dividends_Update>;
};

export type StocksFields_Dividends_Create = {
  __typename?: 'StocksFields_dividends_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_Dividends_Delete = {
  __typename?: 'StocksFields_dividends_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_Dividends_Read = {
  __typename?: 'StocksFields_dividends_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_Dividends_Update = {
  __typename?: 'StocksFields_dividends_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_HebrewName = {
  __typename?: 'StocksFields_hebrewName';
  create?: Maybe<StocksFields_HebrewName_Create>;
  delete?: Maybe<StocksFields_HebrewName_Delete>;
  read?: Maybe<StocksFields_HebrewName_Read>;
  update?: Maybe<StocksFields_HebrewName_Update>;
};

export type StocksFields_HebrewName_Create = {
  __typename?: 'StocksFields_hebrewName_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_HebrewName_Delete = {
  __typename?: 'StocksFields_hebrewName_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_HebrewName_Read = {
  __typename?: 'StocksFields_hebrewName_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_HebrewName_Update = {
  __typename?: 'StocksFields_hebrewName_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices = {
  __typename?: 'StocksFields_historicPrices';
  create?: Maybe<StocksFields_HistoricPrices_Create>;
  delete?: Maybe<StocksFields_HistoricPrices_Delete>;
  fields?: Maybe<StocksFields_HistoricPrices_Fields>;
  read?: Maybe<StocksFields_HistoricPrices_Read>;
  update?: Maybe<StocksFields_HistoricPrices_Update>;
};

export type StocksFields_HistoricPrices_Create = {
  __typename?: 'StocksFields_historicPrices_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Delete = {
  __typename?: 'StocksFields_historicPrices_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Fields = {
  __typename?: 'StocksFields_historicPrices_Fields';
  date?: Maybe<StocksFields_HistoricPrices_Date>;
  id?: Maybe<StocksFields_HistoricPrices_Id>;
  price?: Maybe<StocksFields_HistoricPrices_Price>;
};

export type StocksFields_HistoricPrices_Read = {
  __typename?: 'StocksFields_historicPrices_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Update = {
  __typename?: 'StocksFields_historicPrices_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Date = {
  __typename?: 'StocksFields_historicPrices_date';
  create?: Maybe<StocksFields_HistoricPrices_Date_Create>;
  delete?: Maybe<StocksFields_HistoricPrices_Date_Delete>;
  read?: Maybe<StocksFields_HistoricPrices_Date_Read>;
  update?: Maybe<StocksFields_HistoricPrices_Date_Update>;
};

export type StocksFields_HistoricPrices_Date_Create = {
  __typename?: 'StocksFields_historicPrices_date_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Date_Delete = {
  __typename?: 'StocksFields_historicPrices_date_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Date_Read = {
  __typename?: 'StocksFields_historicPrices_date_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Date_Update = {
  __typename?: 'StocksFields_historicPrices_date_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Id = {
  __typename?: 'StocksFields_historicPrices_id';
  create?: Maybe<StocksFields_HistoricPrices_Id_Create>;
  delete?: Maybe<StocksFields_HistoricPrices_Id_Delete>;
  read?: Maybe<StocksFields_HistoricPrices_Id_Read>;
  update?: Maybe<StocksFields_HistoricPrices_Id_Update>;
};

export type StocksFields_HistoricPrices_Id_Create = {
  __typename?: 'StocksFields_historicPrices_id_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Id_Delete = {
  __typename?: 'StocksFields_historicPrices_id_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Id_Read = {
  __typename?: 'StocksFields_historicPrices_id_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Id_Update = {
  __typename?: 'StocksFields_historicPrices_id_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Price = {
  __typename?: 'StocksFields_historicPrices_price';
  create?: Maybe<StocksFields_HistoricPrices_Price_Create>;
  delete?: Maybe<StocksFields_HistoricPrices_Price_Delete>;
  read?: Maybe<StocksFields_HistoricPrices_Price_Read>;
  update?: Maybe<StocksFields_HistoricPrices_Price_Update>;
};

export type StocksFields_HistoricPrices_Price_Create = {
  __typename?: 'StocksFields_historicPrices_price_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Price_Delete = {
  __typename?: 'StocksFields_historicPrices_price_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Price_Read = {
  __typename?: 'StocksFields_historicPrices_price_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_HistoricPrices_Price_Update = {
  __typename?: 'StocksFields_historicPrices_price_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_IssuerId = {
  __typename?: 'StocksFields_issuerId';
  create?: Maybe<StocksFields_IssuerId_Create>;
  delete?: Maybe<StocksFields_IssuerId_Delete>;
  read?: Maybe<StocksFields_IssuerId_Read>;
  update?: Maybe<StocksFields_IssuerId_Update>;
};

export type StocksFields_IssuerId_Create = {
  __typename?: 'StocksFields_issuerId_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_IssuerId_Delete = {
  __typename?: 'StocksFields_issuerId_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_IssuerId_Read = {
  __typename?: 'StocksFields_issuerId_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_IssuerId_Update = {
  __typename?: 'StocksFields_issuerId_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_LatestPrice = {
  __typename?: 'StocksFields_latestPrice';
  create?: Maybe<StocksFields_LatestPrice_Create>;
  delete?: Maybe<StocksFields_LatestPrice_Delete>;
  read?: Maybe<StocksFields_LatestPrice_Read>;
  update?: Maybe<StocksFields_LatestPrice_Update>;
};

export type StocksFields_LatestPrice_Create = {
  __typename?: 'StocksFields_latestPrice_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_LatestPrice_Delete = {
  __typename?: 'StocksFields_latestPrice_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_LatestPrice_Read = {
  __typename?: 'StocksFields_latestPrice_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_LatestPrice_Update = {
  __typename?: 'StocksFields_latestPrice_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_Name = {
  __typename?: 'StocksFields_name';
  create?: Maybe<StocksFields_Name_Create>;
  delete?: Maybe<StocksFields_Name_Delete>;
  read?: Maybe<StocksFields_Name_Read>;
  update?: Maybe<StocksFields_Name_Update>;
};

export type StocksFields_Name_Create = {
  __typename?: 'StocksFields_name_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_Name_Delete = {
  __typename?: 'StocksFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_Name_Read = {
  __typename?: 'StocksFields_name_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_Name_Update = {
  __typename?: 'StocksFields_name_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_SecurityId = {
  __typename?: 'StocksFields_securityId';
  create?: Maybe<StocksFields_SecurityId_Create>;
  delete?: Maybe<StocksFields_SecurityId_Delete>;
  read?: Maybe<StocksFields_SecurityId_Read>;
  update?: Maybe<StocksFields_SecurityId_Update>;
};

export type StocksFields_SecurityId_Create = {
  __typename?: 'StocksFields_securityId_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_SecurityId_Delete = {
  __typename?: 'StocksFields_securityId_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_SecurityId_Read = {
  __typename?: 'StocksFields_securityId_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_SecurityId_Update = {
  __typename?: 'StocksFields_securityId_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_Symbol = {
  __typename?: 'StocksFields_symbol';
  create?: Maybe<StocksFields_Symbol_Create>;
  delete?: Maybe<StocksFields_Symbol_Delete>;
  read?: Maybe<StocksFields_Symbol_Read>;
  update?: Maybe<StocksFields_Symbol_Update>;
};

export type StocksFields_Symbol_Create = {
  __typename?: 'StocksFields_symbol_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_Symbol_Delete = {
  __typename?: 'StocksFields_symbol_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_Symbol_Read = {
  __typename?: 'StocksFields_symbol_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_Symbol_Update = {
  __typename?: 'StocksFields_symbol_Update';
  permission: Scalars['Boolean'];
};

export type StocksFields_Users = {
  __typename?: 'StocksFields_users';
  create?: Maybe<StocksFields_Users_Create>;
  delete?: Maybe<StocksFields_Users_Delete>;
  read?: Maybe<StocksFields_Users_Read>;
  update?: Maybe<StocksFields_Users_Update>;
};

export type StocksFields_Users_Create = {
  __typename?: 'StocksFields_users_Create';
  permission: Scalars['Boolean'];
};

export type StocksFields_Users_Delete = {
  __typename?: 'StocksFields_users_Delete';
  permission: Scalars['Boolean'];
};

export type StocksFields_Users_Read = {
  __typename?: 'StocksFields_users_Read';
  permission: Scalars['Boolean'];
};

export type StocksFields_Users_Update = {
  __typename?: 'StocksFields_users_Update';
  permission: Scalars['Boolean'];
};

export type StocksReadAccess = {
  __typename?: 'StocksReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type StocksReadDocAccess = {
  __typename?: 'StocksReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type StocksUpdateAccess = {
  __typename?: 'StocksUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type StocksUpdateDocAccess = {
  __typename?: 'StocksUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type User = {
  __typename?: 'User';
  accountId?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  birthday?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lockUntil?: Maybe<Scalars['DateTime']>;
  loginAttempts?: Maybe<Scalars['Float']>;
  password: Scalars['String'];
  portfolioValue?: Maybe<Scalars['Float']>;
  resetPasswordExpiration?: Maybe<Scalars['DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  roles: Array<User_Roles>;
  stocks?: Maybe<Array<User_Stocks>>;
  transactions?: Maybe<Array<User_Transactions>>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export enum UserUpdate_Roles_MutationInput {
  Admin = 'admin',
  Kid = 'kid'
}

export type User_Stocks = {
  __typename?: 'User_Stocks';
  dividends?: Maybe<Array<User_Stocks_Dividends>>;
  id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  stock?: Maybe<Stock>;
};

export type User_Stocks_Dividends = {
  __typename?: 'User_Stocks_Dividends';
  dividend?: Maybe<Dividend>;
  id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type User_Transactions = {
  __typename?: 'User_Transactions';
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  status?: Maybe<User_Transactions_Status>;
  stock?: Maybe<Stock>;
  sum?: Maybe<Scalars['Float']>;
  type?: Maybe<User_Transactions_Type>;
};

export enum User_Transactions_Status {
  Completed = 'completed',
  Pending = 'pending'
}

export enum User_Transactions_Type {
  Buy = 'buy',
  Deposit = 'deposit',
  Sell = 'sell',
  Withdrawal = 'withdrawal'
}

export type User_AccountId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Balance_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type User_Birthday_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Date_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Dividend_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type User_LastName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_PortfolioValue_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type User_Price_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type User_Quantity_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export enum User_Roles {
  Admin = 'admin',
  Kid = 'kid'
}

export enum User_Roles_Input {
  Admin = 'admin',
  Kid = 'kid'
}

export enum User_Roles_MutationInput {
  Admin = 'admin',
  Kid = 'kid'
}

export type User_Roles_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  equals?: InputMaybe<User_Roles_Input>;
  in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  not_equals?: InputMaybe<User_Roles_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
};

export type User_Stock_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Stocks__Dividends__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Stocks__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Sum_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type User_Transactions__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum User_Transactions__Status_Input {
  Completed = 'completed',
  Pending = 'pending'
}

export type User_Transactions__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Transactions__Status_Input>>>;
  equals?: InputMaybe<User_Transactions__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<User_Transactions__Status_Input>>>;
  not_equals?: InputMaybe<User_Transactions__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Transactions__Status_Input>>>;
};

export enum User_Transactions__Type_Input {
  Buy = 'buy',
  Deposit = 'deposit',
  Sell = 'sell',
  Withdrawal = 'withdrawal'
}

export type User_Transactions__Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Transactions__Type_Input>>>;
  equals?: InputMaybe<User_Transactions__Type_Input>;
  in?: InputMaybe<Array<InputMaybe<User_Transactions__Type_Input>>>;
  not_equals?: InputMaybe<User_Transactions__Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Transactions__Type_Input>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Username_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  accountId?: InputMaybe<User_AccountId_Operator>;
  balance?: InputMaybe<User_Balance_Operator>;
  birthday?: InputMaybe<User_Birthday_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  date?: InputMaybe<User_Date_Operator>;
  dividend?: InputMaybe<User_Dividend_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  portfolioValue?: InputMaybe<User_PortfolioValue_Operator>;
  price?: InputMaybe<User_Price_Operator>;
  quantity?: InputMaybe<User_Quantity_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  stock?: InputMaybe<User_Stock_Operator>;
  stocks__dividends__id?: InputMaybe<User_Stocks__Dividends__Id_Operator>;
  stocks__id?: InputMaybe<User_Stocks__Id_Operator>;
  sum?: InputMaybe<User_Sum_Operator>;
  transactions__id?: InputMaybe<User_Transactions__Id_Operator>;
  transactions__status?: InputMaybe<User_Transactions__Status_Operator>;
  transactions__type?: InputMaybe<User_Transactions__Type_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  username?: InputMaybe<User_Username_Operator>;
};

export type User_Where_And = {
  accountId?: InputMaybe<User_AccountId_Operator>;
  balance?: InputMaybe<User_Balance_Operator>;
  birthday?: InputMaybe<User_Birthday_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  date?: InputMaybe<User_Date_Operator>;
  dividend?: InputMaybe<User_Dividend_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  portfolioValue?: InputMaybe<User_PortfolioValue_Operator>;
  price?: InputMaybe<User_Price_Operator>;
  quantity?: InputMaybe<User_Quantity_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  stock?: InputMaybe<User_Stock_Operator>;
  stocks__dividends__id?: InputMaybe<User_Stocks__Dividends__Id_Operator>;
  stocks__id?: InputMaybe<User_Stocks__Id_Operator>;
  sum?: InputMaybe<User_Sum_Operator>;
  transactions__id?: InputMaybe<User_Transactions__Id_Operator>;
  transactions__status?: InputMaybe<User_Transactions__Status_Operator>;
  transactions__type?: InputMaybe<User_Transactions__Type_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  username?: InputMaybe<User_Username_Operator>;
};

export type User_Where_Or = {
  accountId?: InputMaybe<User_AccountId_Operator>;
  balance?: InputMaybe<User_Balance_Operator>;
  birthday?: InputMaybe<User_Birthday_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  date?: InputMaybe<User_Date_Operator>;
  dividend?: InputMaybe<User_Dividend_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  portfolioValue?: InputMaybe<User_PortfolioValue_Operator>;
  price?: InputMaybe<User_Price_Operator>;
  quantity?: InputMaybe<User_Quantity_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  stock?: InputMaybe<User_Stock_Operator>;
  stocks__dividends__id?: InputMaybe<User_Stocks__Dividends__Id_Operator>;
  stocks__id?: InputMaybe<User_Stocks__Id_Operator>;
  sum?: InputMaybe<User_Sum_Operator>;
  transactions__id?: InputMaybe<User_Transactions__Id_Operator>;
  transactions__status?: InputMaybe<User_Transactions__Status_Operator>;
  transactions__type?: InputMaybe<User_Transactions__Type_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  username?: InputMaybe<User_Username_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  accountId?: Maybe<UsersDocAccessFields_AccountId>;
  balance?: Maybe<UsersDocAccessFields_Balance>;
  birthday?: Maybe<UsersDocAccessFields_Birthday>;
  email?: Maybe<UsersDocAccessFields_Email>;
  lastName?: Maybe<UsersDocAccessFields_LastName>;
  password?: Maybe<UsersDocAccessFields_Password>;
  portfolioValue?: Maybe<UsersDocAccessFields_PortfolioValue>;
  roles?: Maybe<UsersDocAccessFields_Roles>;
  stocks?: Maybe<UsersDocAccessFields_Stocks>;
  transactions?: Maybe<UsersDocAccessFields_Transactions>;
  username?: Maybe<UsersDocAccessFields_Username>;
};

export type UsersDocAccessFields_AccountId = {
  __typename?: 'UsersDocAccessFields_accountId';
  create?: Maybe<UsersDocAccessFields_AccountId_Create>;
  delete?: Maybe<UsersDocAccessFields_AccountId_Delete>;
  read?: Maybe<UsersDocAccessFields_AccountId_Read>;
  update?: Maybe<UsersDocAccessFields_AccountId_Update>;
};

export type UsersDocAccessFields_AccountId_Create = {
  __typename?: 'UsersDocAccessFields_accountId_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_AccountId_Delete = {
  __typename?: 'UsersDocAccessFields_accountId_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_AccountId_Read = {
  __typename?: 'UsersDocAccessFields_accountId_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_AccountId_Update = {
  __typename?: 'UsersDocAccessFields_accountId_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Balance = {
  __typename?: 'UsersDocAccessFields_balance';
  create?: Maybe<UsersDocAccessFields_Balance_Create>;
  delete?: Maybe<UsersDocAccessFields_Balance_Delete>;
  read?: Maybe<UsersDocAccessFields_Balance_Read>;
  update?: Maybe<UsersDocAccessFields_Balance_Update>;
};

export type UsersDocAccessFields_Balance_Create = {
  __typename?: 'UsersDocAccessFields_balance_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Balance_Delete = {
  __typename?: 'UsersDocAccessFields_balance_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Balance_Read = {
  __typename?: 'UsersDocAccessFields_balance_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Balance_Update = {
  __typename?: 'UsersDocAccessFields_balance_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Birthday = {
  __typename?: 'UsersDocAccessFields_birthday';
  create?: Maybe<UsersDocAccessFields_Birthday_Create>;
  delete?: Maybe<UsersDocAccessFields_Birthday_Delete>;
  read?: Maybe<UsersDocAccessFields_Birthday_Read>;
  update?: Maybe<UsersDocAccessFields_Birthday_Update>;
};

export type UsersDocAccessFields_Birthday_Create = {
  __typename?: 'UsersDocAccessFields_birthday_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Birthday_Delete = {
  __typename?: 'UsersDocAccessFields_birthday_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Birthday_Read = {
  __typename?: 'UsersDocAccessFields_birthday_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Birthday_Update = {
  __typename?: 'UsersDocAccessFields_birthday_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_LastName = {
  __typename?: 'UsersDocAccessFields_lastName';
  create?: Maybe<UsersDocAccessFields_LastName_Create>;
  delete?: Maybe<UsersDocAccessFields_LastName_Delete>;
  read?: Maybe<UsersDocAccessFields_LastName_Read>;
  update?: Maybe<UsersDocAccessFields_LastName_Update>;
};

export type UsersDocAccessFields_LastName_Create = {
  __typename?: 'UsersDocAccessFields_lastName_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_LastName_Delete = {
  __typename?: 'UsersDocAccessFields_lastName_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_LastName_Read = {
  __typename?: 'UsersDocAccessFields_lastName_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_LastName_Update = {
  __typename?: 'UsersDocAccessFields_lastName_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password = {
  __typename?: 'UsersDocAccessFields_password';
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: 'UsersDocAccessFields_password_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_PortfolioValue = {
  __typename?: 'UsersDocAccessFields_portfolioValue';
  create?: Maybe<UsersDocAccessFields_PortfolioValue_Create>;
  delete?: Maybe<UsersDocAccessFields_PortfolioValue_Delete>;
  read?: Maybe<UsersDocAccessFields_PortfolioValue_Read>;
  update?: Maybe<UsersDocAccessFields_PortfolioValue_Update>;
};

export type UsersDocAccessFields_PortfolioValue_Create = {
  __typename?: 'UsersDocAccessFields_portfolioValue_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_PortfolioValue_Delete = {
  __typename?: 'UsersDocAccessFields_portfolioValue_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_PortfolioValue_Read = {
  __typename?: 'UsersDocAccessFields_portfolioValue_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_PortfolioValue_Update = {
  __typename?: 'UsersDocAccessFields_portfolioValue_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Roles = {
  __typename?: 'UsersDocAccessFields_roles';
  create?: Maybe<UsersDocAccessFields_Roles_Create>;
  delete?: Maybe<UsersDocAccessFields_Roles_Delete>;
  read?: Maybe<UsersDocAccessFields_Roles_Read>;
  update?: Maybe<UsersDocAccessFields_Roles_Update>;
};

export type UsersDocAccessFields_Roles_Create = {
  __typename?: 'UsersDocAccessFields_roles_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Roles_Delete = {
  __typename?: 'UsersDocAccessFields_roles_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Roles_Read = {
  __typename?: 'UsersDocAccessFields_roles_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Roles_Update = {
  __typename?: 'UsersDocAccessFields_roles_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks = {
  __typename?: 'UsersDocAccessFields_stocks';
  create?: Maybe<UsersDocAccessFields_Stocks_Create>;
  delete?: Maybe<UsersDocAccessFields_Stocks_Delete>;
  fields?: Maybe<UsersDocAccessFields_Stocks_Fields>;
  read?: Maybe<UsersDocAccessFields_Stocks_Read>;
  update?: Maybe<UsersDocAccessFields_Stocks_Update>;
};

export type UsersDocAccessFields_Stocks_Create = {
  __typename?: 'UsersDocAccessFields_stocks_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Delete = {
  __typename?: 'UsersDocAccessFields_stocks_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Fields = {
  __typename?: 'UsersDocAccessFields_stocks_Fields';
  dividends?: Maybe<UsersDocAccessFields_Stocks_Dividends>;
  id?: Maybe<UsersDocAccessFields_Stocks_Id>;
  quantity?: Maybe<UsersDocAccessFields_Stocks_Quantity>;
  stock?: Maybe<UsersDocAccessFields_Stocks_Stock>;
};

export type UsersDocAccessFields_Stocks_Read = {
  __typename?: 'UsersDocAccessFields_stocks_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Update = {
  __typename?: 'UsersDocAccessFields_stocks_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends = {
  __typename?: 'UsersDocAccessFields_stocks_dividends';
  create?: Maybe<UsersDocAccessFields_Stocks_Dividends_Create>;
  delete?: Maybe<UsersDocAccessFields_Stocks_Dividends_Delete>;
  fields?: Maybe<UsersDocAccessFields_Stocks_Dividends_Fields>;
  read?: Maybe<UsersDocAccessFields_Stocks_Dividends_Read>;
  update?: Maybe<UsersDocAccessFields_Stocks_Dividends_Update>;
};

export type UsersDocAccessFields_Stocks_Dividends_Create = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Delete = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Fields = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_Fields';
  dividend?: Maybe<UsersDocAccessFields_Stocks_Dividends_Dividend>;
  id?: Maybe<UsersDocAccessFields_Stocks_Dividends_Id>;
  quantity?: Maybe<UsersDocAccessFields_Stocks_Dividends_Quantity>;
};

export type UsersDocAccessFields_Stocks_Dividends_Read = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Update = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Dividend = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_dividend';
  create?: Maybe<UsersDocAccessFields_Stocks_Dividends_Dividend_Create>;
  delete?: Maybe<UsersDocAccessFields_Stocks_Dividends_Dividend_Delete>;
  read?: Maybe<UsersDocAccessFields_Stocks_Dividends_Dividend_Read>;
  update?: Maybe<UsersDocAccessFields_Stocks_Dividends_Dividend_Update>;
};

export type UsersDocAccessFields_Stocks_Dividends_Dividend_Create = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_dividend_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Dividend_Delete = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_dividend_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Dividend_Read = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_dividend_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Dividend_Update = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_dividend_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Id = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_id';
  create?: Maybe<UsersDocAccessFields_Stocks_Dividends_Id_Create>;
  delete?: Maybe<UsersDocAccessFields_Stocks_Dividends_Id_Delete>;
  read?: Maybe<UsersDocAccessFields_Stocks_Dividends_Id_Read>;
  update?: Maybe<UsersDocAccessFields_Stocks_Dividends_Id_Update>;
};

export type UsersDocAccessFields_Stocks_Dividends_Id_Create = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Id_Delete = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Id_Read = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Id_Update = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Quantity = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_quantity';
  create?: Maybe<UsersDocAccessFields_Stocks_Dividends_Quantity_Create>;
  delete?: Maybe<UsersDocAccessFields_Stocks_Dividends_Quantity_Delete>;
  read?: Maybe<UsersDocAccessFields_Stocks_Dividends_Quantity_Read>;
  update?: Maybe<UsersDocAccessFields_Stocks_Dividends_Quantity_Update>;
};

export type UsersDocAccessFields_Stocks_Dividends_Quantity_Create = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_quantity_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Quantity_Delete = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_quantity_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Quantity_Read = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_quantity_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Dividends_Quantity_Update = {
  __typename?: 'UsersDocAccessFields_stocks_dividends_quantity_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Id = {
  __typename?: 'UsersDocAccessFields_stocks_id';
  create?: Maybe<UsersDocAccessFields_Stocks_Id_Create>;
  delete?: Maybe<UsersDocAccessFields_Stocks_Id_Delete>;
  read?: Maybe<UsersDocAccessFields_Stocks_Id_Read>;
  update?: Maybe<UsersDocAccessFields_Stocks_Id_Update>;
};

export type UsersDocAccessFields_Stocks_Id_Create = {
  __typename?: 'UsersDocAccessFields_stocks_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Id_Delete = {
  __typename?: 'UsersDocAccessFields_stocks_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Id_Read = {
  __typename?: 'UsersDocAccessFields_stocks_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Id_Update = {
  __typename?: 'UsersDocAccessFields_stocks_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Quantity = {
  __typename?: 'UsersDocAccessFields_stocks_quantity';
  create?: Maybe<UsersDocAccessFields_Stocks_Quantity_Create>;
  delete?: Maybe<UsersDocAccessFields_Stocks_Quantity_Delete>;
  read?: Maybe<UsersDocAccessFields_Stocks_Quantity_Read>;
  update?: Maybe<UsersDocAccessFields_Stocks_Quantity_Update>;
};

export type UsersDocAccessFields_Stocks_Quantity_Create = {
  __typename?: 'UsersDocAccessFields_stocks_quantity_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Quantity_Delete = {
  __typename?: 'UsersDocAccessFields_stocks_quantity_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Quantity_Read = {
  __typename?: 'UsersDocAccessFields_stocks_quantity_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Quantity_Update = {
  __typename?: 'UsersDocAccessFields_stocks_quantity_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Stock = {
  __typename?: 'UsersDocAccessFields_stocks_stock';
  create?: Maybe<UsersDocAccessFields_Stocks_Stock_Create>;
  delete?: Maybe<UsersDocAccessFields_Stocks_Stock_Delete>;
  read?: Maybe<UsersDocAccessFields_Stocks_Stock_Read>;
  update?: Maybe<UsersDocAccessFields_Stocks_Stock_Update>;
};

export type UsersDocAccessFields_Stocks_Stock_Create = {
  __typename?: 'UsersDocAccessFields_stocks_stock_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Stock_Delete = {
  __typename?: 'UsersDocAccessFields_stocks_stock_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Stock_Read = {
  __typename?: 'UsersDocAccessFields_stocks_stock_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Stocks_Stock_Update = {
  __typename?: 'UsersDocAccessFields_stocks_stock_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions = {
  __typename?: 'UsersDocAccessFields_transactions';
  create?: Maybe<UsersDocAccessFields_Transactions_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Delete>;
  fields?: Maybe<UsersDocAccessFields_Transactions_Fields>;
  read?: Maybe<UsersDocAccessFields_Transactions_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Update>;
};

export type UsersDocAccessFields_Transactions_Create = {
  __typename?: 'UsersDocAccessFields_transactions_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Fields = {
  __typename?: 'UsersDocAccessFields_transactions_Fields';
  date?: Maybe<UsersDocAccessFields_Transactions_Date>;
  id?: Maybe<UsersDocAccessFields_Transactions_Id>;
  price?: Maybe<UsersDocAccessFields_Transactions_Price>;
  quantity?: Maybe<UsersDocAccessFields_Transactions_Quantity>;
  status?: Maybe<UsersDocAccessFields_Transactions_Status>;
  stock?: Maybe<UsersDocAccessFields_Transactions_Stock>;
  sum?: Maybe<UsersDocAccessFields_Transactions_Sum>;
  type?: Maybe<UsersDocAccessFields_Transactions_Type>;
};

export type UsersDocAccessFields_Transactions_Read = {
  __typename?: 'UsersDocAccessFields_transactions_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Update = {
  __typename?: 'UsersDocAccessFields_transactions_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Date = {
  __typename?: 'UsersDocAccessFields_transactions_date';
  create?: Maybe<UsersDocAccessFields_Transactions_Date_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Date_Delete>;
  read?: Maybe<UsersDocAccessFields_Transactions_Date_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Date_Update>;
};

export type UsersDocAccessFields_Transactions_Date_Create = {
  __typename?: 'UsersDocAccessFields_transactions_date_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Date_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_date_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Date_Read = {
  __typename?: 'UsersDocAccessFields_transactions_date_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Date_Update = {
  __typename?: 'UsersDocAccessFields_transactions_date_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Id = {
  __typename?: 'UsersDocAccessFields_transactions_id';
  create?: Maybe<UsersDocAccessFields_Transactions_Id_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Id_Delete>;
  read?: Maybe<UsersDocAccessFields_Transactions_Id_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Id_Update>;
};

export type UsersDocAccessFields_Transactions_Id_Create = {
  __typename?: 'UsersDocAccessFields_transactions_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Id_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Id_Read = {
  __typename?: 'UsersDocAccessFields_transactions_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Id_Update = {
  __typename?: 'UsersDocAccessFields_transactions_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Price = {
  __typename?: 'UsersDocAccessFields_transactions_price';
  create?: Maybe<UsersDocAccessFields_Transactions_Price_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Price_Delete>;
  read?: Maybe<UsersDocAccessFields_Transactions_Price_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Price_Update>;
};

export type UsersDocAccessFields_Transactions_Price_Create = {
  __typename?: 'UsersDocAccessFields_transactions_price_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Price_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_price_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Price_Read = {
  __typename?: 'UsersDocAccessFields_transactions_price_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Price_Update = {
  __typename?: 'UsersDocAccessFields_transactions_price_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Quantity = {
  __typename?: 'UsersDocAccessFields_transactions_quantity';
  create?: Maybe<UsersDocAccessFields_Transactions_Quantity_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Quantity_Delete>;
  read?: Maybe<UsersDocAccessFields_Transactions_Quantity_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Quantity_Update>;
};

export type UsersDocAccessFields_Transactions_Quantity_Create = {
  __typename?: 'UsersDocAccessFields_transactions_quantity_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Quantity_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_quantity_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Quantity_Read = {
  __typename?: 'UsersDocAccessFields_transactions_quantity_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Quantity_Update = {
  __typename?: 'UsersDocAccessFields_transactions_quantity_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Status = {
  __typename?: 'UsersDocAccessFields_transactions_status';
  create?: Maybe<UsersDocAccessFields_Transactions_Status_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Status_Delete>;
  read?: Maybe<UsersDocAccessFields_Transactions_Status_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Status_Update>;
};

export type UsersDocAccessFields_Transactions_Status_Create = {
  __typename?: 'UsersDocAccessFields_transactions_status_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Status_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_status_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Status_Read = {
  __typename?: 'UsersDocAccessFields_transactions_status_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Status_Update = {
  __typename?: 'UsersDocAccessFields_transactions_status_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Stock = {
  __typename?: 'UsersDocAccessFields_transactions_stock';
  create?: Maybe<UsersDocAccessFields_Transactions_Stock_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Stock_Delete>;
  read?: Maybe<UsersDocAccessFields_Transactions_Stock_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Stock_Update>;
};

export type UsersDocAccessFields_Transactions_Stock_Create = {
  __typename?: 'UsersDocAccessFields_transactions_stock_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Stock_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_stock_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Stock_Read = {
  __typename?: 'UsersDocAccessFields_transactions_stock_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Stock_Update = {
  __typename?: 'UsersDocAccessFields_transactions_stock_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Sum = {
  __typename?: 'UsersDocAccessFields_transactions_sum';
  create?: Maybe<UsersDocAccessFields_Transactions_Sum_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Sum_Delete>;
  read?: Maybe<UsersDocAccessFields_Transactions_Sum_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Sum_Update>;
};

export type UsersDocAccessFields_Transactions_Sum_Create = {
  __typename?: 'UsersDocAccessFields_transactions_sum_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Sum_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_sum_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Sum_Read = {
  __typename?: 'UsersDocAccessFields_transactions_sum_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Sum_Update = {
  __typename?: 'UsersDocAccessFields_transactions_sum_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Type = {
  __typename?: 'UsersDocAccessFields_transactions_type';
  create?: Maybe<UsersDocAccessFields_Transactions_Type_Create>;
  delete?: Maybe<UsersDocAccessFields_Transactions_Type_Delete>;
  read?: Maybe<UsersDocAccessFields_Transactions_Type_Read>;
  update?: Maybe<UsersDocAccessFields_Transactions_Type_Update>;
};

export type UsersDocAccessFields_Transactions_Type_Create = {
  __typename?: 'UsersDocAccessFields_transactions_type_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Type_Delete = {
  __typename?: 'UsersDocAccessFields_transactions_type_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Type_Read = {
  __typename?: 'UsersDocAccessFields_transactions_type_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Transactions_Type_Update = {
  __typename?: 'UsersDocAccessFields_transactions_type_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Username = {
  __typename?: 'UsersDocAccessFields_username';
  create?: Maybe<UsersDocAccessFields_Username_Create>;
  delete?: Maybe<UsersDocAccessFields_Username_Delete>;
  read?: Maybe<UsersDocAccessFields_Username_Read>;
  update?: Maybe<UsersDocAccessFields_Username_Update>;
};

export type UsersDocAccessFields_Username_Create = {
  __typename?: 'UsersDocAccessFields_username_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Username_Delete = {
  __typename?: 'UsersDocAccessFields_username_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Username_Read = {
  __typename?: 'UsersDocAccessFields_username_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Username_Update = {
  __typename?: 'UsersDocAccessFields_username_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  accountId?: Maybe<UsersFields_AccountId>;
  balance?: Maybe<UsersFields_Balance>;
  birthday?: Maybe<UsersFields_Birthday>;
  email?: Maybe<UsersFields_Email>;
  lastName?: Maybe<UsersFields_LastName>;
  password?: Maybe<UsersFields_Password>;
  portfolioValue?: Maybe<UsersFields_PortfolioValue>;
  roles?: Maybe<UsersFields_Roles>;
  stocks?: Maybe<UsersFields_Stocks>;
  transactions?: Maybe<UsersFields_Transactions>;
  username?: Maybe<UsersFields_Username>;
};

export type UsersFields_AccountId = {
  __typename?: 'UsersFields_accountId';
  create?: Maybe<UsersFields_AccountId_Create>;
  delete?: Maybe<UsersFields_AccountId_Delete>;
  read?: Maybe<UsersFields_AccountId_Read>;
  update?: Maybe<UsersFields_AccountId_Update>;
};

export type UsersFields_AccountId_Create = {
  __typename?: 'UsersFields_accountId_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_AccountId_Delete = {
  __typename?: 'UsersFields_accountId_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_AccountId_Read = {
  __typename?: 'UsersFields_accountId_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_AccountId_Update = {
  __typename?: 'UsersFields_accountId_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Balance = {
  __typename?: 'UsersFields_balance';
  create?: Maybe<UsersFields_Balance_Create>;
  delete?: Maybe<UsersFields_Balance_Delete>;
  read?: Maybe<UsersFields_Balance_Read>;
  update?: Maybe<UsersFields_Balance_Update>;
};

export type UsersFields_Balance_Create = {
  __typename?: 'UsersFields_balance_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Balance_Delete = {
  __typename?: 'UsersFields_balance_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Balance_Read = {
  __typename?: 'UsersFields_balance_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Balance_Update = {
  __typename?: 'UsersFields_balance_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Birthday = {
  __typename?: 'UsersFields_birthday';
  create?: Maybe<UsersFields_Birthday_Create>;
  delete?: Maybe<UsersFields_Birthday_Delete>;
  read?: Maybe<UsersFields_Birthday_Read>;
  update?: Maybe<UsersFields_Birthday_Update>;
};

export type UsersFields_Birthday_Create = {
  __typename?: 'UsersFields_birthday_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Birthday_Delete = {
  __typename?: 'UsersFields_birthday_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Birthday_Read = {
  __typename?: 'UsersFields_birthday_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Birthday_Update = {
  __typename?: 'UsersFields_birthday_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_LastName = {
  __typename?: 'UsersFields_lastName';
  create?: Maybe<UsersFields_LastName_Create>;
  delete?: Maybe<UsersFields_LastName_Delete>;
  read?: Maybe<UsersFields_LastName_Read>;
  update?: Maybe<UsersFields_LastName_Update>;
};

export type UsersFields_LastName_Create = {
  __typename?: 'UsersFields_lastName_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_LastName_Delete = {
  __typename?: 'UsersFields_lastName_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_LastName_Read = {
  __typename?: 'UsersFields_lastName_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_LastName_Update = {
  __typename?: 'UsersFields_lastName_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password = {
  __typename?: 'UsersFields_password';
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: 'UsersFields_password_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Delete = {
  __typename?: 'UsersFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Read = {
  __typename?: 'UsersFields_password_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Update = {
  __typename?: 'UsersFields_password_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_PortfolioValue = {
  __typename?: 'UsersFields_portfolioValue';
  create?: Maybe<UsersFields_PortfolioValue_Create>;
  delete?: Maybe<UsersFields_PortfolioValue_Delete>;
  read?: Maybe<UsersFields_PortfolioValue_Read>;
  update?: Maybe<UsersFields_PortfolioValue_Update>;
};

export type UsersFields_PortfolioValue_Create = {
  __typename?: 'UsersFields_portfolioValue_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_PortfolioValue_Delete = {
  __typename?: 'UsersFields_portfolioValue_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_PortfolioValue_Read = {
  __typename?: 'UsersFields_portfolioValue_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_PortfolioValue_Update = {
  __typename?: 'UsersFields_portfolioValue_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Roles = {
  __typename?: 'UsersFields_roles';
  create?: Maybe<UsersFields_Roles_Create>;
  delete?: Maybe<UsersFields_Roles_Delete>;
  read?: Maybe<UsersFields_Roles_Read>;
  update?: Maybe<UsersFields_Roles_Update>;
};

export type UsersFields_Roles_Create = {
  __typename?: 'UsersFields_roles_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Roles_Delete = {
  __typename?: 'UsersFields_roles_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Roles_Read = {
  __typename?: 'UsersFields_roles_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Roles_Update = {
  __typename?: 'UsersFields_roles_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks = {
  __typename?: 'UsersFields_stocks';
  create?: Maybe<UsersFields_Stocks_Create>;
  delete?: Maybe<UsersFields_Stocks_Delete>;
  fields?: Maybe<UsersFields_Stocks_Fields>;
  read?: Maybe<UsersFields_Stocks_Read>;
  update?: Maybe<UsersFields_Stocks_Update>;
};

export type UsersFields_Stocks_Create = {
  __typename?: 'UsersFields_stocks_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Delete = {
  __typename?: 'UsersFields_stocks_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Fields = {
  __typename?: 'UsersFields_stocks_Fields';
  dividends?: Maybe<UsersFields_Stocks_Dividends>;
  id?: Maybe<UsersFields_Stocks_Id>;
  quantity?: Maybe<UsersFields_Stocks_Quantity>;
  stock?: Maybe<UsersFields_Stocks_Stock>;
};

export type UsersFields_Stocks_Read = {
  __typename?: 'UsersFields_stocks_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Update = {
  __typename?: 'UsersFields_stocks_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends = {
  __typename?: 'UsersFields_stocks_dividends';
  create?: Maybe<UsersFields_Stocks_Dividends_Create>;
  delete?: Maybe<UsersFields_Stocks_Dividends_Delete>;
  fields?: Maybe<UsersFields_Stocks_Dividends_Fields>;
  read?: Maybe<UsersFields_Stocks_Dividends_Read>;
  update?: Maybe<UsersFields_Stocks_Dividends_Update>;
};

export type UsersFields_Stocks_Dividends_Create = {
  __typename?: 'UsersFields_stocks_dividends_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Delete = {
  __typename?: 'UsersFields_stocks_dividends_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Fields = {
  __typename?: 'UsersFields_stocks_dividends_Fields';
  dividend?: Maybe<UsersFields_Stocks_Dividends_Dividend>;
  id?: Maybe<UsersFields_Stocks_Dividends_Id>;
  quantity?: Maybe<UsersFields_Stocks_Dividends_Quantity>;
};

export type UsersFields_Stocks_Dividends_Read = {
  __typename?: 'UsersFields_stocks_dividends_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Update = {
  __typename?: 'UsersFields_stocks_dividends_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Dividend = {
  __typename?: 'UsersFields_stocks_dividends_dividend';
  create?: Maybe<UsersFields_Stocks_Dividends_Dividend_Create>;
  delete?: Maybe<UsersFields_Stocks_Dividends_Dividend_Delete>;
  read?: Maybe<UsersFields_Stocks_Dividends_Dividend_Read>;
  update?: Maybe<UsersFields_Stocks_Dividends_Dividend_Update>;
};

export type UsersFields_Stocks_Dividends_Dividend_Create = {
  __typename?: 'UsersFields_stocks_dividends_dividend_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Dividend_Delete = {
  __typename?: 'UsersFields_stocks_dividends_dividend_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Dividend_Read = {
  __typename?: 'UsersFields_stocks_dividends_dividend_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Dividend_Update = {
  __typename?: 'UsersFields_stocks_dividends_dividend_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Id = {
  __typename?: 'UsersFields_stocks_dividends_id';
  create?: Maybe<UsersFields_Stocks_Dividends_Id_Create>;
  delete?: Maybe<UsersFields_Stocks_Dividends_Id_Delete>;
  read?: Maybe<UsersFields_Stocks_Dividends_Id_Read>;
  update?: Maybe<UsersFields_Stocks_Dividends_Id_Update>;
};

export type UsersFields_Stocks_Dividends_Id_Create = {
  __typename?: 'UsersFields_stocks_dividends_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Id_Delete = {
  __typename?: 'UsersFields_stocks_dividends_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Id_Read = {
  __typename?: 'UsersFields_stocks_dividends_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Id_Update = {
  __typename?: 'UsersFields_stocks_dividends_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Quantity = {
  __typename?: 'UsersFields_stocks_dividends_quantity';
  create?: Maybe<UsersFields_Stocks_Dividends_Quantity_Create>;
  delete?: Maybe<UsersFields_Stocks_Dividends_Quantity_Delete>;
  read?: Maybe<UsersFields_Stocks_Dividends_Quantity_Read>;
  update?: Maybe<UsersFields_Stocks_Dividends_Quantity_Update>;
};

export type UsersFields_Stocks_Dividends_Quantity_Create = {
  __typename?: 'UsersFields_stocks_dividends_quantity_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Quantity_Delete = {
  __typename?: 'UsersFields_stocks_dividends_quantity_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Quantity_Read = {
  __typename?: 'UsersFields_stocks_dividends_quantity_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Dividends_Quantity_Update = {
  __typename?: 'UsersFields_stocks_dividends_quantity_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Id = {
  __typename?: 'UsersFields_stocks_id';
  create?: Maybe<UsersFields_Stocks_Id_Create>;
  delete?: Maybe<UsersFields_Stocks_Id_Delete>;
  read?: Maybe<UsersFields_Stocks_Id_Read>;
  update?: Maybe<UsersFields_Stocks_Id_Update>;
};

export type UsersFields_Stocks_Id_Create = {
  __typename?: 'UsersFields_stocks_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Id_Delete = {
  __typename?: 'UsersFields_stocks_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Id_Read = {
  __typename?: 'UsersFields_stocks_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Id_Update = {
  __typename?: 'UsersFields_stocks_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Quantity = {
  __typename?: 'UsersFields_stocks_quantity';
  create?: Maybe<UsersFields_Stocks_Quantity_Create>;
  delete?: Maybe<UsersFields_Stocks_Quantity_Delete>;
  read?: Maybe<UsersFields_Stocks_Quantity_Read>;
  update?: Maybe<UsersFields_Stocks_Quantity_Update>;
};

export type UsersFields_Stocks_Quantity_Create = {
  __typename?: 'UsersFields_stocks_quantity_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Quantity_Delete = {
  __typename?: 'UsersFields_stocks_quantity_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Quantity_Read = {
  __typename?: 'UsersFields_stocks_quantity_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Quantity_Update = {
  __typename?: 'UsersFields_stocks_quantity_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Stock = {
  __typename?: 'UsersFields_stocks_stock';
  create?: Maybe<UsersFields_Stocks_Stock_Create>;
  delete?: Maybe<UsersFields_Stocks_Stock_Delete>;
  read?: Maybe<UsersFields_Stocks_Stock_Read>;
  update?: Maybe<UsersFields_Stocks_Stock_Update>;
};

export type UsersFields_Stocks_Stock_Create = {
  __typename?: 'UsersFields_stocks_stock_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Stock_Delete = {
  __typename?: 'UsersFields_stocks_stock_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Stock_Read = {
  __typename?: 'UsersFields_stocks_stock_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Stocks_Stock_Update = {
  __typename?: 'UsersFields_stocks_stock_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions = {
  __typename?: 'UsersFields_transactions';
  create?: Maybe<UsersFields_Transactions_Create>;
  delete?: Maybe<UsersFields_Transactions_Delete>;
  fields?: Maybe<UsersFields_Transactions_Fields>;
  read?: Maybe<UsersFields_Transactions_Read>;
  update?: Maybe<UsersFields_Transactions_Update>;
};

export type UsersFields_Transactions_Create = {
  __typename?: 'UsersFields_transactions_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Delete = {
  __typename?: 'UsersFields_transactions_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Fields = {
  __typename?: 'UsersFields_transactions_Fields';
  date?: Maybe<UsersFields_Transactions_Date>;
  id?: Maybe<UsersFields_Transactions_Id>;
  price?: Maybe<UsersFields_Transactions_Price>;
  quantity?: Maybe<UsersFields_Transactions_Quantity>;
  status?: Maybe<UsersFields_Transactions_Status>;
  stock?: Maybe<UsersFields_Transactions_Stock>;
  sum?: Maybe<UsersFields_Transactions_Sum>;
  type?: Maybe<UsersFields_Transactions_Type>;
};

export type UsersFields_Transactions_Read = {
  __typename?: 'UsersFields_transactions_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Update = {
  __typename?: 'UsersFields_transactions_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Date = {
  __typename?: 'UsersFields_transactions_date';
  create?: Maybe<UsersFields_Transactions_Date_Create>;
  delete?: Maybe<UsersFields_Transactions_Date_Delete>;
  read?: Maybe<UsersFields_Transactions_Date_Read>;
  update?: Maybe<UsersFields_Transactions_Date_Update>;
};

export type UsersFields_Transactions_Date_Create = {
  __typename?: 'UsersFields_transactions_date_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Date_Delete = {
  __typename?: 'UsersFields_transactions_date_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Date_Read = {
  __typename?: 'UsersFields_transactions_date_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Date_Update = {
  __typename?: 'UsersFields_transactions_date_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Id = {
  __typename?: 'UsersFields_transactions_id';
  create?: Maybe<UsersFields_Transactions_Id_Create>;
  delete?: Maybe<UsersFields_Transactions_Id_Delete>;
  read?: Maybe<UsersFields_Transactions_Id_Read>;
  update?: Maybe<UsersFields_Transactions_Id_Update>;
};

export type UsersFields_Transactions_Id_Create = {
  __typename?: 'UsersFields_transactions_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Id_Delete = {
  __typename?: 'UsersFields_transactions_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Id_Read = {
  __typename?: 'UsersFields_transactions_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Id_Update = {
  __typename?: 'UsersFields_transactions_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Price = {
  __typename?: 'UsersFields_transactions_price';
  create?: Maybe<UsersFields_Transactions_Price_Create>;
  delete?: Maybe<UsersFields_Transactions_Price_Delete>;
  read?: Maybe<UsersFields_Transactions_Price_Read>;
  update?: Maybe<UsersFields_Transactions_Price_Update>;
};

export type UsersFields_Transactions_Price_Create = {
  __typename?: 'UsersFields_transactions_price_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Price_Delete = {
  __typename?: 'UsersFields_transactions_price_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Price_Read = {
  __typename?: 'UsersFields_transactions_price_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Price_Update = {
  __typename?: 'UsersFields_transactions_price_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Quantity = {
  __typename?: 'UsersFields_transactions_quantity';
  create?: Maybe<UsersFields_Transactions_Quantity_Create>;
  delete?: Maybe<UsersFields_Transactions_Quantity_Delete>;
  read?: Maybe<UsersFields_Transactions_Quantity_Read>;
  update?: Maybe<UsersFields_Transactions_Quantity_Update>;
};

export type UsersFields_Transactions_Quantity_Create = {
  __typename?: 'UsersFields_transactions_quantity_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Quantity_Delete = {
  __typename?: 'UsersFields_transactions_quantity_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Quantity_Read = {
  __typename?: 'UsersFields_transactions_quantity_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Quantity_Update = {
  __typename?: 'UsersFields_transactions_quantity_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Status = {
  __typename?: 'UsersFields_transactions_status';
  create?: Maybe<UsersFields_Transactions_Status_Create>;
  delete?: Maybe<UsersFields_Transactions_Status_Delete>;
  read?: Maybe<UsersFields_Transactions_Status_Read>;
  update?: Maybe<UsersFields_Transactions_Status_Update>;
};

export type UsersFields_Transactions_Status_Create = {
  __typename?: 'UsersFields_transactions_status_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Status_Delete = {
  __typename?: 'UsersFields_transactions_status_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Status_Read = {
  __typename?: 'UsersFields_transactions_status_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Status_Update = {
  __typename?: 'UsersFields_transactions_status_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Stock = {
  __typename?: 'UsersFields_transactions_stock';
  create?: Maybe<UsersFields_Transactions_Stock_Create>;
  delete?: Maybe<UsersFields_Transactions_Stock_Delete>;
  read?: Maybe<UsersFields_Transactions_Stock_Read>;
  update?: Maybe<UsersFields_Transactions_Stock_Update>;
};

export type UsersFields_Transactions_Stock_Create = {
  __typename?: 'UsersFields_transactions_stock_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Stock_Delete = {
  __typename?: 'UsersFields_transactions_stock_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Stock_Read = {
  __typename?: 'UsersFields_transactions_stock_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Stock_Update = {
  __typename?: 'UsersFields_transactions_stock_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Sum = {
  __typename?: 'UsersFields_transactions_sum';
  create?: Maybe<UsersFields_Transactions_Sum_Create>;
  delete?: Maybe<UsersFields_Transactions_Sum_Delete>;
  read?: Maybe<UsersFields_Transactions_Sum_Read>;
  update?: Maybe<UsersFields_Transactions_Sum_Update>;
};

export type UsersFields_Transactions_Sum_Create = {
  __typename?: 'UsersFields_transactions_sum_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Sum_Delete = {
  __typename?: 'UsersFields_transactions_sum_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Sum_Read = {
  __typename?: 'UsersFields_transactions_sum_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Sum_Update = {
  __typename?: 'UsersFields_transactions_sum_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Type = {
  __typename?: 'UsersFields_transactions_type';
  create?: Maybe<UsersFields_Transactions_Type_Create>;
  delete?: Maybe<UsersFields_Transactions_Type_Delete>;
  read?: Maybe<UsersFields_Transactions_Type_Read>;
  update?: Maybe<UsersFields_Transactions_Type_Update>;
};

export type UsersFields_Transactions_Type_Create = {
  __typename?: 'UsersFields_transactions_type_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Type_Delete = {
  __typename?: 'UsersFields_transactions_type_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Type_Read = {
  __typename?: 'UsersFields_transactions_type_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Transactions_Type_Update = {
  __typename?: 'UsersFields_transactions_type_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Username = {
  __typename?: 'UsersFields_username';
  create?: Maybe<UsersFields_Username_Create>;
  delete?: Maybe<UsersFields_Username_Delete>;
  read?: Maybe<UsersFields_Username_Read>;
  update?: Maybe<UsersFields_Username_Update>;
};

export type UsersFields_Username_Create = {
  __typename?: 'UsersFields_username_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Username_Delete = {
  __typename?: 'UsersFields_username_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Username_Read = {
  __typename?: 'UsersFields_username_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Username_Update = {
  __typename?: 'UsersFields_username_Update';
  permission: Scalars['Boolean'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DividendsAccess = {
  __typename?: 'dividendsAccess';
  create?: Maybe<DividendsCreateAccess>;
  delete?: Maybe<DividendsDeleteAccess>;
  fields?: Maybe<DividendsFields>;
  read?: Maybe<DividendsReadAccess>;
  update?: Maybe<DividendsUpdateAccess>;
};

export type DividendsDocAccess = {
  __typename?: 'dividendsDocAccess';
  create?: Maybe<DividendsCreateDocAccess>;
  delete?: Maybe<DividendsDeleteDocAccess>;
  fields?: Maybe<DividendsDocAccessFields>;
  read?: Maybe<DividendsReadDocAccess>;
  update?: Maybe<DividendsUpdateDocAccess>;
};

export type MutationDividendInput = {
  date: Scalars['String'];
  dividend: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  quarter?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['String']>;
  xdate?: InputMaybe<Scalars['String']>;
};

export type MutationDividendUpdateInput = {
  date?: InputMaybe<Scalars['String']>;
  dividend?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  quarter?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['String']>;
  xdate?: InputMaybe<Scalars['String']>;
};

export type MutationStockInput = {
  DPR?: InputMaybe<Scalars['Float']>;
  ISIN?: InputMaybe<Scalars['String']>;
  PE?: InputMaybe<Scalars['Float']>;
  capital?: InputMaybe<Scalars['Float']>;
  dividends?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hebrewName?: InputMaybe<Scalars['String']>;
  historicPrices?: InputMaybe<Array<InputMaybe<MutationStock_HistoricPricesInput>>>;
  issuerId?: InputMaybe<Scalars['Float']>;
  latestPrice?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  securityId?: InputMaybe<Scalars['Float']>;
  symbol: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MutationStockUpdateInput = {
  DPR?: InputMaybe<Scalars['Float']>;
  ISIN?: InputMaybe<Scalars['String']>;
  PE?: InputMaybe<Scalars['Float']>;
  capital?: InputMaybe<Scalars['Float']>;
  dividends?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hebrewName?: InputMaybe<Scalars['String']>;
  historicPrices?: InputMaybe<Array<InputMaybe<MutationStockUpdate_HistoricPricesInput>>>;
  issuerId?: InputMaybe<Scalars['Float']>;
  latestPrice?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  securityId?: InputMaybe<Scalars['Float']>;
  symbol?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MutationStockUpdate_HistoricPricesInput = {
  date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  price: Scalars['Float'];
};

export type MutationStock_HistoricPricesInput = {
  date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  price: Scalars['Float'];
};

export type MutationUserInput = {
  accountId?: InputMaybe<Scalars['String']>;
  balance?: InputMaybe<Scalars['Float']>;
  birthday?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  password: Scalars['String'];
  portfolioValue?: InputMaybe<Scalars['Float']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  roles: Array<InputMaybe<User_Roles_MutationInput>>;
  stocks?: InputMaybe<Array<InputMaybe<MutationUser_StocksInput>>>;
  transactions?: InputMaybe<Array<InputMaybe<MutationUser_TransactionsInput>>>;
  username: Scalars['String'];
};

export type MutationUserUpdateInput = {
  accountId?: InputMaybe<Scalars['String']>;
  balance?: InputMaybe<Scalars['Float']>;
  birthday?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  password?: InputMaybe<Scalars['String']>;
  portfolioValue?: InputMaybe<Scalars['Float']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<InputMaybe<UserUpdate_Roles_MutationInput>>>;
  stocks?: InputMaybe<Array<InputMaybe<MutationUserUpdate_StocksInput>>>;
  transactions?: InputMaybe<Array<InputMaybe<MutationUserUpdate_TransactionsInput>>>;
  username?: InputMaybe<Scalars['String']>;
};

export type MutationUserUpdate_StocksInput = {
  dividends?: InputMaybe<Array<InputMaybe<MutationUserUpdate_Stocks_DividendsInput>>>;
  id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  stock?: InputMaybe<Scalars['String']>;
};

export type MutationUserUpdate_Stocks_DividendsInput = {
  dividend?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type MutationUserUpdate_TransactionsInput = {
  date: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['String']>;
  sum: Scalars['Float'];
  type: Scalars['String'];
};

export type MutationUser_StocksInput = {
  dividends?: InputMaybe<Array<InputMaybe<MutationUser_Stocks_DividendsInput>>>;
  id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  stock?: InputMaybe<Scalars['String']>;
};

export type MutationUser_Stocks_DividendsInput = {
  dividend?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type MutationUser_TransactionsInput = {
  date: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['String']>;
  sum: Scalars['Float'];
  type: Scalars['String'];
};

export type StocksAccess = {
  __typename?: 'stocksAccess';
  create?: Maybe<StocksCreateAccess>;
  delete?: Maybe<StocksDeleteAccess>;
  fields?: Maybe<StocksFields>;
  read?: Maybe<StocksReadAccess>;
  update?: Maybe<StocksUpdateAccess>;
};

export type StocksDocAccess = {
  __typename?: 'stocksDocAccess';
  create?: Maybe<StocksCreateDocAccess>;
  delete?: Maybe<StocksDeleteDocAccess>;
  fields?: Maybe<StocksDocAccessFields>;
  read?: Maybe<StocksReadDocAccess>;
  update?: Maybe<StocksUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String'];
  email: Scalars['EmailAddress'];
  roles: Array<UsersJwt_Roles>;
};

export enum UsersJwt_Roles {
  Admin = 'admin',
  Kid = 'kid'
}

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']>;
  refreshedToken?: Maybe<Scalars['String']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Access: ResolverTypeWrapper<Access>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Dividend: ResolverTypeWrapper<Dividend>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Dividend_createdAt_operator: Dividend_CreatedAt_Operator;
  Dividend_date_operator: Dividend_Date_Operator;
  Dividend_dividend_operator: Dividend_Dividend_Operator;
  Dividend_id_operator: Dividend_Id_Operator;
  Dividend_name_operator: Dividend_Name_Operator;
  Dividend_quarter_operator: Dividend_Quarter_Operator;
  Dividend_stock_operator: Dividend_Stock_Operator;
  Dividend_updatedAt_operator: Dividend_UpdatedAt_Operator;
  Dividend_where: Dividend_Where;
  Dividend_where_and: Dividend_Where_And;
  Dividend_where_or: Dividend_Where_Or;
  Dividend_xdate_operator: Dividend_Xdate_Operator;
  Dividends: ResolverTypeWrapper<Dividends>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  DividendsCreateAccess: ResolverTypeWrapper<DividendsCreateAccess>;
  DividendsCreateDocAccess: ResolverTypeWrapper<DividendsCreateDocAccess>;
  DividendsDeleteAccess: ResolverTypeWrapper<DividendsDeleteAccess>;
  DividendsDeleteDocAccess: ResolverTypeWrapper<DividendsDeleteDocAccess>;
  DividendsDocAccessFields: ResolverTypeWrapper<DividendsDocAccessFields>;
  DividendsDocAccessFields_date: ResolverTypeWrapper<DividendsDocAccessFields_Date>;
  DividendsDocAccessFields_date_Create: ResolverTypeWrapper<DividendsDocAccessFields_Date_Create>;
  DividendsDocAccessFields_date_Delete: ResolverTypeWrapper<DividendsDocAccessFields_Date_Delete>;
  DividendsDocAccessFields_date_Read: ResolverTypeWrapper<DividendsDocAccessFields_Date_Read>;
  DividendsDocAccessFields_date_Update: ResolverTypeWrapper<DividendsDocAccessFields_Date_Update>;
  DividendsDocAccessFields_dividend: ResolverTypeWrapper<DividendsDocAccessFields_Dividend>;
  DividendsDocAccessFields_dividend_Create: ResolverTypeWrapper<DividendsDocAccessFields_Dividend_Create>;
  DividendsDocAccessFields_dividend_Delete: ResolverTypeWrapper<DividendsDocAccessFields_Dividend_Delete>;
  DividendsDocAccessFields_dividend_Read: ResolverTypeWrapper<DividendsDocAccessFields_Dividend_Read>;
  DividendsDocAccessFields_dividend_Update: ResolverTypeWrapper<DividendsDocAccessFields_Dividend_Update>;
  DividendsDocAccessFields_name: ResolverTypeWrapper<DividendsDocAccessFields_Name>;
  DividendsDocAccessFields_name_Create: ResolverTypeWrapper<DividendsDocAccessFields_Name_Create>;
  DividendsDocAccessFields_name_Delete: ResolverTypeWrapper<DividendsDocAccessFields_Name_Delete>;
  DividendsDocAccessFields_name_Read: ResolverTypeWrapper<DividendsDocAccessFields_Name_Read>;
  DividendsDocAccessFields_name_Update: ResolverTypeWrapper<DividendsDocAccessFields_Name_Update>;
  DividendsDocAccessFields_quarter: ResolverTypeWrapper<DividendsDocAccessFields_Quarter>;
  DividendsDocAccessFields_quarter_Create: ResolverTypeWrapper<DividendsDocAccessFields_Quarter_Create>;
  DividendsDocAccessFields_quarter_Delete: ResolverTypeWrapper<DividendsDocAccessFields_Quarter_Delete>;
  DividendsDocAccessFields_quarter_Read: ResolverTypeWrapper<DividendsDocAccessFields_Quarter_Read>;
  DividendsDocAccessFields_quarter_Update: ResolverTypeWrapper<DividendsDocAccessFields_Quarter_Update>;
  DividendsDocAccessFields_stock: ResolverTypeWrapper<DividendsDocAccessFields_Stock>;
  DividendsDocAccessFields_stock_Create: ResolverTypeWrapper<DividendsDocAccessFields_Stock_Create>;
  DividendsDocAccessFields_stock_Delete: ResolverTypeWrapper<DividendsDocAccessFields_Stock_Delete>;
  DividendsDocAccessFields_stock_Read: ResolverTypeWrapper<DividendsDocAccessFields_Stock_Read>;
  DividendsDocAccessFields_stock_Update: ResolverTypeWrapper<DividendsDocAccessFields_Stock_Update>;
  DividendsDocAccessFields_xdate: ResolverTypeWrapper<DividendsDocAccessFields_Xdate>;
  DividendsDocAccessFields_xdate_Create: ResolverTypeWrapper<DividendsDocAccessFields_Xdate_Create>;
  DividendsDocAccessFields_xdate_Delete: ResolverTypeWrapper<DividendsDocAccessFields_Xdate_Delete>;
  DividendsDocAccessFields_xdate_Read: ResolverTypeWrapper<DividendsDocAccessFields_Xdate_Read>;
  DividendsDocAccessFields_xdate_Update: ResolverTypeWrapper<DividendsDocAccessFields_Xdate_Update>;
  DividendsFields: ResolverTypeWrapper<DividendsFields>;
  DividendsFields_date: ResolverTypeWrapper<DividendsFields_Date>;
  DividendsFields_date_Create: ResolverTypeWrapper<DividendsFields_Date_Create>;
  DividendsFields_date_Delete: ResolverTypeWrapper<DividendsFields_Date_Delete>;
  DividendsFields_date_Read: ResolverTypeWrapper<DividendsFields_Date_Read>;
  DividendsFields_date_Update: ResolverTypeWrapper<DividendsFields_Date_Update>;
  DividendsFields_dividend: ResolverTypeWrapper<DividendsFields_Dividend>;
  DividendsFields_dividend_Create: ResolverTypeWrapper<DividendsFields_Dividend_Create>;
  DividendsFields_dividend_Delete: ResolverTypeWrapper<DividendsFields_Dividend_Delete>;
  DividendsFields_dividend_Read: ResolverTypeWrapper<DividendsFields_Dividend_Read>;
  DividendsFields_dividend_Update: ResolverTypeWrapper<DividendsFields_Dividend_Update>;
  DividendsFields_name: ResolverTypeWrapper<DividendsFields_Name>;
  DividendsFields_name_Create: ResolverTypeWrapper<DividendsFields_Name_Create>;
  DividendsFields_name_Delete: ResolverTypeWrapper<DividendsFields_Name_Delete>;
  DividendsFields_name_Read: ResolverTypeWrapper<DividendsFields_Name_Read>;
  DividendsFields_name_Update: ResolverTypeWrapper<DividendsFields_Name_Update>;
  DividendsFields_quarter: ResolverTypeWrapper<DividendsFields_Quarter>;
  DividendsFields_quarter_Create: ResolverTypeWrapper<DividendsFields_Quarter_Create>;
  DividendsFields_quarter_Delete: ResolverTypeWrapper<DividendsFields_Quarter_Delete>;
  DividendsFields_quarter_Read: ResolverTypeWrapper<DividendsFields_Quarter_Read>;
  DividendsFields_quarter_Update: ResolverTypeWrapper<DividendsFields_Quarter_Update>;
  DividendsFields_stock: ResolverTypeWrapper<DividendsFields_Stock>;
  DividendsFields_stock_Create: ResolverTypeWrapper<DividendsFields_Stock_Create>;
  DividendsFields_stock_Delete: ResolverTypeWrapper<DividendsFields_Stock_Delete>;
  DividendsFields_stock_Read: ResolverTypeWrapper<DividendsFields_Stock_Read>;
  DividendsFields_stock_Update: ResolverTypeWrapper<DividendsFields_Stock_Update>;
  DividendsFields_xdate: ResolverTypeWrapper<DividendsFields_Xdate>;
  DividendsFields_xdate_Create: ResolverTypeWrapper<DividendsFields_Xdate_Create>;
  DividendsFields_xdate_Delete: ResolverTypeWrapper<DividendsFields_Xdate_Delete>;
  DividendsFields_xdate_Read: ResolverTypeWrapper<DividendsFields_Xdate_Read>;
  DividendsFields_xdate_Update: ResolverTypeWrapper<DividendsFields_Xdate_Update>;
  DividendsReadAccess: ResolverTypeWrapper<DividendsReadAccess>;
  DividendsReadDocAccess: ResolverTypeWrapper<DividendsReadDocAccess>;
  DividendsUpdateAccess: ResolverTypeWrapper<DividendsUpdateAccess>;
  DividendsUpdateDocAccess: ResolverTypeWrapper<DividendsUpdateDocAccess>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Mutation: ResolverTypeWrapper<{}>;
  Preference: ResolverTypeWrapper<Preference>;
  Query: ResolverTypeWrapper<{}>;
  Stock: ResolverTypeWrapper<Stock>;
  Stock_DPR_operator: Stock_Dpr_Operator;
  Stock_HistoricPrices: ResolverTypeWrapper<Stock_HistoricPrices>;
  Stock_ISIN_operator: Stock_Isin_Operator;
  Stock_PE_operator: Stock_Pe_Operator;
  Stock_capital_operator: Stock_Capital_Operator;
  Stock_createdAt_operator: Stock_CreatedAt_Operator;
  Stock_date_operator: Stock_Date_Operator;
  Stock_dividends_operator: Stock_Dividends_Operator;
  Stock_hebrewName_operator: Stock_HebrewName_Operator;
  Stock_historicPrices__id_operator: Stock_HistoricPrices__Id_Operator;
  Stock_id_operator: Stock_Id_Operator;
  Stock_issuerId_operator: Stock_IssuerId_Operator;
  Stock_latestPrice_operator: Stock_LatestPrice_Operator;
  Stock_name_operator: Stock_Name_Operator;
  Stock_price_operator: Stock_Price_Operator;
  Stock_securityId_operator: Stock_SecurityId_Operator;
  Stock_symbol_operator: Stock_Symbol_Operator;
  Stock_updatedAt_operator: Stock_UpdatedAt_Operator;
  Stock_users_operator: Stock_Users_Operator;
  Stock_where: Stock_Where;
  Stock_where_and: Stock_Where_And;
  Stock_where_or: Stock_Where_Or;
  Stocks: ResolverTypeWrapper<Stocks>;
  StocksCreateAccess: ResolverTypeWrapper<StocksCreateAccess>;
  StocksCreateDocAccess: ResolverTypeWrapper<StocksCreateDocAccess>;
  StocksDeleteAccess: ResolverTypeWrapper<StocksDeleteAccess>;
  StocksDeleteDocAccess: ResolverTypeWrapper<StocksDeleteDocAccess>;
  StocksDocAccessFields: ResolverTypeWrapper<StocksDocAccessFields>;
  StocksDocAccessFields_DPR: ResolverTypeWrapper<StocksDocAccessFields_Dpr>;
  StocksDocAccessFields_DPR_Create: ResolverTypeWrapper<StocksDocAccessFields_Dpr_Create>;
  StocksDocAccessFields_DPR_Delete: ResolverTypeWrapper<StocksDocAccessFields_Dpr_Delete>;
  StocksDocAccessFields_DPR_Read: ResolverTypeWrapper<StocksDocAccessFields_Dpr_Read>;
  StocksDocAccessFields_DPR_Update: ResolverTypeWrapper<StocksDocAccessFields_Dpr_Update>;
  StocksDocAccessFields_ISIN: ResolverTypeWrapper<StocksDocAccessFields_Isin>;
  StocksDocAccessFields_ISIN_Create: ResolverTypeWrapper<StocksDocAccessFields_Isin_Create>;
  StocksDocAccessFields_ISIN_Delete: ResolverTypeWrapper<StocksDocAccessFields_Isin_Delete>;
  StocksDocAccessFields_ISIN_Read: ResolverTypeWrapper<StocksDocAccessFields_Isin_Read>;
  StocksDocAccessFields_ISIN_Update: ResolverTypeWrapper<StocksDocAccessFields_Isin_Update>;
  StocksDocAccessFields_PE: ResolverTypeWrapper<StocksDocAccessFields_Pe>;
  StocksDocAccessFields_PE_Create: ResolverTypeWrapper<StocksDocAccessFields_Pe_Create>;
  StocksDocAccessFields_PE_Delete: ResolverTypeWrapper<StocksDocAccessFields_Pe_Delete>;
  StocksDocAccessFields_PE_Read: ResolverTypeWrapper<StocksDocAccessFields_Pe_Read>;
  StocksDocAccessFields_PE_Update: ResolverTypeWrapper<StocksDocAccessFields_Pe_Update>;
  StocksDocAccessFields_capital: ResolverTypeWrapper<StocksDocAccessFields_Capital>;
  StocksDocAccessFields_capital_Create: ResolverTypeWrapper<StocksDocAccessFields_Capital_Create>;
  StocksDocAccessFields_capital_Delete: ResolverTypeWrapper<StocksDocAccessFields_Capital_Delete>;
  StocksDocAccessFields_capital_Read: ResolverTypeWrapper<StocksDocAccessFields_Capital_Read>;
  StocksDocAccessFields_capital_Update: ResolverTypeWrapper<StocksDocAccessFields_Capital_Update>;
  StocksDocAccessFields_dividends: ResolverTypeWrapper<StocksDocAccessFields_Dividends>;
  StocksDocAccessFields_dividends_Create: ResolverTypeWrapper<StocksDocAccessFields_Dividends_Create>;
  StocksDocAccessFields_dividends_Delete: ResolverTypeWrapper<StocksDocAccessFields_Dividends_Delete>;
  StocksDocAccessFields_dividends_Read: ResolverTypeWrapper<StocksDocAccessFields_Dividends_Read>;
  StocksDocAccessFields_dividends_Update: ResolverTypeWrapper<StocksDocAccessFields_Dividends_Update>;
  StocksDocAccessFields_hebrewName: ResolverTypeWrapper<StocksDocAccessFields_HebrewName>;
  StocksDocAccessFields_hebrewName_Create: ResolverTypeWrapper<StocksDocAccessFields_HebrewName_Create>;
  StocksDocAccessFields_hebrewName_Delete: ResolverTypeWrapper<StocksDocAccessFields_HebrewName_Delete>;
  StocksDocAccessFields_hebrewName_Read: ResolverTypeWrapper<StocksDocAccessFields_HebrewName_Read>;
  StocksDocAccessFields_hebrewName_Update: ResolverTypeWrapper<StocksDocAccessFields_HebrewName_Update>;
  StocksDocAccessFields_historicPrices: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices>;
  StocksDocAccessFields_historicPrices_Create: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Create>;
  StocksDocAccessFields_historicPrices_Delete: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Delete>;
  StocksDocAccessFields_historicPrices_Fields: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Fields>;
  StocksDocAccessFields_historicPrices_Read: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Read>;
  StocksDocAccessFields_historicPrices_Update: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Update>;
  StocksDocAccessFields_historicPrices_date: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Date>;
  StocksDocAccessFields_historicPrices_date_Create: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Date_Create>;
  StocksDocAccessFields_historicPrices_date_Delete: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Date_Delete>;
  StocksDocAccessFields_historicPrices_date_Read: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Date_Read>;
  StocksDocAccessFields_historicPrices_date_Update: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Date_Update>;
  StocksDocAccessFields_historicPrices_id: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Id>;
  StocksDocAccessFields_historicPrices_id_Create: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Id_Create>;
  StocksDocAccessFields_historicPrices_id_Delete: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Id_Delete>;
  StocksDocAccessFields_historicPrices_id_Read: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Id_Read>;
  StocksDocAccessFields_historicPrices_id_Update: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Id_Update>;
  StocksDocAccessFields_historicPrices_price: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Price>;
  StocksDocAccessFields_historicPrices_price_Create: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Price_Create>;
  StocksDocAccessFields_historicPrices_price_Delete: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Price_Delete>;
  StocksDocAccessFields_historicPrices_price_Read: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Price_Read>;
  StocksDocAccessFields_historicPrices_price_Update: ResolverTypeWrapper<StocksDocAccessFields_HistoricPrices_Price_Update>;
  StocksDocAccessFields_issuerId: ResolverTypeWrapper<StocksDocAccessFields_IssuerId>;
  StocksDocAccessFields_issuerId_Create: ResolverTypeWrapper<StocksDocAccessFields_IssuerId_Create>;
  StocksDocAccessFields_issuerId_Delete: ResolverTypeWrapper<StocksDocAccessFields_IssuerId_Delete>;
  StocksDocAccessFields_issuerId_Read: ResolverTypeWrapper<StocksDocAccessFields_IssuerId_Read>;
  StocksDocAccessFields_issuerId_Update: ResolverTypeWrapper<StocksDocAccessFields_IssuerId_Update>;
  StocksDocAccessFields_latestPrice: ResolverTypeWrapper<StocksDocAccessFields_LatestPrice>;
  StocksDocAccessFields_latestPrice_Create: ResolverTypeWrapper<StocksDocAccessFields_LatestPrice_Create>;
  StocksDocAccessFields_latestPrice_Delete: ResolverTypeWrapper<StocksDocAccessFields_LatestPrice_Delete>;
  StocksDocAccessFields_latestPrice_Read: ResolverTypeWrapper<StocksDocAccessFields_LatestPrice_Read>;
  StocksDocAccessFields_latestPrice_Update: ResolverTypeWrapper<StocksDocAccessFields_LatestPrice_Update>;
  StocksDocAccessFields_name: ResolverTypeWrapper<StocksDocAccessFields_Name>;
  StocksDocAccessFields_name_Create: ResolverTypeWrapper<StocksDocAccessFields_Name_Create>;
  StocksDocAccessFields_name_Delete: ResolverTypeWrapper<StocksDocAccessFields_Name_Delete>;
  StocksDocAccessFields_name_Read: ResolverTypeWrapper<StocksDocAccessFields_Name_Read>;
  StocksDocAccessFields_name_Update: ResolverTypeWrapper<StocksDocAccessFields_Name_Update>;
  StocksDocAccessFields_securityId: ResolverTypeWrapper<StocksDocAccessFields_SecurityId>;
  StocksDocAccessFields_securityId_Create: ResolverTypeWrapper<StocksDocAccessFields_SecurityId_Create>;
  StocksDocAccessFields_securityId_Delete: ResolverTypeWrapper<StocksDocAccessFields_SecurityId_Delete>;
  StocksDocAccessFields_securityId_Read: ResolverTypeWrapper<StocksDocAccessFields_SecurityId_Read>;
  StocksDocAccessFields_securityId_Update: ResolverTypeWrapper<StocksDocAccessFields_SecurityId_Update>;
  StocksDocAccessFields_symbol: ResolverTypeWrapper<StocksDocAccessFields_Symbol>;
  StocksDocAccessFields_symbol_Create: ResolverTypeWrapper<StocksDocAccessFields_Symbol_Create>;
  StocksDocAccessFields_symbol_Delete: ResolverTypeWrapper<StocksDocAccessFields_Symbol_Delete>;
  StocksDocAccessFields_symbol_Read: ResolverTypeWrapper<StocksDocAccessFields_Symbol_Read>;
  StocksDocAccessFields_symbol_Update: ResolverTypeWrapper<StocksDocAccessFields_Symbol_Update>;
  StocksDocAccessFields_users: ResolverTypeWrapper<StocksDocAccessFields_Users>;
  StocksDocAccessFields_users_Create: ResolverTypeWrapper<StocksDocAccessFields_Users_Create>;
  StocksDocAccessFields_users_Delete: ResolverTypeWrapper<StocksDocAccessFields_Users_Delete>;
  StocksDocAccessFields_users_Read: ResolverTypeWrapper<StocksDocAccessFields_Users_Read>;
  StocksDocAccessFields_users_Update: ResolverTypeWrapper<StocksDocAccessFields_Users_Update>;
  StocksFields: ResolverTypeWrapper<StocksFields>;
  StocksFields_DPR: ResolverTypeWrapper<StocksFields_Dpr>;
  StocksFields_DPR_Create: ResolverTypeWrapper<StocksFields_Dpr_Create>;
  StocksFields_DPR_Delete: ResolverTypeWrapper<StocksFields_Dpr_Delete>;
  StocksFields_DPR_Read: ResolverTypeWrapper<StocksFields_Dpr_Read>;
  StocksFields_DPR_Update: ResolverTypeWrapper<StocksFields_Dpr_Update>;
  StocksFields_ISIN: ResolverTypeWrapper<StocksFields_Isin>;
  StocksFields_ISIN_Create: ResolverTypeWrapper<StocksFields_Isin_Create>;
  StocksFields_ISIN_Delete: ResolverTypeWrapper<StocksFields_Isin_Delete>;
  StocksFields_ISIN_Read: ResolverTypeWrapper<StocksFields_Isin_Read>;
  StocksFields_ISIN_Update: ResolverTypeWrapper<StocksFields_Isin_Update>;
  StocksFields_PE: ResolverTypeWrapper<StocksFields_Pe>;
  StocksFields_PE_Create: ResolverTypeWrapper<StocksFields_Pe_Create>;
  StocksFields_PE_Delete: ResolverTypeWrapper<StocksFields_Pe_Delete>;
  StocksFields_PE_Read: ResolverTypeWrapper<StocksFields_Pe_Read>;
  StocksFields_PE_Update: ResolverTypeWrapper<StocksFields_Pe_Update>;
  StocksFields_capital: ResolverTypeWrapper<StocksFields_Capital>;
  StocksFields_capital_Create: ResolverTypeWrapper<StocksFields_Capital_Create>;
  StocksFields_capital_Delete: ResolverTypeWrapper<StocksFields_Capital_Delete>;
  StocksFields_capital_Read: ResolverTypeWrapper<StocksFields_Capital_Read>;
  StocksFields_capital_Update: ResolverTypeWrapper<StocksFields_Capital_Update>;
  StocksFields_dividends: ResolverTypeWrapper<StocksFields_Dividends>;
  StocksFields_dividends_Create: ResolverTypeWrapper<StocksFields_Dividends_Create>;
  StocksFields_dividends_Delete: ResolverTypeWrapper<StocksFields_Dividends_Delete>;
  StocksFields_dividends_Read: ResolverTypeWrapper<StocksFields_Dividends_Read>;
  StocksFields_dividends_Update: ResolverTypeWrapper<StocksFields_Dividends_Update>;
  StocksFields_hebrewName: ResolverTypeWrapper<StocksFields_HebrewName>;
  StocksFields_hebrewName_Create: ResolverTypeWrapper<StocksFields_HebrewName_Create>;
  StocksFields_hebrewName_Delete: ResolverTypeWrapper<StocksFields_HebrewName_Delete>;
  StocksFields_hebrewName_Read: ResolverTypeWrapper<StocksFields_HebrewName_Read>;
  StocksFields_hebrewName_Update: ResolverTypeWrapper<StocksFields_HebrewName_Update>;
  StocksFields_historicPrices: ResolverTypeWrapper<StocksFields_HistoricPrices>;
  StocksFields_historicPrices_Create: ResolverTypeWrapper<StocksFields_HistoricPrices_Create>;
  StocksFields_historicPrices_Delete: ResolverTypeWrapper<StocksFields_HistoricPrices_Delete>;
  StocksFields_historicPrices_Fields: ResolverTypeWrapper<StocksFields_HistoricPrices_Fields>;
  StocksFields_historicPrices_Read: ResolverTypeWrapper<StocksFields_HistoricPrices_Read>;
  StocksFields_historicPrices_Update: ResolverTypeWrapper<StocksFields_HistoricPrices_Update>;
  StocksFields_historicPrices_date: ResolverTypeWrapper<StocksFields_HistoricPrices_Date>;
  StocksFields_historicPrices_date_Create: ResolverTypeWrapper<StocksFields_HistoricPrices_Date_Create>;
  StocksFields_historicPrices_date_Delete: ResolverTypeWrapper<StocksFields_HistoricPrices_Date_Delete>;
  StocksFields_historicPrices_date_Read: ResolverTypeWrapper<StocksFields_HistoricPrices_Date_Read>;
  StocksFields_historicPrices_date_Update: ResolverTypeWrapper<StocksFields_HistoricPrices_Date_Update>;
  StocksFields_historicPrices_id: ResolverTypeWrapper<StocksFields_HistoricPrices_Id>;
  StocksFields_historicPrices_id_Create: ResolverTypeWrapper<StocksFields_HistoricPrices_Id_Create>;
  StocksFields_historicPrices_id_Delete: ResolverTypeWrapper<StocksFields_HistoricPrices_Id_Delete>;
  StocksFields_historicPrices_id_Read: ResolverTypeWrapper<StocksFields_HistoricPrices_Id_Read>;
  StocksFields_historicPrices_id_Update: ResolverTypeWrapper<StocksFields_HistoricPrices_Id_Update>;
  StocksFields_historicPrices_price: ResolverTypeWrapper<StocksFields_HistoricPrices_Price>;
  StocksFields_historicPrices_price_Create: ResolverTypeWrapper<StocksFields_HistoricPrices_Price_Create>;
  StocksFields_historicPrices_price_Delete: ResolverTypeWrapper<StocksFields_HistoricPrices_Price_Delete>;
  StocksFields_historicPrices_price_Read: ResolverTypeWrapper<StocksFields_HistoricPrices_Price_Read>;
  StocksFields_historicPrices_price_Update: ResolverTypeWrapper<StocksFields_HistoricPrices_Price_Update>;
  StocksFields_issuerId: ResolverTypeWrapper<StocksFields_IssuerId>;
  StocksFields_issuerId_Create: ResolverTypeWrapper<StocksFields_IssuerId_Create>;
  StocksFields_issuerId_Delete: ResolverTypeWrapper<StocksFields_IssuerId_Delete>;
  StocksFields_issuerId_Read: ResolverTypeWrapper<StocksFields_IssuerId_Read>;
  StocksFields_issuerId_Update: ResolverTypeWrapper<StocksFields_IssuerId_Update>;
  StocksFields_latestPrice: ResolverTypeWrapper<StocksFields_LatestPrice>;
  StocksFields_latestPrice_Create: ResolverTypeWrapper<StocksFields_LatestPrice_Create>;
  StocksFields_latestPrice_Delete: ResolverTypeWrapper<StocksFields_LatestPrice_Delete>;
  StocksFields_latestPrice_Read: ResolverTypeWrapper<StocksFields_LatestPrice_Read>;
  StocksFields_latestPrice_Update: ResolverTypeWrapper<StocksFields_LatestPrice_Update>;
  StocksFields_name: ResolverTypeWrapper<StocksFields_Name>;
  StocksFields_name_Create: ResolverTypeWrapper<StocksFields_Name_Create>;
  StocksFields_name_Delete: ResolverTypeWrapper<StocksFields_Name_Delete>;
  StocksFields_name_Read: ResolverTypeWrapper<StocksFields_Name_Read>;
  StocksFields_name_Update: ResolverTypeWrapper<StocksFields_Name_Update>;
  StocksFields_securityId: ResolverTypeWrapper<StocksFields_SecurityId>;
  StocksFields_securityId_Create: ResolverTypeWrapper<StocksFields_SecurityId_Create>;
  StocksFields_securityId_Delete: ResolverTypeWrapper<StocksFields_SecurityId_Delete>;
  StocksFields_securityId_Read: ResolverTypeWrapper<StocksFields_SecurityId_Read>;
  StocksFields_securityId_Update: ResolverTypeWrapper<StocksFields_SecurityId_Update>;
  StocksFields_symbol: ResolverTypeWrapper<StocksFields_Symbol>;
  StocksFields_symbol_Create: ResolverTypeWrapper<StocksFields_Symbol_Create>;
  StocksFields_symbol_Delete: ResolverTypeWrapper<StocksFields_Symbol_Delete>;
  StocksFields_symbol_Read: ResolverTypeWrapper<StocksFields_Symbol_Read>;
  StocksFields_symbol_Update: ResolverTypeWrapper<StocksFields_Symbol_Update>;
  StocksFields_users: ResolverTypeWrapper<StocksFields_Users>;
  StocksFields_users_Create: ResolverTypeWrapper<StocksFields_Users_Create>;
  StocksFields_users_Delete: ResolverTypeWrapper<StocksFields_Users_Delete>;
  StocksFields_users_Read: ResolverTypeWrapper<StocksFields_Users_Read>;
  StocksFields_users_Update: ResolverTypeWrapper<StocksFields_Users_Update>;
  StocksReadAccess: ResolverTypeWrapper<StocksReadAccess>;
  StocksReadDocAccess: ResolverTypeWrapper<StocksReadDocAccess>;
  StocksUpdateAccess: ResolverTypeWrapper<StocksUpdateAccess>;
  StocksUpdateDocAccess: ResolverTypeWrapper<StocksUpdateDocAccess>;
  User: ResolverTypeWrapper<User>;
  UserUpdate_roles_MutationInput: UserUpdate_Roles_MutationInput;
  User_Stocks: ResolverTypeWrapper<User_Stocks>;
  User_Stocks_Dividends: ResolverTypeWrapper<User_Stocks_Dividends>;
  User_Transactions: ResolverTypeWrapper<User_Transactions>;
  User_Transactions_status: User_Transactions_Status;
  User_Transactions_type: User_Transactions_Type;
  User_accountId_operator: User_AccountId_Operator;
  User_balance_operator: User_Balance_Operator;
  User_birthday_operator: User_Birthday_Operator;
  User_createdAt_operator: User_CreatedAt_Operator;
  User_date_operator: User_Date_Operator;
  User_dividend_operator: User_Dividend_Operator;
  User_email_operator: User_Email_Operator;
  User_id_operator: User_Id_Operator;
  User_lastName_operator: User_LastName_Operator;
  User_portfolioValue_operator: User_PortfolioValue_Operator;
  User_price_operator: User_Price_Operator;
  User_quantity_operator: User_Quantity_Operator;
  User_roles: User_Roles;
  User_roles_Input: User_Roles_Input;
  User_roles_MutationInput: User_Roles_MutationInput;
  User_roles_operator: User_Roles_Operator;
  User_stock_operator: User_Stock_Operator;
  User_stocks__dividends__id_operator: User_Stocks__Dividends__Id_Operator;
  User_stocks__id_operator: User_Stocks__Id_Operator;
  User_sum_operator: User_Sum_Operator;
  User_transactions__id_operator: User_Transactions__Id_Operator;
  User_transactions__status_Input: User_Transactions__Status_Input;
  User_transactions__status_operator: User_Transactions__Status_Operator;
  User_transactions__type_Input: User_Transactions__Type_Input;
  User_transactions__type_operator: User_Transactions__Type_Operator;
  User_updatedAt_operator: User_UpdatedAt_Operator;
  User_username_operator: User_Username_Operator;
  User_where: User_Where;
  User_where_and: User_Where_And;
  User_where_or: User_Where_Or;
  Users: ResolverTypeWrapper<Users>;
  UsersCreateAccess: ResolverTypeWrapper<UsersCreateAccess>;
  UsersCreateDocAccess: ResolverTypeWrapper<UsersCreateDocAccess>;
  UsersDeleteAccess: ResolverTypeWrapper<UsersDeleteAccess>;
  UsersDeleteDocAccess: ResolverTypeWrapper<UsersDeleteDocAccess>;
  UsersDocAccessFields: ResolverTypeWrapper<UsersDocAccessFields>;
  UsersDocAccessFields_accountId: ResolverTypeWrapper<UsersDocAccessFields_AccountId>;
  UsersDocAccessFields_accountId_Create: ResolverTypeWrapper<UsersDocAccessFields_AccountId_Create>;
  UsersDocAccessFields_accountId_Delete: ResolverTypeWrapper<UsersDocAccessFields_AccountId_Delete>;
  UsersDocAccessFields_accountId_Read: ResolverTypeWrapper<UsersDocAccessFields_AccountId_Read>;
  UsersDocAccessFields_accountId_Update: ResolverTypeWrapper<UsersDocAccessFields_AccountId_Update>;
  UsersDocAccessFields_balance: ResolverTypeWrapper<UsersDocAccessFields_Balance>;
  UsersDocAccessFields_balance_Create: ResolverTypeWrapper<UsersDocAccessFields_Balance_Create>;
  UsersDocAccessFields_balance_Delete: ResolverTypeWrapper<UsersDocAccessFields_Balance_Delete>;
  UsersDocAccessFields_balance_Read: ResolverTypeWrapper<UsersDocAccessFields_Balance_Read>;
  UsersDocAccessFields_balance_Update: ResolverTypeWrapper<UsersDocAccessFields_Balance_Update>;
  UsersDocAccessFields_birthday: ResolverTypeWrapper<UsersDocAccessFields_Birthday>;
  UsersDocAccessFields_birthday_Create: ResolverTypeWrapper<UsersDocAccessFields_Birthday_Create>;
  UsersDocAccessFields_birthday_Delete: ResolverTypeWrapper<UsersDocAccessFields_Birthday_Delete>;
  UsersDocAccessFields_birthday_Read: ResolverTypeWrapper<UsersDocAccessFields_Birthday_Read>;
  UsersDocAccessFields_birthday_Update: ResolverTypeWrapper<UsersDocAccessFields_Birthday_Update>;
  UsersDocAccessFields_email: ResolverTypeWrapper<UsersDocAccessFields_Email>;
  UsersDocAccessFields_email_Create: ResolverTypeWrapper<UsersDocAccessFields_Email_Create>;
  UsersDocAccessFields_email_Delete: ResolverTypeWrapper<UsersDocAccessFields_Email_Delete>;
  UsersDocAccessFields_email_Read: ResolverTypeWrapper<UsersDocAccessFields_Email_Read>;
  UsersDocAccessFields_email_Update: ResolverTypeWrapper<UsersDocAccessFields_Email_Update>;
  UsersDocAccessFields_lastName: ResolverTypeWrapper<UsersDocAccessFields_LastName>;
  UsersDocAccessFields_lastName_Create: ResolverTypeWrapper<UsersDocAccessFields_LastName_Create>;
  UsersDocAccessFields_lastName_Delete: ResolverTypeWrapper<UsersDocAccessFields_LastName_Delete>;
  UsersDocAccessFields_lastName_Read: ResolverTypeWrapper<UsersDocAccessFields_LastName_Read>;
  UsersDocAccessFields_lastName_Update: ResolverTypeWrapper<UsersDocAccessFields_LastName_Update>;
  UsersDocAccessFields_password: ResolverTypeWrapper<UsersDocAccessFields_Password>;
  UsersDocAccessFields_password_Create: ResolverTypeWrapper<UsersDocAccessFields_Password_Create>;
  UsersDocAccessFields_password_Delete: ResolverTypeWrapper<UsersDocAccessFields_Password_Delete>;
  UsersDocAccessFields_password_Read: ResolverTypeWrapper<UsersDocAccessFields_Password_Read>;
  UsersDocAccessFields_password_Update: ResolverTypeWrapper<UsersDocAccessFields_Password_Update>;
  UsersDocAccessFields_portfolioValue: ResolverTypeWrapper<UsersDocAccessFields_PortfolioValue>;
  UsersDocAccessFields_portfolioValue_Create: ResolverTypeWrapper<UsersDocAccessFields_PortfolioValue_Create>;
  UsersDocAccessFields_portfolioValue_Delete: ResolverTypeWrapper<UsersDocAccessFields_PortfolioValue_Delete>;
  UsersDocAccessFields_portfolioValue_Read: ResolverTypeWrapper<UsersDocAccessFields_PortfolioValue_Read>;
  UsersDocAccessFields_portfolioValue_Update: ResolverTypeWrapper<UsersDocAccessFields_PortfolioValue_Update>;
  UsersDocAccessFields_roles: ResolverTypeWrapper<UsersDocAccessFields_Roles>;
  UsersDocAccessFields_roles_Create: ResolverTypeWrapper<UsersDocAccessFields_Roles_Create>;
  UsersDocAccessFields_roles_Delete: ResolverTypeWrapper<UsersDocAccessFields_Roles_Delete>;
  UsersDocAccessFields_roles_Read: ResolverTypeWrapper<UsersDocAccessFields_Roles_Read>;
  UsersDocAccessFields_roles_Update: ResolverTypeWrapper<UsersDocAccessFields_Roles_Update>;
  UsersDocAccessFields_stocks: ResolverTypeWrapper<UsersDocAccessFields_Stocks>;
  UsersDocAccessFields_stocks_Create: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Create>;
  UsersDocAccessFields_stocks_Delete: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Delete>;
  UsersDocAccessFields_stocks_Fields: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Fields>;
  UsersDocAccessFields_stocks_Read: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Read>;
  UsersDocAccessFields_stocks_Update: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Update>;
  UsersDocAccessFields_stocks_dividends: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends>;
  UsersDocAccessFields_stocks_dividends_Create: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Create>;
  UsersDocAccessFields_stocks_dividends_Delete: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Delete>;
  UsersDocAccessFields_stocks_dividends_Fields: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Fields>;
  UsersDocAccessFields_stocks_dividends_Read: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Read>;
  UsersDocAccessFields_stocks_dividends_Update: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Update>;
  UsersDocAccessFields_stocks_dividends_dividend: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Dividend>;
  UsersDocAccessFields_stocks_dividends_dividend_Create: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Dividend_Create>;
  UsersDocAccessFields_stocks_dividends_dividend_Delete: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Dividend_Delete>;
  UsersDocAccessFields_stocks_dividends_dividend_Read: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Dividend_Read>;
  UsersDocAccessFields_stocks_dividends_dividend_Update: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Dividend_Update>;
  UsersDocAccessFields_stocks_dividends_id: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Id>;
  UsersDocAccessFields_stocks_dividends_id_Create: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Id_Create>;
  UsersDocAccessFields_stocks_dividends_id_Delete: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Id_Delete>;
  UsersDocAccessFields_stocks_dividends_id_Read: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Id_Read>;
  UsersDocAccessFields_stocks_dividends_id_Update: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Id_Update>;
  UsersDocAccessFields_stocks_dividends_quantity: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Quantity>;
  UsersDocAccessFields_stocks_dividends_quantity_Create: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Quantity_Create>;
  UsersDocAccessFields_stocks_dividends_quantity_Delete: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Quantity_Delete>;
  UsersDocAccessFields_stocks_dividends_quantity_Read: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Quantity_Read>;
  UsersDocAccessFields_stocks_dividends_quantity_Update: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Dividends_Quantity_Update>;
  UsersDocAccessFields_stocks_id: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Id>;
  UsersDocAccessFields_stocks_id_Create: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Id_Create>;
  UsersDocAccessFields_stocks_id_Delete: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Id_Delete>;
  UsersDocAccessFields_stocks_id_Read: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Id_Read>;
  UsersDocAccessFields_stocks_id_Update: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Id_Update>;
  UsersDocAccessFields_stocks_quantity: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Quantity>;
  UsersDocAccessFields_stocks_quantity_Create: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Quantity_Create>;
  UsersDocAccessFields_stocks_quantity_Delete: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Quantity_Delete>;
  UsersDocAccessFields_stocks_quantity_Read: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Quantity_Read>;
  UsersDocAccessFields_stocks_quantity_Update: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Quantity_Update>;
  UsersDocAccessFields_stocks_stock: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Stock>;
  UsersDocAccessFields_stocks_stock_Create: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Stock_Create>;
  UsersDocAccessFields_stocks_stock_Delete: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Stock_Delete>;
  UsersDocAccessFields_stocks_stock_Read: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Stock_Read>;
  UsersDocAccessFields_stocks_stock_Update: ResolverTypeWrapper<UsersDocAccessFields_Stocks_Stock_Update>;
  UsersDocAccessFields_transactions: ResolverTypeWrapper<UsersDocAccessFields_Transactions>;
  UsersDocAccessFields_transactions_Create: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Create>;
  UsersDocAccessFields_transactions_Delete: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Delete>;
  UsersDocAccessFields_transactions_Fields: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Fields>;
  UsersDocAccessFields_transactions_Read: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Read>;
  UsersDocAccessFields_transactions_Update: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Update>;
  UsersDocAccessFields_transactions_date: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Date>;
  UsersDocAccessFields_transactions_date_Create: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Date_Create>;
  UsersDocAccessFields_transactions_date_Delete: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Date_Delete>;
  UsersDocAccessFields_transactions_date_Read: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Date_Read>;
  UsersDocAccessFields_transactions_date_Update: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Date_Update>;
  UsersDocAccessFields_transactions_id: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Id>;
  UsersDocAccessFields_transactions_id_Create: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Id_Create>;
  UsersDocAccessFields_transactions_id_Delete: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Id_Delete>;
  UsersDocAccessFields_transactions_id_Read: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Id_Read>;
  UsersDocAccessFields_transactions_id_Update: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Id_Update>;
  UsersDocAccessFields_transactions_price: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Price>;
  UsersDocAccessFields_transactions_price_Create: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Price_Create>;
  UsersDocAccessFields_transactions_price_Delete: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Price_Delete>;
  UsersDocAccessFields_transactions_price_Read: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Price_Read>;
  UsersDocAccessFields_transactions_price_Update: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Price_Update>;
  UsersDocAccessFields_transactions_quantity: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Quantity>;
  UsersDocAccessFields_transactions_quantity_Create: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Quantity_Create>;
  UsersDocAccessFields_transactions_quantity_Delete: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Quantity_Delete>;
  UsersDocAccessFields_transactions_quantity_Read: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Quantity_Read>;
  UsersDocAccessFields_transactions_quantity_Update: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Quantity_Update>;
  UsersDocAccessFields_transactions_status: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Status>;
  UsersDocAccessFields_transactions_status_Create: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Status_Create>;
  UsersDocAccessFields_transactions_status_Delete: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Status_Delete>;
  UsersDocAccessFields_transactions_status_Read: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Status_Read>;
  UsersDocAccessFields_transactions_status_Update: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Status_Update>;
  UsersDocAccessFields_transactions_stock: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Stock>;
  UsersDocAccessFields_transactions_stock_Create: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Stock_Create>;
  UsersDocAccessFields_transactions_stock_Delete: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Stock_Delete>;
  UsersDocAccessFields_transactions_stock_Read: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Stock_Read>;
  UsersDocAccessFields_transactions_stock_Update: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Stock_Update>;
  UsersDocAccessFields_transactions_sum: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Sum>;
  UsersDocAccessFields_transactions_sum_Create: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Sum_Create>;
  UsersDocAccessFields_transactions_sum_Delete: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Sum_Delete>;
  UsersDocAccessFields_transactions_sum_Read: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Sum_Read>;
  UsersDocAccessFields_transactions_sum_Update: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Sum_Update>;
  UsersDocAccessFields_transactions_type: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Type>;
  UsersDocAccessFields_transactions_type_Create: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Type_Create>;
  UsersDocAccessFields_transactions_type_Delete: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Type_Delete>;
  UsersDocAccessFields_transactions_type_Read: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Type_Read>;
  UsersDocAccessFields_transactions_type_Update: ResolverTypeWrapper<UsersDocAccessFields_Transactions_Type_Update>;
  UsersDocAccessFields_username: ResolverTypeWrapper<UsersDocAccessFields_Username>;
  UsersDocAccessFields_username_Create: ResolverTypeWrapper<UsersDocAccessFields_Username_Create>;
  UsersDocAccessFields_username_Delete: ResolverTypeWrapper<UsersDocAccessFields_Username_Delete>;
  UsersDocAccessFields_username_Read: ResolverTypeWrapper<UsersDocAccessFields_Username_Read>;
  UsersDocAccessFields_username_Update: ResolverTypeWrapper<UsersDocAccessFields_Username_Update>;
  UsersFields: ResolverTypeWrapper<UsersFields>;
  UsersFields_accountId: ResolverTypeWrapper<UsersFields_AccountId>;
  UsersFields_accountId_Create: ResolverTypeWrapper<UsersFields_AccountId_Create>;
  UsersFields_accountId_Delete: ResolverTypeWrapper<UsersFields_AccountId_Delete>;
  UsersFields_accountId_Read: ResolverTypeWrapper<UsersFields_AccountId_Read>;
  UsersFields_accountId_Update: ResolverTypeWrapper<UsersFields_AccountId_Update>;
  UsersFields_balance: ResolverTypeWrapper<UsersFields_Balance>;
  UsersFields_balance_Create: ResolverTypeWrapper<UsersFields_Balance_Create>;
  UsersFields_balance_Delete: ResolverTypeWrapper<UsersFields_Balance_Delete>;
  UsersFields_balance_Read: ResolverTypeWrapper<UsersFields_Balance_Read>;
  UsersFields_balance_Update: ResolverTypeWrapper<UsersFields_Balance_Update>;
  UsersFields_birthday: ResolverTypeWrapper<UsersFields_Birthday>;
  UsersFields_birthday_Create: ResolverTypeWrapper<UsersFields_Birthday_Create>;
  UsersFields_birthday_Delete: ResolverTypeWrapper<UsersFields_Birthday_Delete>;
  UsersFields_birthday_Read: ResolverTypeWrapper<UsersFields_Birthday_Read>;
  UsersFields_birthday_Update: ResolverTypeWrapper<UsersFields_Birthday_Update>;
  UsersFields_email: ResolverTypeWrapper<UsersFields_Email>;
  UsersFields_email_Create: ResolverTypeWrapper<UsersFields_Email_Create>;
  UsersFields_email_Delete: ResolverTypeWrapper<UsersFields_Email_Delete>;
  UsersFields_email_Read: ResolverTypeWrapper<UsersFields_Email_Read>;
  UsersFields_email_Update: ResolverTypeWrapper<UsersFields_Email_Update>;
  UsersFields_lastName: ResolverTypeWrapper<UsersFields_LastName>;
  UsersFields_lastName_Create: ResolverTypeWrapper<UsersFields_LastName_Create>;
  UsersFields_lastName_Delete: ResolverTypeWrapper<UsersFields_LastName_Delete>;
  UsersFields_lastName_Read: ResolverTypeWrapper<UsersFields_LastName_Read>;
  UsersFields_lastName_Update: ResolverTypeWrapper<UsersFields_LastName_Update>;
  UsersFields_password: ResolverTypeWrapper<UsersFields_Password>;
  UsersFields_password_Create: ResolverTypeWrapper<UsersFields_Password_Create>;
  UsersFields_password_Delete: ResolverTypeWrapper<UsersFields_Password_Delete>;
  UsersFields_password_Read: ResolverTypeWrapper<UsersFields_Password_Read>;
  UsersFields_password_Update: ResolverTypeWrapper<UsersFields_Password_Update>;
  UsersFields_portfolioValue: ResolverTypeWrapper<UsersFields_PortfolioValue>;
  UsersFields_portfolioValue_Create: ResolverTypeWrapper<UsersFields_PortfolioValue_Create>;
  UsersFields_portfolioValue_Delete: ResolverTypeWrapper<UsersFields_PortfolioValue_Delete>;
  UsersFields_portfolioValue_Read: ResolverTypeWrapper<UsersFields_PortfolioValue_Read>;
  UsersFields_portfolioValue_Update: ResolverTypeWrapper<UsersFields_PortfolioValue_Update>;
  UsersFields_roles: ResolverTypeWrapper<UsersFields_Roles>;
  UsersFields_roles_Create: ResolverTypeWrapper<UsersFields_Roles_Create>;
  UsersFields_roles_Delete: ResolverTypeWrapper<UsersFields_Roles_Delete>;
  UsersFields_roles_Read: ResolverTypeWrapper<UsersFields_Roles_Read>;
  UsersFields_roles_Update: ResolverTypeWrapper<UsersFields_Roles_Update>;
  UsersFields_stocks: ResolverTypeWrapper<UsersFields_Stocks>;
  UsersFields_stocks_Create: ResolverTypeWrapper<UsersFields_Stocks_Create>;
  UsersFields_stocks_Delete: ResolverTypeWrapper<UsersFields_Stocks_Delete>;
  UsersFields_stocks_Fields: ResolverTypeWrapper<UsersFields_Stocks_Fields>;
  UsersFields_stocks_Read: ResolverTypeWrapper<UsersFields_Stocks_Read>;
  UsersFields_stocks_Update: ResolverTypeWrapper<UsersFields_Stocks_Update>;
  UsersFields_stocks_dividends: ResolverTypeWrapper<UsersFields_Stocks_Dividends>;
  UsersFields_stocks_dividends_Create: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Create>;
  UsersFields_stocks_dividends_Delete: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Delete>;
  UsersFields_stocks_dividends_Fields: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Fields>;
  UsersFields_stocks_dividends_Read: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Read>;
  UsersFields_stocks_dividends_Update: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Update>;
  UsersFields_stocks_dividends_dividend: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Dividend>;
  UsersFields_stocks_dividends_dividend_Create: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Dividend_Create>;
  UsersFields_stocks_dividends_dividend_Delete: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Dividend_Delete>;
  UsersFields_stocks_dividends_dividend_Read: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Dividend_Read>;
  UsersFields_stocks_dividends_dividend_Update: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Dividend_Update>;
  UsersFields_stocks_dividends_id: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Id>;
  UsersFields_stocks_dividends_id_Create: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Id_Create>;
  UsersFields_stocks_dividends_id_Delete: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Id_Delete>;
  UsersFields_stocks_dividends_id_Read: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Id_Read>;
  UsersFields_stocks_dividends_id_Update: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Id_Update>;
  UsersFields_stocks_dividends_quantity: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Quantity>;
  UsersFields_stocks_dividends_quantity_Create: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Quantity_Create>;
  UsersFields_stocks_dividends_quantity_Delete: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Quantity_Delete>;
  UsersFields_stocks_dividends_quantity_Read: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Quantity_Read>;
  UsersFields_stocks_dividends_quantity_Update: ResolverTypeWrapper<UsersFields_Stocks_Dividends_Quantity_Update>;
  UsersFields_stocks_id: ResolverTypeWrapper<UsersFields_Stocks_Id>;
  UsersFields_stocks_id_Create: ResolverTypeWrapper<UsersFields_Stocks_Id_Create>;
  UsersFields_stocks_id_Delete: ResolverTypeWrapper<UsersFields_Stocks_Id_Delete>;
  UsersFields_stocks_id_Read: ResolverTypeWrapper<UsersFields_Stocks_Id_Read>;
  UsersFields_stocks_id_Update: ResolverTypeWrapper<UsersFields_Stocks_Id_Update>;
  UsersFields_stocks_quantity: ResolverTypeWrapper<UsersFields_Stocks_Quantity>;
  UsersFields_stocks_quantity_Create: ResolverTypeWrapper<UsersFields_Stocks_Quantity_Create>;
  UsersFields_stocks_quantity_Delete: ResolverTypeWrapper<UsersFields_Stocks_Quantity_Delete>;
  UsersFields_stocks_quantity_Read: ResolverTypeWrapper<UsersFields_Stocks_Quantity_Read>;
  UsersFields_stocks_quantity_Update: ResolverTypeWrapper<UsersFields_Stocks_Quantity_Update>;
  UsersFields_stocks_stock: ResolverTypeWrapper<UsersFields_Stocks_Stock>;
  UsersFields_stocks_stock_Create: ResolverTypeWrapper<UsersFields_Stocks_Stock_Create>;
  UsersFields_stocks_stock_Delete: ResolverTypeWrapper<UsersFields_Stocks_Stock_Delete>;
  UsersFields_stocks_stock_Read: ResolverTypeWrapper<UsersFields_Stocks_Stock_Read>;
  UsersFields_stocks_stock_Update: ResolverTypeWrapper<UsersFields_Stocks_Stock_Update>;
  UsersFields_transactions: ResolverTypeWrapper<UsersFields_Transactions>;
  UsersFields_transactions_Create: ResolverTypeWrapper<UsersFields_Transactions_Create>;
  UsersFields_transactions_Delete: ResolverTypeWrapper<UsersFields_Transactions_Delete>;
  UsersFields_transactions_Fields: ResolverTypeWrapper<UsersFields_Transactions_Fields>;
  UsersFields_transactions_Read: ResolverTypeWrapper<UsersFields_Transactions_Read>;
  UsersFields_transactions_Update: ResolverTypeWrapper<UsersFields_Transactions_Update>;
  UsersFields_transactions_date: ResolverTypeWrapper<UsersFields_Transactions_Date>;
  UsersFields_transactions_date_Create: ResolverTypeWrapper<UsersFields_Transactions_Date_Create>;
  UsersFields_transactions_date_Delete: ResolverTypeWrapper<UsersFields_Transactions_Date_Delete>;
  UsersFields_transactions_date_Read: ResolverTypeWrapper<UsersFields_Transactions_Date_Read>;
  UsersFields_transactions_date_Update: ResolverTypeWrapper<UsersFields_Transactions_Date_Update>;
  UsersFields_transactions_id: ResolverTypeWrapper<UsersFields_Transactions_Id>;
  UsersFields_transactions_id_Create: ResolverTypeWrapper<UsersFields_Transactions_Id_Create>;
  UsersFields_transactions_id_Delete: ResolverTypeWrapper<UsersFields_Transactions_Id_Delete>;
  UsersFields_transactions_id_Read: ResolverTypeWrapper<UsersFields_Transactions_Id_Read>;
  UsersFields_transactions_id_Update: ResolverTypeWrapper<UsersFields_Transactions_Id_Update>;
  UsersFields_transactions_price: ResolverTypeWrapper<UsersFields_Transactions_Price>;
  UsersFields_transactions_price_Create: ResolverTypeWrapper<UsersFields_Transactions_Price_Create>;
  UsersFields_transactions_price_Delete: ResolverTypeWrapper<UsersFields_Transactions_Price_Delete>;
  UsersFields_transactions_price_Read: ResolverTypeWrapper<UsersFields_Transactions_Price_Read>;
  UsersFields_transactions_price_Update: ResolverTypeWrapper<UsersFields_Transactions_Price_Update>;
  UsersFields_transactions_quantity: ResolverTypeWrapper<UsersFields_Transactions_Quantity>;
  UsersFields_transactions_quantity_Create: ResolverTypeWrapper<UsersFields_Transactions_Quantity_Create>;
  UsersFields_transactions_quantity_Delete: ResolverTypeWrapper<UsersFields_Transactions_Quantity_Delete>;
  UsersFields_transactions_quantity_Read: ResolverTypeWrapper<UsersFields_Transactions_Quantity_Read>;
  UsersFields_transactions_quantity_Update: ResolverTypeWrapper<UsersFields_Transactions_Quantity_Update>;
  UsersFields_transactions_status: ResolverTypeWrapper<UsersFields_Transactions_Status>;
  UsersFields_transactions_status_Create: ResolverTypeWrapper<UsersFields_Transactions_Status_Create>;
  UsersFields_transactions_status_Delete: ResolverTypeWrapper<UsersFields_Transactions_Status_Delete>;
  UsersFields_transactions_status_Read: ResolverTypeWrapper<UsersFields_Transactions_Status_Read>;
  UsersFields_transactions_status_Update: ResolverTypeWrapper<UsersFields_Transactions_Status_Update>;
  UsersFields_transactions_stock: ResolverTypeWrapper<UsersFields_Transactions_Stock>;
  UsersFields_transactions_stock_Create: ResolverTypeWrapper<UsersFields_Transactions_Stock_Create>;
  UsersFields_transactions_stock_Delete: ResolverTypeWrapper<UsersFields_Transactions_Stock_Delete>;
  UsersFields_transactions_stock_Read: ResolverTypeWrapper<UsersFields_Transactions_Stock_Read>;
  UsersFields_transactions_stock_Update: ResolverTypeWrapper<UsersFields_Transactions_Stock_Update>;
  UsersFields_transactions_sum: ResolverTypeWrapper<UsersFields_Transactions_Sum>;
  UsersFields_transactions_sum_Create: ResolverTypeWrapper<UsersFields_Transactions_Sum_Create>;
  UsersFields_transactions_sum_Delete: ResolverTypeWrapper<UsersFields_Transactions_Sum_Delete>;
  UsersFields_transactions_sum_Read: ResolverTypeWrapper<UsersFields_Transactions_Sum_Read>;
  UsersFields_transactions_sum_Update: ResolverTypeWrapper<UsersFields_Transactions_Sum_Update>;
  UsersFields_transactions_type: ResolverTypeWrapper<UsersFields_Transactions_Type>;
  UsersFields_transactions_type_Create: ResolverTypeWrapper<UsersFields_Transactions_Type_Create>;
  UsersFields_transactions_type_Delete: ResolverTypeWrapper<UsersFields_Transactions_Type_Delete>;
  UsersFields_transactions_type_Read: ResolverTypeWrapper<UsersFields_Transactions_Type_Read>;
  UsersFields_transactions_type_Update: ResolverTypeWrapper<UsersFields_Transactions_Type_Update>;
  UsersFields_username: ResolverTypeWrapper<UsersFields_Username>;
  UsersFields_username_Create: ResolverTypeWrapper<UsersFields_Username_Create>;
  UsersFields_username_Delete: ResolverTypeWrapper<UsersFields_Username_Delete>;
  UsersFields_username_Read: ResolverTypeWrapper<UsersFields_Username_Read>;
  UsersFields_username_Update: ResolverTypeWrapper<UsersFields_Username_Update>;
  UsersReadAccess: ResolverTypeWrapper<UsersReadAccess>;
  UsersReadDocAccess: ResolverTypeWrapper<UsersReadDocAccess>;
  UsersUnlockAccess: ResolverTypeWrapper<UsersUnlockAccess>;
  UsersUnlockDocAccess: ResolverTypeWrapper<UsersUnlockDocAccess>;
  UsersUpdateAccess: ResolverTypeWrapper<UsersUpdateAccess>;
  UsersUpdateDocAccess: ResolverTypeWrapper<UsersUpdateDocAccess>;
  dividendsAccess: ResolverTypeWrapper<DividendsAccess>;
  dividendsDocAccess: ResolverTypeWrapper<DividendsDocAccess>;
  mutationDividendInput: MutationDividendInput;
  mutationDividendUpdateInput: MutationDividendUpdateInput;
  mutationStockInput: MutationStockInput;
  mutationStockUpdateInput: MutationStockUpdateInput;
  mutationStockUpdate_HistoricPricesInput: MutationStockUpdate_HistoricPricesInput;
  mutationStock_HistoricPricesInput: MutationStock_HistoricPricesInput;
  mutationUserInput: MutationUserInput;
  mutationUserUpdateInput: MutationUserUpdateInput;
  mutationUserUpdate_StocksInput: MutationUserUpdate_StocksInput;
  mutationUserUpdate_Stocks_DividendsInput: MutationUserUpdate_Stocks_DividendsInput;
  mutationUserUpdate_TransactionsInput: MutationUserUpdate_TransactionsInput;
  mutationUser_StocksInput: MutationUser_StocksInput;
  mutationUser_Stocks_DividendsInput: MutationUser_Stocks_DividendsInput;
  mutationUser_TransactionsInput: MutationUser_TransactionsInput;
  stocksAccess: ResolverTypeWrapper<StocksAccess>;
  stocksDocAccess: ResolverTypeWrapper<StocksDocAccess>;
  usersAccess: ResolverTypeWrapper<UsersAccess>;
  usersDocAccess: ResolverTypeWrapper<UsersDocAccess>;
  usersJWT: ResolverTypeWrapper<UsersJwt>;
  usersJWT_roles: UsersJwt_Roles;
  usersLoginResult: ResolverTypeWrapper<UsersLoginResult>;
  usersMe: ResolverTypeWrapper<UsersMe>;
  usersRefreshedUser: ResolverTypeWrapper<UsersRefreshedUser>;
  usersResetPassword: ResolverTypeWrapper<UsersResetPassword>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Access: Access;
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  Dividend: Dividend;
  Float: Scalars['Float'];
  String: Scalars['String'];
  Dividend_createdAt_operator: Dividend_CreatedAt_Operator;
  Dividend_date_operator: Dividend_Date_Operator;
  Dividend_dividend_operator: Dividend_Dividend_Operator;
  Dividend_id_operator: Dividend_Id_Operator;
  Dividend_name_operator: Dividend_Name_Operator;
  Dividend_quarter_operator: Dividend_Quarter_Operator;
  Dividend_stock_operator: Dividend_Stock_Operator;
  Dividend_updatedAt_operator: Dividend_UpdatedAt_Operator;
  Dividend_where: Dividend_Where;
  Dividend_where_and: Dividend_Where_And;
  Dividend_where_or: Dividend_Where_Or;
  Dividend_xdate_operator: Dividend_Xdate_Operator;
  Dividends: Dividends;
  Int: Scalars['Int'];
  DividendsCreateAccess: DividendsCreateAccess;
  DividendsCreateDocAccess: DividendsCreateDocAccess;
  DividendsDeleteAccess: DividendsDeleteAccess;
  DividendsDeleteDocAccess: DividendsDeleteDocAccess;
  DividendsDocAccessFields: DividendsDocAccessFields;
  DividendsDocAccessFields_date: DividendsDocAccessFields_Date;
  DividendsDocAccessFields_date_Create: DividendsDocAccessFields_Date_Create;
  DividendsDocAccessFields_date_Delete: DividendsDocAccessFields_Date_Delete;
  DividendsDocAccessFields_date_Read: DividendsDocAccessFields_Date_Read;
  DividendsDocAccessFields_date_Update: DividendsDocAccessFields_Date_Update;
  DividendsDocAccessFields_dividend: DividendsDocAccessFields_Dividend;
  DividendsDocAccessFields_dividend_Create: DividendsDocAccessFields_Dividend_Create;
  DividendsDocAccessFields_dividend_Delete: DividendsDocAccessFields_Dividend_Delete;
  DividendsDocAccessFields_dividend_Read: DividendsDocAccessFields_Dividend_Read;
  DividendsDocAccessFields_dividend_Update: DividendsDocAccessFields_Dividend_Update;
  DividendsDocAccessFields_name: DividendsDocAccessFields_Name;
  DividendsDocAccessFields_name_Create: DividendsDocAccessFields_Name_Create;
  DividendsDocAccessFields_name_Delete: DividendsDocAccessFields_Name_Delete;
  DividendsDocAccessFields_name_Read: DividendsDocAccessFields_Name_Read;
  DividendsDocAccessFields_name_Update: DividendsDocAccessFields_Name_Update;
  DividendsDocAccessFields_quarter: DividendsDocAccessFields_Quarter;
  DividendsDocAccessFields_quarter_Create: DividendsDocAccessFields_Quarter_Create;
  DividendsDocAccessFields_quarter_Delete: DividendsDocAccessFields_Quarter_Delete;
  DividendsDocAccessFields_quarter_Read: DividendsDocAccessFields_Quarter_Read;
  DividendsDocAccessFields_quarter_Update: DividendsDocAccessFields_Quarter_Update;
  DividendsDocAccessFields_stock: DividendsDocAccessFields_Stock;
  DividendsDocAccessFields_stock_Create: DividendsDocAccessFields_Stock_Create;
  DividendsDocAccessFields_stock_Delete: DividendsDocAccessFields_Stock_Delete;
  DividendsDocAccessFields_stock_Read: DividendsDocAccessFields_Stock_Read;
  DividendsDocAccessFields_stock_Update: DividendsDocAccessFields_Stock_Update;
  DividendsDocAccessFields_xdate: DividendsDocAccessFields_Xdate;
  DividendsDocAccessFields_xdate_Create: DividendsDocAccessFields_Xdate_Create;
  DividendsDocAccessFields_xdate_Delete: DividendsDocAccessFields_Xdate_Delete;
  DividendsDocAccessFields_xdate_Read: DividendsDocAccessFields_Xdate_Read;
  DividendsDocAccessFields_xdate_Update: DividendsDocAccessFields_Xdate_Update;
  DividendsFields: DividendsFields;
  DividendsFields_date: DividendsFields_Date;
  DividendsFields_date_Create: DividendsFields_Date_Create;
  DividendsFields_date_Delete: DividendsFields_Date_Delete;
  DividendsFields_date_Read: DividendsFields_Date_Read;
  DividendsFields_date_Update: DividendsFields_Date_Update;
  DividendsFields_dividend: DividendsFields_Dividend;
  DividendsFields_dividend_Create: DividendsFields_Dividend_Create;
  DividendsFields_dividend_Delete: DividendsFields_Dividend_Delete;
  DividendsFields_dividend_Read: DividendsFields_Dividend_Read;
  DividendsFields_dividend_Update: DividendsFields_Dividend_Update;
  DividendsFields_name: DividendsFields_Name;
  DividendsFields_name_Create: DividendsFields_Name_Create;
  DividendsFields_name_Delete: DividendsFields_Name_Delete;
  DividendsFields_name_Read: DividendsFields_Name_Read;
  DividendsFields_name_Update: DividendsFields_Name_Update;
  DividendsFields_quarter: DividendsFields_Quarter;
  DividendsFields_quarter_Create: DividendsFields_Quarter_Create;
  DividendsFields_quarter_Delete: DividendsFields_Quarter_Delete;
  DividendsFields_quarter_Read: DividendsFields_Quarter_Read;
  DividendsFields_quarter_Update: DividendsFields_Quarter_Update;
  DividendsFields_stock: DividendsFields_Stock;
  DividendsFields_stock_Create: DividendsFields_Stock_Create;
  DividendsFields_stock_Delete: DividendsFields_Stock_Delete;
  DividendsFields_stock_Read: DividendsFields_Stock_Read;
  DividendsFields_stock_Update: DividendsFields_Stock_Update;
  DividendsFields_xdate: DividendsFields_Xdate;
  DividendsFields_xdate_Create: DividendsFields_Xdate_Create;
  DividendsFields_xdate_Delete: DividendsFields_Xdate_Delete;
  DividendsFields_xdate_Read: DividendsFields_Xdate_Read;
  DividendsFields_xdate_Update: DividendsFields_Xdate_Update;
  DividendsReadAccess: DividendsReadAccess;
  DividendsReadDocAccess: DividendsReadDocAccess;
  DividendsUpdateAccess: DividendsUpdateAccess;
  DividendsUpdateDocAccess: DividendsUpdateDocAccess;
  EmailAddress: Scalars['EmailAddress'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Mutation: {};
  Preference: Preference;
  Query: {};
  Stock: Stock;
  Stock_DPR_operator: Stock_Dpr_Operator;
  Stock_HistoricPrices: Stock_HistoricPrices;
  Stock_ISIN_operator: Stock_Isin_Operator;
  Stock_PE_operator: Stock_Pe_Operator;
  Stock_capital_operator: Stock_Capital_Operator;
  Stock_createdAt_operator: Stock_CreatedAt_Operator;
  Stock_date_operator: Stock_Date_Operator;
  Stock_dividends_operator: Stock_Dividends_Operator;
  Stock_hebrewName_operator: Stock_HebrewName_Operator;
  Stock_historicPrices__id_operator: Stock_HistoricPrices__Id_Operator;
  Stock_id_operator: Stock_Id_Operator;
  Stock_issuerId_operator: Stock_IssuerId_Operator;
  Stock_latestPrice_operator: Stock_LatestPrice_Operator;
  Stock_name_operator: Stock_Name_Operator;
  Stock_price_operator: Stock_Price_Operator;
  Stock_securityId_operator: Stock_SecurityId_Operator;
  Stock_symbol_operator: Stock_Symbol_Operator;
  Stock_updatedAt_operator: Stock_UpdatedAt_Operator;
  Stock_users_operator: Stock_Users_Operator;
  Stock_where: Stock_Where;
  Stock_where_and: Stock_Where_And;
  Stock_where_or: Stock_Where_Or;
  Stocks: Stocks;
  StocksCreateAccess: StocksCreateAccess;
  StocksCreateDocAccess: StocksCreateDocAccess;
  StocksDeleteAccess: StocksDeleteAccess;
  StocksDeleteDocAccess: StocksDeleteDocAccess;
  StocksDocAccessFields: StocksDocAccessFields;
  StocksDocAccessFields_DPR: StocksDocAccessFields_Dpr;
  StocksDocAccessFields_DPR_Create: StocksDocAccessFields_Dpr_Create;
  StocksDocAccessFields_DPR_Delete: StocksDocAccessFields_Dpr_Delete;
  StocksDocAccessFields_DPR_Read: StocksDocAccessFields_Dpr_Read;
  StocksDocAccessFields_DPR_Update: StocksDocAccessFields_Dpr_Update;
  StocksDocAccessFields_ISIN: StocksDocAccessFields_Isin;
  StocksDocAccessFields_ISIN_Create: StocksDocAccessFields_Isin_Create;
  StocksDocAccessFields_ISIN_Delete: StocksDocAccessFields_Isin_Delete;
  StocksDocAccessFields_ISIN_Read: StocksDocAccessFields_Isin_Read;
  StocksDocAccessFields_ISIN_Update: StocksDocAccessFields_Isin_Update;
  StocksDocAccessFields_PE: StocksDocAccessFields_Pe;
  StocksDocAccessFields_PE_Create: StocksDocAccessFields_Pe_Create;
  StocksDocAccessFields_PE_Delete: StocksDocAccessFields_Pe_Delete;
  StocksDocAccessFields_PE_Read: StocksDocAccessFields_Pe_Read;
  StocksDocAccessFields_PE_Update: StocksDocAccessFields_Pe_Update;
  StocksDocAccessFields_capital: StocksDocAccessFields_Capital;
  StocksDocAccessFields_capital_Create: StocksDocAccessFields_Capital_Create;
  StocksDocAccessFields_capital_Delete: StocksDocAccessFields_Capital_Delete;
  StocksDocAccessFields_capital_Read: StocksDocAccessFields_Capital_Read;
  StocksDocAccessFields_capital_Update: StocksDocAccessFields_Capital_Update;
  StocksDocAccessFields_dividends: StocksDocAccessFields_Dividends;
  StocksDocAccessFields_dividends_Create: StocksDocAccessFields_Dividends_Create;
  StocksDocAccessFields_dividends_Delete: StocksDocAccessFields_Dividends_Delete;
  StocksDocAccessFields_dividends_Read: StocksDocAccessFields_Dividends_Read;
  StocksDocAccessFields_dividends_Update: StocksDocAccessFields_Dividends_Update;
  StocksDocAccessFields_hebrewName: StocksDocAccessFields_HebrewName;
  StocksDocAccessFields_hebrewName_Create: StocksDocAccessFields_HebrewName_Create;
  StocksDocAccessFields_hebrewName_Delete: StocksDocAccessFields_HebrewName_Delete;
  StocksDocAccessFields_hebrewName_Read: StocksDocAccessFields_HebrewName_Read;
  StocksDocAccessFields_hebrewName_Update: StocksDocAccessFields_HebrewName_Update;
  StocksDocAccessFields_historicPrices: StocksDocAccessFields_HistoricPrices;
  StocksDocAccessFields_historicPrices_Create: StocksDocAccessFields_HistoricPrices_Create;
  StocksDocAccessFields_historicPrices_Delete: StocksDocAccessFields_HistoricPrices_Delete;
  StocksDocAccessFields_historicPrices_Fields: StocksDocAccessFields_HistoricPrices_Fields;
  StocksDocAccessFields_historicPrices_Read: StocksDocAccessFields_HistoricPrices_Read;
  StocksDocAccessFields_historicPrices_Update: StocksDocAccessFields_HistoricPrices_Update;
  StocksDocAccessFields_historicPrices_date: StocksDocAccessFields_HistoricPrices_Date;
  StocksDocAccessFields_historicPrices_date_Create: StocksDocAccessFields_HistoricPrices_Date_Create;
  StocksDocAccessFields_historicPrices_date_Delete: StocksDocAccessFields_HistoricPrices_Date_Delete;
  StocksDocAccessFields_historicPrices_date_Read: StocksDocAccessFields_HistoricPrices_Date_Read;
  StocksDocAccessFields_historicPrices_date_Update: StocksDocAccessFields_HistoricPrices_Date_Update;
  StocksDocAccessFields_historicPrices_id: StocksDocAccessFields_HistoricPrices_Id;
  StocksDocAccessFields_historicPrices_id_Create: StocksDocAccessFields_HistoricPrices_Id_Create;
  StocksDocAccessFields_historicPrices_id_Delete: StocksDocAccessFields_HistoricPrices_Id_Delete;
  StocksDocAccessFields_historicPrices_id_Read: StocksDocAccessFields_HistoricPrices_Id_Read;
  StocksDocAccessFields_historicPrices_id_Update: StocksDocAccessFields_HistoricPrices_Id_Update;
  StocksDocAccessFields_historicPrices_price: StocksDocAccessFields_HistoricPrices_Price;
  StocksDocAccessFields_historicPrices_price_Create: StocksDocAccessFields_HistoricPrices_Price_Create;
  StocksDocAccessFields_historicPrices_price_Delete: StocksDocAccessFields_HistoricPrices_Price_Delete;
  StocksDocAccessFields_historicPrices_price_Read: StocksDocAccessFields_HistoricPrices_Price_Read;
  StocksDocAccessFields_historicPrices_price_Update: StocksDocAccessFields_HistoricPrices_Price_Update;
  StocksDocAccessFields_issuerId: StocksDocAccessFields_IssuerId;
  StocksDocAccessFields_issuerId_Create: StocksDocAccessFields_IssuerId_Create;
  StocksDocAccessFields_issuerId_Delete: StocksDocAccessFields_IssuerId_Delete;
  StocksDocAccessFields_issuerId_Read: StocksDocAccessFields_IssuerId_Read;
  StocksDocAccessFields_issuerId_Update: StocksDocAccessFields_IssuerId_Update;
  StocksDocAccessFields_latestPrice: StocksDocAccessFields_LatestPrice;
  StocksDocAccessFields_latestPrice_Create: StocksDocAccessFields_LatestPrice_Create;
  StocksDocAccessFields_latestPrice_Delete: StocksDocAccessFields_LatestPrice_Delete;
  StocksDocAccessFields_latestPrice_Read: StocksDocAccessFields_LatestPrice_Read;
  StocksDocAccessFields_latestPrice_Update: StocksDocAccessFields_LatestPrice_Update;
  StocksDocAccessFields_name: StocksDocAccessFields_Name;
  StocksDocAccessFields_name_Create: StocksDocAccessFields_Name_Create;
  StocksDocAccessFields_name_Delete: StocksDocAccessFields_Name_Delete;
  StocksDocAccessFields_name_Read: StocksDocAccessFields_Name_Read;
  StocksDocAccessFields_name_Update: StocksDocAccessFields_Name_Update;
  StocksDocAccessFields_securityId: StocksDocAccessFields_SecurityId;
  StocksDocAccessFields_securityId_Create: StocksDocAccessFields_SecurityId_Create;
  StocksDocAccessFields_securityId_Delete: StocksDocAccessFields_SecurityId_Delete;
  StocksDocAccessFields_securityId_Read: StocksDocAccessFields_SecurityId_Read;
  StocksDocAccessFields_securityId_Update: StocksDocAccessFields_SecurityId_Update;
  StocksDocAccessFields_symbol: StocksDocAccessFields_Symbol;
  StocksDocAccessFields_symbol_Create: StocksDocAccessFields_Symbol_Create;
  StocksDocAccessFields_symbol_Delete: StocksDocAccessFields_Symbol_Delete;
  StocksDocAccessFields_symbol_Read: StocksDocAccessFields_Symbol_Read;
  StocksDocAccessFields_symbol_Update: StocksDocAccessFields_Symbol_Update;
  StocksDocAccessFields_users: StocksDocAccessFields_Users;
  StocksDocAccessFields_users_Create: StocksDocAccessFields_Users_Create;
  StocksDocAccessFields_users_Delete: StocksDocAccessFields_Users_Delete;
  StocksDocAccessFields_users_Read: StocksDocAccessFields_Users_Read;
  StocksDocAccessFields_users_Update: StocksDocAccessFields_Users_Update;
  StocksFields: StocksFields;
  StocksFields_DPR: StocksFields_Dpr;
  StocksFields_DPR_Create: StocksFields_Dpr_Create;
  StocksFields_DPR_Delete: StocksFields_Dpr_Delete;
  StocksFields_DPR_Read: StocksFields_Dpr_Read;
  StocksFields_DPR_Update: StocksFields_Dpr_Update;
  StocksFields_ISIN: StocksFields_Isin;
  StocksFields_ISIN_Create: StocksFields_Isin_Create;
  StocksFields_ISIN_Delete: StocksFields_Isin_Delete;
  StocksFields_ISIN_Read: StocksFields_Isin_Read;
  StocksFields_ISIN_Update: StocksFields_Isin_Update;
  StocksFields_PE: StocksFields_Pe;
  StocksFields_PE_Create: StocksFields_Pe_Create;
  StocksFields_PE_Delete: StocksFields_Pe_Delete;
  StocksFields_PE_Read: StocksFields_Pe_Read;
  StocksFields_PE_Update: StocksFields_Pe_Update;
  StocksFields_capital: StocksFields_Capital;
  StocksFields_capital_Create: StocksFields_Capital_Create;
  StocksFields_capital_Delete: StocksFields_Capital_Delete;
  StocksFields_capital_Read: StocksFields_Capital_Read;
  StocksFields_capital_Update: StocksFields_Capital_Update;
  StocksFields_dividends: StocksFields_Dividends;
  StocksFields_dividends_Create: StocksFields_Dividends_Create;
  StocksFields_dividends_Delete: StocksFields_Dividends_Delete;
  StocksFields_dividends_Read: StocksFields_Dividends_Read;
  StocksFields_dividends_Update: StocksFields_Dividends_Update;
  StocksFields_hebrewName: StocksFields_HebrewName;
  StocksFields_hebrewName_Create: StocksFields_HebrewName_Create;
  StocksFields_hebrewName_Delete: StocksFields_HebrewName_Delete;
  StocksFields_hebrewName_Read: StocksFields_HebrewName_Read;
  StocksFields_hebrewName_Update: StocksFields_HebrewName_Update;
  StocksFields_historicPrices: StocksFields_HistoricPrices;
  StocksFields_historicPrices_Create: StocksFields_HistoricPrices_Create;
  StocksFields_historicPrices_Delete: StocksFields_HistoricPrices_Delete;
  StocksFields_historicPrices_Fields: StocksFields_HistoricPrices_Fields;
  StocksFields_historicPrices_Read: StocksFields_HistoricPrices_Read;
  StocksFields_historicPrices_Update: StocksFields_HistoricPrices_Update;
  StocksFields_historicPrices_date: StocksFields_HistoricPrices_Date;
  StocksFields_historicPrices_date_Create: StocksFields_HistoricPrices_Date_Create;
  StocksFields_historicPrices_date_Delete: StocksFields_HistoricPrices_Date_Delete;
  StocksFields_historicPrices_date_Read: StocksFields_HistoricPrices_Date_Read;
  StocksFields_historicPrices_date_Update: StocksFields_HistoricPrices_Date_Update;
  StocksFields_historicPrices_id: StocksFields_HistoricPrices_Id;
  StocksFields_historicPrices_id_Create: StocksFields_HistoricPrices_Id_Create;
  StocksFields_historicPrices_id_Delete: StocksFields_HistoricPrices_Id_Delete;
  StocksFields_historicPrices_id_Read: StocksFields_HistoricPrices_Id_Read;
  StocksFields_historicPrices_id_Update: StocksFields_HistoricPrices_Id_Update;
  StocksFields_historicPrices_price: StocksFields_HistoricPrices_Price;
  StocksFields_historicPrices_price_Create: StocksFields_HistoricPrices_Price_Create;
  StocksFields_historicPrices_price_Delete: StocksFields_HistoricPrices_Price_Delete;
  StocksFields_historicPrices_price_Read: StocksFields_HistoricPrices_Price_Read;
  StocksFields_historicPrices_price_Update: StocksFields_HistoricPrices_Price_Update;
  StocksFields_issuerId: StocksFields_IssuerId;
  StocksFields_issuerId_Create: StocksFields_IssuerId_Create;
  StocksFields_issuerId_Delete: StocksFields_IssuerId_Delete;
  StocksFields_issuerId_Read: StocksFields_IssuerId_Read;
  StocksFields_issuerId_Update: StocksFields_IssuerId_Update;
  StocksFields_latestPrice: StocksFields_LatestPrice;
  StocksFields_latestPrice_Create: StocksFields_LatestPrice_Create;
  StocksFields_latestPrice_Delete: StocksFields_LatestPrice_Delete;
  StocksFields_latestPrice_Read: StocksFields_LatestPrice_Read;
  StocksFields_latestPrice_Update: StocksFields_LatestPrice_Update;
  StocksFields_name: StocksFields_Name;
  StocksFields_name_Create: StocksFields_Name_Create;
  StocksFields_name_Delete: StocksFields_Name_Delete;
  StocksFields_name_Read: StocksFields_Name_Read;
  StocksFields_name_Update: StocksFields_Name_Update;
  StocksFields_securityId: StocksFields_SecurityId;
  StocksFields_securityId_Create: StocksFields_SecurityId_Create;
  StocksFields_securityId_Delete: StocksFields_SecurityId_Delete;
  StocksFields_securityId_Read: StocksFields_SecurityId_Read;
  StocksFields_securityId_Update: StocksFields_SecurityId_Update;
  StocksFields_symbol: StocksFields_Symbol;
  StocksFields_symbol_Create: StocksFields_Symbol_Create;
  StocksFields_symbol_Delete: StocksFields_Symbol_Delete;
  StocksFields_symbol_Read: StocksFields_Symbol_Read;
  StocksFields_symbol_Update: StocksFields_Symbol_Update;
  StocksFields_users: StocksFields_Users;
  StocksFields_users_Create: StocksFields_Users_Create;
  StocksFields_users_Delete: StocksFields_Users_Delete;
  StocksFields_users_Read: StocksFields_Users_Read;
  StocksFields_users_Update: StocksFields_Users_Update;
  StocksReadAccess: StocksReadAccess;
  StocksReadDocAccess: StocksReadDocAccess;
  StocksUpdateAccess: StocksUpdateAccess;
  StocksUpdateDocAccess: StocksUpdateDocAccess;
  User: User;
  User_Stocks: User_Stocks;
  User_Stocks_Dividends: User_Stocks_Dividends;
  User_Transactions: User_Transactions;
  User_accountId_operator: User_AccountId_Operator;
  User_balance_operator: User_Balance_Operator;
  User_birthday_operator: User_Birthday_Operator;
  User_createdAt_operator: User_CreatedAt_Operator;
  User_date_operator: User_Date_Operator;
  User_dividend_operator: User_Dividend_Operator;
  User_email_operator: User_Email_Operator;
  User_id_operator: User_Id_Operator;
  User_lastName_operator: User_LastName_Operator;
  User_portfolioValue_operator: User_PortfolioValue_Operator;
  User_price_operator: User_Price_Operator;
  User_quantity_operator: User_Quantity_Operator;
  User_roles_operator: User_Roles_Operator;
  User_stock_operator: User_Stock_Operator;
  User_stocks__dividends__id_operator: User_Stocks__Dividends__Id_Operator;
  User_stocks__id_operator: User_Stocks__Id_Operator;
  User_sum_operator: User_Sum_Operator;
  User_transactions__id_operator: User_Transactions__Id_Operator;
  User_transactions__status_operator: User_Transactions__Status_Operator;
  User_transactions__type_operator: User_Transactions__Type_Operator;
  User_updatedAt_operator: User_UpdatedAt_Operator;
  User_username_operator: User_Username_Operator;
  User_where: User_Where;
  User_where_and: User_Where_And;
  User_where_or: User_Where_Or;
  Users: Users;
  UsersCreateAccess: UsersCreateAccess;
  UsersCreateDocAccess: UsersCreateDocAccess;
  UsersDeleteAccess: UsersDeleteAccess;
  UsersDeleteDocAccess: UsersDeleteDocAccess;
  UsersDocAccessFields: UsersDocAccessFields;
  UsersDocAccessFields_accountId: UsersDocAccessFields_AccountId;
  UsersDocAccessFields_accountId_Create: UsersDocAccessFields_AccountId_Create;
  UsersDocAccessFields_accountId_Delete: UsersDocAccessFields_AccountId_Delete;
  UsersDocAccessFields_accountId_Read: UsersDocAccessFields_AccountId_Read;
  UsersDocAccessFields_accountId_Update: UsersDocAccessFields_AccountId_Update;
  UsersDocAccessFields_balance: UsersDocAccessFields_Balance;
  UsersDocAccessFields_balance_Create: UsersDocAccessFields_Balance_Create;
  UsersDocAccessFields_balance_Delete: UsersDocAccessFields_Balance_Delete;
  UsersDocAccessFields_balance_Read: UsersDocAccessFields_Balance_Read;
  UsersDocAccessFields_balance_Update: UsersDocAccessFields_Balance_Update;
  UsersDocAccessFields_birthday: UsersDocAccessFields_Birthday;
  UsersDocAccessFields_birthday_Create: UsersDocAccessFields_Birthday_Create;
  UsersDocAccessFields_birthday_Delete: UsersDocAccessFields_Birthday_Delete;
  UsersDocAccessFields_birthday_Read: UsersDocAccessFields_Birthday_Read;
  UsersDocAccessFields_birthday_Update: UsersDocAccessFields_Birthday_Update;
  UsersDocAccessFields_email: UsersDocAccessFields_Email;
  UsersDocAccessFields_email_Create: UsersDocAccessFields_Email_Create;
  UsersDocAccessFields_email_Delete: UsersDocAccessFields_Email_Delete;
  UsersDocAccessFields_email_Read: UsersDocAccessFields_Email_Read;
  UsersDocAccessFields_email_Update: UsersDocAccessFields_Email_Update;
  UsersDocAccessFields_lastName: UsersDocAccessFields_LastName;
  UsersDocAccessFields_lastName_Create: UsersDocAccessFields_LastName_Create;
  UsersDocAccessFields_lastName_Delete: UsersDocAccessFields_LastName_Delete;
  UsersDocAccessFields_lastName_Read: UsersDocAccessFields_LastName_Read;
  UsersDocAccessFields_lastName_Update: UsersDocAccessFields_LastName_Update;
  UsersDocAccessFields_password: UsersDocAccessFields_Password;
  UsersDocAccessFields_password_Create: UsersDocAccessFields_Password_Create;
  UsersDocAccessFields_password_Delete: UsersDocAccessFields_Password_Delete;
  UsersDocAccessFields_password_Read: UsersDocAccessFields_Password_Read;
  UsersDocAccessFields_password_Update: UsersDocAccessFields_Password_Update;
  UsersDocAccessFields_portfolioValue: UsersDocAccessFields_PortfolioValue;
  UsersDocAccessFields_portfolioValue_Create: UsersDocAccessFields_PortfolioValue_Create;
  UsersDocAccessFields_portfolioValue_Delete: UsersDocAccessFields_PortfolioValue_Delete;
  UsersDocAccessFields_portfolioValue_Read: UsersDocAccessFields_PortfolioValue_Read;
  UsersDocAccessFields_portfolioValue_Update: UsersDocAccessFields_PortfolioValue_Update;
  UsersDocAccessFields_roles: UsersDocAccessFields_Roles;
  UsersDocAccessFields_roles_Create: UsersDocAccessFields_Roles_Create;
  UsersDocAccessFields_roles_Delete: UsersDocAccessFields_Roles_Delete;
  UsersDocAccessFields_roles_Read: UsersDocAccessFields_Roles_Read;
  UsersDocAccessFields_roles_Update: UsersDocAccessFields_Roles_Update;
  UsersDocAccessFields_stocks: UsersDocAccessFields_Stocks;
  UsersDocAccessFields_stocks_Create: UsersDocAccessFields_Stocks_Create;
  UsersDocAccessFields_stocks_Delete: UsersDocAccessFields_Stocks_Delete;
  UsersDocAccessFields_stocks_Fields: UsersDocAccessFields_Stocks_Fields;
  UsersDocAccessFields_stocks_Read: UsersDocAccessFields_Stocks_Read;
  UsersDocAccessFields_stocks_Update: UsersDocAccessFields_Stocks_Update;
  UsersDocAccessFields_stocks_dividends: UsersDocAccessFields_Stocks_Dividends;
  UsersDocAccessFields_stocks_dividends_Create: UsersDocAccessFields_Stocks_Dividends_Create;
  UsersDocAccessFields_stocks_dividends_Delete: UsersDocAccessFields_Stocks_Dividends_Delete;
  UsersDocAccessFields_stocks_dividends_Fields: UsersDocAccessFields_Stocks_Dividends_Fields;
  UsersDocAccessFields_stocks_dividends_Read: UsersDocAccessFields_Stocks_Dividends_Read;
  UsersDocAccessFields_stocks_dividends_Update: UsersDocAccessFields_Stocks_Dividends_Update;
  UsersDocAccessFields_stocks_dividends_dividend: UsersDocAccessFields_Stocks_Dividends_Dividend;
  UsersDocAccessFields_stocks_dividends_dividend_Create: UsersDocAccessFields_Stocks_Dividends_Dividend_Create;
  UsersDocAccessFields_stocks_dividends_dividend_Delete: UsersDocAccessFields_Stocks_Dividends_Dividend_Delete;
  UsersDocAccessFields_stocks_dividends_dividend_Read: UsersDocAccessFields_Stocks_Dividends_Dividend_Read;
  UsersDocAccessFields_stocks_dividends_dividend_Update: UsersDocAccessFields_Stocks_Dividends_Dividend_Update;
  UsersDocAccessFields_stocks_dividends_id: UsersDocAccessFields_Stocks_Dividends_Id;
  UsersDocAccessFields_stocks_dividends_id_Create: UsersDocAccessFields_Stocks_Dividends_Id_Create;
  UsersDocAccessFields_stocks_dividends_id_Delete: UsersDocAccessFields_Stocks_Dividends_Id_Delete;
  UsersDocAccessFields_stocks_dividends_id_Read: UsersDocAccessFields_Stocks_Dividends_Id_Read;
  UsersDocAccessFields_stocks_dividends_id_Update: UsersDocAccessFields_Stocks_Dividends_Id_Update;
  UsersDocAccessFields_stocks_dividends_quantity: UsersDocAccessFields_Stocks_Dividends_Quantity;
  UsersDocAccessFields_stocks_dividends_quantity_Create: UsersDocAccessFields_Stocks_Dividends_Quantity_Create;
  UsersDocAccessFields_stocks_dividends_quantity_Delete: UsersDocAccessFields_Stocks_Dividends_Quantity_Delete;
  UsersDocAccessFields_stocks_dividends_quantity_Read: UsersDocAccessFields_Stocks_Dividends_Quantity_Read;
  UsersDocAccessFields_stocks_dividends_quantity_Update: UsersDocAccessFields_Stocks_Dividends_Quantity_Update;
  UsersDocAccessFields_stocks_id: UsersDocAccessFields_Stocks_Id;
  UsersDocAccessFields_stocks_id_Create: UsersDocAccessFields_Stocks_Id_Create;
  UsersDocAccessFields_stocks_id_Delete: UsersDocAccessFields_Stocks_Id_Delete;
  UsersDocAccessFields_stocks_id_Read: UsersDocAccessFields_Stocks_Id_Read;
  UsersDocAccessFields_stocks_id_Update: UsersDocAccessFields_Stocks_Id_Update;
  UsersDocAccessFields_stocks_quantity: UsersDocAccessFields_Stocks_Quantity;
  UsersDocAccessFields_stocks_quantity_Create: UsersDocAccessFields_Stocks_Quantity_Create;
  UsersDocAccessFields_stocks_quantity_Delete: UsersDocAccessFields_Stocks_Quantity_Delete;
  UsersDocAccessFields_stocks_quantity_Read: UsersDocAccessFields_Stocks_Quantity_Read;
  UsersDocAccessFields_stocks_quantity_Update: UsersDocAccessFields_Stocks_Quantity_Update;
  UsersDocAccessFields_stocks_stock: UsersDocAccessFields_Stocks_Stock;
  UsersDocAccessFields_stocks_stock_Create: UsersDocAccessFields_Stocks_Stock_Create;
  UsersDocAccessFields_stocks_stock_Delete: UsersDocAccessFields_Stocks_Stock_Delete;
  UsersDocAccessFields_stocks_stock_Read: UsersDocAccessFields_Stocks_Stock_Read;
  UsersDocAccessFields_stocks_stock_Update: UsersDocAccessFields_Stocks_Stock_Update;
  UsersDocAccessFields_transactions: UsersDocAccessFields_Transactions;
  UsersDocAccessFields_transactions_Create: UsersDocAccessFields_Transactions_Create;
  UsersDocAccessFields_transactions_Delete: UsersDocAccessFields_Transactions_Delete;
  UsersDocAccessFields_transactions_Fields: UsersDocAccessFields_Transactions_Fields;
  UsersDocAccessFields_transactions_Read: UsersDocAccessFields_Transactions_Read;
  UsersDocAccessFields_transactions_Update: UsersDocAccessFields_Transactions_Update;
  UsersDocAccessFields_transactions_date: UsersDocAccessFields_Transactions_Date;
  UsersDocAccessFields_transactions_date_Create: UsersDocAccessFields_Transactions_Date_Create;
  UsersDocAccessFields_transactions_date_Delete: UsersDocAccessFields_Transactions_Date_Delete;
  UsersDocAccessFields_transactions_date_Read: UsersDocAccessFields_Transactions_Date_Read;
  UsersDocAccessFields_transactions_date_Update: UsersDocAccessFields_Transactions_Date_Update;
  UsersDocAccessFields_transactions_id: UsersDocAccessFields_Transactions_Id;
  UsersDocAccessFields_transactions_id_Create: UsersDocAccessFields_Transactions_Id_Create;
  UsersDocAccessFields_transactions_id_Delete: UsersDocAccessFields_Transactions_Id_Delete;
  UsersDocAccessFields_transactions_id_Read: UsersDocAccessFields_Transactions_Id_Read;
  UsersDocAccessFields_transactions_id_Update: UsersDocAccessFields_Transactions_Id_Update;
  UsersDocAccessFields_transactions_price: UsersDocAccessFields_Transactions_Price;
  UsersDocAccessFields_transactions_price_Create: UsersDocAccessFields_Transactions_Price_Create;
  UsersDocAccessFields_transactions_price_Delete: UsersDocAccessFields_Transactions_Price_Delete;
  UsersDocAccessFields_transactions_price_Read: UsersDocAccessFields_Transactions_Price_Read;
  UsersDocAccessFields_transactions_price_Update: UsersDocAccessFields_Transactions_Price_Update;
  UsersDocAccessFields_transactions_quantity: UsersDocAccessFields_Transactions_Quantity;
  UsersDocAccessFields_transactions_quantity_Create: UsersDocAccessFields_Transactions_Quantity_Create;
  UsersDocAccessFields_transactions_quantity_Delete: UsersDocAccessFields_Transactions_Quantity_Delete;
  UsersDocAccessFields_transactions_quantity_Read: UsersDocAccessFields_Transactions_Quantity_Read;
  UsersDocAccessFields_transactions_quantity_Update: UsersDocAccessFields_Transactions_Quantity_Update;
  UsersDocAccessFields_transactions_status: UsersDocAccessFields_Transactions_Status;
  UsersDocAccessFields_transactions_status_Create: UsersDocAccessFields_Transactions_Status_Create;
  UsersDocAccessFields_transactions_status_Delete: UsersDocAccessFields_Transactions_Status_Delete;
  UsersDocAccessFields_transactions_status_Read: UsersDocAccessFields_Transactions_Status_Read;
  UsersDocAccessFields_transactions_status_Update: UsersDocAccessFields_Transactions_Status_Update;
  UsersDocAccessFields_transactions_stock: UsersDocAccessFields_Transactions_Stock;
  UsersDocAccessFields_transactions_stock_Create: UsersDocAccessFields_Transactions_Stock_Create;
  UsersDocAccessFields_transactions_stock_Delete: UsersDocAccessFields_Transactions_Stock_Delete;
  UsersDocAccessFields_transactions_stock_Read: UsersDocAccessFields_Transactions_Stock_Read;
  UsersDocAccessFields_transactions_stock_Update: UsersDocAccessFields_Transactions_Stock_Update;
  UsersDocAccessFields_transactions_sum: UsersDocAccessFields_Transactions_Sum;
  UsersDocAccessFields_transactions_sum_Create: UsersDocAccessFields_Transactions_Sum_Create;
  UsersDocAccessFields_transactions_sum_Delete: UsersDocAccessFields_Transactions_Sum_Delete;
  UsersDocAccessFields_transactions_sum_Read: UsersDocAccessFields_Transactions_Sum_Read;
  UsersDocAccessFields_transactions_sum_Update: UsersDocAccessFields_Transactions_Sum_Update;
  UsersDocAccessFields_transactions_type: UsersDocAccessFields_Transactions_Type;
  UsersDocAccessFields_transactions_type_Create: UsersDocAccessFields_Transactions_Type_Create;
  UsersDocAccessFields_transactions_type_Delete: UsersDocAccessFields_Transactions_Type_Delete;
  UsersDocAccessFields_transactions_type_Read: UsersDocAccessFields_Transactions_Type_Read;
  UsersDocAccessFields_transactions_type_Update: UsersDocAccessFields_Transactions_Type_Update;
  UsersDocAccessFields_username: UsersDocAccessFields_Username;
  UsersDocAccessFields_username_Create: UsersDocAccessFields_Username_Create;
  UsersDocAccessFields_username_Delete: UsersDocAccessFields_Username_Delete;
  UsersDocAccessFields_username_Read: UsersDocAccessFields_Username_Read;
  UsersDocAccessFields_username_Update: UsersDocAccessFields_Username_Update;
  UsersFields: UsersFields;
  UsersFields_accountId: UsersFields_AccountId;
  UsersFields_accountId_Create: UsersFields_AccountId_Create;
  UsersFields_accountId_Delete: UsersFields_AccountId_Delete;
  UsersFields_accountId_Read: UsersFields_AccountId_Read;
  UsersFields_accountId_Update: UsersFields_AccountId_Update;
  UsersFields_balance: UsersFields_Balance;
  UsersFields_balance_Create: UsersFields_Balance_Create;
  UsersFields_balance_Delete: UsersFields_Balance_Delete;
  UsersFields_balance_Read: UsersFields_Balance_Read;
  UsersFields_balance_Update: UsersFields_Balance_Update;
  UsersFields_birthday: UsersFields_Birthday;
  UsersFields_birthday_Create: UsersFields_Birthday_Create;
  UsersFields_birthday_Delete: UsersFields_Birthday_Delete;
  UsersFields_birthday_Read: UsersFields_Birthday_Read;
  UsersFields_birthday_Update: UsersFields_Birthday_Update;
  UsersFields_email: UsersFields_Email;
  UsersFields_email_Create: UsersFields_Email_Create;
  UsersFields_email_Delete: UsersFields_Email_Delete;
  UsersFields_email_Read: UsersFields_Email_Read;
  UsersFields_email_Update: UsersFields_Email_Update;
  UsersFields_lastName: UsersFields_LastName;
  UsersFields_lastName_Create: UsersFields_LastName_Create;
  UsersFields_lastName_Delete: UsersFields_LastName_Delete;
  UsersFields_lastName_Read: UsersFields_LastName_Read;
  UsersFields_lastName_Update: UsersFields_LastName_Update;
  UsersFields_password: UsersFields_Password;
  UsersFields_password_Create: UsersFields_Password_Create;
  UsersFields_password_Delete: UsersFields_Password_Delete;
  UsersFields_password_Read: UsersFields_Password_Read;
  UsersFields_password_Update: UsersFields_Password_Update;
  UsersFields_portfolioValue: UsersFields_PortfolioValue;
  UsersFields_portfolioValue_Create: UsersFields_PortfolioValue_Create;
  UsersFields_portfolioValue_Delete: UsersFields_PortfolioValue_Delete;
  UsersFields_portfolioValue_Read: UsersFields_PortfolioValue_Read;
  UsersFields_portfolioValue_Update: UsersFields_PortfolioValue_Update;
  UsersFields_roles: UsersFields_Roles;
  UsersFields_roles_Create: UsersFields_Roles_Create;
  UsersFields_roles_Delete: UsersFields_Roles_Delete;
  UsersFields_roles_Read: UsersFields_Roles_Read;
  UsersFields_roles_Update: UsersFields_Roles_Update;
  UsersFields_stocks: UsersFields_Stocks;
  UsersFields_stocks_Create: UsersFields_Stocks_Create;
  UsersFields_stocks_Delete: UsersFields_Stocks_Delete;
  UsersFields_stocks_Fields: UsersFields_Stocks_Fields;
  UsersFields_stocks_Read: UsersFields_Stocks_Read;
  UsersFields_stocks_Update: UsersFields_Stocks_Update;
  UsersFields_stocks_dividends: UsersFields_Stocks_Dividends;
  UsersFields_stocks_dividends_Create: UsersFields_Stocks_Dividends_Create;
  UsersFields_stocks_dividends_Delete: UsersFields_Stocks_Dividends_Delete;
  UsersFields_stocks_dividends_Fields: UsersFields_Stocks_Dividends_Fields;
  UsersFields_stocks_dividends_Read: UsersFields_Stocks_Dividends_Read;
  UsersFields_stocks_dividends_Update: UsersFields_Stocks_Dividends_Update;
  UsersFields_stocks_dividends_dividend: UsersFields_Stocks_Dividends_Dividend;
  UsersFields_stocks_dividends_dividend_Create: UsersFields_Stocks_Dividends_Dividend_Create;
  UsersFields_stocks_dividends_dividend_Delete: UsersFields_Stocks_Dividends_Dividend_Delete;
  UsersFields_stocks_dividends_dividend_Read: UsersFields_Stocks_Dividends_Dividend_Read;
  UsersFields_stocks_dividends_dividend_Update: UsersFields_Stocks_Dividends_Dividend_Update;
  UsersFields_stocks_dividends_id: UsersFields_Stocks_Dividends_Id;
  UsersFields_stocks_dividends_id_Create: UsersFields_Stocks_Dividends_Id_Create;
  UsersFields_stocks_dividends_id_Delete: UsersFields_Stocks_Dividends_Id_Delete;
  UsersFields_stocks_dividends_id_Read: UsersFields_Stocks_Dividends_Id_Read;
  UsersFields_stocks_dividends_id_Update: UsersFields_Stocks_Dividends_Id_Update;
  UsersFields_stocks_dividends_quantity: UsersFields_Stocks_Dividends_Quantity;
  UsersFields_stocks_dividends_quantity_Create: UsersFields_Stocks_Dividends_Quantity_Create;
  UsersFields_stocks_dividends_quantity_Delete: UsersFields_Stocks_Dividends_Quantity_Delete;
  UsersFields_stocks_dividends_quantity_Read: UsersFields_Stocks_Dividends_Quantity_Read;
  UsersFields_stocks_dividends_quantity_Update: UsersFields_Stocks_Dividends_Quantity_Update;
  UsersFields_stocks_id: UsersFields_Stocks_Id;
  UsersFields_stocks_id_Create: UsersFields_Stocks_Id_Create;
  UsersFields_stocks_id_Delete: UsersFields_Stocks_Id_Delete;
  UsersFields_stocks_id_Read: UsersFields_Stocks_Id_Read;
  UsersFields_stocks_id_Update: UsersFields_Stocks_Id_Update;
  UsersFields_stocks_quantity: UsersFields_Stocks_Quantity;
  UsersFields_stocks_quantity_Create: UsersFields_Stocks_Quantity_Create;
  UsersFields_stocks_quantity_Delete: UsersFields_Stocks_Quantity_Delete;
  UsersFields_stocks_quantity_Read: UsersFields_Stocks_Quantity_Read;
  UsersFields_stocks_quantity_Update: UsersFields_Stocks_Quantity_Update;
  UsersFields_stocks_stock: UsersFields_Stocks_Stock;
  UsersFields_stocks_stock_Create: UsersFields_Stocks_Stock_Create;
  UsersFields_stocks_stock_Delete: UsersFields_Stocks_Stock_Delete;
  UsersFields_stocks_stock_Read: UsersFields_Stocks_Stock_Read;
  UsersFields_stocks_stock_Update: UsersFields_Stocks_Stock_Update;
  UsersFields_transactions: UsersFields_Transactions;
  UsersFields_transactions_Create: UsersFields_Transactions_Create;
  UsersFields_transactions_Delete: UsersFields_Transactions_Delete;
  UsersFields_transactions_Fields: UsersFields_Transactions_Fields;
  UsersFields_transactions_Read: UsersFields_Transactions_Read;
  UsersFields_transactions_Update: UsersFields_Transactions_Update;
  UsersFields_transactions_date: UsersFields_Transactions_Date;
  UsersFields_transactions_date_Create: UsersFields_Transactions_Date_Create;
  UsersFields_transactions_date_Delete: UsersFields_Transactions_Date_Delete;
  UsersFields_transactions_date_Read: UsersFields_Transactions_Date_Read;
  UsersFields_transactions_date_Update: UsersFields_Transactions_Date_Update;
  UsersFields_transactions_id: UsersFields_Transactions_Id;
  UsersFields_transactions_id_Create: UsersFields_Transactions_Id_Create;
  UsersFields_transactions_id_Delete: UsersFields_Transactions_Id_Delete;
  UsersFields_transactions_id_Read: UsersFields_Transactions_Id_Read;
  UsersFields_transactions_id_Update: UsersFields_Transactions_Id_Update;
  UsersFields_transactions_price: UsersFields_Transactions_Price;
  UsersFields_transactions_price_Create: UsersFields_Transactions_Price_Create;
  UsersFields_transactions_price_Delete: UsersFields_Transactions_Price_Delete;
  UsersFields_transactions_price_Read: UsersFields_Transactions_Price_Read;
  UsersFields_transactions_price_Update: UsersFields_Transactions_Price_Update;
  UsersFields_transactions_quantity: UsersFields_Transactions_Quantity;
  UsersFields_transactions_quantity_Create: UsersFields_Transactions_Quantity_Create;
  UsersFields_transactions_quantity_Delete: UsersFields_Transactions_Quantity_Delete;
  UsersFields_transactions_quantity_Read: UsersFields_Transactions_Quantity_Read;
  UsersFields_transactions_quantity_Update: UsersFields_Transactions_Quantity_Update;
  UsersFields_transactions_status: UsersFields_Transactions_Status;
  UsersFields_transactions_status_Create: UsersFields_Transactions_Status_Create;
  UsersFields_transactions_status_Delete: UsersFields_Transactions_Status_Delete;
  UsersFields_transactions_status_Read: UsersFields_Transactions_Status_Read;
  UsersFields_transactions_status_Update: UsersFields_Transactions_Status_Update;
  UsersFields_transactions_stock: UsersFields_Transactions_Stock;
  UsersFields_transactions_stock_Create: UsersFields_Transactions_Stock_Create;
  UsersFields_transactions_stock_Delete: UsersFields_Transactions_Stock_Delete;
  UsersFields_transactions_stock_Read: UsersFields_Transactions_Stock_Read;
  UsersFields_transactions_stock_Update: UsersFields_Transactions_Stock_Update;
  UsersFields_transactions_sum: UsersFields_Transactions_Sum;
  UsersFields_transactions_sum_Create: UsersFields_Transactions_Sum_Create;
  UsersFields_transactions_sum_Delete: UsersFields_Transactions_Sum_Delete;
  UsersFields_transactions_sum_Read: UsersFields_Transactions_Sum_Read;
  UsersFields_transactions_sum_Update: UsersFields_Transactions_Sum_Update;
  UsersFields_transactions_type: UsersFields_Transactions_Type;
  UsersFields_transactions_type_Create: UsersFields_Transactions_Type_Create;
  UsersFields_transactions_type_Delete: UsersFields_Transactions_Type_Delete;
  UsersFields_transactions_type_Read: UsersFields_Transactions_Type_Read;
  UsersFields_transactions_type_Update: UsersFields_Transactions_Type_Update;
  UsersFields_username: UsersFields_Username;
  UsersFields_username_Create: UsersFields_Username_Create;
  UsersFields_username_Delete: UsersFields_Username_Delete;
  UsersFields_username_Read: UsersFields_Username_Read;
  UsersFields_username_Update: UsersFields_Username_Update;
  UsersReadAccess: UsersReadAccess;
  UsersReadDocAccess: UsersReadDocAccess;
  UsersUnlockAccess: UsersUnlockAccess;
  UsersUnlockDocAccess: UsersUnlockDocAccess;
  UsersUpdateAccess: UsersUpdateAccess;
  UsersUpdateDocAccess: UsersUpdateDocAccess;
  dividendsAccess: DividendsAccess;
  dividendsDocAccess: DividendsDocAccess;
  mutationDividendInput: MutationDividendInput;
  mutationDividendUpdateInput: MutationDividendUpdateInput;
  mutationStockInput: MutationStockInput;
  mutationStockUpdateInput: MutationStockUpdateInput;
  mutationStockUpdate_HistoricPricesInput: MutationStockUpdate_HistoricPricesInput;
  mutationStock_HistoricPricesInput: MutationStock_HistoricPricesInput;
  mutationUserInput: MutationUserInput;
  mutationUserUpdateInput: MutationUserUpdateInput;
  mutationUserUpdate_StocksInput: MutationUserUpdate_StocksInput;
  mutationUserUpdate_Stocks_DividendsInput: MutationUserUpdate_Stocks_DividendsInput;
  mutationUserUpdate_TransactionsInput: MutationUserUpdate_TransactionsInput;
  mutationUser_StocksInput: MutationUser_StocksInput;
  mutationUser_Stocks_DividendsInput: MutationUser_Stocks_DividendsInput;
  mutationUser_TransactionsInput: MutationUser_TransactionsInput;
  stocksAccess: StocksAccess;
  stocksDocAccess: StocksDocAccess;
  usersAccess: UsersAccess;
  usersDocAccess: UsersDocAccess;
  usersJWT: UsersJwt;
  usersLoginResult: UsersLoginResult;
  usersMe: UsersMe;
  usersRefreshedUser: UsersRefreshedUser;
  usersResetPassword: UsersResetPassword;
};

export type AccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['Access'] = ResolversParentTypes['Access']> = {
  canAccessAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dividends?: Resolver<Maybe<ResolversTypes['dividendsAccess']>, ParentType, ContextType>;
  stocks?: Resolver<Maybe<ResolversTypes['stocksAccess']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['usersAccess']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DividendResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dividend'] = ResolversParentTypes['Dividend']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  dividend?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quarter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock?: Resolver<ResolversTypes['Stock'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  xdate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dividends'] = ResolversParentTypes['Dividends']> = {
  docs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dividend']>>>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPrevPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nextPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pagingCounter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prevPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalDocs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsCreateAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsCreateAccess'] = ResolversParentTypes['DividendsCreateAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsCreateDocAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsCreateDocAccess'] = ResolversParentTypes['DividendsCreateDocAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDeleteAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDeleteAccess'] = ResolversParentTypes['DividendsDeleteAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDeleteDocAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDeleteDocAccess'] = ResolversParentTypes['DividendsDeleteDocAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields'] = ResolversParentTypes['DividendsDocAccessFields']> = {
  date?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_date']>, ParentType, ContextType>;
  dividend?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_dividend']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_name']>, ParentType, ContextType>;
  quarter?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_quarter']>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_stock']>, ParentType, ContextType>;
  xdate?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_xdate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_DateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_date'] = ResolversParentTypes['DividendsDocAccessFields_date']> = {
  create?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_date_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_date_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_date_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_date_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Date_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_date_Create'] = ResolversParentTypes['DividendsDocAccessFields_date_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Date_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_date_Delete'] = ResolversParentTypes['DividendsDocAccessFields_date_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Date_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_date_Read'] = ResolversParentTypes['DividendsDocAccessFields_date_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Date_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_date_Update'] = ResolversParentTypes['DividendsDocAccessFields_date_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_DividendResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_dividend'] = ResolversParentTypes['DividendsDocAccessFields_dividend']> = {
  create?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_dividend_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_dividend_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_dividend_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_dividend_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Dividend_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_dividend_Create'] = ResolversParentTypes['DividendsDocAccessFields_dividend_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Dividend_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_dividend_Delete'] = ResolversParentTypes['DividendsDocAccessFields_dividend_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Dividend_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_dividend_Read'] = ResolversParentTypes['DividendsDocAccessFields_dividend_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Dividend_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_dividend_Update'] = ResolversParentTypes['DividendsDocAccessFields_dividend_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_NameResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_name'] = ResolversParentTypes['DividendsDocAccessFields_name']> = {
  create?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_name_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_name_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_name_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_name_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Name_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_name_Create'] = ResolversParentTypes['DividendsDocAccessFields_name_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Name_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_name_Delete'] = ResolversParentTypes['DividendsDocAccessFields_name_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Name_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_name_Read'] = ResolversParentTypes['DividendsDocAccessFields_name_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Name_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_name_Update'] = ResolversParentTypes['DividendsDocAccessFields_name_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_QuarterResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_quarter'] = ResolversParentTypes['DividendsDocAccessFields_quarter']> = {
  create?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_quarter_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_quarter_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_quarter_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_quarter_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Quarter_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_quarter_Create'] = ResolversParentTypes['DividendsDocAccessFields_quarter_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Quarter_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_quarter_Delete'] = ResolversParentTypes['DividendsDocAccessFields_quarter_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Quarter_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_quarter_Read'] = ResolversParentTypes['DividendsDocAccessFields_quarter_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Quarter_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_quarter_Update'] = ResolversParentTypes['DividendsDocAccessFields_quarter_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_StockResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_stock'] = ResolversParentTypes['DividendsDocAccessFields_stock']> = {
  create?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_stock_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_stock_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_stock_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_stock_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Stock_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_stock_Create'] = ResolversParentTypes['DividendsDocAccessFields_stock_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Stock_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_stock_Delete'] = ResolversParentTypes['DividendsDocAccessFields_stock_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Stock_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_stock_Read'] = ResolversParentTypes['DividendsDocAccessFields_stock_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Stock_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_stock_Update'] = ResolversParentTypes['DividendsDocAccessFields_stock_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_XdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_xdate'] = ResolversParentTypes['DividendsDocAccessFields_xdate']> = {
  create?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_xdate_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_xdate_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_xdate_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields_xdate_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Xdate_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_xdate_Create'] = ResolversParentTypes['DividendsDocAccessFields_xdate_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Xdate_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_xdate_Delete'] = ResolversParentTypes['DividendsDocAccessFields_xdate_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Xdate_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_xdate_Read'] = ResolversParentTypes['DividendsDocAccessFields_xdate_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessFields_Xdate_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsDocAccessFields_xdate_Update'] = ResolversParentTypes['DividendsDocAccessFields_xdate_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields'] = ResolversParentTypes['DividendsFields']> = {
  date?: Resolver<Maybe<ResolversTypes['DividendsFields_date']>, ParentType, ContextType>;
  dividend?: Resolver<Maybe<ResolversTypes['DividendsFields_dividend']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['DividendsFields_name']>, ParentType, ContextType>;
  quarter?: Resolver<Maybe<ResolversTypes['DividendsFields_quarter']>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['DividendsFields_stock']>, ParentType, ContextType>;
  xdate?: Resolver<Maybe<ResolversTypes['DividendsFields_xdate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_DateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_date'] = ResolversParentTypes['DividendsFields_date']> = {
  create?: Resolver<Maybe<ResolversTypes['DividendsFields_date_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['DividendsFields_date_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['DividendsFields_date_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['DividendsFields_date_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Date_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_date_Create'] = ResolversParentTypes['DividendsFields_date_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Date_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_date_Delete'] = ResolversParentTypes['DividendsFields_date_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Date_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_date_Read'] = ResolversParentTypes['DividendsFields_date_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Date_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_date_Update'] = ResolversParentTypes['DividendsFields_date_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_DividendResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_dividend'] = ResolversParentTypes['DividendsFields_dividend']> = {
  create?: Resolver<Maybe<ResolversTypes['DividendsFields_dividend_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['DividendsFields_dividend_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['DividendsFields_dividend_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['DividendsFields_dividend_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Dividend_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_dividend_Create'] = ResolversParentTypes['DividendsFields_dividend_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Dividend_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_dividend_Delete'] = ResolversParentTypes['DividendsFields_dividend_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Dividend_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_dividend_Read'] = ResolversParentTypes['DividendsFields_dividend_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Dividend_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_dividend_Update'] = ResolversParentTypes['DividendsFields_dividend_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_NameResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_name'] = ResolversParentTypes['DividendsFields_name']> = {
  create?: Resolver<Maybe<ResolversTypes['DividendsFields_name_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['DividendsFields_name_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['DividendsFields_name_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['DividendsFields_name_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Name_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_name_Create'] = ResolversParentTypes['DividendsFields_name_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Name_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_name_Delete'] = ResolversParentTypes['DividendsFields_name_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Name_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_name_Read'] = ResolversParentTypes['DividendsFields_name_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Name_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_name_Update'] = ResolversParentTypes['DividendsFields_name_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_QuarterResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_quarter'] = ResolversParentTypes['DividendsFields_quarter']> = {
  create?: Resolver<Maybe<ResolversTypes['DividendsFields_quarter_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['DividendsFields_quarter_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['DividendsFields_quarter_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['DividendsFields_quarter_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Quarter_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_quarter_Create'] = ResolversParentTypes['DividendsFields_quarter_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Quarter_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_quarter_Delete'] = ResolversParentTypes['DividendsFields_quarter_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Quarter_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_quarter_Read'] = ResolversParentTypes['DividendsFields_quarter_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Quarter_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_quarter_Update'] = ResolversParentTypes['DividendsFields_quarter_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_StockResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_stock'] = ResolversParentTypes['DividendsFields_stock']> = {
  create?: Resolver<Maybe<ResolversTypes['DividendsFields_stock_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['DividendsFields_stock_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['DividendsFields_stock_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['DividendsFields_stock_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Stock_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_stock_Create'] = ResolversParentTypes['DividendsFields_stock_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Stock_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_stock_Delete'] = ResolversParentTypes['DividendsFields_stock_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Stock_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_stock_Read'] = ResolversParentTypes['DividendsFields_stock_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Stock_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_stock_Update'] = ResolversParentTypes['DividendsFields_stock_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_XdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_xdate'] = ResolversParentTypes['DividendsFields_xdate']> = {
  create?: Resolver<Maybe<ResolversTypes['DividendsFields_xdate_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['DividendsFields_xdate_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['DividendsFields_xdate_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['DividendsFields_xdate_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Xdate_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_xdate_Create'] = ResolversParentTypes['DividendsFields_xdate_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Xdate_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_xdate_Delete'] = ResolversParentTypes['DividendsFields_xdate_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Xdate_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_xdate_Read'] = ResolversParentTypes['DividendsFields_xdate_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsFields_Xdate_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsFields_xdate_Update'] = ResolversParentTypes['DividendsFields_xdate_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsReadAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsReadAccess'] = ResolversParentTypes['DividendsReadAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsReadDocAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsReadDocAccess'] = ResolversParentTypes['DividendsReadDocAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsUpdateAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsUpdateAccess'] = ResolversParentTypes['DividendsUpdateAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsUpdateDocAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['DividendsUpdateDocAccess'] = ResolversParentTypes['DividendsUpdateDocAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createDividend?: Resolver<Maybe<ResolversTypes['Dividend']>, ParentType, ContextType, RequireFields<MutationCreateDividendArgs, 'data'>>;
  createStock?: Resolver<Maybe<ResolversTypes['Stock']>, ParentType, ContextType, RequireFields<MutationCreateStockArgs, 'data'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'data'>>;
  deleteDividend?: Resolver<Maybe<ResolversTypes['Dividend']>, ParentType, ContextType, RequireFields<MutationDeleteDividendArgs, 'id'>>;
  deletePreference?: Resolver<Maybe<ResolversTypes['Preference']>, ParentType, ContextType, RequireFields<MutationDeletePreferenceArgs, 'key'>>;
  deleteStock?: Resolver<Maybe<ResolversTypes['Stock']>, ParentType, ContextType, RequireFields<MutationDeleteStockArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  forgotPasswordUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationForgotPasswordUserArgs, 'email'>>;
  loginUser?: Resolver<Maybe<ResolversTypes['usersLoginResult']>, ParentType, ContextType, Partial<MutationLoginUserArgs>>;
  logoutUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refreshTokenUser?: Resolver<Maybe<ResolversTypes['usersRefreshedUser']>, ParentType, ContextType, Partial<MutationRefreshTokenUserArgs>>;
  resetPasswordUser?: Resolver<Maybe<ResolversTypes['usersResetPassword']>, ParentType, ContextType, Partial<MutationResetPasswordUserArgs>>;
  unlockUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUnlockUserArgs, 'email'>>;
  updateDividend?: Resolver<Maybe<ResolversTypes['Dividend']>, ParentType, ContextType, RequireFields<MutationUpdateDividendArgs, 'data' | 'id'>>;
  updatePreference?: Resolver<Maybe<ResolversTypes['Preference']>, ParentType, ContextType, RequireFields<MutationUpdatePreferenceArgs, 'key'>>;
  updateStock?: Resolver<Maybe<ResolversTypes['Stock']>, ParentType, ContextType, RequireFields<MutationUpdateStockArgs, 'data' | 'id'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'data' | 'id'>>;
  verifyEmailUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationVerifyEmailUserArgs>>;
};

export type PreferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Preference'] = ResolversParentTypes['Preference']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  Access?: Resolver<Maybe<ResolversTypes['Access']>, ParentType, ContextType>;
  Dividend?: Resolver<Maybe<ResolversTypes['Dividend']>, ParentType, ContextType, RequireFields<QueryDividendArgs, 'id'>>;
  Dividends?: Resolver<Maybe<ResolversTypes['Dividends']>, ParentType, ContextType, Partial<QueryDividendsArgs>>;
  Preference?: Resolver<Maybe<ResolversTypes['Preference']>, ParentType, ContextType, Partial<QueryPreferenceArgs>>;
  Stock?: Resolver<Maybe<ResolversTypes['Stock']>, ParentType, ContextType, RequireFields<QueryStockArgs, 'id'>>;
  Stocks?: Resolver<Maybe<ResolversTypes['Stocks']>, ParentType, ContextType, Partial<QueryStocksArgs>>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  Users?: Resolver<Maybe<ResolversTypes['Users']>, ParentType, ContextType, Partial<QueryUsersArgs>>;
  docAccessDividend?: Resolver<Maybe<ResolversTypes['dividendsDocAccess']>, ParentType, ContextType, RequireFields<QueryDocAccessDividendArgs, 'id'>>;
  docAccessStock?: Resolver<Maybe<ResolversTypes['stocksDocAccess']>, ParentType, ContextType, RequireFields<QueryDocAccessStockArgs, 'id'>>;
  docAccessUser?: Resolver<Maybe<ResolversTypes['usersDocAccess']>, ParentType, ContextType, RequireFields<QueryDocAccessUserArgs, 'id'>>;
  initializedUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  meUser?: Resolver<Maybe<ResolversTypes['usersMe']>, ParentType, ContextType>;
};

export type StockResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stock'] = ResolversParentTypes['Stock']> = {
  DPR?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ISIN?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  PE?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  capital?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  dividends?: Resolver<Maybe<Array<ResolversTypes['Dividend']>>, ParentType, ContextType>;
  hebrewName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  historicPrices?: Resolver<Maybe<Array<ResolversTypes['Stock_HistoricPrices']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issuerId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latestPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  securityId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Stock_HistoricPricesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stock_HistoricPrices'] = ResolversParentTypes['Stock_HistoricPrices']> = {
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stocks'] = ResolversParentTypes['Stocks']> = {
  docs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Stock']>>>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPrevPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nextPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pagingCounter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prevPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalDocs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksCreateAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksCreateAccess'] = ResolversParentTypes['StocksCreateAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksCreateDocAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksCreateDocAccess'] = ResolversParentTypes['StocksCreateDocAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDeleteAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDeleteAccess'] = ResolversParentTypes['StocksDeleteAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDeleteDocAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDeleteDocAccess'] = ResolversParentTypes['StocksDeleteDocAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields'] = ResolversParentTypes['StocksDocAccessFields']> = {
  DPR?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_DPR']>, ParentType, ContextType>;
  ISIN?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_ISIN']>, ParentType, ContextType>;
  PE?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_PE']>, ParentType, ContextType>;
  capital?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_capital']>, ParentType, ContextType>;
  dividends?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_dividends']>, ParentType, ContextType>;
  hebrewName?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_hebrewName']>, ParentType, ContextType>;
  historicPrices?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices']>, ParentType, ContextType>;
  issuerId?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_issuerId']>, ParentType, ContextType>;
  latestPrice?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_latestPrice']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_name']>, ParentType, ContextType>;
  securityId?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_securityId']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_symbol']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_DprResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_DPR'] = ResolversParentTypes['StocksDocAccessFields_DPR']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_DPR_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_DPR_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_DPR_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_DPR_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Dpr_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_DPR_Create'] = ResolversParentTypes['StocksDocAccessFields_DPR_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Dpr_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_DPR_Delete'] = ResolversParentTypes['StocksDocAccessFields_DPR_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Dpr_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_DPR_Read'] = ResolversParentTypes['StocksDocAccessFields_DPR_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Dpr_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_DPR_Update'] = ResolversParentTypes['StocksDocAccessFields_DPR_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_IsinResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_ISIN'] = ResolversParentTypes['StocksDocAccessFields_ISIN']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_ISIN_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_ISIN_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_ISIN_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_ISIN_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Isin_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_ISIN_Create'] = ResolversParentTypes['StocksDocAccessFields_ISIN_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Isin_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_ISIN_Delete'] = ResolversParentTypes['StocksDocAccessFields_ISIN_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Isin_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_ISIN_Read'] = ResolversParentTypes['StocksDocAccessFields_ISIN_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Isin_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_ISIN_Update'] = ResolversParentTypes['StocksDocAccessFields_ISIN_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_PeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_PE'] = ResolversParentTypes['StocksDocAccessFields_PE']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_PE_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_PE_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_PE_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_PE_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Pe_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_PE_Create'] = ResolversParentTypes['StocksDocAccessFields_PE_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Pe_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_PE_Delete'] = ResolversParentTypes['StocksDocAccessFields_PE_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Pe_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_PE_Read'] = ResolversParentTypes['StocksDocAccessFields_PE_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Pe_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_PE_Update'] = ResolversParentTypes['StocksDocAccessFields_PE_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_CapitalResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_capital'] = ResolversParentTypes['StocksDocAccessFields_capital']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_capital_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_capital_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_capital_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_capital_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Capital_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_capital_Create'] = ResolversParentTypes['StocksDocAccessFields_capital_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Capital_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_capital_Delete'] = ResolversParentTypes['StocksDocAccessFields_capital_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Capital_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_capital_Read'] = ResolversParentTypes['StocksDocAccessFields_capital_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Capital_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_capital_Update'] = ResolversParentTypes['StocksDocAccessFields_capital_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_DividendsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_dividends'] = ResolversParentTypes['StocksDocAccessFields_dividends']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_dividends_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_dividends_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_dividends_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_dividends_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Dividends_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_dividends_Create'] = ResolversParentTypes['StocksDocAccessFields_dividends_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Dividends_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_dividends_Delete'] = ResolversParentTypes['StocksDocAccessFields_dividends_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Dividends_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_dividends_Read'] = ResolversParentTypes['StocksDocAccessFields_dividends_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Dividends_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_dividends_Update'] = ResolversParentTypes['StocksDocAccessFields_dividends_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HebrewNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_hebrewName'] = ResolversParentTypes['StocksDocAccessFields_hebrewName']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_hebrewName_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_hebrewName_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_hebrewName_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_hebrewName_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HebrewName_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_hebrewName_Create'] = ResolversParentTypes['StocksDocAccessFields_hebrewName_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HebrewName_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_hebrewName_Delete'] = ResolversParentTypes['StocksDocAccessFields_hebrewName_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HebrewName_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_hebrewName_Read'] = ResolversParentTypes['StocksDocAccessFields_hebrewName_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HebrewName_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_hebrewName_Update'] = ResolversParentTypes['StocksDocAccessFields_hebrewName_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPricesResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices'] = ResolversParentTypes['StocksDocAccessFields_historicPrices']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_Delete']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_Fields']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_Create'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_Delete'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_Fields'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_Fields']> = {
  date?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_id']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_price']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_Read'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_Update'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_DateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_date'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_date']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_date_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_date_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_date_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_date_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_Date_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_date_Create'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_date_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_Date_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_date_Delete'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_date_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_Date_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_date_Read'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_date_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_Date_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_date_Update'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_date_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_IdResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_id'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_id']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_id_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_id_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_id_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_id_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_Id_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_id_Create'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_id_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_Id_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_id_Delete'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_id_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_Id_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_id_Read'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_id_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_Id_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_id_Update'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_id_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_PriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_price'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_price']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_price_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_price_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_price_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_historicPrices_price_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_Price_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_price_Create'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_price_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_Price_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_price_Delete'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_price_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_Price_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_price_Read'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_price_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_HistoricPrices_Price_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_historicPrices_price_Update'] = ResolversParentTypes['StocksDocAccessFields_historicPrices_price_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_IssuerIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_issuerId'] = ResolversParentTypes['StocksDocAccessFields_issuerId']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_issuerId_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_issuerId_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_issuerId_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_issuerId_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_IssuerId_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_issuerId_Create'] = ResolversParentTypes['StocksDocAccessFields_issuerId_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_IssuerId_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_issuerId_Delete'] = ResolversParentTypes['StocksDocAccessFields_issuerId_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_IssuerId_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_issuerId_Read'] = ResolversParentTypes['StocksDocAccessFields_issuerId_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_IssuerId_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_issuerId_Update'] = ResolversParentTypes['StocksDocAccessFields_issuerId_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_LatestPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_latestPrice'] = ResolversParentTypes['StocksDocAccessFields_latestPrice']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_latestPrice_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_latestPrice_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_latestPrice_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_latestPrice_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_LatestPrice_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_latestPrice_Create'] = ResolversParentTypes['StocksDocAccessFields_latestPrice_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_LatestPrice_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_latestPrice_Delete'] = ResolversParentTypes['StocksDocAccessFields_latestPrice_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_LatestPrice_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_latestPrice_Read'] = ResolversParentTypes['StocksDocAccessFields_latestPrice_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_LatestPrice_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_latestPrice_Update'] = ResolversParentTypes['StocksDocAccessFields_latestPrice_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_NameResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_name'] = ResolversParentTypes['StocksDocAccessFields_name']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_name_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_name_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_name_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_name_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Name_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_name_Create'] = ResolversParentTypes['StocksDocAccessFields_name_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Name_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_name_Delete'] = ResolversParentTypes['StocksDocAccessFields_name_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Name_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_name_Read'] = ResolversParentTypes['StocksDocAccessFields_name_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Name_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_name_Update'] = ResolversParentTypes['StocksDocAccessFields_name_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_SecurityIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_securityId'] = ResolversParentTypes['StocksDocAccessFields_securityId']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_securityId_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_securityId_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_securityId_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_securityId_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_SecurityId_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_securityId_Create'] = ResolversParentTypes['StocksDocAccessFields_securityId_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_SecurityId_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_securityId_Delete'] = ResolversParentTypes['StocksDocAccessFields_securityId_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_SecurityId_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_securityId_Read'] = ResolversParentTypes['StocksDocAccessFields_securityId_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_SecurityId_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_securityId_Update'] = ResolversParentTypes['StocksDocAccessFields_securityId_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_SymbolResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_symbol'] = ResolversParentTypes['StocksDocAccessFields_symbol']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_symbol_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_symbol_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_symbol_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_symbol_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Symbol_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_symbol_Create'] = ResolversParentTypes['StocksDocAccessFields_symbol_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Symbol_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_symbol_Delete'] = ResolversParentTypes['StocksDocAccessFields_symbol_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Symbol_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_symbol_Read'] = ResolversParentTypes['StocksDocAccessFields_symbol_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Symbol_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_symbol_Update'] = ResolversParentTypes['StocksDocAccessFields_symbol_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_users'] = ResolversParentTypes['StocksDocAccessFields_users']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_users_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_users_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_users_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields_users_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Users_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_users_Create'] = ResolversParentTypes['StocksDocAccessFields_users_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Users_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_users_Delete'] = ResolversParentTypes['StocksDocAccessFields_users_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Users_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_users_Read'] = ResolversParentTypes['StocksDocAccessFields_users_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessFields_Users_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksDocAccessFields_users_Update'] = ResolversParentTypes['StocksDocAccessFields_users_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields'] = ResolversParentTypes['StocksFields']> = {
  DPR?: Resolver<Maybe<ResolversTypes['StocksFields_DPR']>, ParentType, ContextType>;
  ISIN?: Resolver<Maybe<ResolversTypes['StocksFields_ISIN']>, ParentType, ContextType>;
  PE?: Resolver<Maybe<ResolversTypes['StocksFields_PE']>, ParentType, ContextType>;
  capital?: Resolver<Maybe<ResolversTypes['StocksFields_capital']>, ParentType, ContextType>;
  dividends?: Resolver<Maybe<ResolversTypes['StocksFields_dividends']>, ParentType, ContextType>;
  hebrewName?: Resolver<Maybe<ResolversTypes['StocksFields_hebrewName']>, ParentType, ContextType>;
  historicPrices?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices']>, ParentType, ContextType>;
  issuerId?: Resolver<Maybe<ResolversTypes['StocksFields_issuerId']>, ParentType, ContextType>;
  latestPrice?: Resolver<Maybe<ResolversTypes['StocksFields_latestPrice']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['StocksFields_name']>, ParentType, ContextType>;
  securityId?: Resolver<Maybe<ResolversTypes['StocksFields_securityId']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['StocksFields_symbol']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['StocksFields_users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_DprResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_DPR'] = ResolversParentTypes['StocksFields_DPR']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksFields_DPR_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksFields_DPR_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksFields_DPR_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksFields_DPR_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Dpr_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_DPR_Create'] = ResolversParentTypes['StocksFields_DPR_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Dpr_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_DPR_Delete'] = ResolversParentTypes['StocksFields_DPR_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Dpr_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_DPR_Read'] = ResolversParentTypes['StocksFields_DPR_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Dpr_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_DPR_Update'] = ResolversParentTypes['StocksFields_DPR_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_IsinResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_ISIN'] = ResolversParentTypes['StocksFields_ISIN']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksFields_ISIN_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksFields_ISIN_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksFields_ISIN_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksFields_ISIN_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Isin_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_ISIN_Create'] = ResolversParentTypes['StocksFields_ISIN_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Isin_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_ISIN_Delete'] = ResolversParentTypes['StocksFields_ISIN_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Isin_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_ISIN_Read'] = ResolversParentTypes['StocksFields_ISIN_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Isin_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_ISIN_Update'] = ResolversParentTypes['StocksFields_ISIN_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_PeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_PE'] = ResolversParentTypes['StocksFields_PE']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksFields_PE_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksFields_PE_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksFields_PE_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksFields_PE_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Pe_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_PE_Create'] = ResolversParentTypes['StocksFields_PE_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Pe_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_PE_Delete'] = ResolversParentTypes['StocksFields_PE_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Pe_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_PE_Read'] = ResolversParentTypes['StocksFields_PE_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Pe_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_PE_Update'] = ResolversParentTypes['StocksFields_PE_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_CapitalResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_capital'] = ResolversParentTypes['StocksFields_capital']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksFields_capital_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksFields_capital_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksFields_capital_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksFields_capital_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Capital_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_capital_Create'] = ResolversParentTypes['StocksFields_capital_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Capital_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_capital_Delete'] = ResolversParentTypes['StocksFields_capital_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Capital_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_capital_Read'] = ResolversParentTypes['StocksFields_capital_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Capital_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_capital_Update'] = ResolversParentTypes['StocksFields_capital_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_DividendsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_dividends'] = ResolversParentTypes['StocksFields_dividends']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksFields_dividends_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksFields_dividends_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksFields_dividends_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksFields_dividends_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Dividends_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_dividends_Create'] = ResolversParentTypes['StocksFields_dividends_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Dividends_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_dividends_Delete'] = ResolversParentTypes['StocksFields_dividends_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Dividends_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_dividends_Read'] = ResolversParentTypes['StocksFields_dividends_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Dividends_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_dividends_Update'] = ResolversParentTypes['StocksFields_dividends_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HebrewNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_hebrewName'] = ResolversParentTypes['StocksFields_hebrewName']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksFields_hebrewName_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksFields_hebrewName_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksFields_hebrewName_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksFields_hebrewName_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HebrewName_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_hebrewName_Create'] = ResolversParentTypes['StocksFields_hebrewName_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HebrewName_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_hebrewName_Delete'] = ResolversParentTypes['StocksFields_hebrewName_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HebrewName_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_hebrewName_Read'] = ResolversParentTypes['StocksFields_hebrewName_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HebrewName_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_hebrewName_Update'] = ResolversParentTypes['StocksFields_hebrewName_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPricesResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices'] = ResolversParentTypes['StocksFields_historicPrices']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_Delete']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_Fields']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_Create'] = ResolversParentTypes['StocksFields_historicPrices_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_Delete'] = ResolversParentTypes['StocksFields_historicPrices_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_Fields'] = ResolversParentTypes['StocksFields_historicPrices_Fields']> = {
  date?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_id']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_price']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_Read'] = ResolversParentTypes['StocksFields_historicPrices_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_Update'] = ResolversParentTypes['StocksFields_historicPrices_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_DateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_date'] = ResolversParentTypes['StocksFields_historicPrices_date']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_date_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_date_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_date_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_date_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_Date_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_date_Create'] = ResolversParentTypes['StocksFields_historicPrices_date_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_Date_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_date_Delete'] = ResolversParentTypes['StocksFields_historicPrices_date_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_Date_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_date_Read'] = ResolversParentTypes['StocksFields_historicPrices_date_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_Date_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_date_Update'] = ResolversParentTypes['StocksFields_historicPrices_date_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_IdResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_id'] = ResolversParentTypes['StocksFields_historicPrices_id']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_id_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_id_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_id_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_id_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_Id_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_id_Create'] = ResolversParentTypes['StocksFields_historicPrices_id_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_Id_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_id_Delete'] = ResolversParentTypes['StocksFields_historicPrices_id_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_Id_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_id_Read'] = ResolversParentTypes['StocksFields_historicPrices_id_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_Id_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_id_Update'] = ResolversParentTypes['StocksFields_historicPrices_id_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_PriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_price'] = ResolversParentTypes['StocksFields_historicPrices_price']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_price_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_price_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_price_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksFields_historicPrices_price_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_Price_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_price_Create'] = ResolversParentTypes['StocksFields_historicPrices_price_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_Price_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_price_Delete'] = ResolversParentTypes['StocksFields_historicPrices_price_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_Price_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_price_Read'] = ResolversParentTypes['StocksFields_historicPrices_price_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_HistoricPrices_Price_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_historicPrices_price_Update'] = ResolversParentTypes['StocksFields_historicPrices_price_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_IssuerIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_issuerId'] = ResolversParentTypes['StocksFields_issuerId']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksFields_issuerId_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksFields_issuerId_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksFields_issuerId_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksFields_issuerId_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_IssuerId_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_issuerId_Create'] = ResolversParentTypes['StocksFields_issuerId_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_IssuerId_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_issuerId_Delete'] = ResolversParentTypes['StocksFields_issuerId_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_IssuerId_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_issuerId_Read'] = ResolversParentTypes['StocksFields_issuerId_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_IssuerId_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_issuerId_Update'] = ResolversParentTypes['StocksFields_issuerId_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_LatestPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_latestPrice'] = ResolversParentTypes['StocksFields_latestPrice']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksFields_latestPrice_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksFields_latestPrice_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksFields_latestPrice_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksFields_latestPrice_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_LatestPrice_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_latestPrice_Create'] = ResolversParentTypes['StocksFields_latestPrice_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_LatestPrice_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_latestPrice_Delete'] = ResolversParentTypes['StocksFields_latestPrice_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_LatestPrice_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_latestPrice_Read'] = ResolversParentTypes['StocksFields_latestPrice_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_LatestPrice_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_latestPrice_Update'] = ResolversParentTypes['StocksFields_latestPrice_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_NameResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_name'] = ResolversParentTypes['StocksFields_name']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksFields_name_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksFields_name_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksFields_name_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksFields_name_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Name_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_name_Create'] = ResolversParentTypes['StocksFields_name_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Name_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_name_Delete'] = ResolversParentTypes['StocksFields_name_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Name_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_name_Read'] = ResolversParentTypes['StocksFields_name_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Name_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_name_Update'] = ResolversParentTypes['StocksFields_name_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_SecurityIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_securityId'] = ResolversParentTypes['StocksFields_securityId']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksFields_securityId_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksFields_securityId_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksFields_securityId_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksFields_securityId_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_SecurityId_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_securityId_Create'] = ResolversParentTypes['StocksFields_securityId_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_SecurityId_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_securityId_Delete'] = ResolversParentTypes['StocksFields_securityId_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_SecurityId_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_securityId_Read'] = ResolversParentTypes['StocksFields_securityId_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_SecurityId_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_securityId_Update'] = ResolversParentTypes['StocksFields_securityId_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_SymbolResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_symbol'] = ResolversParentTypes['StocksFields_symbol']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksFields_symbol_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksFields_symbol_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksFields_symbol_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksFields_symbol_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Symbol_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_symbol_Create'] = ResolversParentTypes['StocksFields_symbol_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Symbol_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_symbol_Delete'] = ResolversParentTypes['StocksFields_symbol_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Symbol_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_symbol_Read'] = ResolversParentTypes['StocksFields_symbol_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Symbol_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_symbol_Update'] = ResolversParentTypes['StocksFields_symbol_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_users'] = ResolversParentTypes['StocksFields_users']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksFields_users_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksFields_users_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksFields_users_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksFields_users_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Users_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_users_Create'] = ResolversParentTypes['StocksFields_users_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Users_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_users_Delete'] = ResolversParentTypes['StocksFields_users_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Users_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_users_Read'] = ResolversParentTypes['StocksFields_users_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksFields_Users_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksFields_users_Update'] = ResolversParentTypes['StocksFields_users_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksReadAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksReadAccess'] = ResolversParentTypes['StocksReadAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksReadDocAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksReadDocAccess'] = ResolversParentTypes['StocksReadDocAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksUpdateAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksUpdateAccess'] = ResolversParentTypes['StocksUpdateAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksUpdateDocAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['StocksUpdateDocAccess'] = ResolversParentTypes['StocksUpdateDocAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  birthday?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lockUntil?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  loginAttempts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  portfolioValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  resetPasswordExpiration?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  resetPasswordToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes['User_roles']>, ParentType, ContextType>;
  stocks?: Resolver<Maybe<Array<ResolversTypes['User_Stocks']>>, ParentType, ContextType>;
  transactions?: Resolver<Maybe<Array<ResolversTypes['User_Transactions']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_StocksResolvers<ContextType = any, ParentType extends ResolversParentTypes['User_Stocks'] = ResolversParentTypes['User_Stocks']> = {
  dividends?: Resolver<Maybe<Array<ResolversTypes['User_Stocks_Dividends']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['Stock']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Stocks_DividendsResolvers<ContextType = any, ParentType extends ResolversParentTypes['User_Stocks_Dividends'] = ResolversParentTypes['User_Stocks_Dividends']> = {
  dividend?: Resolver<Maybe<ResolversTypes['Dividend']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_TransactionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['User_Transactions'] = ResolversParentTypes['User_Transactions']> = {
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['User_Transactions_status']>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['Stock']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['User_Transactions_type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Users'] = ResolversParentTypes['Users']> = {
  docs?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPrevPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nextPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pagingCounter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prevPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalDocs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersCreateAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersCreateAccess'] = ResolversParentTypes['UsersCreateAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersCreateDocAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersCreateDocAccess'] = ResolversParentTypes['UsersCreateDocAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDeleteAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDeleteAccess'] = ResolversParentTypes['UsersDeleteAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDeleteDocAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDeleteDocAccess'] = ResolversParentTypes['UsersDeleteDocAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields'] = ResolversParentTypes['UsersDocAccessFields']> = {
  accountId?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_accountId']>, ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_balance']>, ParentType, ContextType>;
  birthday?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_birthday']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_email']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_lastName']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_password']>, ParentType, ContextType>;
  portfolioValue?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_portfolioValue']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_roles']>, ParentType, ContextType>;
  stocks?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks']>, ParentType, ContextType>;
  transactions?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_username']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_AccountIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_accountId'] = ResolversParentTypes['UsersDocAccessFields_accountId']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_accountId_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_accountId_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_accountId_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_accountId_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_AccountId_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_accountId_Create'] = ResolversParentTypes['UsersDocAccessFields_accountId_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_AccountId_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_accountId_Delete'] = ResolversParentTypes['UsersDocAccessFields_accountId_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_AccountId_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_accountId_Read'] = ResolversParentTypes['UsersDocAccessFields_accountId_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_AccountId_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_accountId_Update'] = ResolversParentTypes['UsersDocAccessFields_accountId_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_BalanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_balance'] = ResolversParentTypes['UsersDocAccessFields_balance']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_balance_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_balance_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_balance_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_balance_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Balance_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_balance_Create'] = ResolversParentTypes['UsersDocAccessFields_balance_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Balance_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_balance_Delete'] = ResolversParentTypes['UsersDocAccessFields_balance_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Balance_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_balance_Read'] = ResolversParentTypes['UsersDocAccessFields_balance_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Balance_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_balance_Update'] = ResolversParentTypes['UsersDocAccessFields_balance_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_BirthdayResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_birthday'] = ResolversParentTypes['UsersDocAccessFields_birthday']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_birthday_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_birthday_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_birthday_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_birthday_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Birthday_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_birthday_Create'] = ResolversParentTypes['UsersDocAccessFields_birthday_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Birthday_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_birthday_Delete'] = ResolversParentTypes['UsersDocAccessFields_birthday_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Birthday_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_birthday_Read'] = ResolversParentTypes['UsersDocAccessFields_birthday_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Birthday_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_birthday_Update'] = ResolversParentTypes['UsersDocAccessFields_birthday_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_EmailResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_email'] = ResolversParentTypes['UsersDocAccessFields_email']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_email_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_email_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_email_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_email_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Email_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_email_Create'] = ResolversParentTypes['UsersDocAccessFields_email_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Email_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_email_Delete'] = ResolversParentTypes['UsersDocAccessFields_email_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Email_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_email_Read'] = ResolversParentTypes['UsersDocAccessFields_email_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Email_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_email_Update'] = ResolversParentTypes['UsersDocAccessFields_email_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_LastNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_lastName'] = ResolversParentTypes['UsersDocAccessFields_lastName']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_lastName_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_lastName_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_lastName_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_lastName_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_LastName_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_lastName_Create'] = ResolversParentTypes['UsersDocAccessFields_lastName_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_LastName_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_lastName_Delete'] = ResolversParentTypes['UsersDocAccessFields_lastName_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_LastName_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_lastName_Read'] = ResolversParentTypes['UsersDocAccessFields_lastName_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_LastName_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_lastName_Update'] = ResolversParentTypes['UsersDocAccessFields_lastName_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_PasswordResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_password'] = ResolversParentTypes['UsersDocAccessFields_password']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_password_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_password_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_password_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_password_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Password_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_password_Create'] = ResolversParentTypes['UsersDocAccessFields_password_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Password_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_password_Delete'] = ResolversParentTypes['UsersDocAccessFields_password_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Password_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_password_Read'] = ResolversParentTypes['UsersDocAccessFields_password_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Password_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_password_Update'] = ResolversParentTypes['UsersDocAccessFields_password_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_PortfolioValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_portfolioValue'] = ResolversParentTypes['UsersDocAccessFields_portfolioValue']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_portfolioValue_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_portfolioValue_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_portfolioValue_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_portfolioValue_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_PortfolioValue_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_portfolioValue_Create'] = ResolversParentTypes['UsersDocAccessFields_portfolioValue_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_PortfolioValue_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_portfolioValue_Delete'] = ResolversParentTypes['UsersDocAccessFields_portfolioValue_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_PortfolioValue_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_portfolioValue_Read'] = ResolversParentTypes['UsersDocAccessFields_portfolioValue_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_PortfolioValue_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_portfolioValue_Update'] = ResolversParentTypes['UsersDocAccessFields_portfolioValue_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_RolesResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_roles'] = ResolversParentTypes['UsersDocAccessFields_roles']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_roles_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_roles_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_roles_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_roles_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Roles_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_roles_Create'] = ResolversParentTypes['UsersDocAccessFields_roles_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Roles_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_roles_Delete'] = ResolversParentTypes['UsersDocAccessFields_roles_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Roles_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_roles_Read'] = ResolversParentTypes['UsersDocAccessFields_roles_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Roles_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_roles_Update'] = ResolversParentTypes['UsersDocAccessFields_roles_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_StocksResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks'] = ResolversParentTypes['UsersDocAccessFields_stocks']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_Delete']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_Fields']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_Create'] = ResolversParentTypes['UsersDocAccessFields_stocks_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_Delete'] = ResolversParentTypes['UsersDocAccessFields_stocks_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_Fields'] = ResolversParentTypes['UsersDocAccessFields_stocks_Fields']> = {
  dividends?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_id']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_quantity']>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_stock']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_Read'] = ResolversParentTypes['UsersDocAccessFields_stocks_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_Update'] = ResolversParentTypes['UsersDocAccessFields_stocks_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_DividendsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_Delete']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_Fields']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_Create'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_Delete'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_Fields'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_Fields']> = {
  dividend?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_dividend']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_id']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_quantity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_Read'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_Update'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_DividendResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_dividend'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_dividend']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_dividend_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_dividend_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_dividend_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_dividend_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_Dividend_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_dividend_Create'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_dividend_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_Dividend_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_dividend_Delete'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_dividend_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_Dividend_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_dividend_Read'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_dividend_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_Dividend_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_dividend_Update'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_dividend_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_IdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_id'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_id']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_id_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_id_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_id_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_id_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_Id_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_id_Create'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_id_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_Id_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_id_Delete'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_id_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_Id_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_id_Read'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_id_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_Id_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_id_Update'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_id_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_QuantityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_quantity'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_quantity']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_quantity_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_quantity_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_quantity_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_dividends_quantity_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_Quantity_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_quantity_Create'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_quantity_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_Quantity_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_quantity_Delete'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_quantity_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_Quantity_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_quantity_Read'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_quantity_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Dividends_Quantity_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_dividends_quantity_Update'] = ResolversParentTypes['UsersDocAccessFields_stocks_dividends_quantity_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_IdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_id'] = ResolversParentTypes['UsersDocAccessFields_stocks_id']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_id_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_id_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_id_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_id_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Id_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_id_Create'] = ResolversParentTypes['UsersDocAccessFields_stocks_id_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Id_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_id_Delete'] = ResolversParentTypes['UsersDocAccessFields_stocks_id_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Id_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_id_Read'] = ResolversParentTypes['UsersDocAccessFields_stocks_id_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Id_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_id_Update'] = ResolversParentTypes['UsersDocAccessFields_stocks_id_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_QuantityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_quantity'] = ResolversParentTypes['UsersDocAccessFields_stocks_quantity']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_quantity_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_quantity_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_quantity_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_quantity_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Quantity_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_quantity_Create'] = ResolversParentTypes['UsersDocAccessFields_stocks_quantity_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Quantity_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_quantity_Delete'] = ResolversParentTypes['UsersDocAccessFields_stocks_quantity_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Quantity_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_quantity_Read'] = ResolversParentTypes['UsersDocAccessFields_stocks_quantity_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Quantity_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_quantity_Update'] = ResolversParentTypes['UsersDocAccessFields_stocks_quantity_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_StockResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_stock'] = ResolversParentTypes['UsersDocAccessFields_stocks_stock']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_stock_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_stock_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_stock_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_stocks_stock_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Stock_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_stock_Create'] = ResolversParentTypes['UsersDocAccessFields_stocks_stock_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Stock_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_stock_Delete'] = ResolversParentTypes['UsersDocAccessFields_stocks_stock_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Stock_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_stock_Read'] = ResolversParentTypes['UsersDocAccessFields_stocks_stock_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Stocks_Stock_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_stocks_stock_Update'] = ResolversParentTypes['UsersDocAccessFields_stocks_stock_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_TransactionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions'] = ResolversParentTypes['UsersDocAccessFields_transactions']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_Delete']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_Fields']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_Create'] = ResolversParentTypes['UsersDocAccessFields_transactions_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_Delete'] = ResolversParentTypes['UsersDocAccessFields_transactions_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_Fields'] = ResolversParentTypes['UsersDocAccessFields_transactions_Fields']> = {
  date?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_id']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_price']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_quantity']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_status']>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_stock']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_sum']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_Read'] = ResolversParentTypes['UsersDocAccessFields_transactions_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_Update'] = ResolversParentTypes['UsersDocAccessFields_transactions_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_DateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_date'] = ResolversParentTypes['UsersDocAccessFields_transactions_date']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_date_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_date_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_date_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_date_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Date_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_date_Create'] = ResolversParentTypes['UsersDocAccessFields_transactions_date_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Date_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_date_Delete'] = ResolversParentTypes['UsersDocAccessFields_transactions_date_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Date_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_date_Read'] = ResolversParentTypes['UsersDocAccessFields_transactions_date_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Date_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_date_Update'] = ResolversParentTypes['UsersDocAccessFields_transactions_date_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_IdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_id'] = ResolversParentTypes['UsersDocAccessFields_transactions_id']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_id_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_id_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_id_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_id_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Id_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_id_Create'] = ResolversParentTypes['UsersDocAccessFields_transactions_id_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Id_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_id_Delete'] = ResolversParentTypes['UsersDocAccessFields_transactions_id_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Id_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_id_Read'] = ResolversParentTypes['UsersDocAccessFields_transactions_id_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Id_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_id_Update'] = ResolversParentTypes['UsersDocAccessFields_transactions_id_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_PriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_price'] = ResolversParentTypes['UsersDocAccessFields_transactions_price']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_price_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_price_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_price_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_price_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Price_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_price_Create'] = ResolversParentTypes['UsersDocAccessFields_transactions_price_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Price_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_price_Delete'] = ResolversParentTypes['UsersDocAccessFields_transactions_price_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Price_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_price_Read'] = ResolversParentTypes['UsersDocAccessFields_transactions_price_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Price_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_price_Update'] = ResolversParentTypes['UsersDocAccessFields_transactions_price_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_QuantityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_quantity'] = ResolversParentTypes['UsersDocAccessFields_transactions_quantity']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_quantity_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_quantity_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_quantity_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_quantity_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Quantity_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_quantity_Create'] = ResolversParentTypes['UsersDocAccessFields_transactions_quantity_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Quantity_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_quantity_Delete'] = ResolversParentTypes['UsersDocAccessFields_transactions_quantity_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Quantity_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_quantity_Read'] = ResolversParentTypes['UsersDocAccessFields_transactions_quantity_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Quantity_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_quantity_Update'] = ResolversParentTypes['UsersDocAccessFields_transactions_quantity_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_StatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_status'] = ResolversParentTypes['UsersDocAccessFields_transactions_status']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_status_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_status_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_status_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_status_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Status_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_status_Create'] = ResolversParentTypes['UsersDocAccessFields_transactions_status_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Status_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_status_Delete'] = ResolversParentTypes['UsersDocAccessFields_transactions_status_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Status_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_status_Read'] = ResolversParentTypes['UsersDocAccessFields_transactions_status_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Status_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_status_Update'] = ResolversParentTypes['UsersDocAccessFields_transactions_status_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_StockResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_stock'] = ResolversParentTypes['UsersDocAccessFields_transactions_stock']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_stock_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_stock_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_stock_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_stock_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Stock_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_stock_Create'] = ResolversParentTypes['UsersDocAccessFields_transactions_stock_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Stock_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_stock_Delete'] = ResolversParentTypes['UsersDocAccessFields_transactions_stock_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Stock_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_stock_Read'] = ResolversParentTypes['UsersDocAccessFields_transactions_stock_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Stock_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_stock_Update'] = ResolversParentTypes['UsersDocAccessFields_transactions_stock_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_SumResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_sum'] = ResolversParentTypes['UsersDocAccessFields_transactions_sum']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_sum_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_sum_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_sum_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_sum_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Sum_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_sum_Create'] = ResolversParentTypes['UsersDocAccessFields_transactions_sum_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Sum_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_sum_Delete'] = ResolversParentTypes['UsersDocAccessFields_transactions_sum_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Sum_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_sum_Read'] = ResolversParentTypes['UsersDocAccessFields_transactions_sum_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Sum_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_sum_Update'] = ResolversParentTypes['UsersDocAccessFields_transactions_sum_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_TypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_type'] = ResolversParentTypes['UsersDocAccessFields_transactions_type']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_type_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_type_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_type_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_transactions_type_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Type_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_type_Create'] = ResolversParentTypes['UsersDocAccessFields_transactions_type_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Type_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_type_Delete'] = ResolversParentTypes['UsersDocAccessFields_transactions_type_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Type_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_type_Read'] = ResolversParentTypes['UsersDocAccessFields_transactions_type_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Transactions_Type_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_transactions_type_Update'] = ResolversParentTypes['UsersDocAccessFields_transactions_type_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_UsernameResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_username'] = ResolversParentTypes['UsersDocAccessFields_username']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_username_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_username_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_username_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields_username_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Username_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_username_Create'] = ResolversParentTypes['UsersDocAccessFields_username_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Username_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_username_Delete'] = ResolversParentTypes['UsersDocAccessFields_username_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Username_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_username_Read'] = ResolversParentTypes['UsersDocAccessFields_username_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessFields_Username_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersDocAccessFields_username_Update'] = ResolversParentTypes['UsersDocAccessFields_username_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields'] = ResolversParentTypes['UsersFields']> = {
  accountId?: Resolver<Maybe<ResolversTypes['UsersFields_accountId']>, ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes['UsersFields_balance']>, ParentType, ContextType>;
  birthday?: Resolver<Maybe<ResolversTypes['UsersFields_birthday']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['UsersFields_email']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['UsersFields_lastName']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['UsersFields_password']>, ParentType, ContextType>;
  portfolioValue?: Resolver<Maybe<ResolversTypes['UsersFields_portfolioValue']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<ResolversTypes['UsersFields_roles']>, ParentType, ContextType>;
  stocks?: Resolver<Maybe<ResolversTypes['UsersFields_stocks']>, ParentType, ContextType>;
  transactions?: Resolver<Maybe<ResolversTypes['UsersFields_transactions']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['UsersFields_username']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_AccountIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_accountId'] = ResolversParentTypes['UsersFields_accountId']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_accountId_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_accountId_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_accountId_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_accountId_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_AccountId_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_accountId_Create'] = ResolversParentTypes['UsersFields_accountId_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_AccountId_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_accountId_Delete'] = ResolversParentTypes['UsersFields_accountId_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_AccountId_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_accountId_Read'] = ResolversParentTypes['UsersFields_accountId_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_AccountId_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_accountId_Update'] = ResolversParentTypes['UsersFields_accountId_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_BalanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_balance'] = ResolversParentTypes['UsersFields_balance']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_balance_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_balance_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_balance_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_balance_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Balance_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_balance_Create'] = ResolversParentTypes['UsersFields_balance_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Balance_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_balance_Delete'] = ResolversParentTypes['UsersFields_balance_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Balance_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_balance_Read'] = ResolversParentTypes['UsersFields_balance_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Balance_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_balance_Update'] = ResolversParentTypes['UsersFields_balance_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_BirthdayResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_birthday'] = ResolversParentTypes['UsersFields_birthday']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_birthday_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_birthday_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_birthday_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_birthday_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Birthday_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_birthday_Create'] = ResolversParentTypes['UsersFields_birthday_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Birthday_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_birthday_Delete'] = ResolversParentTypes['UsersFields_birthday_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Birthday_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_birthday_Read'] = ResolversParentTypes['UsersFields_birthday_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Birthday_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_birthday_Update'] = ResolversParentTypes['UsersFields_birthday_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_EmailResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_email'] = ResolversParentTypes['UsersFields_email']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_email_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_email_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_email_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_email_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Email_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_email_Create'] = ResolversParentTypes['UsersFields_email_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Email_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_email_Delete'] = ResolversParentTypes['UsersFields_email_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Email_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_email_Read'] = ResolversParentTypes['UsersFields_email_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Email_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_email_Update'] = ResolversParentTypes['UsersFields_email_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_LastNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_lastName'] = ResolversParentTypes['UsersFields_lastName']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_lastName_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_lastName_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_lastName_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_lastName_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_LastName_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_lastName_Create'] = ResolversParentTypes['UsersFields_lastName_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_LastName_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_lastName_Delete'] = ResolversParentTypes['UsersFields_lastName_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_LastName_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_lastName_Read'] = ResolversParentTypes['UsersFields_lastName_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_LastName_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_lastName_Update'] = ResolversParentTypes['UsersFields_lastName_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_PasswordResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_password'] = ResolversParentTypes['UsersFields_password']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_password_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_password_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_password_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_password_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Password_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_password_Create'] = ResolversParentTypes['UsersFields_password_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Password_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_password_Delete'] = ResolversParentTypes['UsersFields_password_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Password_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_password_Read'] = ResolversParentTypes['UsersFields_password_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Password_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_password_Update'] = ResolversParentTypes['UsersFields_password_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_PortfolioValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_portfolioValue'] = ResolversParentTypes['UsersFields_portfolioValue']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_portfolioValue_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_portfolioValue_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_portfolioValue_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_portfolioValue_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_PortfolioValue_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_portfolioValue_Create'] = ResolversParentTypes['UsersFields_portfolioValue_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_PortfolioValue_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_portfolioValue_Delete'] = ResolversParentTypes['UsersFields_portfolioValue_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_PortfolioValue_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_portfolioValue_Read'] = ResolversParentTypes['UsersFields_portfolioValue_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_PortfolioValue_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_portfolioValue_Update'] = ResolversParentTypes['UsersFields_portfolioValue_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_RolesResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_roles'] = ResolversParentTypes['UsersFields_roles']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_roles_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_roles_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_roles_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_roles_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Roles_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_roles_Create'] = ResolversParentTypes['UsersFields_roles_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Roles_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_roles_Delete'] = ResolversParentTypes['UsersFields_roles_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Roles_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_roles_Read'] = ResolversParentTypes['UsersFields_roles_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Roles_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_roles_Update'] = ResolversParentTypes['UsersFields_roles_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_StocksResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks'] = ResolversParentTypes['UsersFields_stocks']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_Delete']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_Fields']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_Create'] = ResolversParentTypes['UsersFields_stocks_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_Delete'] = ResolversParentTypes['UsersFields_stocks_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_Fields'] = ResolversParentTypes['UsersFields_stocks_Fields']> = {
  dividends?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_id']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_quantity']>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_stock']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_Read'] = ResolversParentTypes['UsersFields_stocks_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_Update'] = ResolversParentTypes['UsersFields_stocks_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_DividendsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends'] = ResolversParentTypes['UsersFields_stocks_dividends']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_Delete']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_Fields']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_Create'] = ResolversParentTypes['UsersFields_stocks_dividends_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_Delete'] = ResolversParentTypes['UsersFields_stocks_dividends_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_Fields'] = ResolversParentTypes['UsersFields_stocks_dividends_Fields']> = {
  dividend?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_dividend']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_id']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_quantity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_Read'] = ResolversParentTypes['UsersFields_stocks_dividends_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_Update'] = ResolversParentTypes['UsersFields_stocks_dividends_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_DividendResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_dividend'] = ResolversParentTypes['UsersFields_stocks_dividends_dividend']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_dividend_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_dividend_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_dividend_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_dividend_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_Dividend_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_dividend_Create'] = ResolversParentTypes['UsersFields_stocks_dividends_dividend_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_Dividend_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_dividend_Delete'] = ResolversParentTypes['UsersFields_stocks_dividends_dividend_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_Dividend_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_dividend_Read'] = ResolversParentTypes['UsersFields_stocks_dividends_dividend_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_Dividend_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_dividend_Update'] = ResolversParentTypes['UsersFields_stocks_dividends_dividend_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_IdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_id'] = ResolversParentTypes['UsersFields_stocks_dividends_id']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_id_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_id_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_id_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_id_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_Id_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_id_Create'] = ResolversParentTypes['UsersFields_stocks_dividends_id_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_Id_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_id_Delete'] = ResolversParentTypes['UsersFields_stocks_dividends_id_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_Id_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_id_Read'] = ResolversParentTypes['UsersFields_stocks_dividends_id_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_Id_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_id_Update'] = ResolversParentTypes['UsersFields_stocks_dividends_id_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_QuantityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_quantity'] = ResolversParentTypes['UsersFields_stocks_dividends_quantity']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_quantity_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_quantity_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_quantity_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_dividends_quantity_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_Quantity_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_quantity_Create'] = ResolversParentTypes['UsersFields_stocks_dividends_quantity_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_Quantity_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_quantity_Delete'] = ResolversParentTypes['UsersFields_stocks_dividends_quantity_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_Quantity_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_quantity_Read'] = ResolversParentTypes['UsersFields_stocks_dividends_quantity_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Dividends_Quantity_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_dividends_quantity_Update'] = ResolversParentTypes['UsersFields_stocks_dividends_quantity_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_IdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_id'] = ResolversParentTypes['UsersFields_stocks_id']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_id_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_id_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_id_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_id_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Id_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_id_Create'] = ResolversParentTypes['UsersFields_stocks_id_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Id_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_id_Delete'] = ResolversParentTypes['UsersFields_stocks_id_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Id_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_id_Read'] = ResolversParentTypes['UsersFields_stocks_id_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Id_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_id_Update'] = ResolversParentTypes['UsersFields_stocks_id_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_QuantityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_quantity'] = ResolversParentTypes['UsersFields_stocks_quantity']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_quantity_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_quantity_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_quantity_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_quantity_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Quantity_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_quantity_Create'] = ResolversParentTypes['UsersFields_stocks_quantity_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Quantity_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_quantity_Delete'] = ResolversParentTypes['UsersFields_stocks_quantity_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Quantity_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_quantity_Read'] = ResolversParentTypes['UsersFields_stocks_quantity_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Quantity_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_quantity_Update'] = ResolversParentTypes['UsersFields_stocks_quantity_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_StockResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_stock'] = ResolversParentTypes['UsersFields_stocks_stock']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_stock_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_stock_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_stock_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_stocks_stock_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Stock_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_stock_Create'] = ResolversParentTypes['UsersFields_stocks_stock_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Stock_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_stock_Delete'] = ResolversParentTypes['UsersFields_stocks_stock_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Stock_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_stock_Read'] = ResolversParentTypes['UsersFields_stocks_stock_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Stocks_Stock_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_stocks_stock_Update'] = ResolversParentTypes['UsersFields_stocks_stock_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_TransactionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions'] = ResolversParentTypes['UsersFields_transactions']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_Delete']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_Fields']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_Create'] = ResolversParentTypes['UsersFields_transactions_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_Delete'] = ResolversParentTypes['UsersFields_transactions_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_Fields'] = ResolversParentTypes['UsersFields_transactions_Fields']> = {
  date?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_id']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_price']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_quantity']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_status']>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_stock']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_sum']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_Read'] = ResolversParentTypes['UsersFields_transactions_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_Update'] = ResolversParentTypes['UsersFields_transactions_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_DateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_date'] = ResolversParentTypes['UsersFields_transactions_date']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_date_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_date_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_date_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_date_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Date_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_date_Create'] = ResolversParentTypes['UsersFields_transactions_date_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Date_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_date_Delete'] = ResolversParentTypes['UsersFields_transactions_date_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Date_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_date_Read'] = ResolversParentTypes['UsersFields_transactions_date_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Date_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_date_Update'] = ResolversParentTypes['UsersFields_transactions_date_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_IdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_id'] = ResolversParentTypes['UsersFields_transactions_id']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_id_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_id_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_id_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_id_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Id_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_id_Create'] = ResolversParentTypes['UsersFields_transactions_id_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Id_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_id_Delete'] = ResolversParentTypes['UsersFields_transactions_id_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Id_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_id_Read'] = ResolversParentTypes['UsersFields_transactions_id_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Id_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_id_Update'] = ResolversParentTypes['UsersFields_transactions_id_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_PriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_price'] = ResolversParentTypes['UsersFields_transactions_price']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_price_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_price_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_price_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_price_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Price_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_price_Create'] = ResolversParentTypes['UsersFields_transactions_price_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Price_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_price_Delete'] = ResolversParentTypes['UsersFields_transactions_price_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Price_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_price_Read'] = ResolversParentTypes['UsersFields_transactions_price_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Price_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_price_Update'] = ResolversParentTypes['UsersFields_transactions_price_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_QuantityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_quantity'] = ResolversParentTypes['UsersFields_transactions_quantity']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_quantity_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_quantity_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_quantity_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_quantity_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Quantity_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_quantity_Create'] = ResolversParentTypes['UsersFields_transactions_quantity_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Quantity_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_quantity_Delete'] = ResolversParentTypes['UsersFields_transactions_quantity_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Quantity_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_quantity_Read'] = ResolversParentTypes['UsersFields_transactions_quantity_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Quantity_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_quantity_Update'] = ResolversParentTypes['UsersFields_transactions_quantity_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_StatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_status'] = ResolversParentTypes['UsersFields_transactions_status']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_status_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_status_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_status_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_status_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Status_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_status_Create'] = ResolversParentTypes['UsersFields_transactions_status_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Status_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_status_Delete'] = ResolversParentTypes['UsersFields_transactions_status_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Status_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_status_Read'] = ResolversParentTypes['UsersFields_transactions_status_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Status_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_status_Update'] = ResolversParentTypes['UsersFields_transactions_status_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_StockResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_stock'] = ResolversParentTypes['UsersFields_transactions_stock']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_stock_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_stock_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_stock_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_stock_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Stock_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_stock_Create'] = ResolversParentTypes['UsersFields_transactions_stock_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Stock_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_stock_Delete'] = ResolversParentTypes['UsersFields_transactions_stock_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Stock_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_stock_Read'] = ResolversParentTypes['UsersFields_transactions_stock_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Stock_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_stock_Update'] = ResolversParentTypes['UsersFields_transactions_stock_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_SumResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_sum'] = ResolversParentTypes['UsersFields_transactions_sum']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_sum_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_sum_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_sum_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_sum_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Sum_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_sum_Create'] = ResolversParentTypes['UsersFields_transactions_sum_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Sum_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_sum_Delete'] = ResolversParentTypes['UsersFields_transactions_sum_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Sum_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_sum_Read'] = ResolversParentTypes['UsersFields_transactions_sum_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Sum_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_sum_Update'] = ResolversParentTypes['UsersFields_transactions_sum_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_TypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_type'] = ResolversParentTypes['UsersFields_transactions_type']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_type_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_type_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_type_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_transactions_type_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Type_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_type_Create'] = ResolversParentTypes['UsersFields_transactions_type_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Type_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_type_Delete'] = ResolversParentTypes['UsersFields_transactions_type_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Type_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_type_Read'] = ResolversParentTypes['UsersFields_transactions_type_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Transactions_Type_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_transactions_type_Update'] = ResolversParentTypes['UsersFields_transactions_type_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_UsernameResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_username'] = ResolversParentTypes['UsersFields_username']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersFields_username_Create']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersFields_username_Delete']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersFields_username_Read']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersFields_username_Update']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Username_CreateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_username_Create'] = ResolversParentTypes['UsersFields_username_Create']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Username_DeleteResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_username_Delete'] = ResolversParentTypes['UsersFields_username_Delete']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Username_ReadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_username_Read'] = ResolversParentTypes['UsersFields_username_Read']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersFields_Username_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersFields_username_Update'] = ResolversParentTypes['UsersFields_username_Update']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersReadAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersReadAccess'] = ResolversParentTypes['UsersReadAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersReadDocAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersReadDocAccess'] = ResolversParentTypes['UsersReadDocAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersUnlockAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersUnlockAccess'] = ResolversParentTypes['UsersUnlockAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersUnlockDocAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersUnlockDocAccess'] = ResolversParentTypes['UsersUnlockDocAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersUpdateAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersUpdateAccess'] = ResolversParentTypes['UsersUpdateAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersUpdateDocAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersUpdateDocAccess'] = ResolversParentTypes['UsersUpdateDocAccess']> = {
  permission?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  where?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['dividendsAccess'] = ResolversParentTypes['dividendsAccess']> = {
  create?: Resolver<Maybe<ResolversTypes['DividendsCreateAccess']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['DividendsDeleteAccess']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['DividendsFields']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['DividendsReadAccess']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['DividendsUpdateAccess']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DividendsDocAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['dividendsDocAccess'] = ResolversParentTypes['dividendsDocAccess']> = {
  create?: Resolver<Maybe<ResolversTypes['DividendsCreateDocAccess']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['DividendsDeleteDocAccess']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['DividendsDocAccessFields']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['DividendsReadDocAccess']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['DividendsUpdateDocAccess']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['stocksAccess'] = ResolversParentTypes['stocksAccess']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksCreateAccess']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDeleteAccess']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['StocksFields']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksReadAccess']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksUpdateAccess']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StocksDocAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['stocksDocAccess'] = ResolversParentTypes['stocksDocAccess']> = {
  create?: Resolver<Maybe<ResolversTypes['StocksCreateDocAccess']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['StocksDeleteDocAccess']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['StocksDocAccessFields']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['StocksReadDocAccess']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['StocksUpdateDocAccess']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['usersAccess'] = ResolversParentTypes['usersAccess']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersCreateAccess']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDeleteAccess']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['UsersFields']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersReadAccess']>, ParentType, ContextType>;
  unlock?: Resolver<Maybe<ResolversTypes['UsersUnlockAccess']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersUpdateAccess']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersDocAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['usersDocAccess'] = ResolversParentTypes['usersDocAccess']> = {
  create?: Resolver<Maybe<ResolversTypes['UsersCreateDocAccess']>, ParentType, ContextType>;
  delete?: Resolver<Maybe<ResolversTypes['UsersDeleteDocAccess']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<ResolversTypes['UsersDocAccessFields']>, ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['UsersReadDocAccess']>, ParentType, ContextType>;
  unlock?: Resolver<Maybe<ResolversTypes['UsersUnlockDocAccess']>, ParentType, ContextType>;
  update?: Resolver<Maybe<ResolversTypes['UsersUpdateDocAccess']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersJwtResolvers<ContextType = any, ParentType extends ResolversParentTypes['usersJWT'] = ResolversParentTypes['usersJWT']> = {
  collection?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes['usersJWT_roles']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersLoginResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['usersLoginResult'] = ResolversParentTypes['usersLoginResult']> = {
  exp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersMeResolvers<ContextType = any, ParentType extends ResolversParentTypes['usersMe'] = ResolversParentTypes['usersMe']> = {
  collection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersRefreshedUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['usersRefreshedUser'] = ResolversParentTypes['usersRefreshedUser']> = {
  exp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  refreshedToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['usersJWT']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResetPasswordResolvers<ContextType = any, ParentType extends ResolversParentTypes['usersResetPassword'] = ResolversParentTypes['usersResetPassword']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Access?: AccessResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Dividend?: DividendResolvers<ContextType>;
  Dividends?: DividendsResolvers<ContextType>;
  DividendsCreateAccess?: DividendsCreateAccessResolvers<ContextType>;
  DividendsCreateDocAccess?: DividendsCreateDocAccessResolvers<ContextType>;
  DividendsDeleteAccess?: DividendsDeleteAccessResolvers<ContextType>;
  DividendsDeleteDocAccess?: DividendsDeleteDocAccessResolvers<ContextType>;
  DividendsDocAccessFields?: DividendsDocAccessFieldsResolvers<ContextType>;
  DividendsDocAccessFields_date?: DividendsDocAccessFields_DateResolvers<ContextType>;
  DividendsDocAccessFields_date_Create?: DividendsDocAccessFields_Date_CreateResolvers<ContextType>;
  DividendsDocAccessFields_date_Delete?: DividendsDocAccessFields_Date_DeleteResolvers<ContextType>;
  DividendsDocAccessFields_date_Read?: DividendsDocAccessFields_Date_ReadResolvers<ContextType>;
  DividendsDocAccessFields_date_Update?: DividendsDocAccessFields_Date_UpdateResolvers<ContextType>;
  DividendsDocAccessFields_dividend?: DividendsDocAccessFields_DividendResolvers<ContextType>;
  DividendsDocAccessFields_dividend_Create?: DividendsDocAccessFields_Dividend_CreateResolvers<ContextType>;
  DividendsDocAccessFields_dividend_Delete?: DividendsDocAccessFields_Dividend_DeleteResolvers<ContextType>;
  DividendsDocAccessFields_dividend_Read?: DividendsDocAccessFields_Dividend_ReadResolvers<ContextType>;
  DividendsDocAccessFields_dividend_Update?: DividendsDocAccessFields_Dividend_UpdateResolvers<ContextType>;
  DividendsDocAccessFields_name?: DividendsDocAccessFields_NameResolvers<ContextType>;
  DividendsDocAccessFields_name_Create?: DividendsDocAccessFields_Name_CreateResolvers<ContextType>;
  DividendsDocAccessFields_name_Delete?: DividendsDocAccessFields_Name_DeleteResolvers<ContextType>;
  DividendsDocAccessFields_name_Read?: DividendsDocAccessFields_Name_ReadResolvers<ContextType>;
  DividendsDocAccessFields_name_Update?: DividendsDocAccessFields_Name_UpdateResolvers<ContextType>;
  DividendsDocAccessFields_quarter?: DividendsDocAccessFields_QuarterResolvers<ContextType>;
  DividendsDocAccessFields_quarter_Create?: DividendsDocAccessFields_Quarter_CreateResolvers<ContextType>;
  DividendsDocAccessFields_quarter_Delete?: DividendsDocAccessFields_Quarter_DeleteResolvers<ContextType>;
  DividendsDocAccessFields_quarter_Read?: DividendsDocAccessFields_Quarter_ReadResolvers<ContextType>;
  DividendsDocAccessFields_quarter_Update?: DividendsDocAccessFields_Quarter_UpdateResolvers<ContextType>;
  DividendsDocAccessFields_stock?: DividendsDocAccessFields_StockResolvers<ContextType>;
  DividendsDocAccessFields_stock_Create?: DividendsDocAccessFields_Stock_CreateResolvers<ContextType>;
  DividendsDocAccessFields_stock_Delete?: DividendsDocAccessFields_Stock_DeleteResolvers<ContextType>;
  DividendsDocAccessFields_stock_Read?: DividendsDocAccessFields_Stock_ReadResolvers<ContextType>;
  DividendsDocAccessFields_stock_Update?: DividendsDocAccessFields_Stock_UpdateResolvers<ContextType>;
  DividendsDocAccessFields_xdate?: DividendsDocAccessFields_XdateResolvers<ContextType>;
  DividendsDocAccessFields_xdate_Create?: DividendsDocAccessFields_Xdate_CreateResolvers<ContextType>;
  DividendsDocAccessFields_xdate_Delete?: DividendsDocAccessFields_Xdate_DeleteResolvers<ContextType>;
  DividendsDocAccessFields_xdate_Read?: DividendsDocAccessFields_Xdate_ReadResolvers<ContextType>;
  DividendsDocAccessFields_xdate_Update?: DividendsDocAccessFields_Xdate_UpdateResolvers<ContextType>;
  DividendsFields?: DividendsFieldsResolvers<ContextType>;
  DividendsFields_date?: DividendsFields_DateResolvers<ContextType>;
  DividendsFields_date_Create?: DividendsFields_Date_CreateResolvers<ContextType>;
  DividendsFields_date_Delete?: DividendsFields_Date_DeleteResolvers<ContextType>;
  DividendsFields_date_Read?: DividendsFields_Date_ReadResolvers<ContextType>;
  DividendsFields_date_Update?: DividendsFields_Date_UpdateResolvers<ContextType>;
  DividendsFields_dividend?: DividendsFields_DividendResolvers<ContextType>;
  DividendsFields_dividend_Create?: DividendsFields_Dividend_CreateResolvers<ContextType>;
  DividendsFields_dividend_Delete?: DividendsFields_Dividend_DeleteResolvers<ContextType>;
  DividendsFields_dividend_Read?: DividendsFields_Dividend_ReadResolvers<ContextType>;
  DividendsFields_dividend_Update?: DividendsFields_Dividend_UpdateResolvers<ContextType>;
  DividendsFields_name?: DividendsFields_NameResolvers<ContextType>;
  DividendsFields_name_Create?: DividendsFields_Name_CreateResolvers<ContextType>;
  DividendsFields_name_Delete?: DividendsFields_Name_DeleteResolvers<ContextType>;
  DividendsFields_name_Read?: DividendsFields_Name_ReadResolvers<ContextType>;
  DividendsFields_name_Update?: DividendsFields_Name_UpdateResolvers<ContextType>;
  DividendsFields_quarter?: DividendsFields_QuarterResolvers<ContextType>;
  DividendsFields_quarter_Create?: DividendsFields_Quarter_CreateResolvers<ContextType>;
  DividendsFields_quarter_Delete?: DividendsFields_Quarter_DeleteResolvers<ContextType>;
  DividendsFields_quarter_Read?: DividendsFields_Quarter_ReadResolvers<ContextType>;
  DividendsFields_quarter_Update?: DividendsFields_Quarter_UpdateResolvers<ContextType>;
  DividendsFields_stock?: DividendsFields_StockResolvers<ContextType>;
  DividendsFields_stock_Create?: DividendsFields_Stock_CreateResolvers<ContextType>;
  DividendsFields_stock_Delete?: DividendsFields_Stock_DeleteResolvers<ContextType>;
  DividendsFields_stock_Read?: DividendsFields_Stock_ReadResolvers<ContextType>;
  DividendsFields_stock_Update?: DividendsFields_Stock_UpdateResolvers<ContextType>;
  DividendsFields_xdate?: DividendsFields_XdateResolvers<ContextType>;
  DividendsFields_xdate_Create?: DividendsFields_Xdate_CreateResolvers<ContextType>;
  DividendsFields_xdate_Delete?: DividendsFields_Xdate_DeleteResolvers<ContextType>;
  DividendsFields_xdate_Read?: DividendsFields_Xdate_ReadResolvers<ContextType>;
  DividendsFields_xdate_Update?: DividendsFields_Xdate_UpdateResolvers<ContextType>;
  DividendsReadAccess?: DividendsReadAccessResolvers<ContextType>;
  DividendsReadDocAccess?: DividendsReadDocAccessResolvers<ContextType>;
  DividendsUpdateAccess?: DividendsUpdateAccessResolvers<ContextType>;
  DividendsUpdateDocAccess?: DividendsUpdateDocAccessResolvers<ContextType>;
  EmailAddress?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Preference?: PreferenceResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Stock?: StockResolvers<ContextType>;
  Stock_HistoricPrices?: Stock_HistoricPricesResolvers<ContextType>;
  Stocks?: StocksResolvers<ContextType>;
  StocksCreateAccess?: StocksCreateAccessResolvers<ContextType>;
  StocksCreateDocAccess?: StocksCreateDocAccessResolvers<ContextType>;
  StocksDeleteAccess?: StocksDeleteAccessResolvers<ContextType>;
  StocksDeleteDocAccess?: StocksDeleteDocAccessResolvers<ContextType>;
  StocksDocAccessFields?: StocksDocAccessFieldsResolvers<ContextType>;
  StocksDocAccessFields_DPR?: StocksDocAccessFields_DprResolvers<ContextType>;
  StocksDocAccessFields_DPR_Create?: StocksDocAccessFields_Dpr_CreateResolvers<ContextType>;
  StocksDocAccessFields_DPR_Delete?: StocksDocAccessFields_Dpr_DeleteResolvers<ContextType>;
  StocksDocAccessFields_DPR_Read?: StocksDocAccessFields_Dpr_ReadResolvers<ContextType>;
  StocksDocAccessFields_DPR_Update?: StocksDocAccessFields_Dpr_UpdateResolvers<ContextType>;
  StocksDocAccessFields_ISIN?: StocksDocAccessFields_IsinResolvers<ContextType>;
  StocksDocAccessFields_ISIN_Create?: StocksDocAccessFields_Isin_CreateResolvers<ContextType>;
  StocksDocAccessFields_ISIN_Delete?: StocksDocAccessFields_Isin_DeleteResolvers<ContextType>;
  StocksDocAccessFields_ISIN_Read?: StocksDocAccessFields_Isin_ReadResolvers<ContextType>;
  StocksDocAccessFields_ISIN_Update?: StocksDocAccessFields_Isin_UpdateResolvers<ContextType>;
  StocksDocAccessFields_PE?: StocksDocAccessFields_PeResolvers<ContextType>;
  StocksDocAccessFields_PE_Create?: StocksDocAccessFields_Pe_CreateResolvers<ContextType>;
  StocksDocAccessFields_PE_Delete?: StocksDocAccessFields_Pe_DeleteResolvers<ContextType>;
  StocksDocAccessFields_PE_Read?: StocksDocAccessFields_Pe_ReadResolvers<ContextType>;
  StocksDocAccessFields_PE_Update?: StocksDocAccessFields_Pe_UpdateResolvers<ContextType>;
  StocksDocAccessFields_capital?: StocksDocAccessFields_CapitalResolvers<ContextType>;
  StocksDocAccessFields_capital_Create?: StocksDocAccessFields_Capital_CreateResolvers<ContextType>;
  StocksDocAccessFields_capital_Delete?: StocksDocAccessFields_Capital_DeleteResolvers<ContextType>;
  StocksDocAccessFields_capital_Read?: StocksDocAccessFields_Capital_ReadResolvers<ContextType>;
  StocksDocAccessFields_capital_Update?: StocksDocAccessFields_Capital_UpdateResolvers<ContextType>;
  StocksDocAccessFields_dividends?: StocksDocAccessFields_DividendsResolvers<ContextType>;
  StocksDocAccessFields_dividends_Create?: StocksDocAccessFields_Dividends_CreateResolvers<ContextType>;
  StocksDocAccessFields_dividends_Delete?: StocksDocAccessFields_Dividends_DeleteResolvers<ContextType>;
  StocksDocAccessFields_dividends_Read?: StocksDocAccessFields_Dividends_ReadResolvers<ContextType>;
  StocksDocAccessFields_dividends_Update?: StocksDocAccessFields_Dividends_UpdateResolvers<ContextType>;
  StocksDocAccessFields_hebrewName?: StocksDocAccessFields_HebrewNameResolvers<ContextType>;
  StocksDocAccessFields_hebrewName_Create?: StocksDocAccessFields_HebrewName_CreateResolvers<ContextType>;
  StocksDocAccessFields_hebrewName_Delete?: StocksDocAccessFields_HebrewName_DeleteResolvers<ContextType>;
  StocksDocAccessFields_hebrewName_Read?: StocksDocAccessFields_HebrewName_ReadResolvers<ContextType>;
  StocksDocAccessFields_hebrewName_Update?: StocksDocAccessFields_HebrewName_UpdateResolvers<ContextType>;
  StocksDocAccessFields_historicPrices?: StocksDocAccessFields_HistoricPricesResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_Create?: StocksDocAccessFields_HistoricPrices_CreateResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_Delete?: StocksDocAccessFields_HistoricPrices_DeleteResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_Fields?: StocksDocAccessFields_HistoricPrices_FieldsResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_Read?: StocksDocAccessFields_HistoricPrices_ReadResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_Update?: StocksDocAccessFields_HistoricPrices_UpdateResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_date?: StocksDocAccessFields_HistoricPrices_DateResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_date_Create?: StocksDocAccessFields_HistoricPrices_Date_CreateResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_date_Delete?: StocksDocAccessFields_HistoricPrices_Date_DeleteResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_date_Read?: StocksDocAccessFields_HistoricPrices_Date_ReadResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_date_Update?: StocksDocAccessFields_HistoricPrices_Date_UpdateResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_id?: StocksDocAccessFields_HistoricPrices_IdResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_id_Create?: StocksDocAccessFields_HistoricPrices_Id_CreateResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_id_Delete?: StocksDocAccessFields_HistoricPrices_Id_DeleteResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_id_Read?: StocksDocAccessFields_HistoricPrices_Id_ReadResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_id_Update?: StocksDocAccessFields_HistoricPrices_Id_UpdateResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_price?: StocksDocAccessFields_HistoricPrices_PriceResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_price_Create?: StocksDocAccessFields_HistoricPrices_Price_CreateResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_price_Delete?: StocksDocAccessFields_HistoricPrices_Price_DeleteResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_price_Read?: StocksDocAccessFields_HistoricPrices_Price_ReadResolvers<ContextType>;
  StocksDocAccessFields_historicPrices_price_Update?: StocksDocAccessFields_HistoricPrices_Price_UpdateResolvers<ContextType>;
  StocksDocAccessFields_issuerId?: StocksDocAccessFields_IssuerIdResolvers<ContextType>;
  StocksDocAccessFields_issuerId_Create?: StocksDocAccessFields_IssuerId_CreateResolvers<ContextType>;
  StocksDocAccessFields_issuerId_Delete?: StocksDocAccessFields_IssuerId_DeleteResolvers<ContextType>;
  StocksDocAccessFields_issuerId_Read?: StocksDocAccessFields_IssuerId_ReadResolvers<ContextType>;
  StocksDocAccessFields_issuerId_Update?: StocksDocAccessFields_IssuerId_UpdateResolvers<ContextType>;
  StocksDocAccessFields_latestPrice?: StocksDocAccessFields_LatestPriceResolvers<ContextType>;
  StocksDocAccessFields_latestPrice_Create?: StocksDocAccessFields_LatestPrice_CreateResolvers<ContextType>;
  StocksDocAccessFields_latestPrice_Delete?: StocksDocAccessFields_LatestPrice_DeleteResolvers<ContextType>;
  StocksDocAccessFields_latestPrice_Read?: StocksDocAccessFields_LatestPrice_ReadResolvers<ContextType>;
  StocksDocAccessFields_latestPrice_Update?: StocksDocAccessFields_LatestPrice_UpdateResolvers<ContextType>;
  StocksDocAccessFields_name?: StocksDocAccessFields_NameResolvers<ContextType>;
  StocksDocAccessFields_name_Create?: StocksDocAccessFields_Name_CreateResolvers<ContextType>;
  StocksDocAccessFields_name_Delete?: StocksDocAccessFields_Name_DeleteResolvers<ContextType>;
  StocksDocAccessFields_name_Read?: StocksDocAccessFields_Name_ReadResolvers<ContextType>;
  StocksDocAccessFields_name_Update?: StocksDocAccessFields_Name_UpdateResolvers<ContextType>;
  StocksDocAccessFields_securityId?: StocksDocAccessFields_SecurityIdResolvers<ContextType>;
  StocksDocAccessFields_securityId_Create?: StocksDocAccessFields_SecurityId_CreateResolvers<ContextType>;
  StocksDocAccessFields_securityId_Delete?: StocksDocAccessFields_SecurityId_DeleteResolvers<ContextType>;
  StocksDocAccessFields_securityId_Read?: StocksDocAccessFields_SecurityId_ReadResolvers<ContextType>;
  StocksDocAccessFields_securityId_Update?: StocksDocAccessFields_SecurityId_UpdateResolvers<ContextType>;
  StocksDocAccessFields_symbol?: StocksDocAccessFields_SymbolResolvers<ContextType>;
  StocksDocAccessFields_symbol_Create?: StocksDocAccessFields_Symbol_CreateResolvers<ContextType>;
  StocksDocAccessFields_symbol_Delete?: StocksDocAccessFields_Symbol_DeleteResolvers<ContextType>;
  StocksDocAccessFields_symbol_Read?: StocksDocAccessFields_Symbol_ReadResolvers<ContextType>;
  StocksDocAccessFields_symbol_Update?: StocksDocAccessFields_Symbol_UpdateResolvers<ContextType>;
  StocksDocAccessFields_users?: StocksDocAccessFields_UsersResolvers<ContextType>;
  StocksDocAccessFields_users_Create?: StocksDocAccessFields_Users_CreateResolvers<ContextType>;
  StocksDocAccessFields_users_Delete?: StocksDocAccessFields_Users_DeleteResolvers<ContextType>;
  StocksDocAccessFields_users_Read?: StocksDocAccessFields_Users_ReadResolvers<ContextType>;
  StocksDocAccessFields_users_Update?: StocksDocAccessFields_Users_UpdateResolvers<ContextType>;
  StocksFields?: StocksFieldsResolvers<ContextType>;
  StocksFields_DPR?: StocksFields_DprResolvers<ContextType>;
  StocksFields_DPR_Create?: StocksFields_Dpr_CreateResolvers<ContextType>;
  StocksFields_DPR_Delete?: StocksFields_Dpr_DeleteResolvers<ContextType>;
  StocksFields_DPR_Read?: StocksFields_Dpr_ReadResolvers<ContextType>;
  StocksFields_DPR_Update?: StocksFields_Dpr_UpdateResolvers<ContextType>;
  StocksFields_ISIN?: StocksFields_IsinResolvers<ContextType>;
  StocksFields_ISIN_Create?: StocksFields_Isin_CreateResolvers<ContextType>;
  StocksFields_ISIN_Delete?: StocksFields_Isin_DeleteResolvers<ContextType>;
  StocksFields_ISIN_Read?: StocksFields_Isin_ReadResolvers<ContextType>;
  StocksFields_ISIN_Update?: StocksFields_Isin_UpdateResolvers<ContextType>;
  StocksFields_PE?: StocksFields_PeResolvers<ContextType>;
  StocksFields_PE_Create?: StocksFields_Pe_CreateResolvers<ContextType>;
  StocksFields_PE_Delete?: StocksFields_Pe_DeleteResolvers<ContextType>;
  StocksFields_PE_Read?: StocksFields_Pe_ReadResolvers<ContextType>;
  StocksFields_PE_Update?: StocksFields_Pe_UpdateResolvers<ContextType>;
  StocksFields_capital?: StocksFields_CapitalResolvers<ContextType>;
  StocksFields_capital_Create?: StocksFields_Capital_CreateResolvers<ContextType>;
  StocksFields_capital_Delete?: StocksFields_Capital_DeleteResolvers<ContextType>;
  StocksFields_capital_Read?: StocksFields_Capital_ReadResolvers<ContextType>;
  StocksFields_capital_Update?: StocksFields_Capital_UpdateResolvers<ContextType>;
  StocksFields_dividends?: StocksFields_DividendsResolvers<ContextType>;
  StocksFields_dividends_Create?: StocksFields_Dividends_CreateResolvers<ContextType>;
  StocksFields_dividends_Delete?: StocksFields_Dividends_DeleteResolvers<ContextType>;
  StocksFields_dividends_Read?: StocksFields_Dividends_ReadResolvers<ContextType>;
  StocksFields_dividends_Update?: StocksFields_Dividends_UpdateResolvers<ContextType>;
  StocksFields_hebrewName?: StocksFields_HebrewNameResolvers<ContextType>;
  StocksFields_hebrewName_Create?: StocksFields_HebrewName_CreateResolvers<ContextType>;
  StocksFields_hebrewName_Delete?: StocksFields_HebrewName_DeleteResolvers<ContextType>;
  StocksFields_hebrewName_Read?: StocksFields_HebrewName_ReadResolvers<ContextType>;
  StocksFields_hebrewName_Update?: StocksFields_HebrewName_UpdateResolvers<ContextType>;
  StocksFields_historicPrices?: StocksFields_HistoricPricesResolvers<ContextType>;
  StocksFields_historicPrices_Create?: StocksFields_HistoricPrices_CreateResolvers<ContextType>;
  StocksFields_historicPrices_Delete?: StocksFields_HistoricPrices_DeleteResolvers<ContextType>;
  StocksFields_historicPrices_Fields?: StocksFields_HistoricPrices_FieldsResolvers<ContextType>;
  StocksFields_historicPrices_Read?: StocksFields_HistoricPrices_ReadResolvers<ContextType>;
  StocksFields_historicPrices_Update?: StocksFields_HistoricPrices_UpdateResolvers<ContextType>;
  StocksFields_historicPrices_date?: StocksFields_HistoricPrices_DateResolvers<ContextType>;
  StocksFields_historicPrices_date_Create?: StocksFields_HistoricPrices_Date_CreateResolvers<ContextType>;
  StocksFields_historicPrices_date_Delete?: StocksFields_HistoricPrices_Date_DeleteResolvers<ContextType>;
  StocksFields_historicPrices_date_Read?: StocksFields_HistoricPrices_Date_ReadResolvers<ContextType>;
  StocksFields_historicPrices_date_Update?: StocksFields_HistoricPrices_Date_UpdateResolvers<ContextType>;
  StocksFields_historicPrices_id?: StocksFields_HistoricPrices_IdResolvers<ContextType>;
  StocksFields_historicPrices_id_Create?: StocksFields_HistoricPrices_Id_CreateResolvers<ContextType>;
  StocksFields_historicPrices_id_Delete?: StocksFields_HistoricPrices_Id_DeleteResolvers<ContextType>;
  StocksFields_historicPrices_id_Read?: StocksFields_HistoricPrices_Id_ReadResolvers<ContextType>;
  StocksFields_historicPrices_id_Update?: StocksFields_HistoricPrices_Id_UpdateResolvers<ContextType>;
  StocksFields_historicPrices_price?: StocksFields_HistoricPrices_PriceResolvers<ContextType>;
  StocksFields_historicPrices_price_Create?: StocksFields_HistoricPrices_Price_CreateResolvers<ContextType>;
  StocksFields_historicPrices_price_Delete?: StocksFields_HistoricPrices_Price_DeleteResolvers<ContextType>;
  StocksFields_historicPrices_price_Read?: StocksFields_HistoricPrices_Price_ReadResolvers<ContextType>;
  StocksFields_historicPrices_price_Update?: StocksFields_HistoricPrices_Price_UpdateResolvers<ContextType>;
  StocksFields_issuerId?: StocksFields_IssuerIdResolvers<ContextType>;
  StocksFields_issuerId_Create?: StocksFields_IssuerId_CreateResolvers<ContextType>;
  StocksFields_issuerId_Delete?: StocksFields_IssuerId_DeleteResolvers<ContextType>;
  StocksFields_issuerId_Read?: StocksFields_IssuerId_ReadResolvers<ContextType>;
  StocksFields_issuerId_Update?: StocksFields_IssuerId_UpdateResolvers<ContextType>;
  StocksFields_latestPrice?: StocksFields_LatestPriceResolvers<ContextType>;
  StocksFields_latestPrice_Create?: StocksFields_LatestPrice_CreateResolvers<ContextType>;
  StocksFields_latestPrice_Delete?: StocksFields_LatestPrice_DeleteResolvers<ContextType>;
  StocksFields_latestPrice_Read?: StocksFields_LatestPrice_ReadResolvers<ContextType>;
  StocksFields_latestPrice_Update?: StocksFields_LatestPrice_UpdateResolvers<ContextType>;
  StocksFields_name?: StocksFields_NameResolvers<ContextType>;
  StocksFields_name_Create?: StocksFields_Name_CreateResolvers<ContextType>;
  StocksFields_name_Delete?: StocksFields_Name_DeleteResolvers<ContextType>;
  StocksFields_name_Read?: StocksFields_Name_ReadResolvers<ContextType>;
  StocksFields_name_Update?: StocksFields_Name_UpdateResolvers<ContextType>;
  StocksFields_securityId?: StocksFields_SecurityIdResolvers<ContextType>;
  StocksFields_securityId_Create?: StocksFields_SecurityId_CreateResolvers<ContextType>;
  StocksFields_securityId_Delete?: StocksFields_SecurityId_DeleteResolvers<ContextType>;
  StocksFields_securityId_Read?: StocksFields_SecurityId_ReadResolvers<ContextType>;
  StocksFields_securityId_Update?: StocksFields_SecurityId_UpdateResolvers<ContextType>;
  StocksFields_symbol?: StocksFields_SymbolResolvers<ContextType>;
  StocksFields_symbol_Create?: StocksFields_Symbol_CreateResolvers<ContextType>;
  StocksFields_symbol_Delete?: StocksFields_Symbol_DeleteResolvers<ContextType>;
  StocksFields_symbol_Read?: StocksFields_Symbol_ReadResolvers<ContextType>;
  StocksFields_symbol_Update?: StocksFields_Symbol_UpdateResolvers<ContextType>;
  StocksFields_users?: StocksFields_UsersResolvers<ContextType>;
  StocksFields_users_Create?: StocksFields_Users_CreateResolvers<ContextType>;
  StocksFields_users_Delete?: StocksFields_Users_DeleteResolvers<ContextType>;
  StocksFields_users_Read?: StocksFields_Users_ReadResolvers<ContextType>;
  StocksFields_users_Update?: StocksFields_Users_UpdateResolvers<ContextType>;
  StocksReadAccess?: StocksReadAccessResolvers<ContextType>;
  StocksReadDocAccess?: StocksReadDocAccessResolvers<ContextType>;
  StocksUpdateAccess?: StocksUpdateAccessResolvers<ContextType>;
  StocksUpdateDocAccess?: StocksUpdateDocAccessResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  User_Stocks?: User_StocksResolvers<ContextType>;
  User_Stocks_Dividends?: User_Stocks_DividendsResolvers<ContextType>;
  User_Transactions?: User_TransactionsResolvers<ContextType>;
  Users?: UsersResolvers<ContextType>;
  UsersCreateAccess?: UsersCreateAccessResolvers<ContextType>;
  UsersCreateDocAccess?: UsersCreateDocAccessResolvers<ContextType>;
  UsersDeleteAccess?: UsersDeleteAccessResolvers<ContextType>;
  UsersDeleteDocAccess?: UsersDeleteDocAccessResolvers<ContextType>;
  UsersDocAccessFields?: UsersDocAccessFieldsResolvers<ContextType>;
  UsersDocAccessFields_accountId?: UsersDocAccessFields_AccountIdResolvers<ContextType>;
  UsersDocAccessFields_accountId_Create?: UsersDocAccessFields_AccountId_CreateResolvers<ContextType>;
  UsersDocAccessFields_accountId_Delete?: UsersDocAccessFields_AccountId_DeleteResolvers<ContextType>;
  UsersDocAccessFields_accountId_Read?: UsersDocAccessFields_AccountId_ReadResolvers<ContextType>;
  UsersDocAccessFields_accountId_Update?: UsersDocAccessFields_AccountId_UpdateResolvers<ContextType>;
  UsersDocAccessFields_balance?: UsersDocAccessFields_BalanceResolvers<ContextType>;
  UsersDocAccessFields_balance_Create?: UsersDocAccessFields_Balance_CreateResolvers<ContextType>;
  UsersDocAccessFields_balance_Delete?: UsersDocAccessFields_Balance_DeleteResolvers<ContextType>;
  UsersDocAccessFields_balance_Read?: UsersDocAccessFields_Balance_ReadResolvers<ContextType>;
  UsersDocAccessFields_balance_Update?: UsersDocAccessFields_Balance_UpdateResolvers<ContextType>;
  UsersDocAccessFields_birthday?: UsersDocAccessFields_BirthdayResolvers<ContextType>;
  UsersDocAccessFields_birthday_Create?: UsersDocAccessFields_Birthday_CreateResolvers<ContextType>;
  UsersDocAccessFields_birthday_Delete?: UsersDocAccessFields_Birthday_DeleteResolvers<ContextType>;
  UsersDocAccessFields_birthday_Read?: UsersDocAccessFields_Birthday_ReadResolvers<ContextType>;
  UsersDocAccessFields_birthday_Update?: UsersDocAccessFields_Birthday_UpdateResolvers<ContextType>;
  UsersDocAccessFields_email?: UsersDocAccessFields_EmailResolvers<ContextType>;
  UsersDocAccessFields_email_Create?: UsersDocAccessFields_Email_CreateResolvers<ContextType>;
  UsersDocAccessFields_email_Delete?: UsersDocAccessFields_Email_DeleteResolvers<ContextType>;
  UsersDocAccessFields_email_Read?: UsersDocAccessFields_Email_ReadResolvers<ContextType>;
  UsersDocAccessFields_email_Update?: UsersDocAccessFields_Email_UpdateResolvers<ContextType>;
  UsersDocAccessFields_lastName?: UsersDocAccessFields_LastNameResolvers<ContextType>;
  UsersDocAccessFields_lastName_Create?: UsersDocAccessFields_LastName_CreateResolvers<ContextType>;
  UsersDocAccessFields_lastName_Delete?: UsersDocAccessFields_LastName_DeleteResolvers<ContextType>;
  UsersDocAccessFields_lastName_Read?: UsersDocAccessFields_LastName_ReadResolvers<ContextType>;
  UsersDocAccessFields_lastName_Update?: UsersDocAccessFields_LastName_UpdateResolvers<ContextType>;
  UsersDocAccessFields_password?: UsersDocAccessFields_PasswordResolvers<ContextType>;
  UsersDocAccessFields_password_Create?: UsersDocAccessFields_Password_CreateResolvers<ContextType>;
  UsersDocAccessFields_password_Delete?: UsersDocAccessFields_Password_DeleteResolvers<ContextType>;
  UsersDocAccessFields_password_Read?: UsersDocAccessFields_Password_ReadResolvers<ContextType>;
  UsersDocAccessFields_password_Update?: UsersDocAccessFields_Password_UpdateResolvers<ContextType>;
  UsersDocAccessFields_portfolioValue?: UsersDocAccessFields_PortfolioValueResolvers<ContextType>;
  UsersDocAccessFields_portfolioValue_Create?: UsersDocAccessFields_PortfolioValue_CreateResolvers<ContextType>;
  UsersDocAccessFields_portfolioValue_Delete?: UsersDocAccessFields_PortfolioValue_DeleteResolvers<ContextType>;
  UsersDocAccessFields_portfolioValue_Read?: UsersDocAccessFields_PortfolioValue_ReadResolvers<ContextType>;
  UsersDocAccessFields_portfolioValue_Update?: UsersDocAccessFields_PortfolioValue_UpdateResolvers<ContextType>;
  UsersDocAccessFields_roles?: UsersDocAccessFields_RolesResolvers<ContextType>;
  UsersDocAccessFields_roles_Create?: UsersDocAccessFields_Roles_CreateResolvers<ContextType>;
  UsersDocAccessFields_roles_Delete?: UsersDocAccessFields_Roles_DeleteResolvers<ContextType>;
  UsersDocAccessFields_roles_Read?: UsersDocAccessFields_Roles_ReadResolvers<ContextType>;
  UsersDocAccessFields_roles_Update?: UsersDocAccessFields_Roles_UpdateResolvers<ContextType>;
  UsersDocAccessFields_stocks?: UsersDocAccessFields_StocksResolvers<ContextType>;
  UsersDocAccessFields_stocks_Create?: UsersDocAccessFields_Stocks_CreateResolvers<ContextType>;
  UsersDocAccessFields_stocks_Delete?: UsersDocAccessFields_Stocks_DeleteResolvers<ContextType>;
  UsersDocAccessFields_stocks_Fields?: UsersDocAccessFields_Stocks_FieldsResolvers<ContextType>;
  UsersDocAccessFields_stocks_Read?: UsersDocAccessFields_Stocks_ReadResolvers<ContextType>;
  UsersDocAccessFields_stocks_Update?: UsersDocAccessFields_Stocks_UpdateResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends?: UsersDocAccessFields_Stocks_DividendsResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_Create?: UsersDocAccessFields_Stocks_Dividends_CreateResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_Delete?: UsersDocAccessFields_Stocks_Dividends_DeleteResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_Fields?: UsersDocAccessFields_Stocks_Dividends_FieldsResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_Read?: UsersDocAccessFields_Stocks_Dividends_ReadResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_Update?: UsersDocAccessFields_Stocks_Dividends_UpdateResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_dividend?: UsersDocAccessFields_Stocks_Dividends_DividendResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_dividend_Create?: UsersDocAccessFields_Stocks_Dividends_Dividend_CreateResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_dividend_Delete?: UsersDocAccessFields_Stocks_Dividends_Dividend_DeleteResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_dividend_Read?: UsersDocAccessFields_Stocks_Dividends_Dividend_ReadResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_dividend_Update?: UsersDocAccessFields_Stocks_Dividends_Dividend_UpdateResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_id?: UsersDocAccessFields_Stocks_Dividends_IdResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_id_Create?: UsersDocAccessFields_Stocks_Dividends_Id_CreateResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_id_Delete?: UsersDocAccessFields_Stocks_Dividends_Id_DeleteResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_id_Read?: UsersDocAccessFields_Stocks_Dividends_Id_ReadResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_id_Update?: UsersDocAccessFields_Stocks_Dividends_Id_UpdateResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_quantity?: UsersDocAccessFields_Stocks_Dividends_QuantityResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_quantity_Create?: UsersDocAccessFields_Stocks_Dividends_Quantity_CreateResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_quantity_Delete?: UsersDocAccessFields_Stocks_Dividends_Quantity_DeleteResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_quantity_Read?: UsersDocAccessFields_Stocks_Dividends_Quantity_ReadResolvers<ContextType>;
  UsersDocAccessFields_stocks_dividends_quantity_Update?: UsersDocAccessFields_Stocks_Dividends_Quantity_UpdateResolvers<ContextType>;
  UsersDocAccessFields_stocks_id?: UsersDocAccessFields_Stocks_IdResolvers<ContextType>;
  UsersDocAccessFields_stocks_id_Create?: UsersDocAccessFields_Stocks_Id_CreateResolvers<ContextType>;
  UsersDocAccessFields_stocks_id_Delete?: UsersDocAccessFields_Stocks_Id_DeleteResolvers<ContextType>;
  UsersDocAccessFields_stocks_id_Read?: UsersDocAccessFields_Stocks_Id_ReadResolvers<ContextType>;
  UsersDocAccessFields_stocks_id_Update?: UsersDocAccessFields_Stocks_Id_UpdateResolvers<ContextType>;
  UsersDocAccessFields_stocks_quantity?: UsersDocAccessFields_Stocks_QuantityResolvers<ContextType>;
  UsersDocAccessFields_stocks_quantity_Create?: UsersDocAccessFields_Stocks_Quantity_CreateResolvers<ContextType>;
  UsersDocAccessFields_stocks_quantity_Delete?: UsersDocAccessFields_Stocks_Quantity_DeleteResolvers<ContextType>;
  UsersDocAccessFields_stocks_quantity_Read?: UsersDocAccessFields_Stocks_Quantity_ReadResolvers<ContextType>;
  UsersDocAccessFields_stocks_quantity_Update?: UsersDocAccessFields_Stocks_Quantity_UpdateResolvers<ContextType>;
  UsersDocAccessFields_stocks_stock?: UsersDocAccessFields_Stocks_StockResolvers<ContextType>;
  UsersDocAccessFields_stocks_stock_Create?: UsersDocAccessFields_Stocks_Stock_CreateResolvers<ContextType>;
  UsersDocAccessFields_stocks_stock_Delete?: UsersDocAccessFields_Stocks_Stock_DeleteResolvers<ContextType>;
  UsersDocAccessFields_stocks_stock_Read?: UsersDocAccessFields_Stocks_Stock_ReadResolvers<ContextType>;
  UsersDocAccessFields_stocks_stock_Update?: UsersDocAccessFields_Stocks_Stock_UpdateResolvers<ContextType>;
  UsersDocAccessFields_transactions?: UsersDocAccessFields_TransactionsResolvers<ContextType>;
  UsersDocAccessFields_transactions_Create?: UsersDocAccessFields_Transactions_CreateResolvers<ContextType>;
  UsersDocAccessFields_transactions_Delete?: UsersDocAccessFields_Transactions_DeleteResolvers<ContextType>;
  UsersDocAccessFields_transactions_Fields?: UsersDocAccessFields_Transactions_FieldsResolvers<ContextType>;
  UsersDocAccessFields_transactions_Read?: UsersDocAccessFields_Transactions_ReadResolvers<ContextType>;
  UsersDocAccessFields_transactions_Update?: UsersDocAccessFields_Transactions_UpdateResolvers<ContextType>;
  UsersDocAccessFields_transactions_date?: UsersDocAccessFields_Transactions_DateResolvers<ContextType>;
  UsersDocAccessFields_transactions_date_Create?: UsersDocAccessFields_Transactions_Date_CreateResolvers<ContextType>;
  UsersDocAccessFields_transactions_date_Delete?: UsersDocAccessFields_Transactions_Date_DeleteResolvers<ContextType>;
  UsersDocAccessFields_transactions_date_Read?: UsersDocAccessFields_Transactions_Date_ReadResolvers<ContextType>;
  UsersDocAccessFields_transactions_date_Update?: UsersDocAccessFields_Transactions_Date_UpdateResolvers<ContextType>;
  UsersDocAccessFields_transactions_id?: UsersDocAccessFields_Transactions_IdResolvers<ContextType>;
  UsersDocAccessFields_transactions_id_Create?: UsersDocAccessFields_Transactions_Id_CreateResolvers<ContextType>;
  UsersDocAccessFields_transactions_id_Delete?: UsersDocAccessFields_Transactions_Id_DeleteResolvers<ContextType>;
  UsersDocAccessFields_transactions_id_Read?: UsersDocAccessFields_Transactions_Id_ReadResolvers<ContextType>;
  UsersDocAccessFields_transactions_id_Update?: UsersDocAccessFields_Transactions_Id_UpdateResolvers<ContextType>;
  UsersDocAccessFields_transactions_price?: UsersDocAccessFields_Transactions_PriceResolvers<ContextType>;
  UsersDocAccessFields_transactions_price_Create?: UsersDocAccessFields_Transactions_Price_CreateResolvers<ContextType>;
  UsersDocAccessFields_transactions_price_Delete?: UsersDocAccessFields_Transactions_Price_DeleteResolvers<ContextType>;
  UsersDocAccessFields_transactions_price_Read?: UsersDocAccessFields_Transactions_Price_ReadResolvers<ContextType>;
  UsersDocAccessFields_transactions_price_Update?: UsersDocAccessFields_Transactions_Price_UpdateResolvers<ContextType>;
  UsersDocAccessFields_transactions_quantity?: UsersDocAccessFields_Transactions_QuantityResolvers<ContextType>;
  UsersDocAccessFields_transactions_quantity_Create?: UsersDocAccessFields_Transactions_Quantity_CreateResolvers<ContextType>;
  UsersDocAccessFields_transactions_quantity_Delete?: UsersDocAccessFields_Transactions_Quantity_DeleteResolvers<ContextType>;
  UsersDocAccessFields_transactions_quantity_Read?: UsersDocAccessFields_Transactions_Quantity_ReadResolvers<ContextType>;
  UsersDocAccessFields_transactions_quantity_Update?: UsersDocAccessFields_Transactions_Quantity_UpdateResolvers<ContextType>;
  UsersDocAccessFields_transactions_status?: UsersDocAccessFields_Transactions_StatusResolvers<ContextType>;
  UsersDocAccessFields_transactions_status_Create?: UsersDocAccessFields_Transactions_Status_CreateResolvers<ContextType>;
  UsersDocAccessFields_transactions_status_Delete?: UsersDocAccessFields_Transactions_Status_DeleteResolvers<ContextType>;
  UsersDocAccessFields_transactions_status_Read?: UsersDocAccessFields_Transactions_Status_ReadResolvers<ContextType>;
  UsersDocAccessFields_transactions_status_Update?: UsersDocAccessFields_Transactions_Status_UpdateResolvers<ContextType>;
  UsersDocAccessFields_transactions_stock?: UsersDocAccessFields_Transactions_StockResolvers<ContextType>;
  UsersDocAccessFields_transactions_stock_Create?: UsersDocAccessFields_Transactions_Stock_CreateResolvers<ContextType>;
  UsersDocAccessFields_transactions_stock_Delete?: UsersDocAccessFields_Transactions_Stock_DeleteResolvers<ContextType>;
  UsersDocAccessFields_transactions_stock_Read?: UsersDocAccessFields_Transactions_Stock_ReadResolvers<ContextType>;
  UsersDocAccessFields_transactions_stock_Update?: UsersDocAccessFields_Transactions_Stock_UpdateResolvers<ContextType>;
  UsersDocAccessFields_transactions_sum?: UsersDocAccessFields_Transactions_SumResolvers<ContextType>;
  UsersDocAccessFields_transactions_sum_Create?: UsersDocAccessFields_Transactions_Sum_CreateResolvers<ContextType>;
  UsersDocAccessFields_transactions_sum_Delete?: UsersDocAccessFields_Transactions_Sum_DeleteResolvers<ContextType>;
  UsersDocAccessFields_transactions_sum_Read?: UsersDocAccessFields_Transactions_Sum_ReadResolvers<ContextType>;
  UsersDocAccessFields_transactions_sum_Update?: UsersDocAccessFields_Transactions_Sum_UpdateResolvers<ContextType>;
  UsersDocAccessFields_transactions_type?: UsersDocAccessFields_Transactions_TypeResolvers<ContextType>;
  UsersDocAccessFields_transactions_type_Create?: UsersDocAccessFields_Transactions_Type_CreateResolvers<ContextType>;
  UsersDocAccessFields_transactions_type_Delete?: UsersDocAccessFields_Transactions_Type_DeleteResolvers<ContextType>;
  UsersDocAccessFields_transactions_type_Read?: UsersDocAccessFields_Transactions_Type_ReadResolvers<ContextType>;
  UsersDocAccessFields_transactions_type_Update?: UsersDocAccessFields_Transactions_Type_UpdateResolvers<ContextType>;
  UsersDocAccessFields_username?: UsersDocAccessFields_UsernameResolvers<ContextType>;
  UsersDocAccessFields_username_Create?: UsersDocAccessFields_Username_CreateResolvers<ContextType>;
  UsersDocAccessFields_username_Delete?: UsersDocAccessFields_Username_DeleteResolvers<ContextType>;
  UsersDocAccessFields_username_Read?: UsersDocAccessFields_Username_ReadResolvers<ContextType>;
  UsersDocAccessFields_username_Update?: UsersDocAccessFields_Username_UpdateResolvers<ContextType>;
  UsersFields?: UsersFieldsResolvers<ContextType>;
  UsersFields_accountId?: UsersFields_AccountIdResolvers<ContextType>;
  UsersFields_accountId_Create?: UsersFields_AccountId_CreateResolvers<ContextType>;
  UsersFields_accountId_Delete?: UsersFields_AccountId_DeleteResolvers<ContextType>;
  UsersFields_accountId_Read?: UsersFields_AccountId_ReadResolvers<ContextType>;
  UsersFields_accountId_Update?: UsersFields_AccountId_UpdateResolvers<ContextType>;
  UsersFields_balance?: UsersFields_BalanceResolvers<ContextType>;
  UsersFields_balance_Create?: UsersFields_Balance_CreateResolvers<ContextType>;
  UsersFields_balance_Delete?: UsersFields_Balance_DeleteResolvers<ContextType>;
  UsersFields_balance_Read?: UsersFields_Balance_ReadResolvers<ContextType>;
  UsersFields_balance_Update?: UsersFields_Balance_UpdateResolvers<ContextType>;
  UsersFields_birthday?: UsersFields_BirthdayResolvers<ContextType>;
  UsersFields_birthday_Create?: UsersFields_Birthday_CreateResolvers<ContextType>;
  UsersFields_birthday_Delete?: UsersFields_Birthday_DeleteResolvers<ContextType>;
  UsersFields_birthday_Read?: UsersFields_Birthday_ReadResolvers<ContextType>;
  UsersFields_birthday_Update?: UsersFields_Birthday_UpdateResolvers<ContextType>;
  UsersFields_email?: UsersFields_EmailResolvers<ContextType>;
  UsersFields_email_Create?: UsersFields_Email_CreateResolvers<ContextType>;
  UsersFields_email_Delete?: UsersFields_Email_DeleteResolvers<ContextType>;
  UsersFields_email_Read?: UsersFields_Email_ReadResolvers<ContextType>;
  UsersFields_email_Update?: UsersFields_Email_UpdateResolvers<ContextType>;
  UsersFields_lastName?: UsersFields_LastNameResolvers<ContextType>;
  UsersFields_lastName_Create?: UsersFields_LastName_CreateResolvers<ContextType>;
  UsersFields_lastName_Delete?: UsersFields_LastName_DeleteResolvers<ContextType>;
  UsersFields_lastName_Read?: UsersFields_LastName_ReadResolvers<ContextType>;
  UsersFields_lastName_Update?: UsersFields_LastName_UpdateResolvers<ContextType>;
  UsersFields_password?: UsersFields_PasswordResolvers<ContextType>;
  UsersFields_password_Create?: UsersFields_Password_CreateResolvers<ContextType>;
  UsersFields_password_Delete?: UsersFields_Password_DeleteResolvers<ContextType>;
  UsersFields_password_Read?: UsersFields_Password_ReadResolvers<ContextType>;
  UsersFields_password_Update?: UsersFields_Password_UpdateResolvers<ContextType>;
  UsersFields_portfolioValue?: UsersFields_PortfolioValueResolvers<ContextType>;
  UsersFields_portfolioValue_Create?: UsersFields_PortfolioValue_CreateResolvers<ContextType>;
  UsersFields_portfolioValue_Delete?: UsersFields_PortfolioValue_DeleteResolvers<ContextType>;
  UsersFields_portfolioValue_Read?: UsersFields_PortfolioValue_ReadResolvers<ContextType>;
  UsersFields_portfolioValue_Update?: UsersFields_PortfolioValue_UpdateResolvers<ContextType>;
  UsersFields_roles?: UsersFields_RolesResolvers<ContextType>;
  UsersFields_roles_Create?: UsersFields_Roles_CreateResolvers<ContextType>;
  UsersFields_roles_Delete?: UsersFields_Roles_DeleteResolvers<ContextType>;
  UsersFields_roles_Read?: UsersFields_Roles_ReadResolvers<ContextType>;
  UsersFields_roles_Update?: UsersFields_Roles_UpdateResolvers<ContextType>;
  UsersFields_stocks?: UsersFields_StocksResolvers<ContextType>;
  UsersFields_stocks_Create?: UsersFields_Stocks_CreateResolvers<ContextType>;
  UsersFields_stocks_Delete?: UsersFields_Stocks_DeleteResolvers<ContextType>;
  UsersFields_stocks_Fields?: UsersFields_Stocks_FieldsResolvers<ContextType>;
  UsersFields_stocks_Read?: UsersFields_Stocks_ReadResolvers<ContextType>;
  UsersFields_stocks_Update?: UsersFields_Stocks_UpdateResolvers<ContextType>;
  UsersFields_stocks_dividends?: UsersFields_Stocks_DividendsResolvers<ContextType>;
  UsersFields_stocks_dividends_Create?: UsersFields_Stocks_Dividends_CreateResolvers<ContextType>;
  UsersFields_stocks_dividends_Delete?: UsersFields_Stocks_Dividends_DeleteResolvers<ContextType>;
  UsersFields_stocks_dividends_Fields?: UsersFields_Stocks_Dividends_FieldsResolvers<ContextType>;
  UsersFields_stocks_dividends_Read?: UsersFields_Stocks_Dividends_ReadResolvers<ContextType>;
  UsersFields_stocks_dividends_Update?: UsersFields_Stocks_Dividends_UpdateResolvers<ContextType>;
  UsersFields_stocks_dividends_dividend?: UsersFields_Stocks_Dividends_DividendResolvers<ContextType>;
  UsersFields_stocks_dividends_dividend_Create?: UsersFields_Stocks_Dividends_Dividend_CreateResolvers<ContextType>;
  UsersFields_stocks_dividends_dividend_Delete?: UsersFields_Stocks_Dividends_Dividend_DeleteResolvers<ContextType>;
  UsersFields_stocks_dividends_dividend_Read?: UsersFields_Stocks_Dividends_Dividend_ReadResolvers<ContextType>;
  UsersFields_stocks_dividends_dividend_Update?: UsersFields_Stocks_Dividends_Dividend_UpdateResolvers<ContextType>;
  UsersFields_stocks_dividends_id?: UsersFields_Stocks_Dividends_IdResolvers<ContextType>;
  UsersFields_stocks_dividends_id_Create?: UsersFields_Stocks_Dividends_Id_CreateResolvers<ContextType>;
  UsersFields_stocks_dividends_id_Delete?: UsersFields_Stocks_Dividends_Id_DeleteResolvers<ContextType>;
  UsersFields_stocks_dividends_id_Read?: UsersFields_Stocks_Dividends_Id_ReadResolvers<ContextType>;
  UsersFields_stocks_dividends_id_Update?: UsersFields_Stocks_Dividends_Id_UpdateResolvers<ContextType>;
  UsersFields_stocks_dividends_quantity?: UsersFields_Stocks_Dividends_QuantityResolvers<ContextType>;
  UsersFields_stocks_dividends_quantity_Create?: UsersFields_Stocks_Dividends_Quantity_CreateResolvers<ContextType>;
  UsersFields_stocks_dividends_quantity_Delete?: UsersFields_Stocks_Dividends_Quantity_DeleteResolvers<ContextType>;
  UsersFields_stocks_dividends_quantity_Read?: UsersFields_Stocks_Dividends_Quantity_ReadResolvers<ContextType>;
  UsersFields_stocks_dividends_quantity_Update?: UsersFields_Stocks_Dividends_Quantity_UpdateResolvers<ContextType>;
  UsersFields_stocks_id?: UsersFields_Stocks_IdResolvers<ContextType>;
  UsersFields_stocks_id_Create?: UsersFields_Stocks_Id_CreateResolvers<ContextType>;
  UsersFields_stocks_id_Delete?: UsersFields_Stocks_Id_DeleteResolvers<ContextType>;
  UsersFields_stocks_id_Read?: UsersFields_Stocks_Id_ReadResolvers<ContextType>;
  UsersFields_stocks_id_Update?: UsersFields_Stocks_Id_UpdateResolvers<ContextType>;
  UsersFields_stocks_quantity?: UsersFields_Stocks_QuantityResolvers<ContextType>;
  UsersFields_stocks_quantity_Create?: UsersFields_Stocks_Quantity_CreateResolvers<ContextType>;
  UsersFields_stocks_quantity_Delete?: UsersFields_Stocks_Quantity_DeleteResolvers<ContextType>;
  UsersFields_stocks_quantity_Read?: UsersFields_Stocks_Quantity_ReadResolvers<ContextType>;
  UsersFields_stocks_quantity_Update?: UsersFields_Stocks_Quantity_UpdateResolvers<ContextType>;
  UsersFields_stocks_stock?: UsersFields_Stocks_StockResolvers<ContextType>;
  UsersFields_stocks_stock_Create?: UsersFields_Stocks_Stock_CreateResolvers<ContextType>;
  UsersFields_stocks_stock_Delete?: UsersFields_Stocks_Stock_DeleteResolvers<ContextType>;
  UsersFields_stocks_stock_Read?: UsersFields_Stocks_Stock_ReadResolvers<ContextType>;
  UsersFields_stocks_stock_Update?: UsersFields_Stocks_Stock_UpdateResolvers<ContextType>;
  UsersFields_transactions?: UsersFields_TransactionsResolvers<ContextType>;
  UsersFields_transactions_Create?: UsersFields_Transactions_CreateResolvers<ContextType>;
  UsersFields_transactions_Delete?: UsersFields_Transactions_DeleteResolvers<ContextType>;
  UsersFields_transactions_Fields?: UsersFields_Transactions_FieldsResolvers<ContextType>;
  UsersFields_transactions_Read?: UsersFields_Transactions_ReadResolvers<ContextType>;
  UsersFields_transactions_Update?: UsersFields_Transactions_UpdateResolvers<ContextType>;
  UsersFields_transactions_date?: UsersFields_Transactions_DateResolvers<ContextType>;
  UsersFields_transactions_date_Create?: UsersFields_Transactions_Date_CreateResolvers<ContextType>;
  UsersFields_transactions_date_Delete?: UsersFields_Transactions_Date_DeleteResolvers<ContextType>;
  UsersFields_transactions_date_Read?: UsersFields_Transactions_Date_ReadResolvers<ContextType>;
  UsersFields_transactions_date_Update?: UsersFields_Transactions_Date_UpdateResolvers<ContextType>;
  UsersFields_transactions_id?: UsersFields_Transactions_IdResolvers<ContextType>;
  UsersFields_transactions_id_Create?: UsersFields_Transactions_Id_CreateResolvers<ContextType>;
  UsersFields_transactions_id_Delete?: UsersFields_Transactions_Id_DeleteResolvers<ContextType>;
  UsersFields_transactions_id_Read?: UsersFields_Transactions_Id_ReadResolvers<ContextType>;
  UsersFields_transactions_id_Update?: UsersFields_Transactions_Id_UpdateResolvers<ContextType>;
  UsersFields_transactions_price?: UsersFields_Transactions_PriceResolvers<ContextType>;
  UsersFields_transactions_price_Create?: UsersFields_Transactions_Price_CreateResolvers<ContextType>;
  UsersFields_transactions_price_Delete?: UsersFields_Transactions_Price_DeleteResolvers<ContextType>;
  UsersFields_transactions_price_Read?: UsersFields_Transactions_Price_ReadResolvers<ContextType>;
  UsersFields_transactions_price_Update?: UsersFields_Transactions_Price_UpdateResolvers<ContextType>;
  UsersFields_transactions_quantity?: UsersFields_Transactions_QuantityResolvers<ContextType>;
  UsersFields_transactions_quantity_Create?: UsersFields_Transactions_Quantity_CreateResolvers<ContextType>;
  UsersFields_transactions_quantity_Delete?: UsersFields_Transactions_Quantity_DeleteResolvers<ContextType>;
  UsersFields_transactions_quantity_Read?: UsersFields_Transactions_Quantity_ReadResolvers<ContextType>;
  UsersFields_transactions_quantity_Update?: UsersFields_Transactions_Quantity_UpdateResolvers<ContextType>;
  UsersFields_transactions_status?: UsersFields_Transactions_StatusResolvers<ContextType>;
  UsersFields_transactions_status_Create?: UsersFields_Transactions_Status_CreateResolvers<ContextType>;
  UsersFields_transactions_status_Delete?: UsersFields_Transactions_Status_DeleteResolvers<ContextType>;
  UsersFields_transactions_status_Read?: UsersFields_Transactions_Status_ReadResolvers<ContextType>;
  UsersFields_transactions_status_Update?: UsersFields_Transactions_Status_UpdateResolvers<ContextType>;
  UsersFields_transactions_stock?: UsersFields_Transactions_StockResolvers<ContextType>;
  UsersFields_transactions_stock_Create?: UsersFields_Transactions_Stock_CreateResolvers<ContextType>;
  UsersFields_transactions_stock_Delete?: UsersFields_Transactions_Stock_DeleteResolvers<ContextType>;
  UsersFields_transactions_stock_Read?: UsersFields_Transactions_Stock_ReadResolvers<ContextType>;
  UsersFields_transactions_stock_Update?: UsersFields_Transactions_Stock_UpdateResolvers<ContextType>;
  UsersFields_transactions_sum?: UsersFields_Transactions_SumResolvers<ContextType>;
  UsersFields_transactions_sum_Create?: UsersFields_Transactions_Sum_CreateResolvers<ContextType>;
  UsersFields_transactions_sum_Delete?: UsersFields_Transactions_Sum_DeleteResolvers<ContextType>;
  UsersFields_transactions_sum_Read?: UsersFields_Transactions_Sum_ReadResolvers<ContextType>;
  UsersFields_transactions_sum_Update?: UsersFields_Transactions_Sum_UpdateResolvers<ContextType>;
  UsersFields_transactions_type?: UsersFields_Transactions_TypeResolvers<ContextType>;
  UsersFields_transactions_type_Create?: UsersFields_Transactions_Type_CreateResolvers<ContextType>;
  UsersFields_transactions_type_Delete?: UsersFields_Transactions_Type_DeleteResolvers<ContextType>;
  UsersFields_transactions_type_Read?: UsersFields_Transactions_Type_ReadResolvers<ContextType>;
  UsersFields_transactions_type_Update?: UsersFields_Transactions_Type_UpdateResolvers<ContextType>;
  UsersFields_username?: UsersFields_UsernameResolvers<ContextType>;
  UsersFields_username_Create?: UsersFields_Username_CreateResolvers<ContextType>;
  UsersFields_username_Delete?: UsersFields_Username_DeleteResolvers<ContextType>;
  UsersFields_username_Read?: UsersFields_Username_ReadResolvers<ContextType>;
  UsersFields_username_Update?: UsersFields_Username_UpdateResolvers<ContextType>;
  UsersReadAccess?: UsersReadAccessResolvers<ContextType>;
  UsersReadDocAccess?: UsersReadDocAccessResolvers<ContextType>;
  UsersUnlockAccess?: UsersUnlockAccessResolvers<ContextType>;
  UsersUnlockDocAccess?: UsersUnlockDocAccessResolvers<ContextType>;
  UsersUpdateAccess?: UsersUpdateAccessResolvers<ContextType>;
  UsersUpdateDocAccess?: UsersUpdateDocAccessResolvers<ContextType>;
  dividendsAccess?: DividendsAccessResolvers<ContextType>;
  dividendsDocAccess?: DividendsDocAccessResolvers<ContextType>;
  stocksAccess?: StocksAccessResolvers<ContextType>;
  stocksDocAccess?: StocksDocAccessResolvers<ContextType>;
  usersAccess?: UsersAccessResolvers<ContextType>;
  usersDocAccess?: UsersDocAccessResolvers<ContextType>;
  usersJWT?: UsersJwtResolvers<ContextType>;
  usersLoginResult?: UsersLoginResultResolvers<ContextType>;
  usersMe?: UsersMeResolvers<ContextType>;
  usersRefreshedUser?: UsersRefreshedUserResolvers<ContextType>;
  usersResetPassword?: UsersResetPasswordResolvers<ContextType>;
};

