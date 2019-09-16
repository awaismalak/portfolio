import { Component, OnInit } from '@angular/core';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

icons =
[
  'google','twitter',"linkedin-in",'dribbble'
]

  constructor() { }

  ngOnInit() {
  }

}
