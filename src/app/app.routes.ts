import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {MaterialComponent} from "./material/material.component";
import {PeopleComponent} from "./people/people.component";
import {PublicationsComponent} from "./publications/publications.component";

const routes = [
  {path : '', component : HomeComponent},
  {path : 'about', component : AboutComponent},
  {path : 'people', component : PeopleComponent},
  {path : 'publications', component : PublicationsComponent},
  {path : 'material', component : MaterialComponent}
];

export default RouterModule.forRoot(routes);
