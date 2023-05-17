import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  livre! : Livre;
  livres : Livre[]; //tableau de livres
  constructor() {
    this.livres =  [
      {idLivre : 1, auteurLivre : "Victor Hugo",  datePublication : new Date("01/14/1818"), prixLivre:10, quantiteStock:60, titreLivre:"Cosette"},
      {idLivre : 2, auteurLivre : "Victor Hugo",  datePublication : new Date("01/14/1819"), prixLivre:9, quantiteStock:50, titreLivre:"Cosette"},
      {idLivre : 3, auteurLivre : "Marie Higgins Clark",datePublication : new Date("12/01/2010"), prixLivre:44, quantiteStock:100, titreLivre:"Pretend you don't see her"},
      ];
  }
  listeLivres():Livre[] {
    return this.livres;
  }

  ajouterLivre(liv:Livre){
    this.livres.push(liv);
  }

  supprimerLivre(liv:Livre){
    const index = this.livres.indexOf(liv,0);
    if(index>-1){
      this.livres.splice(index,1);
    }
  }

  consulterLivre(id:number):Livre{
    this.livre = this.livres.find(liv =>liv.idLivre==id)!;
    return this.livre;
  }

  updateLivre(liv:Livre){
    this.supprimerLivre(liv);
    this.ajouterLivre(liv);
  }
}
