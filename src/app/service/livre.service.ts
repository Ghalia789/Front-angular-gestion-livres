import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';
import { Genre } from '../model/genre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  livre! : Livre;
  livres : Livre[]; //tableau de livres
  genres : Genre[];
  constructor() {
    this.genres =[{idGen: 1, dateCreation:new Date("05/17/2023"), nomGen: "Romance"},
    {idGen: 2, dateCreation:new Date("05/17/2023"), nomGen: "Mystere"}]
    this.livres =  [
      {idLivre : 1, auteurLivre : "Victor Hugo",  datePublication : new Date("01/14/1818"), prixLivre:10, quantiteStock:60, titreLivre:"Cosette", genre:{idGen: 1, dateCreation:new Date("05/17/2023"), nomGen: "Romance"}},
      {idLivre : 2, auteurLivre : "Victor Hugo",  datePublication : new Date("01/14/1819"), prixLivre:9, quantiteStock:50, titreLivre:"Cosette", genre:{idGen: 1, dateCreation:new Date("05/17/2023"), nomGen: "Romance"}},
      {idLivre : 3, auteurLivre : "Marie Higgins Clark",datePublication : new Date("12/01/2010"), prixLivre:44, quantiteStock:100, titreLivre:"Pretend you don't see her", genre:{idGen: 2, dateCreation:new Date("05/17/2023"), nomGen: "Mystere"}},
      ];
      this.livre = new Livre(); // Initialize the livre property with an empty instance
    }
  listeLivres():Livre[] {
    return this.livres;
  }

  ajouterLivre(liv:Livre){
    this.livres.push(liv);
    this.livres = [...this.livres, liv]; // Create a new array with the updated livre added
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

  trierLivres() {
    this.livres = this.livres.sort((liv1, liv2) => {
      if (liv1.idLivre && liv2.idLivre) {
        if (liv1.idLivre > liv2.idLivre) {
          return 1;
        }
        if (liv1.idLivre < liv2.idLivre) {
          return -1;
        }
      }
      return 0;
    });
  }


  updateLivre(liv:Livre){
    //this.supprimerLivre(liv);
    //this.ajouterLivre(liv);
    //this.trierLivres();
    const index = this.livres.findIndex(l => l.idLivre === liv.idLivre);
    if (index > -1) {
      this.livres[index] = liv;
      this.trierLivres();
    }

  }

  //genres
  listeGenres():Genre[]{
    return this.genres;
  }

  consulterGenre(id:number):Genre{
    return this.genres.find(g => g.idGen === id)!;
  }

}
