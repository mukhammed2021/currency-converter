import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { type CurrencyConverterModel } from '../model/currencyConverterModel';
import { type ConvertCurrency } from '../model/convertCurrencyModel';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConverterService {
  private http = inject(HttpClient);

  public getCurrencies() {
    return this.http.get<CurrencyConverterModel>(
      `https://api.fxratesapi.com/latest?api_key=${environment.token}`,
    );
  }

  public convertCurrencies(from: string, to: string, amount: number) {
    return this.http.get<ConvertCurrency>(
      `https://api.fxratesapi.com/convert?from=${from}&to=${to}&amount=${amount}`,
    );
  }
}
