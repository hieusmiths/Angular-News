import { Injectable } from '@angular/core';
import {Observable, of}  from 'rxjs';
import {New} from '../../dataBase/New';
import {NEWS} from '../../dataBase/Const-data';
import {Location} from '@angular/common';
@Injectable({
  providedIn: 'root' // như kiểu là cấp quyền để truy cập và gọi vậy
})
export class NewsService {

  constructor(public location : Location) { }


  getNews() : Observable<New[]>{
    return of(NEWS);
  }
  getNewDetailById(id : number ) : Observable<New>{
  return of(NEWS.find(object => object.id === id));
  }
  clickToBackLocation(): void{
    this.location.back()
  }
}
