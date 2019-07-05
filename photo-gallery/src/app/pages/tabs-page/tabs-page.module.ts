import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SchedulePageModule} from '../schedule/schedule.module';


import { TabsPagePage } from './tabs-page.page';
import {SchedulePage} from '../schedule/schedule.page';
import {SpeakerListPage} from '../speaker-list/speaker-list.page';
import {SpeakerListPageModule} from '../speaker-list/speaker-list.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPagePage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: '../session-detail/session-detail.module#SessionDetailPageModule'
          }
        ]
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            component: SpeakerListPage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: '../session-detail/session-detail.module#SessionDetailPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageModule,
    SpeakerListPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPagePage]
})
export class TabsPagePageModule {}
