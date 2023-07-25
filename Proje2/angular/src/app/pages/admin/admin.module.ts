import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CrmFeatureModule } from '../crm/feature/crm.feature.module';
import { AdminFeatureModule } from './feature/admin.feature.module';
import { RolesComponent } from './roles/roles.component';





@NgModule({
  declarations: [
    AdminComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CrmFeatureModule,
    AdminFeatureModule,
   
   
  ]
})
export class AdminModule { }
//baska bir page module altındakı ortak olan componentlere erişmek istersek bu durumda feature module uzerınden erısım saglayabilriz
 