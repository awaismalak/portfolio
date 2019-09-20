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
  submitted = false;
  nameControl = new FormControl();

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(11)]],
      message: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]]
    })

  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
  }
  else
  {
    alert("Form submit")
  }
  }



}
