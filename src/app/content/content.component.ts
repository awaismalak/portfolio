import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { from } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
star = faStar;
  constructor() { }

  ngOnInit() {
  }

}
