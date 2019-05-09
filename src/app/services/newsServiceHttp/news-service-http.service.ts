import { HttpClient , HttpHeaders } from '@angular/common/http';
import { MessageService} from '../../message.service';
import {Observable, of, from} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {New} from '../../dataBase/New';
import { Injectable } from '@angular/core';
const httpOptios = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class NewsServiceHttpService {

  // declare datBase
  private newsURL = 'api/news';

  constructor(
    private http : HttpClient,
    private messageService : MessageService
  ) { }

  getNewsHttp(): Observable<New[]>{
    console.log(this.newsURL + "ok");;
    return this.http.get<New[]>(this.newsURL) // khúc này
    .pipe(
      tap(_ => this.log('Fetched NEws')),
      catchError(this.handleError<New[]>('Get new', []))
    );
  }
  getNewByIdHttp(id: number) : Observable<New>{
    const url = `${this.newsURL}/${id}`;
    return this.http.get<New>(url)
    .pipe(
      tap(_ => this.log(`ok nha ${id}`)),
      catchError(this.handleError<New>(`get hero id = ${id}`))
    );
  }

  updateMyLife(newx : New): Observable<any>{
    return this.http.put(this.newsURL, newx , httpOptios)
    .pipe(
      tap(_=> this.log('ok update')),
      catchError(this.handleError<any>('updated hero'))
    )
  }
  addNew(oneNew : New): Observable<New>{
    return this.http.post<New>(this.newsURL, oneNew , httpOptios)
    
    .pipe(
      tap((newx: New) => this.log(`new -- ${newx.id}`)),
      catchError( this.handleError<New>('addHero'))
    );
  }
  deleteNew(oneNew :New): Observable<New>{
    const id = typeof oneNew === 'number' ? oneNew : oneNew.id;
    const url = `${this.newsURL}/${id}`;
    console.log(url);
    return this.http.delete<New>(url, httpOptios)
    .pipe(
      tap(_=>this.log(`delete ${id}`),
      catchError(this.handleError<New>('Delete One NEw'))
      ));
  }

  searchNewByName(term : string ): Observable<New[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<New[]>(`${this.newsURL}/?title=${term}`)
    .pipe(
      tap(_=> this.log(`found --- ${term}`)),
      catchError(this.handleError<New[]>('Search New', []))
      );
  }

  // Thứ khó hiểu
  private handleError<T> (operation = 'operation', result?: T){
    return (error : any): Observable<T> =>{
      console.error(error);
      this.log (`${operation} failed : ${error.message}`);
      
      return of(result as T);
    };
  }

  
  private log(message : string){
    console.log(message);
    this.messageService.add(`Message : ${message}`);
  }

}
