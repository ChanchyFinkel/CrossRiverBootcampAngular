import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportPathComponent } from './modules/report-path/report-path/report-path.component';
import { ViewPathComponent } from './modules/report-path/view-path/view-path.component';
import { WrongRouteComponent } from './modules/wrong-route/wrong-route.component';
const APP_ROUTES: Routes = [

  { path: "", pathMatch: "full", redirectTo: "viewPath" },
  { path: "reportPath", pathMatch: "full", component:ReportPathComponent },
  { path: "viewPath", component: ViewPathComponent },
  { path: "**",pathMatch:"full", component: WrongRouteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
