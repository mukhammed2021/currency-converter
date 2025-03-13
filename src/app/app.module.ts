import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArrowLeftRight, LucideAngularModule, Moon, Sun } from 'lucide-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Sun, Moon, ArrowLeftRight }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
