import { Component, OnInit } from '@angular/core';
import { Jouer } from '../model/jouer.model';
import { JouerService } from '../services/jouer.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-jouers',
  templateUrl: './jouers.component.html',
  styleUrls: ['./jouers.component.css']
})
export class JouersComponent implements OnInit {

  jouers! : Jouer[];

  constructor(private jouerService: JouerService, public authService : AuthService) {
    //this.jouers = jouerService.listeJouers();
  }

  ngOnInit(): void {

    this.chargerJouers();
    /* this.jouerService.listeJouers().subscribe(j => {
      console.log(j);
      this.jouers = j;
      }); */
  }

  /* supprimerJouer(j: Jouer){
    //console.log(j);
    let conf =confirm("Etes-vous sur ?");
    if (conf)
    this.jouerService.supprimerJouer(j);
  } */

  chargerJouers(){
    this.jouerService.listeJouers().subscribe(j => {
    console.log(j);
    this.jouers = j;
    }); 
    }


  supprimerJouer(j: Jouer){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.jouerService.supprimerJouer(j.idJouer).subscribe(() => {
      console.log("produit supprimé");
      this.chargerJouers();
  });

}

}
