import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InventoryService {
  private inventoryItems$ = new BehaviorSubject<InventoryItem[]>([]);

  seedInventoryItems = () => {
    this.inventoryItems$.next([
      {
        barcode: "a1b2c3",
        categorie: InventoryCategory.Gelaatverzorging,
        productNaam: "Testproduct",
        aantal: 5,
        stukprijs: 9.99,
      },
    ]);
  };

  getInventoryItems = (): BehaviorSubject<InventoryItem[]> => {
    return this.inventoryItems$;
  };

  addInventoryItem = (item: InventoryItem) => {
    // this.inventoryItems = [...this.inventoryItems, item];
    this.inventoryItems$.next([...this.inventoryItems$.value, item]);
  };
}

export enum InventoryCategory {
  Zonneproducten = "Zonneproducten",
  Handverzorging = "Handverzorging",
  Voetverzorging = "Voetverzorging",
  Lichaamsverzorging = "Lichaamsverzorging",
  Gelaatverzorging = "Gelaatverzorging",
}

export interface InventoryItem {
  barcode: string;
  categorie: InventoryCategory;
  productNaam: string;
  aantal: number;
  stukprijs: number;
}
