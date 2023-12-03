import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equipe } from '../model/equipe.model';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styles: [
  ]
})
export class UpdateEquipeComponent implements OnInit {

  @Input()
  equipe! : Equipe;

  @Input()
  ajout!:boolean;

  @Output() 
  equipeUpdated = new EventEmitter<Equipe>()

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateEquipe ",this.equipe);
  }

  saveEquipe(){
    this.equipeUpdated.emit(this.equipe);
    }

}
