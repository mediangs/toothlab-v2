import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {MaterialComponent} from "./material/material.component";
const routes = [
  {path : '', component : HomeComponent},
  {path : 'about', component : AboutComponent},
  {path : 'material', component : MaterialComponent}
];

export default RouterModule.forRoot(routes);
