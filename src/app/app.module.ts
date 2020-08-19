import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IceCreamCreateComponent } from './ice-cream-create/ice-cream-create.component';
import { IceCreamReadComponent } from './ice-cream-read/ice-cream-read.component';
import { IceCreamDisplayComponent } from './ice-cream-display/ice-cream-display.component';
import { ListHomeComponent } from './list-home/list-home.component';
import { iceCreamReducer } from './reducers/ice-cream-reducer';

@NgModule({
  declarations: [
    AppComponent,
    IceCreamCreateComponent,
    IceCreamReadComponent,
    IceCreamDisplayComponent,
    ListHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
     iceCream: iceCreamReducer
    })
    // StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
