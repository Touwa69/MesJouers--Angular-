import { Component, OnInit } from '@angular/core';
import { Jouer } from '../model/jouer.model';
import { Equipe } from '../model/equipe.model';
import { JouerService } from '../services/jouer.service';

@Component({
  selector: 'app-recherche-par-equipe',
  templateUrl: './recherche-par-equipe.component.html',
  styles: [
  ]
})
export class RechercheParEquipeComponent implements OnInit {

  jouers! : Jouer[];
  IdEquipe! : number;
  equipes! : Equipe[];

  constructor(private jouerService : JouerService) { }

  ngOnInit(): void {
    //this.chargerJouers();
    this.jouerService.listeEquipes().
      subscribe(eqs => {this.equipes = eqs._embedded.equipes;
      console.log(eqs);
    });
  }

  onChange() {
    this.jouerService.rechercherParEquipe(this.IdEquipe).
    subscribe(eqs =>{this.equipes=eqs});
    }

    //chargerJouers(){
      //this.jouerService.listeJouers().subscribe(j => {
      //console.log(j);
      //this.jouers = j;
      //}); 
      //}

}
