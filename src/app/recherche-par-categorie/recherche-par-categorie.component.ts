import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/model/categorie.model';
import { Produit } from 'src/model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css']
})
export class RechercheParCategorieComponent implements OnInit {
  produits! : Produit[] ; //un tableau de Produit
  categories! : Categorie[];
  IdCategorie! : number;

  constructor(private produitService: ProduitService) {
    this.produits = produitService.listeProduits();
   }


  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
    this.produits=[];
  }

  onChange()
  {
    this.produits =  this.produitService.rechercherParCategorie(this.IdCategorie);
    console.log(this.IdCategorie);
  }
  supprimerProduit(p: Produit)
  {
    let conf = confirm("Etes-vous sûr ?");
  if (conf)
  {
    this.produitService.supprimerProduit(p);
    this.produits=this.produitService.rechercherParCategorie(this.IdCategorie);
  }
  }

}
