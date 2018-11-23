import { Component, ViewChild } from '@angular/core';
import { Slides } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 0);
  }


}
