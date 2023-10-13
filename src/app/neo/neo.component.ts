import { Component, OnInit } from '@angular/core';
import { NeoService } from './neo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-neo',
  templateUrl: './neo.component.html',
  styleUrls: ['./neo.component.sass']
})
export class NeoComponent implements OnInit{

  searchForm: FormGroup;
  asteroids = []
  isLoading = false;

  constructor(private neoService: NeoService){}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      'startDate': new FormControl('2000-07-26', Validators.required),
      'endDate': new FormControl('2000-07-30', Validators.required)
    })
  }

  onSearchClicked(){
    const startDate = this.searchForm.get('startDate').value;
    const endDate = this.searchForm.get('endDate').value;

    this.isLoading = true;

    this.neoService.fetchAsteroids(startDate, endDate).subscribe({
      next: (data) => {
        console.log(data);
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
      }
    });
  }
}
