import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './components/roles/roles.component';



@NgModule({
  declarations: [
    RolesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[RolesComponent]
})
export class AdminFeatureModule { }
