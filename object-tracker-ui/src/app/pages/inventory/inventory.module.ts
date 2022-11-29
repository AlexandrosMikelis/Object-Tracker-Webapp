import { NgModule } from '@angular/core';
import { InventoryPageRoutingModule } from './inventory.routing';
import { InventoryComponent } from './inventory.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [InventoryComponent],
  imports: [InventoryPageRoutingModule, SharedModule],
  providers: [],
})
export class InventoryModule {
  constructor() {}
}