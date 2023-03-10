export interface User {
  id: string;
  username: string;
  lastName?: string;
  roles: ('admin' | 'kid')[];
  userDetails: {
    accountId?: string;
    birthday?: string;
    portfolioValue?: number;
    balance?: number;
    stocks: {
      stock?: string | Stock;
      quantity?: number;
      id?: string;
    }[];
    transactions: {
      type: 'buy' | 'sell' | 'deposit' | 'withdrawal';
      status?: 'pending' | 'completed';
      sum: number;
      date: string;
      stock?: string | Stock;
      quantity?: number;
      price?: number;
      id?: string;
    }[];
  };
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
  password?: string;
}
export interface Stock {
  id: string;
  name: string;
  hebrewName?: string;
  symbol: string;
  ISIN?: string;
  issuerId?: number;
  securityId?: number;
  PE?: number;
  DPR?: number;
  capital?: number;
  historicPrices: {
    date: string;
    price: number;
    id?: string;
  }[];
  dividends: {
    quarter: string;
    date: string;
    xdate?: string;
    dividend?: number;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
