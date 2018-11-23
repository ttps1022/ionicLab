import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SharesModule } from '../shares/shares.module';
import { ParticipationRatePageModule } from '../participation-rate/participation-rate.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharesModule,
    ParticipationRatePageModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
