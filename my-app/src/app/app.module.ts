import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { NzButtonModule } from './button/nz-button.module';
import { AttrComponentComponent , PrimeTemplate2, PrimeContainer} from './components/attr-component/attr-component.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { SunziComponent } from './components/sunzi/sunzi.component';

@NgModule({
  declarations: [
    AppComponent,
    AttrComponentComponent,
    PrimeTemplate2,
    PrimeContainer,
    ParentComponent,
    ChildComponent,
    SunziComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NzButtonModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
