import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from '../service/livre.service';
import { Livre } from '../model/livre.model';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.css']
})
export class UpdateLivreComponent implements OnInit {
  genres!: Genre[];
  updatedGenId!: number;
  currentLivre = new Livre();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private livreService: LivreService
  ) { }

  ngOnInit(): void {
    this.genres = this.livreService.listeGenres();
    const livreId = this.activatedRoute.snapshot.params['id'];
    console.log(livreId);
    this.currentLivre = this.livreService.consulterLivre(livreId);
    console.log(this.currentLivre);
    this.updatedGenId = this.currentLivre.genre?.idGen || 0; // Use a default value if genre is undefined
  }


  updateLivre() {
    //console.log(this.currentLivre);
    this.currentLivre.genre = this.livreService.consulterGenre(this.updatedGenId);
    this.livreService.updateLivre(this.currentLivre);
    this.router.navigate(['/livres']); // Navigate back to the livres list
  }
}
