import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from 'ng-fullcalendar';
import { IonicModule } from '@ionic/angular';

import { LawCalendarComponent } from './components/law-calendar/law-calendar.component';
import { LawSegmentComponent } from './components/law-segment/law-segment.component';


@NgModule({
  declarations: [LawCalendarComponent, LawSegmentComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    IonicModule
  ],
  exports: [IonicModule,
    FullCalendarModule,
    LawCalendarComponent,
    LawSegmentComponent
  ]
})
export class SharesModule { }
