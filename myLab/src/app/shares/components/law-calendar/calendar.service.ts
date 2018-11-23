import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { } from 'rxjs';
import { CalendarData } from '../../interfaces/calendar-data';

@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    public getEvents(): Observable<any> {
        const dateObj = new Date();
        const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
        const data: CalendarData = [{
            id: 1,
            label: 'red',
            title: 'All Day Event',
            start: yearMonth + '-01',
            end: null,
            url: null,
        },
        {
            id: 2,
            label: 'red',
            title: 'Long Event',
            start: yearMonth + '-07',
            end: yearMonth + '-10',
            url: null
        },
        {
            id: 999,
            label: 'red',
            title: 'Repeating Event',
            start: yearMonth + '-09T16:00:00',
            end: null,
            url: null

        },
        {
            id: 999,
            label: 'red',
            title: 'Repeating Event',
            start: yearMonth + '-16T16:00:00',
            end: null,
            url: null
        },
        {
            id: 2,
            title: 'Conference',
            label: 'red',
            start: yearMonth + '-11',
            end: yearMonth + '-13',
            url: null
        },
        {
            id: 2,
            title: 'Meeting',
            label: 'red',
            start: yearMonth + '-12T10:30:00',
            end: yearMonth + '-12T12:30:00',
            url: null
        },
        {
            id: 2,
            title: 'Lunch',
            label: 'red',
            start: yearMonth + '-12T12:00:00',
            end: null,
            url: null
        },
        {
            id: 2,
            title: 'Meeting',
            label: 'red',
            start: yearMonth + '-12T14:30:00',
            end: null,
            url: null
        },
        {
            id: 2,
            title: 'Happy Hour',
            label: 'red',
            start: yearMonth + '-12T17:30:00',
            end: null,
            url: null
        },
        {
            id: 2,
            title: 'Dinner',
            label: 'red',
            start: yearMonth + '-12T20:00:00',
            end: null,
            url: null
        },
        {
            id: 2,
            title: 'Birthday Party',
            label: 'red',
            start: yearMonth + '-13T07:00:00',
            end: null,
            url: null
        },
        {
            id: 2,
            title: 'Click for Google',
            label: 'red',
            start: yearMonth + '-28',
            end: null,
            url: 'http://google.com/',
        }];
        return of(data);
    }
}
