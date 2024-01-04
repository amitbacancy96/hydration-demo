import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ShowConstraintsComponent } from './show-constraints/show-constraints.component';
import { CommonConfigsComponent } from './config.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ShowConstraintsComponent,
    CommonConfigsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
