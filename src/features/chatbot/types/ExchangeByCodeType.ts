import StockType from './StockType';

type ExchangeByCodeType = {
  [code: string]: {
    code: string;
    stockExchange: string;
    topStocks: {
      [code: string]: StockType;
    };
  };
};

export default ExchangeByCodeType;
