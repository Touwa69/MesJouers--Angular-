import { Injectable } from '@angular/core';
import { Jouer } from '../model/jouer.model';
import { Equipe } from '../model/equipe.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { CategorieWrapper } from '../model/categorieWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class JouerService {

  apiURLEquipe: string = 'http://localhost:8081/jouers/equipe';


  jouers! : Jouer[]; //un tableau de Jouer
  jouer! :Jouer;
 // equipes : Equipe[];

  constructor(private http: HttpClient) {

   /*  this.equipes = [ {idEquipe: 1, nomEquipe:"Real Madrid"},
                      {idEquipe:2, nomEquipe:"PSG"}];
 */
  /*   this.jouers = [
      {idJouer : 1, nomJouer : "Touwa Abbassi", prixJouer:888, dateContrat : new Date("2001/05/22"), equipe :{idEquipe:2, nomEquipe:"PSG"}},
      {idJouer : 2, nomJouer : "Rah Ghed", prixJouer:777, dateContrat : new Date("2004/07/17"), equipe :{idEquipe:2, nomEquipe:"PSG"}},
      {idJouer : 3, nomJouer : "Vinisus Jr", prixJouer:555, dateContrat : new Date("2020/07/22"), equipe :{idEquipe:1, nomEquipe:"Real Madrid"}}
    ]; */
  }

 /*  listeJouers(): Jouer[]{
    return this.jouers;
  } */

  listeJouers(): Observable<Jouer[]>{
    return this.http.get<Jouer[]>(apiURL);
    }

 /*  ajouterJouer(jouer : Jouer){
    this.jouers.push(jouer);
  } */

  ajouterJouer( jouer: Jouer):Observable<Jouer>{
    return this.http.post<Jouer>(apiURL, jouer, httpOptions);
    }

  /* supprimerJouer(jouer : Jouer){
    const index = this.jouers.indexOf(jouer, 0);
    if(index > -1){
      this.jouers.splice(index, 1);
    }
  } */

  supprimerJouer(id : number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }

 /*  consulterJouer(id: number){
    this.jouer = this.jouers.find(j => j.idJouer == id)!;
    return this.jouer;
  } */

  consulterJouer(id: number): Observable<Jouer> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Jouer>(url);
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
  
/*  updateJouer(j: Jouer){
    this.supprimerJouer(j);
    this.ajouterJouer(j);
    this.trierJouers(); 

  }*/

  updateJouer(j : Jouer): Observable<Jouer> {
    return this.http.put<Jouer>(apiURL, j, httpOptions);
  }

 /*  listeEquipes():Equipe[]{
    return this.equipes;
  } */

  /* listeEquipes():Observable<Equipe[]>{
    return this.http.get<Equipe[]>(apiURL+"/equipes");
    } */

    listeEquipes():Observable<CategorieWrapper>{
    return this.http.get<CategorieWrapper>(this.apiURLEquipe);
    }

    rechercherParEquipe(idEquipe: number):Observable< Equipe[]> {
      const url = `${apiURL}/jouerseq/${idEquipe}`;
      return this.http.get<Equipe[]>(url);
      }


    rechercherParNom(nom: string):Observable< Jouer[]> {
      const url = `${apiURL}/jouersByName/${nom}`;
      return this.http.get<Jouer[]>(url);
      }

    ajouterEquipe( eq: Equipe):Observable<Equipe>{
      return this.http.post<Equipe>(this.apiURLEquipe, eq, httpOptions);
      }


      

  /*
  consulterEquipe(id:number):Equipe{
    return this.equipes.find(equipe => equipe.idEquipe == id)!;
  }
 */
  


}
