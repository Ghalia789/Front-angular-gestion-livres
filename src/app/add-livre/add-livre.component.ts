import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../service/livre.service';
import { Genre } from '../model/genre.model';
@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {

  newLivre = new Livre();
  genres! : Genre[];
  newIdGen!: number;
  newGenre! : Genre;
  constructor(private livreService: LivreService,
    private router :Router) {
    this.genres = this.livreService.listeGenres();
  }

  ngOnInit(): void {

  }
  addLivre() {
    this.newGenre = this.livreService.consulterGenre(this.newIdGen);
    this.newLivre.genre = this.newGenre;
    this.livreService.ajouterLivre(this.newLivre);
    this.router.navigate(['livres']);
  }


}
