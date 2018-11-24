import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { GreeterService } from './greeter.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'app-root'
})
export class AppComponent implements OnInit, OnDestroy {
  public formGroup = new FormGroup({
    name: new FormControl('')
  });

  public greeting$: Observable<string>;

  private destroy$ = new Subject<boolean>();

  constructor(private greeterService: GreeterService) { }

  ngOnInit(): void {
    this.greeting$ = this.formGroup.valueChanges.pipe(
      map(({name}) => this.greeterService.greet(name)),
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
