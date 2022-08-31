import { Component } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view: CalendarView = CalendarView.Month;

  viewDate = new Date();

  events: CalendarEvent[] = [
    {
      title: 'Draggable event',
      start: new Date(),
      draggable: true,
    },
    {
      title: 'Non-draggable event',
      start: new Date(),
    },
  ];

  refresh = new Subject<void>();

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }
  //title = 'calendar';
}
