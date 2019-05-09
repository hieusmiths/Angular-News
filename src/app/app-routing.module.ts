import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// components
import { ListNewComponent } from './components/list-new/list-new.component';
import { AppComponent } from './app.component';
import { NewDetailComponent } from './components/new-detail/new-detail.component';

const routes: Routes = [
// {path: "", redirectTo : '/home', pathMatch: 'null' },
{path : 'news', component : ListNewComponent},
{path : 'new/:id' , component : NewDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
