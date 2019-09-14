import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
 star = faStar;
 download=faDownload;
  constructor() { }

  ngOnInit() {
  }

}
