import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {NewsService} from '../../services/news/news.service';
import {NewsServiceHttpService} from '../../services/newsServiceHttp/news-service-http.service';
import {New} from '../../dataBase/New';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.css']
})
export class NewDetailComponent implements OnInit {
  @Input() newDetail : New;
  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private NewsService : NewsService,
    private NewServiceHttp : NewsServiceHttpService
  ) { }

  ngOnInit() {
    this.getNewDetailById();
    this.getNewDetailByIdHttp();
    // this.updateThis();
  }
  getNewDetailById(): void{
    const id =+ this.route.snapshot.paramMap.get('id'); 
    this.NewsService.getNewDetailById(id)
    .subscribe(object => this.newDetail = object);
  }

  getNewDetailByIdHttp(): void{
    const id =+ this.route.snapshot.paramMap.get('id');
    this.NewServiceHttp.getNewByIdHttp(id)
    .subscribe(object => this.newDetail = object);
  }

  updateThis(): void{ // thằng quỷ này dựa vô đâu mà update :()
    console.log(this.newDetail);
    this.NewServiceHttp.updateMyLife(this.newDetail)
    .subscribe(() => this.clickToBackLocation());
  }
  clickToBackLocation(): void{
    this.location.back()
  }
  // clickToBackLocation(): void{
  //   this.NewsService.clickToBackLocation();
  // }
}
