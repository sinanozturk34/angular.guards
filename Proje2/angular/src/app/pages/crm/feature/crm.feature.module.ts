import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';

//baska bir module users componenti görecegi için feature modul üzerinden exports ediyoruz

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule 
  ],
  exports: [
    UsersComponent
  ]
})
export class CrmFeatureModule { }
