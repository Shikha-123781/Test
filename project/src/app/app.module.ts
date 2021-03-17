import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
