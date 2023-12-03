import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JouersComponent } from './jouers/jouers.component';
import { AddJouerComponent } from './add-jouer/add-jouer.component';
import { UpdateJouerComponent } from './update-jouer/update-jouer.component';
import { RechercheParEquipeComponent } from './recherche-par-equipe/recherche-par-equipe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeEquipesComponent } from './liste-equipes/liste-equipes.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { JouerGuard } from './jouer.guard';

const routes: Routes = [
  {path: "jouers", component : JouersComponent},
  {path:"add-jouer", component : AddJouerComponent, canActivate:[JouerGuard]},
  {path:"updateJouer/:id", component: UpdateJouerComponent},
  {path:"rechercheParEquipe", component: RechercheParEquipeComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeEquipes", component : ListeEquipesComponent},
  {path: "login", component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "", redirectTo:"jouers", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
