import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
})
export class HousesComponent implements OnInit {
  public elements: any;

  constructor(private housesService: HousesService) {}

  ngOnInit(): void {
    this.housesService.bookingElement$.subscribe((el) => {
      (this.elements = el)
    });
  }
}
