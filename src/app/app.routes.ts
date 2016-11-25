import {RouterModule} from "@angular/router";
const routes = [
  {path : '', loadChildren: 'app/home/home.module#HomeModule'},
  {path : 'about', loadChildren: 'app/about/about.module#AboutModule'}
];

export default RouterModule.forRoot(routes);
