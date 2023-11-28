import { Component, OnInit } from '@angular/core';
import { Jouer } from '../model/jouer.model';
import { JouerService } from '../services/jouer.service';

@Component({
  selector: 'app-jouers',
  templateUrl: './jouers.component.html',
  styleUrls: ['./jouers.component.css']
})
export class JouersComponent implements OnInit {

  jouers : Jouer[];

  constructor(private jouerService: JouerService) {
    this.jouers = jouerService.listeJouers();
  }

  supprimerJouer(j: Jouer){
    //console.log(j);
    let conf =confirm("Etes-vous sur ?");
    if (conf)
    this.jouerService.supprimerJouer(j);
  }

  ngOnInit(): void {
  }

}
