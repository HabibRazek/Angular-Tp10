import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from 'src/model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css'],
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
  categories!: Categorie[];
  newIdCat!: number;
  newCategorie!: Categorie;
  constructor(private produitService: ProduitService, private router: Router) {}
  addProduit() {
    // console.log(this.newProduit);
    this.newCategorie = this.produitService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie = this.newCategorie;
    this.produitService.ajouterProduit(this.newProduit);
    this.router.navigate(['produits']);
  }
  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
  }
}
