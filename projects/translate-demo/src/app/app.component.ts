import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public languageFormGroup = new FormGroup({
    language: new FormControl('en'),
    name: new FormControl('')
  });

  private destroy$ = new Subject<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public greet(): void {
    alert(`Hello ${this.languageFormGroup.get('name').value}`);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
