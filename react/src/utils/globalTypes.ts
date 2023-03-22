export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  EmailAddress: any;
  JSON: any;
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
