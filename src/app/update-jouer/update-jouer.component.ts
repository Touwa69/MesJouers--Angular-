import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JouerService } from '../services/jouer.service';
import { Jouer } from '../model/jouer.model';
import { Equipe } from '../model/equipe.model';

@Component({
  selector: 'app-update-jouer',
  templateUrl: './update-jouer.component.html',
  styles: [
  ]
})
export class UpdateJouerComponent implements OnInit {

  currentJouer = new Jouer();
  equipes! : Equipe[];
  updatedEquipeId! : number;


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private jouerService : JouerService) { }

  /* updateJouer(){
    //this.currentJouer.equipe = this.jouerService.consulterEquipe(this.updatedEquipeId);
    this.jouerService.updateJouer(this.currentJouer);
    this.router.navigate(['/jouers']);
  } */

  updateJouer(){
    this.currentJouer.equipe = this.equipes.find(eq => eq.idEquipe == this.updatedEquipeId)!;
    this.jouerService.updateJouer(this.currentJouer).subscribe(j => {
      this.router.navigate(['jouers']);
    });
  }


  ngOnInit(): void {
   // this.equipes = this.jouerService.listeEquipes();
   // this.currentJouer = this.jouerService.consulterJouer(this.activatedRoute.snapshot.params['id']);
    //console.log(this.currentJouer);
   // this.updatedEquipeId = this.currentJouer.equipe.idEquipe;

   /* this.jouerService.consulterJouer(this.activatedRoute.snapshot.params['id']).subscribe(j => {
    this.currentJouer = j;
   }); */

   this.jouerService.listeEquipes().subscribe(eqs => {
    this.equipes = eqs._embedded.equipes;
    console.log(eqs);
   });

   this.jouerService.consulterJouer(this.activatedRoute.snapshot.params['id']).subscribe(eq => {
    this.currentJouer = eq;
    this.updatedEquipeId = this.currentJouer.equipe.idEquipe;
   })


  }

}
