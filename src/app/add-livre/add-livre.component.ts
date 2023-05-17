import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../service/livre.service';
@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {

  newLivre = new Livre();
  constructor(private livreService: LivreService) {

  }

  ngOnInit(): void {

  }
  addLivre() {
    this.livreService.ajouterLivre(this.newLivre);
  }
}
