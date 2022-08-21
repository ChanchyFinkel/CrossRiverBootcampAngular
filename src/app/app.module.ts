import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportPathModule } from './modules/report-path/report-path.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './modules/menu/menu.component';
import { WrongRouteComponent } from './modules/wrong-route/wrong-route.component';
import { PatientCardComponent } from './modules/report-path/patient-card/patient-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WrongRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReportPathModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
