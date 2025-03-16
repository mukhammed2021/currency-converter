import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ArrowLeftRight, LucideAngularModule } from 'lucide-angular';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SwapDirective } from './directives/swap.directive';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, SwapDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ ArrowLeftRight }),
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
