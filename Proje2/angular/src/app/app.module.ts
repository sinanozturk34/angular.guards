import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrmFeatureModule} from './pages/crm/feature/crm.feature.module';
import { AccountModule } from './pages/account/account.module';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';


@NgModule({
  declarations: [
    AppComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrmFeatureModule,
    AccountModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
