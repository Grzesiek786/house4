import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';
import { House } from '../interfaces/houses.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  
}
