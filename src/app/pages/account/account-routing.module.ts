import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { MyOrdersComponent } from '../../components/my-orders/my-orders.component';
import { MyAddressComponent } from '../../components/my-address/my-address.component';
import { MyProfileComponent } from '../../components/my-profile/my-profile.component';
import { MyFeedbackComponent } from '../../components/my-feedback/my-feedback.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path:'order',
        component: MyOrdersComponent
      },
      {
        path:'address',
        component: MyAddressComponent
      },
      {
        path:'profile',
        component: MyProfileComponent
      },
      {
        path:'feedback',
        component: MyFeedbackComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
