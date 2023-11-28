import { Injectable } from '@angular/core';
import { Jouer } from '../model/jouer.model';
import { Equipe } from '../model/equipe.model';

@Injectable({
  providedIn: 'root'
})
export class JouerService {

  jouers : Jouer[]; //un tableau de Jouer
  jouer! :Jouer;
  equipes : Equipe[];

  constructor() {

    this.equipes = [ {idEquipe: 1, nomEquipe:"Real Madrid"},
                      {idEquipe:2, nomEquipe:"PSG"}];

    this.jouers = [
      {idJouer : 1, nomJouer : "Touwa Abbassi", prixJouer:888, dateContrat : new Date("2001/05/22"), equipe :{idEquipe:2, nomEquipe:"PSG"}},
      {idJouer : 2, nomJouer : "Rah Ghed", prixJouer:777, dateContrat : new Date("2004/07/17"), equipe :{idEquipe:2, nomEquipe:"PSG"}},
      {idJouer : 3, nomJouer : "Vinisus Jr", prixJouer:555, dateContrat : new Date("2020/07/22"), equipe :{idEquipe:1, nomEquipe:"Real Madrid"}}
    ];
  }

  listeJouers(): Jouer[]{
    return this.jouers;
  }

  ajouterJouer(jouer : Jouer){
    this.jouers.push(jouer);
  }

  supprimerJouer(jouer : Jouer){
    const index = this.jouers.indexOf(jouer, 0);
    if(index > -1){
      this.jouers.splice(index, 1);
    }
  }

  consulterJouer(id: number){
    this.jouer = this.jouers.find(j => j.idJouer == id)!;
    return this.jouer;
  }

  trierJouers(){
    this.jouers = this.jouers.sort( (n1, n2) => {
      if(n1.idJouer! > n2.idJouer!){
        return 1;
      }if(n1.idJouer! < n2.idJouer!){
        return -1;
      }
      return 0;
    });
  }
  
  updateJouer(j: Jouer){
    this.supprimerJouer(j);
    this.ajouterJouer(j);
    this.trierJouers();
  }

  listeEquipes():Equipe[]{
    return this.equipes;
  }

  consulterEquipe(id:number):Equipe{
    return this.equipes.find(equipe => equipe.idEquipe == id)!;
  }

  


}
