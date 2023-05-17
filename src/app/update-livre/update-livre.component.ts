import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from '../service/livre.service';
import { Livre } from '../model/livre.model';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.css']
})
export class UpdateLivreComponent implements OnInit {
  currentLivre = new Livre();
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private livreService: LivreService) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    this.currentLivre = this.livreService.consulterLivre(id);
    console.log(this.currentLivre);
  }

  updateLivre() {
    //console.log(this.currentLivre);
    this.livreService.updateLivre(this.currentLivre);
    this.router.navigate(['livres']);
  }
}
