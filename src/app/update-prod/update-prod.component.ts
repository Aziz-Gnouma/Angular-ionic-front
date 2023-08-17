import { Component,OnInit } from '@angular/core';
import { Prod } from '../prod';
import { ProdService } from '../prod.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 


@Component({
  selector: 'app-update-prod',
  templateUrl: './update-prod.component.html',
  styleUrls: ['./update-prod.component.css']
})

export class UpdateProdComponent implements OnInit {
  prodForm: FormGroup; 
  id!: number;
  Prod: Prod = new Prod();
  constructor(private ProdService: ProdService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute ,
    private router: Router) {

      this.prodForm = this.formBuilder.group({
        nom: ['', Validators.required], 
        prix: ['', [Validators.required, Validators.min(1)]], 
        quantite: ['', [Validators.required, Validators.min(0), Validators.max(1000)]], 
      });
     }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ProdService.getProduitById(this.id).subscribe(data => {
      console.log(data);
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
