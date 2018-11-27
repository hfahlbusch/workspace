import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { GreeterService } from '../services/greeter.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  templateUrl: './dynamic-greeter.element.html',
  styleUrls: ['./dynamic-greeter.element.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'greeter-dynamic'
})
export class DynamicGreeterElement implements OnInit, OnDestroy {
  public formGroup = new FormGroup({
    name: new FormControl('world')
  });

  public greeting$: Observable<string>;

  private destroy$ = new Subject<boolean>();

  constructor(private greeterService: GreeterService) { }

  ngOnInit(): void {
    this.greeting$ = this.formGroup.valueChanges.pipe(
      startWith(this.formGroup.value),
      map(({name}) => this.greeterService.greet(name)),
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
