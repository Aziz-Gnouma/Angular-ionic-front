import { Component, OnInit } from '@angular/core';
import { Prod } from '../prod';
import { ProdService } from '../prod.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-prod',
  templateUrl: './create-prod.component.html',
  styleUrls: ['./create-prod.component.css']
})

export class CreateProdComponent implements OnInit {

  Prod: Prod = new Prod();
  constructor(private ProdService:ProdService ,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveProduit(){
    this.ProdService.createProduit(this.Prod).subscribe( data =>{
      console.log(data);
      this.goToEProdList();
    },
    error => console.log(error));
  }

  goToEProdList(){
    this.router.navigate(['/Produits']);
  }
  
  onSubmit(){
    console.log(this.Prod);
    this.saveProduit();
  }
}
