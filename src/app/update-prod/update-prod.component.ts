import { Component,OnInit } from '@angular/core';
import { Prod } from '../prod';
import { ProdService } from '../prod.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-prod',
  templateUrl: './update-prod.component.html',
  styleUrls: ['./update-prod.component.css']
})

export class UpdateProdComponent implements OnInit {

  id!: number;
  Prod: Prod = new Prod();
  constructor(private ProdService: ProdService,
    private route: ActivatedRoute ,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ProdService.getProduitById(this.id).subscribe(data => {
      this.Prod = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.ProdService.updateProduit(this.id, this.Prod).subscribe( data =>{
      this.goToProdList();
    }
    , error => console.log(error));
  }

  goToProdList(){
    this.router.navigate(['/Produits']);
  }
}
