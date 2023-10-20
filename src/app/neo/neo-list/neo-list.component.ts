import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-neo-list',
  templateUrl: './neo-list.component.html',
  styleUrls: ['./neo-list.component.sass']
})
export class NeoListComponent {
  @Input() asteroids = [];
}
