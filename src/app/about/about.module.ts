
import {NgModule} from "@angular/core";
import {AboutComponent} from "./about.component";
import {CommonModule} from "@angular/common";

import aboutRoutes from './about.routes';

@NgModule({
  declarations : [AboutComponent],
  imports : [CommonModule, aboutRoutes],

})
export class AboutModule{}

