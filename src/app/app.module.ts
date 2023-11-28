import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JouersComponent } from './jouers/jouers.component';
import { AddJouerComponent } from './add-jouer/add-jouer.component';
import { FormsModule } from '@angular/forms';
import { UpdateJouerComponent } from './update-jouer/update-jouer.component';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
