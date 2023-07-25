import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrmComponent } from './crm.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { UsersComponent } from './users/users.component';
import { EmployeesComponent } from './employees/employees.component';
//crm pathini auth.guard ile korucam,can activate ise o component sayfa açılabilir mi?
//canActivate:[AuthGuard] =>ilgili modul içerisimdeki bir componenti koruma altına aldıgımız durumlarda.Tılayınca Yetkiniz yoktur diyor
//Employees ise direk tabo geliyor canActivty kullanmadık
//--Direk modulün yuklenmesini yada o modulün yetkisi olan kullancılıar icin yuklenmesını istersem,bu durumda "canLoad" secenegini tercih ederiz
const routes: Routes = [{ path: '', component: CrmComponent,// canActivate:[AuthGuard]
children:[
  {
    path:'users',
    component:UsersComponent,
    canActivate:[AuthGuard]

  },
  {
  path:'employees',
  component:EmployeesComponent
  }
]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
