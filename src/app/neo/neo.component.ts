import { Component, OnInit } from '@angular/core';
import { NeoService } from './neo.service';

@Component({
  selector: 'app-neo',
  templateUrl: './neo.component.html',
  styleUrls: ['./neo.component.sass']
})
export class NeoComponent implements OnInit{

  asteroids = []

  constructor(private neoService: NeoService){}

  ngOnInit(): void {
    this.neoService.fetchAsteroids().subscribe(
      {
        next: (data) => {
          console.log(data);
        }
      }
    );
  }
}
