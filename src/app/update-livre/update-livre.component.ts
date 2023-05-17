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
    this.currentLivre = this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentLivre);
  }

  updateLivre(){
    this.livreService.updateLivre(this.currentLivre);
    this.router.navigate(['livres']);
  }
}
