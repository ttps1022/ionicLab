import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageType } from './page-type.enum';

@Component({
  selector: 'app-participation-rate',
  templateUrl: './participation-rate.page.html',
  styleUrls: ['./participation-rate.page.scss'],
})
export class ParticipationRatePage implements OnInit {
  PageType = PageType;
  page = PageType.Month;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.PageType);
    this.route.queryParams.subscribe(console.log);
    this.route.params.subscribe(console.log);
  }

  test(event) {
    console.log(event);
    console.log(this.page);
    console.log(this.PageType);
  }

}
