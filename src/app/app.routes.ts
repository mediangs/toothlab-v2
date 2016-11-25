import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
const routes = [
  {path : '', component : HomeComponent},
  {path : 'about', loadChildren: 'app/about/about.module#AboutModule'}
];

export default RouterModule.forRoot(routes);
