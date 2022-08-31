import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { Subject } from 'rxjs';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  faPencil = faPencil;

  view: CalendarView = CalendarView.Month;

  viewDate = new Date();

  events: CalendarEvent[] = [
    {
      title: 'Editable and draggable event',
      start: new Date(),
      draggable: true,
      actions: [
        {
          label: '<fa-icon [icon]="faPencil"></fa-icon>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            console.log('Edit event', event);
          },
        },
      ]

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

  addEvent(date: Date): void {
    this.events.push({
      start: date,
      title: 'New event',
    });
    this.refresh.next();
  }
}
