import { NgModule } from '@angular/core';
import { WorkspacePageRoutingModule } from './workspace.routing';
import { WorkspaceComponent } from './workspace.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [WorkspaceComponent],
  imports: [WorkspacePageRoutingModule, SharedModule],
  providers: [],
})
export class InventoryModule {
  constructor() {}
}
