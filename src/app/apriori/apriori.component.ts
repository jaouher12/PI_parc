import { Component, OnInit } from '@angular/core';
import { AprioriService } from '../services/apriori.service';

@Component({
  selector: 'app-apriori',
  templateUrl: './apriori.component.html',
  styleUrls: ['./apriori.component.css']
})
export class AprioriComponent implements OnInit {
  aprioriData: any[] = [];

  constructor(private aprioriService: AprioriService) {}

  ngOnInit(): void {
    this.fetchAprioriData();
  }

  fetchAprioriData(): void {
    this.aprioriService.getAprioriData().subscribe(
      data => {
        this.aprioriData = data;
      },
      error => {
        console.error('Error fetching Apriori data:', error);
      }
    );
  }
}
