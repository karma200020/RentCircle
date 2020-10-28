import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { HomepageModule } from '../homepage/homepage.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MyOrdersComponent } from '../../components/my-orders/my-orders.component';
import { MyProfileComponent } from '../../components/my-profile/my-profile.component';
import { MyAddressComponent } from '../../components/my-address/my-address.component';
import { MyFeedbackComponent } from '../../components/my-feedback/my-feedback.component';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
                AccountComponent,
                MyOrdersComponent,
                MyProfileComponent,
                MyAddressComponent,
                MyFeedbackComponent
              ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    HttpClientModule,
    HomepageModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AccountModule { }
