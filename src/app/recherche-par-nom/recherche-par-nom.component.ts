import { Component, OnInit } from '@angular/core';
import { Jouer } from '../model/jouer.model';
import { JouerService } from '../services/jouer.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  nomJouer! :string;
  jouers! : Jouer[];
  allJouers! : Jouer[];
  searchTerm!: string;

  constructor(private jouerService : JouerService) { }

  ngOnInit(): void {
    this.jouerService.listeJouers().subscribe(jouers => {
      console.log(jouers);
      this.allJouers = jouers;
      });
  }

  onKeyUp(filterText : string){
    this.jouers = this.allJouers.filter(item =>
    item.nomJouer?.toLowerCase().includes(filterText));
    }

  rechercherJouers(){
    this.jouerService.rechercherParNom(this.nomJouer).
      subscribe(jouers => {
    this.jouers = jouers; 
    console.log(jouers)});
  }

}
