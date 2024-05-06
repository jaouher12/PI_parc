import { Component, OnInit } from '@angular/core';
import { AprioriService } from '../services/apriori.service';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { Observable } from 'rxjs';

interface AspectItem {
  Aspect: string;
  Sentiment: string;
}

@Component({
  selector: 'app-aspect',
  templateUrl: './aspect.component.html',
  styleUrls: ['./aspect.component.css'],
  
})
export class AspectComponent implements OnInit {
  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
    width: 1000,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
    height: 400,
    overflow: false,
  };
  aspectData: AspectItem[] = [];
  positiveAspects: CloudData[] = [];
  negativeAspects: CloudData[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private aprioriService: AprioriService) {}
  ngOnInit(): void {
    this.loading = true;
    this.aprioriService.getAspect().subscribe(
      (data: AspectItem[]) => {
        
          this.aspectData = data; // Assurez-vous que data est bien un tableau d'objets AspectItem
          this.positiveAspects = this.aspectData
            .filter((item) => item.Sentiment === 'Positive')
            .map((item) => ({ text: item.Aspect, weight: 1 }));
  
          this.negativeAspects = this.aspectData
            .filter((item) => item.Sentiment === 'Negative')
            .map((item) => ({ text: item.Aspect, weight: 1 }));
          console.log(this.negativeAspects); // Vérifiez les données dans la console
          this.loading = false;
        
      },
      (error) => {
        this.error = 'Une erreur s\'est produite lors de la récupération des données.';
        console.error('Erreur lors de la récupération des données :', error);
        this.loading = false;
      }
    );
  } 
}  