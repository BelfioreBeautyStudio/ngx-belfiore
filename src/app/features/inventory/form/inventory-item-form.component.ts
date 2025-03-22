import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

@Component({
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./inventory-item-form.component.html",
})
export class InventoryItemFormComponent {
  form = new FormGroup({
    barcode: new FormControl(null, Validators.required),
    productNaam: new FormControl(null, Validators.required),
    categorie: new FormControl(null),
    aantal: new FormControl(null),
    stukprijs: new FormControl(null),
  });
}
