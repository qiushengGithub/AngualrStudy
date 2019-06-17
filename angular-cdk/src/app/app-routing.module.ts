import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EchartsComponent} from './components/echarts/echarts.component';


const routes: Routes = [
  {
    path: 'echarts', component: EchartsComponent,
  },
  {path: '', redirectTo: 'echarts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
