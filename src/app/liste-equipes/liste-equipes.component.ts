import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { JouerService } from '../services/jouer.service';

@Component({
  selector: 'app-liste-equipes',
  templateUrl: './liste-equipes.component.html',
  styles: [
  ]
})
export class ListeEquipesComponent implements OnInit {

  equipes! :Equipe [];

  updatedEq:Equipe = {"idEquipe":0,"nomEquipe":""};

  ajout:boolean=true;

  constructor(private jouerService : JouerService) { }

  ngOnInit(): void {
    this.jouerService.listeEquipes()
    .subscribe(eqs => {this.equipes = eqs._embedded.equipes;
    console.log(eqs);
  });
  }

  chargerEquipes(){
    this.jouerService.listeEquipes().
    subscribe(eqs => {this.equipes = eqs._embedded.equipes;
    console.log(eqs);
    });
    }

  equipeUpdated(eq:Equipe){
    console.log("Eq updated event",eq);
    this.jouerService.ajouterEquipe(eq).
     subscribe( ()=> this.chargerEquipes());
    }

  updateEq(eq:Equipe) {
    this.updatedEq = eq;
    this.ajout = false;
    }

}
