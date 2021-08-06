import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  countryArray = [
    {
      id: 1,
      name: "INDIA"
    },
    {
      id: 2,
      name: "China"
    },
    {
      id: 3,
      name: "Bangladeh"
    }
  ];
  stateArray=[
    {
      id: 1,
      countryid:1,
      name: "Andhra Pradesh"
    },
    {
      id: 2,
      countryid:1,
      name: "Bihar"
    },
    {
      id: 3,
      countryid:1,
      name: "Goa"
    },
    {
      id: 4,
      countryid:2,
      name: "henan"
    },
    {
      id: 5,
      countryid:2,
      name: "yunann"
    },
    {
      id: 6,
      countryid:2,
      name: "hainan"
    },
    {
      id: 7,
      countryid:3,
      name: "Dhaka"
    },
    {
      id: 8,
      countryid:3,
      name: " Barisal"
    },
    {
      id:9,
      countryid:3,
      name: "Rangpur"
    }
  ];







  loginform!: FormGroup;
  ngOnInit(): void {
    this.loginform = new FormGroup({

      firstname: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
      lastname: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
      phone_no: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
     country: new FormControl (''),
     state: new FormControl (''),
    });
   this.loginform.get('country')?.valueChanges.subscribe((responce)=>{
     console.log(responce);
     this.stateArray=this.stateArray.filter((obj)=>{
       return (obj.countryid==responce.id)
     })
   })
  }

  get firstname() { return this.loginform.get('firstname')!; }
  get lastname() { return this.loginform.get('lastname')!; }
  get email() { return this.loginform.get('email')!; }
  get phone_no() { return this.loginform.get('phone_no')!; }



}