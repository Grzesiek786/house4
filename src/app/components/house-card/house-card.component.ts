import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';
import { House } from '../interfaces/houses.interface';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss'],
})
export class HouseCardComponent implements OnInit {
  public houses: House[] = [];
  public elements: any;

  constructor(private housesService: HousesService) {}

  ngOnInit(): void {
    this.housesService.bookingElement$.subscribe((el) => (this.elements = el));
  }

  showAllHouses() {
    this.houses = this.housesService.fetchHouses();
  }

  showAbove() {
    const house = this.housesService
      .fetchHouses()
      .filter((house) => house.price >= 900000);
    this.houses = house;
  }

  showBelow() {
    const house = this.housesService
      .fetchHouses()
      .filter((house) => house.price <= 700000);
    this.houses = house;
  }

}
