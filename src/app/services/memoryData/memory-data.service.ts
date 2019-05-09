import {InMemoryDbService } from 'angular-in-memory-web-api';
import { New } from '../../dataBase/New';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryDataService implements InMemoryDbService{
  createDb(){
    const news = [
      { id: 11, title: 'Mr. Nice' },
      { id: 12, title: 'Narco' },
      { id: 13, title: 'Bombasto' },
      { id: 14, title: 'Celeritas' },
      { id: 15, title: 'Magneta' },
      { id: 16, title: 'RubberMan' },
      { id: 17, title: 'Dynama' },
      { id: 18, title: 'Dr IQ' },
      { id: 19, title: 'Magma' },
      { id: 20, title: 'Tornado' }
    ];
    return { news };
  }

  genIdNews(news : New[]): number{
    return news.length > 0 ? Math.max(...news.map(newx => newx.id)) + 1 : 11;
  }
  constructor() { }
}
