import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Output('onClose') onClose: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
