import { Component, OnInit, ViewChild, AfterViewInit, AfterContentInit, HostListener } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from '../shared/services/shared.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterContentInit {
  star = faStar;
  plus = faPlus;
  images = [];
  isvisibleDialog = false;



  constructor(private sharedservice: SharedService,
    private route: ActivatedRoute,
    private routerService: Router) {
    this.images = this.sharedservice.portfolioImage;


  }


  isIndexDefined(params): boolean {
    return params.index !== undefined;
  }


  ngAfterContentInit() {

    this.route.params.subscribe(  (params) => {

        if (this.isIndexDefined(params)) {
          this.isvisibleDialog = true;
          document.body.style.overflow = 'hidden';
        }
        else {
  
            this.destroyDialog();
          
        } 

 
    })
  }


  openPortfolioItem(index) {


    this.routerService.navigateByUrl('/portfolio/' + index);



  }



  destroyDialog() {

    this.isvisibleDialog = false;
    document.body.style.overflow = 'visible';
  }

  close() {
   this.routerService.navigateByUrl('/portfolio');
  }

}














