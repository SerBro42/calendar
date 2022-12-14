import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { CalendarHeaderComponent } from '../calendar-header/calendar-header.component';



@NgModule({
  declarations: [
    CalendarHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule
  ],
  exports: [
    CalendarHeaderComponent
  ]
})
export class CalendarHeaderModuleModule { }
