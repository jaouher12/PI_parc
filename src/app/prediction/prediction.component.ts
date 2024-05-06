import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import { Router } from '@angular/router';

import { PredictionService } from '../services/prediction.service';

type NewType = FormGroup;

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent {
  constructor(private ps:PredictionService, private route:Router){}
  AddForm!:NewType
  message: any; 
  
  ngOnInit(){
    this.AddForm = new FormGroup({
      prediction_date:new FormControl('',Validators.required),
      discount_number:new FormControl('',[Validators.required])
      
    })
  }

  save(){
    this.ps.Prediction(this.AddForm.value)
    // this.route.navigateByUrl('/product')
    console.log(this.AddForm.value)
   
  } 
  show() {
    const formData = this.AddForm.value; // Pas besoin de convertir en JSON
    this.ps.Prediction(formData).subscribe(
      (response: any) => {
        this.message = response.validation;
        console.log(response);
      },
      (error: any) => {
        console.error("Erreur lors de la récupération de la prédiction :", error);
      }
    );
  }

  
}
