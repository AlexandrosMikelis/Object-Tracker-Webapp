import { NgModule } from '@angular/core';
import { RegisterPageRoutingModule } from './register.routing';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [RegisterPageRoutingModule, SharedModule],
  providers: [],
})
export class RegisterModule {
  constructor() {}
}
