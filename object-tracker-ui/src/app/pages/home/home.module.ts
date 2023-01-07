import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomePageRoutingModule, SharedModule],
  providers: [],
})
export class HomeModule {
  constructor() {}
}
