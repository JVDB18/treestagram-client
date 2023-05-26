import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggedInComponent } from './logged-in/logged-in.component';


@NgModule({
  declarations: [

    LoggedInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoggedInComponent
  ]
})
export class SharedModule { }
