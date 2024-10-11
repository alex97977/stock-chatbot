import StockType from './StockType';

type ExchangeType = {
  code: string;
  stockExchange: string;
  topStocks: StockType[];
};

export default ExchangeType;
