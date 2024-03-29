import { Dividend, Stock, User, User_Stocks, User_Transactions } from 'utils/globalTypes';

export enum ActionStatus {
  UNSUBMITTED = 'UNSUBMITTED',
  AWAITING_APPROVAL = 'AWAITING_APPROVAL',
  COMPLETED = 'COMPLETED',
}

export enum ActionType {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum AuthStatus {
  SignedIn = 'signedin',
  SignedOut = 'signedout',
  Loading = 'loading',
}

export enum Currency {
  EUR = 'EUR',
  ILS = 'ILS',
  USD = 'USD',
}

export enum Gender {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
}

export enum Role {
  GUIDE = 'GUIDE',
  AUTHENTICATED = 'AUTHENTICATED',
}

export enum Route {
  HOME = '',
  LOGIN = 'login',
  REGISTER = 'register',
  STOCK = 'stock',
  STOCKS = 'stocks',
  USER = 'user',
  USERS = 'users',
}

export type Order = 'asc' | 'desc';

export interface AuthContextState {
  authStatus?: AuthStatus,
  getMe: () => Promise<IUser>,
  meLoading: boolean
  loginDetails: LoginDetails,
  login: () => Promise<LoginResult>,
  logout: () => void,
  updateLoginDetails: (i: Partial<LoginDetails>) => void,
  userData: { id: string, username: string, roles: string[] | null },
}

export interface Column<T> {
  header: string;
  accessorKey: keyof T;
  formatValue?: (value: any) => string;
  align?: 'left' | 'right' | 'center';
}

export interface HistoricPrice {
  id: string;
  date?: Date;
  stockPrice?: number;
}

export interface IDividend extends Dividend {
  id: string;
}

export interface IStock extends Stock {
  id: string;
}

export interface ITransaction extends User_Transactions {
  id: string;
  value?: number;
}

export interface IUser extends User {
  id: string;
  stocks: IUserStock[];
  transactions: ITransaction[];
}

export interface IUserStock extends User_Stocks {
  id: string;
  value?: number;
}

export interface LoginDetails {
  identifier: string;
  password: string;
}

export interface LoginResult {
  message: string;
  success: boolean;
}

export interface RouteParams {
  [ Route.STOCK ]: { id: string; },
  [ Route.USER ]: { id: string; },
}

export interface StocksContextState {
  getStock: (id: string) => void;
  getStocks: () => void;
  handleGetStock: (id: string) => void;
  loading: boolean;
  stock: IStock;
  stocks: IStock[];
}

export interface UsersContextState {
  getUsers: () => void;
  handleGetUser: (id: string) => void;
  loading?: boolean;
  user: IUser;
  users: IUser[];
}
