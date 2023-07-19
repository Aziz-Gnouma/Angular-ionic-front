import { Component, OnInit } from '@angular/core';
import { Prod } from '../prod'
import { ProdService } from '../prod.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {

  produits: Prod[] = [];

  constructor(private ProdService: ProdService,
    private router: Router ) {}

  ngOnInit(): void {
    this.getProduits();
  }
  private getProduits(){
    this.ProdService.getProduitsList().subscribe(data => {
      this.produits = data;
    });
  }

  updateProduit(id: number){
    this.router.navigate(['update-produit', id]);
  }

  deleteProduit(id: number){
    this.ProdService.deleteProduit(id).subscribe( data => {
      console.log(data);
      this.getProduits();
    })
  }
}
