import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/model/categorie.model';
import { Produit } from 'src/model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [],
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();
  categories!: Categorie[];
  updatedCatId!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router
  ) {}

  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    this.categories = this.produitService.listeCategories();
    this.currentProduit = this.produitService.consulterProduit(
      this.activatedRoute.snapshot.params['id']
    );
    this.updatedCatId = this.currentProduit.categorie.idCat;
  }
  updateProduit() {
    this.currentProduit.categorie = this.produitService.consulterCategorie(
      this.updatedCatId
    );
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
  }
}
