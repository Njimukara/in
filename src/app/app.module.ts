import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppmaterialModule } from './appmaterial/appmaterial.module';
import { LoginComponent } from './components/login/login.component';
import { ResultsComponent } from './components/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppmaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
