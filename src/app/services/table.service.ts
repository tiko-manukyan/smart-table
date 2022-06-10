import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  subject = new BehaviorSubject( 'huys');
  private data: Observable<any> = this.subject.asObservable();



  constructor() {}



}
