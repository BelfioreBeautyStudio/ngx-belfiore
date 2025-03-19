import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class InventoryService {
  private inventoryItems = [
    {
      barcode: "a1b2c3",
      category: InventoryCategory.Gelaatverzorging,
      productName: "Testproduct",
      amountInStock: 5,
      unitPrice: 9.99,
    },
  ];

  getInventoryItems = (): InventoryItem[] => {
    return this.inventoryItems;
  };

  addInventoryItem = (item: InventoryItem) => {
    this.inventoryItems.push(item);
  };
}

export enum InventoryCategory {
  Zonneproducten,
  Handverzorging,
  Voetverzorging,
  Lichaamsverzorging,
  Gelaatverzorging,
}

export interface InventoryItem {
  barcode: string;
  category: InventoryCategory;
  productName: string;
  amountInStock: number;
  unitPrice: number;
}
