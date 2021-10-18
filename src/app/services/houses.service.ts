import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { House } from '../components/interfaces/houses.interface';

@Injectable({
  providedIn: 'root',
})
export class HousesService {
  public bookingElement$: BehaviorSubject<any> = new BehaviorSubject<any>(null); 

  houses: House[] = [
    {
      id: 1,
      price: 930000,
      surface: 150,
      address: [{ street: 'Jana Kowalskiego', num: '44A', city: 'Warszawa' }],
    },
    {
      id: 2,
      price: 16530000,
      surface: 275,
      address: [{ street: 'Nazarowa', num: '1S', city: 'Kraków' }],
    },
    {
      id: 3,
      price: 1200000,
      surface: 240,
      address: [{ street: 'Ignowskiego', num: '32', city: 'Wrocław' }],
    },
    {
      id: 4,
      price: 850900,
      surface: 125,
      address: [{ street: 'Paderewskiego', num: '1', city: 'Szczecin' }],
    },
    {
      id: 5,
      price: 500300,
      surface: 80,
      address: [{ street: 'Szybowcowa', num: '5', city: 'Rzeszów' }],
    },
  ];

  fetchHouses() {
    return this.houses;
  }

  constructor() {}
}
