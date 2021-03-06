import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TopDiscountComponent } from './top-discount/top-discount.component';
import { DemoVideoComponent } from './demo-video/demo-video.component';
import { SalesItemComponent } from './sales-item/sales-item.component';
import { NewDealsComponent } from './new-deals/new-deals.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    TopDiscountComponent,
    DemoVideoComponent,
    SalesItemComponent,
    NewDealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
