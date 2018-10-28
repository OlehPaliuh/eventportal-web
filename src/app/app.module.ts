import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventPageComponent } from './event-page/event-page.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'event', component: EventPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EventPageComponent,
    CardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
