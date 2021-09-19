import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
contactForm=new FormGroup({
  username:new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),
  message:new FormControl('',Validators.required)
}
);




  constructor() { }

  ngOnInit(): void {
  }
  get username(){
    return this.contactForm.get('username');

  }
  get email(){
    return this.contactForm.get('email');

  }
  get message(){
    return this.contactForm.get('message');

  }

}
