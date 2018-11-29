import { Injectable } from '@angular/core';
import { GreetingInfo } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private greetingInfoSubject = new BehaviorSubject(
    new GreetingInfo('Hello', 'Florian')
  );

  public changeGreetingInfo({greeting, name}: GreetingInfo): void {
    this.greetingInfoSubject.next(new GreetingInfo(greeting, name));
  }

  public get greetingInfo$(): Observable<GreetingInfo> {
    return this.greetingInfoSubject.asObservable();
  }
}
