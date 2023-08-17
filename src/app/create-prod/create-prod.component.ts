import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

import { Prod } from '../prod';
import { ProdService } from '../prod.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-prod',
  templateUrl: './create-prod.component.html',
  styleUrls: ['./create-prod.component.css']
})
export class CreateProdComponent implements OnInit {

  prodForm: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    private prodService: ProdService,
    private router: Router
  ) {
    
    this.prodForm = this.formBuilder.group({
      nom: ['', Validators.required], 
      prix: ['', [Validators.required, Validators.min(1)]], 
      quantite: ['', [Validators.required, Validators.min(0), Validators.max(1000)]], 
    });
  }

  ngOnInit(): void {
  }

  saveProduit() {
    this.prodService.createProduit(this.prodForm.value).subscribe(data => {
      console.log(data);
      this.goToEProdList();
    },
      error => console.log(error));
  }

  goToEProdList() {
    this.router.navigate(['/Produits']);
  }

  onSubmit() {
    if (this.prodForm.valid) {
      console.log(this.prodForm.value);
      this.saveProduit();
    }
  }
}
