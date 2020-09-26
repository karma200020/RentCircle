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
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FrontSectionComponent } from '../components/front-section/front-section.component';
import {MatCardModule} from '@angular/material/card';
import { HomeListComponent } from '../components/home-list/home-list.component';
import { FooterComponent } from '../components/footer/footer.component';



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
    MatCardModule
  ]
})
export class HomepageModule { }
