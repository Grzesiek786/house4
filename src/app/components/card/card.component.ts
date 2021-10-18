import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';
import { House } from '../interfaces/houses.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  public house: House | undefined;
  @Output() 
  public book: EventEmitter<number> = new EventEmitter();
  public borderClass: string = '';

  constructor(private housesService: HousesService) {}

  ngOnInit(): void {}

  booking(id: number) {
    this.housesService.fetchHouses().find(house=> {
      if(house.id === id) {
        this.borderClass = "green-border";
      }
    });
    this.book.emit();
    this.housesService.bookingElement$.next(this.house);
  }
}
