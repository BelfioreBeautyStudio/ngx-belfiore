import { Routes } from "@angular/router";
import { LandingPageComponent } from "./core/landing-page.component";
import { InventoryComponent } from "./features/inventory/inventory.component";
import { InvoicingComponent } from "./features/invoicing/invoicing.component";

export const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "inventory", component: InventoryComponent },
  { path: "invoicing", component: InvoicingComponent },
];
