import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {MemoryDataService} from './services/memoryData/memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { ListNewComponent } from './components/list-new/list-new.component';
import { SideBarLeftComponent } from './components/side-bar-left/side-bar-left.component';
import { NewDetailComponent } from './components/new-detail/new-detail.component';
import { FormsModule } from '@angular/forms';
import { NewSearchComponent } from './components/new-search/new-search.component'
@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    ListNewComponent,
    SideBarLeftComponent,
    NewDetailComponent,
    NewSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MemoryDataService,{
      dataEncapsulation : false
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
