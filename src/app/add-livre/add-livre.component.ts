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
  genres!: Genre[];
  newIdGen!: number;
  newGenre!: Genre;
  constructor(private livreService: LivreService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.livreService.listeGenres().
      subscribe(gens => {
        this.genres = gens;
        console.log(gens);
      });
  }
  addLivre() {
    this.newLivre.genre = this.genres.find(gen => gen.idGen == this.newIdGen)!;
    this.livreService.ajouterLivre(this.newLivre)
      .subscribe(liv => {
        console.log(liv);
        this.router.navigate(['livres']);
      });
  }


}
