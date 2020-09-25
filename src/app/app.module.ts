import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppmaterialModule } from './appmaterial/appmaterial.module';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { LoginComponent } from './components/login/login.component';
import { ResultsComponent } from './components/results/results.component';
import { RoutingModule } from './routing/routing.module';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { DetailsComponent } from './components/details/details.component';
import { WorkformComponent } from './components/workform/workform.component';
// import { CommandService, OfficeService, ServiceService } from './services/index.services';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResultsComponent,
    ToolbarComponent,
    SidenavComponent,
    DetailsComponent,
    WorkformComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppmaterialModule,
    RouterModule,
    RoutingModule,
    AppBootstrapModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    // CommandService,
    // OfficeService,
    // ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
