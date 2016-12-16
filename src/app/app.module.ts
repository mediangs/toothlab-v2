import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import appRoutes from './app.routes';
import { MaterialModule} from "@angular/material";

import { AppComponent } from './app.component';
import { HomeComponent} from "./home/home.component";
import { AboutComponent} from "./about/about.component";
import { MaterialComponent } from './material/material.component';
import { PeopleComponent } from './people/people.component';
import { PublicationsComponent } from './publications/publications.component';
import { ModelListComponent } from './model-list/model-list.component';

import { PeopleService } from "./services/people.service";
import { PublicationsService } from "./services/publications.service";
import { ModelService } from "./services/model.service";
import { ModelDetailComponent } from './model-detail/model-detail.component';
import { ModelDetailPlainComponent } from './model-detail-plain/model-detail-plain.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MaterialComponent,
    PeopleComponent,
    PublicationsComponent,
    ModelListComponent,
    ModelDetailComponent,
    ModelDetailPlainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    appRoutes
  ],
  providers: [PeopleService, PublicationsService, ModelService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

