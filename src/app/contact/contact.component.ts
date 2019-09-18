import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Validator, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  star = faStar;
  form: FormGroup;
  nameControl = new FormControl();

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })

  }

  ngOnInit() {
  }

  onSubmit() {
    alert('Hello World !')
  }



}
