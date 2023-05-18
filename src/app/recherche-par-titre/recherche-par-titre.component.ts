import { LivreService } from './../service/livre.service';
import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';

@Component({
  selector: 'app-recherche-par-titre',
  templateUrl: './recherche-par-titre.component.html',
  styleUrls: ['./recherche-par-titre.component.css']
})
export class RechercheParTitreComponent implements OnInit {

  titreLivre!: string; // Define the titreLivre property
  livres! : Livre[];
  constructor(private livreService :LivreService) { }

  ngOnInit(): void {
  }
  rechercherLivs(){
    this.livreService.rechercherParTitre(this.titreLivre).
    subscribe(livs =>{
      this.livres =livs;
      console.log(livs);
    })
  }
}
