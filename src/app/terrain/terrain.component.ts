import { Component, OnInit } from '@angular/core';
import { AprioriService } from '../services/apriori.service';
@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrl: './terrain.component.css'
})
export class TerrainComponent implements OnInit{
  terrainData: any[] = [];

  constructor(private aprioriService: AprioriService) {}
  ngOnInit(): void {
    this.aprioriService.getTerrainsData().subscribe((response) => {
      this.terrainData = response;
    });
  }
}
