import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchedulePage } from './schedule.page';
import {ScheduleFilterComponent} from './schedule-filter/schedule-filter.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  declarations: [SchedulePage, ScheduleFilterComponent],
  entryComponents: [ScheduleFilterComponent]
})
export class SchedulePageModule {}
