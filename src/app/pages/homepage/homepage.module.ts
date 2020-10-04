import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HomeListComponent } from 'src/app/components/home-list/home-list.component';
import { FrontSectionComponent } from 'src/app/components/front-section/front-section.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [HomepageComponent,
                NavbarComponent,
                FrontSectionComponent,
                HomeListComponent,
                FooterComponent,
                ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    ChatModule,
    MatGridListModule,
  ],
  exports : [
    NavbarComponent,
    FooterComponent,
  ]
})
export class HomepageModule { }
