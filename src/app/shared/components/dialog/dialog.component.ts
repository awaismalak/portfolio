import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  isReady = false;

  portfolioImage: any = {};
  @Output('onClose') onClose: EventEmitter<any> = new EventEmitter();

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {
    let index = this.route.snapshot.params.index;
    this.portfolioImage = this.sharedService.portfolioImage[index];
  }

  ngOnInit() {
    
    setTimeout(()=>{this.isReady=true;},0);
  }
 
  closeDialog()
  {
    this.hideDialog();
   setTimeout(()=>{this.onClose.emit()},400);

  }

  hideDialog(){
    this.isReady = false;
  }
}

























// ngOnInit() {
    
//   //  setTimeout((()=>{ this.ready = true;}), 0);
//   }

  // close(){
  //   this.ready = false;
  //   setTimeout(()=>{
  //     this.onClose.emit()
  //   }, 400);
  // }