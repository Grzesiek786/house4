import { Address } from "./address.interface";

export interface House {
  id: number;
  price: number;
  surface: number;
  address: Array<Address>;
}
