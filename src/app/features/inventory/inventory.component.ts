import { Component, OnInit, inject } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { InventoryItem, InventoryService } from "./inventory.service";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from '@angular/material/dialog';
import { InventoryItemFormComponent } from "./form/inventory-item-form.component";
import { AsyncPipe } from "@angular/common";

@Component({
  imports: [MatTableModule, MatIconModule, MatButtonModule, AsyncPipe],
  templateUrl: "./inventory.component.html",
})
export class InventoryComponent implements OnInit {
  readonly inventoryService = inject(InventoryService);
  readonly dialog = inject(MatDialog);

  displayedColumns: string[] = [
    "barcode",
    "category",
    "productName",
    "amountInStock",
    "unitPrice",
  ];

  dataSource = this.inventoryService.getInventoryItems();

  ngOnInit() {
    this.inventoryService.seedInventoryItems();
  }

  addInventoryItem = () => {
    const dialogRef = this.dialog.open(InventoryItemFormComponent, {
      width: '50%',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const item = result as InventoryItem;
        this.inventoryService.addInventoryItem(item);
      }
    });
  }
}
