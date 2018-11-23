import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SharesModule } from '../shares/shares.module';

import { ParticipationRatePage } from './participation-rate.page';
import { ParticipationRateMonthComponent } from './components/participation-rate-month/participation-rate-month.component';
import { ParticipationRateHalfYearComponent } from './components/participation-rate-half-year/participation-rate-half-year.component';
import { ParticipationRateYearComponent } from './components/participation-rate-year/participation-rate-year.component';

const routes: Routes = [
  {
    path: '',
    component: ParticipationRatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ParticipationRatePage,
    ParticipationRateMonthComponent,
    ParticipationRateHalfYearComponent,
    ParticipationRateYearComponent
  ],
  exports: [
    ParticipationRatePage
  ],
})
export class ParticipationRatePageModule { }
