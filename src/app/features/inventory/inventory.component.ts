import { Component, inject } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { InventoryService } from "./inventory.service";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@Component({
  imports: [MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: "./inventory.component.html",
})
export class InventoryComponent {
  readonly inventoryService = inject(InventoryService);

  displayedColumns: string[] = [
    "barcode",
    "category",
    "productName",
    "amountInStock",
    "unitPrice",
  ];

  dataSource = this.inventoryService.getInventoryItems();
}
