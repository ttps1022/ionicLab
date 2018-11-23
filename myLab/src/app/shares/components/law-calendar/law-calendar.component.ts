import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { CalendarService } from './calendar.service';
import { CalendarData } from '../../interfaces/calendar-data';

@Component({
  selector: 'app-law-calendar',
  templateUrl: './law-calendar.component.html',
  styleUrls: ['./law-calendar.component.scss']
})
export class LawCalendarComponent implements OnInit {
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  calendarOptions: Options;
  displayEvent: any;
  events: CalendarData = null;

  constructor(protected calendarService: CalendarService) { }

  ngOnInit() {

    this.calendarService.getEvents().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        // contentHeight: 2000, //月曆區塊間隔
        // header: {
        //   left: 'prev,next today',
        //   center: 'title',
        //   right: 'month,agendaWeek,agendaDay,listMonth'
        // },
        events: data,
      };
    });

  }

  loadevents() {
    this.calendarService.getEvents().subscribe(data => {
      this.events = data;
    });
  }
  clickButton(model: any) {
    this.displayEvent = model;
  }
  dayClick(model: any) {
    console.log(model);
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    };
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    };
    this.displayEvent = model;
  }
}
