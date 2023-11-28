import { Component, OnInit } from '@angular/core';
import { Jouer } from '../model/jouer.model';
import { JouerService } from '../services/jouer.service';
import { Equipe } from '../model/equipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-jouer',
  templateUrl: './add-jouer.component.html',
  styleUrls: ['./add-jouer.component.css']
})
export class AddJouerComponent implements OnInit {

  newJouer = new Jouer();

  equipes! : Equipe[];

  
  
  newIdEquipe! : number;
  newEquipe!: Equipe;


  constructor(private jouerService: JouerService, private router: Router) { }


  ngOnInit(): void {
    this.equipes = this.jouerService.listeEquipes();
  }


  addJouer(){
    this.newEquipe = this.jouerService.consulterEquipe(this.newIdEquipe);
    this.newJouer.equipe = this.newEquipe;
    this.jouerService.ajouterJouer(this.newJouer);
    this.router.navigate(['jouers']);
    
  }

}
