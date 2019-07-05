import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {CheckTutorial} from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialPageModule',
    canLoad: [CheckTutorial]
  },
  {
    path: '',
    redirectTo: 'tutorial',
    pathMatch: 'full'
  },
  { path: 'app', loadChildren: './pages/tabs-page/tabs-page.module#TabsPagePageModule' },
  { path: 'speaker-list', loadChildren: './pages/speaker-list/speaker-list.module#SpeakerListPageModule' },
  { path: 'speaker-detail', loadChildren: './pages/speaker-detail/speaker-detail.module#SpeakerDetailPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'session-detail', loadChildren: './pages/session-detail/session-detail.module#SessionDetailPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
