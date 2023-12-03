import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JouersComponent } from './jouers/jouers.component';
import { AddJouerComponent } from './add-jouer/add-jouer.component';
import { FormsModule } from '@angular/forms';
import { UpdateJouerComponent } from './update-jouer/update-jouer.component';
import { RechercheParEquipeComponent } from './recherche-par-equipe/recherche-par-equipe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeEquipesComponent } from './liste-equipes/liste-equipes.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
//import { httpclientModule}

@NgModule({
  declarations: [
    AppComponent,
    JouersComponent,
    AddJouerComponent,
    UpdateJouerComponent,
    RechercheParEquipeComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeEquipesComponent,
    UpdateEquipeComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
