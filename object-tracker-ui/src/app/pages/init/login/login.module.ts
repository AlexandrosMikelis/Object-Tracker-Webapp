import { NgModule } from '@angular/core';
import { LoginPageRoutingModule } from './login.routing';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginPageRoutingModule, SharedModule],
  providers: [],
})
export class LoginModule {
  constructor() {}
}