import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';


@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    LoginService
  ]
})
export class AccountModule { }
//Not: LazyLoaded Page Module ile Moduler bir yapıda angular uygulaması geliştiyosak Serislerimizi
//ilgili Page Module providers olarak tanıtmak zorundayız