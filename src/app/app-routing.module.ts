import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JouersComponent } from './jouers/jouers.component';
import { AddJouerComponent } from './add-jouer/add-jouer.component';
import { UpdateJouerComponent } from './update-jouer/update-jouer.component';

const routes: Routes = [
  {path: "jouers", component : JouersComponent},
  {path:"add-jouer", component : AddJouerComponent},
  {path: "", redirectTo:"jouers", pathMatch : "full"},
  {path:"updateJouer/:id", component: UpdateJouerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
