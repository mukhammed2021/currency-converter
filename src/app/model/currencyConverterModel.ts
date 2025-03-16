export interface CurrencyConverterModel {
  base: 'USD';
  date: string;
  privacy: string;
  rates: {
    [key: string]: number;
  };
  success: boolean;
  terms: string;
  timestamp: number;
}
