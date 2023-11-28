import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JouersComponent } from './jouers/jouers.component';
import { AddJouerComponent } from './add-jouer/add-jouer.component';
import { FormsModule } from '@angular/forms';
import { UpdateJouerComponent } from './update-jouer/update-jouer.component';
//import { httpclientModule}

@NgModule({
  declarations: [
    AppComponent,
    JouersComponent,
    AddJouerComponent,
    UpdateJouerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
