import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-signup-window',
  templateUrl: './signup-window.component.html',
  styleUrls: ['./signup-window.component.css']
})
export class SignupWindowComponent implements OnInit {

  public asuser: boolean = false;
  public asdoctor: boolean = false;

  constructor() {

  }
  userForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  user() {
    console.log("something")
    this.asuser = true;
  }

  doctor() {
    this.asdoctor = true;
  }


  ngOnInit(): void {
  }

}
