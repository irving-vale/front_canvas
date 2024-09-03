import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { TabsComponent } from './tabs/tabs.component';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {provideHttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    StudentComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTab,
    MatTabGroup
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
