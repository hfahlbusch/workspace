import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { GreetingInfo } from '../models';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-advanced-greeter',
  templateUrl: './advanced-greeter.component.html',
  styleUrls: ['./advanced-greeter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedGreeterComponent implements OnInit, DoCheck {
  public greetingInfo$: Observable<GreetingInfo>;

  public greetingInfo: GreetingInfo;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.greetingInfo$ = this.dataService.greetingInfo$;
  }

  ngDoCheck(): void {
    console.log('Change detection for AdvancedGreeterComponent');
  }
}
