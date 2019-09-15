import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from '../shared/services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';

import { from } from 'rxjs';
import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
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
    private location: Location,
    private route: ActivatedRoute,
    private routerService: Router) {
    this.images = this.sharedservice.portfolioImage;

  }

  ngOnInit() {
 
  }


  openPortfolioItem(index) {

    this.routerService.navigateByUrl('/portfolio/' + index);
    this.isvisibleDialog = true;
    document.body.style.overflow='hidden';
  }



  onClose()
  {

    this.isvisibleDialog= false;
    document.body.style.overflow='visible';
  }

}














