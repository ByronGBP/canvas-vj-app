import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';

import { CanvasPageComponent } from './pages/canvas-page/canvas-page.component';

const routes: Routes = [
  { path: 'fckthisshit', component: CanvasPageComponent},
  { path: '**', redirectTo: '/fckthisshit', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    CanvasPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
