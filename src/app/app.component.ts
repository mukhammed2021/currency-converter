import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CurrencyConverterService } from './services/currency-converter.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private currencyConverter = inject(CurrencyConverterService);
  private formBuilder = inject(FormBuilder);

  public title = 'currency-converter';
  public initialValue = 1;
  public ratesCurrency?: string[];
  public ratesNumber?: number[];
  public date?: string;
  public result?: number;

  public converterForm = this.formBuilder.group({
    initialValue: 1,
    from: ['USD'],
    to: ['EUR'],
  });

  public ngOnInit(): void {
    this.getCurrencies();
    this.convertCurrencies();

    this.converterForm.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(300),
      switchMap((values) =>
        this.currencyConverter.convertCurrencies(
          values.from!,
          values.to!,
          values.initialValue!,
        ),
      ),
    ).subscribe((data) => (this.result = data.result));
  }

  public getCurrencies() {
    this.currencyConverter.getCurrencies().subscribe((data) => {
      this.ratesCurrency = Object.keys(data.rates);
      this.ratesNumber = Object.values(data.rates);

      this.date = data.date;
    });
  }

  public convertCurrencies(
    from: string = this.converterForm.value.from!,
    to: string = this.converterForm.value.to!,
    amount: number = this.converterForm.value.initialValue!,
  ) {
    this.currencyConverter
      .convertCurrencies(from, to, amount)
      .subscribe((data) => (this.result = data.result));
  }
}
