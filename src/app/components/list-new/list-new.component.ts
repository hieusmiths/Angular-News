import { Component, OnInit } from '@angular/core';
import {New} from '../../dataBase/New';
import {NewsService} from '../../services/news/news.service';
import {NewsServiceHttpService} from '../../services/newsServiceHttp/news-service-http.service';
@Component({
  selector: 'app-list-new',
  templateUrl: './list-new.component.html',
  styleUrls: ['./list-new.component.css']
})
export class ListNewComponent implements OnInit {

  news : New[];

  constructor(
    private  newsService : NewsService,
    private newServiceHttp : NewsServiceHttpService
    ) { }

  ngOnInit() {
    this.getNews();
  }


  //Create function to get data to Service

  // getNews(): void{
  //    this.newsService.getNews()
  //   .subscribe(newArray => this.news = newArray);
  // }
  getNews(): void{
    this.newServiceHttp.getNewsHttp()
    .subscribe(newsArray => this.news = newsArray);
  }
  
  addNew(title : string): void{
    console.log(title);
    title = title.trim();
    if(!title){
      return;
    }
    this.newServiceHttp.addNew({title}  as New)
    .subscribe(newx =>{
      this.news.push(newx);
    });
  }

  deleteNew(oneNew : New):void{
    this.news = this.news.filter(n => n !== oneNew);
    this.newServiceHttp.deleteNew(oneNew)
    .subscribe();
  }
}
