import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from '../shared/services/shared.service';
import { Router } from '@angular/router';

import { from } from 'rxjs';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  star = faStar;
  plus = faPlus;
  images = [];
  isvisibleDialog = false;

  constructor(private sharedservice: SharedService,
    private routerService: Router) {
    this.images = this.sharedservice.portfoli;

  }

  ngOnInit() {
  }

  showDialog(index) {
    this.isvisibleDialog = true;
    document.body.style.overflow = 'hidden';
    this.routerService.navigateByUrl('/' + index);

  }

  close(){
    this.isvisibleDialog = false;
    document.body.style.overflow = 'visible';
  }
}
