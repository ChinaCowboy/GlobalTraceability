import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PortraitComponentComponent } from './portrait-component/portrait-component.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { EditComponent } from './edit/edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PortraitComponentComponent,
    SearchComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  MatInputModule,
MatListModule,
MatToolbarModule,
MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
