import exchanges from '@/assets/data.json';
import ExchangeByCodeType from '@/features/chatbot/types/ExchangeByCodeType';
import ExchangeType from '@/features/chatbot/types/ExchangeType';
import StockType from '@/features/chatbot/types/StockType';
import { useCallback, useMemo } from 'react';
import OptionType from '../types/OptionType';

//Normalizing the data in order to directly access it (without looping through the entire arrays multiple times)
const useExchanges = () => {
  const reduceStocks = useCallback((stocks: StockType[]) => {
    return stocks.reduce(
      (stocksByCode, stock) => ({
        ...stocksByCode,
        [stock.code]: stock,
      }),
      {},
    );
  }, []);

  const exchangesByCode: ExchangeByCodeType = useMemo(
    () =>
      (exchanges as ExchangeType[]).reduce(
        (exchangesByCode, exchange) => ({
          ...exchangesByCode,
          [exchange.code]: {
            ...exchange,
            topStocks: reduceStocks(exchange.topStocks),
          },
        }),
        {},
      ),
    [reduceStocks],
  );

  const getExchangeOptions = useCallback((): OptionType[] => {
    return exchanges.map((exchange) => ({
      value: exchange.code,
      label: exchange.stockExchange,
    }));
  }, []);

  const getStockOptions = useCallback(
    (exchangeCode: string | null): OptionType[] => {
      if (!exchangeCode) return [];
      const topStocks = exchangesByCode[exchangeCode]?.topStocks ?? {};
      return Object.keys(topStocks).map((key) => ({
        value: topStocks[key].code,
        label: topStocks[key].stockName,
      }));
    },
    [exchangesByCode],
  );

  return { exchangesByCode, getExchangeOptions, getStockOptions };
};

export default useExchanges;
