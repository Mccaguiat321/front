import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from './data-table/data-table.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { PinagsamaComponent } from './pinagsama/pinagsama.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DataTableComponent,
    LoginComponentComponent,
    PinagsamaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,  // Add ReactiveFormsModule here
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
