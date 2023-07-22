import payload from "payload";

export const calculatePortfolioValue = async (user: any) => {
  let portfolioValue = 0;
  const userStocks = await payload.find({
    collection: 'stocks',
    where: {
      id: {
        in: user.stocks?.map((stock: any) => stock.stock) || [],
      }
    },
  });
  if (!userStocks) return portfolioValue;
  
  for (const userStock of userStocks.docs) {
    const userStockData = user.stocks?.find((stock) => stock.stock === userStock.id);
    if (!userStockData || !userStock.latestPrice) continue;
    
    const value = userStockData.quantity * userStock.latestPrice;
    portfolioValue += value;
  }
  return portfolioValue;
};

export const calculateBalance = async (user: any) => {
  let balance = user.balance;
  //adjust balance for each transaction or dividend
  
  return balance;
}
    

export const isKid = (siblingData) => {
  return siblingData?.roles?.includes('kid');
}
