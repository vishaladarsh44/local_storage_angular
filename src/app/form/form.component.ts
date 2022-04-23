import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public user: any = [];
  public key: string = "users";
  public data: string = "";

  login = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required]),
    number: new FormControl("",[Validators.required,Validators.maxLength(10)]),
  })
  loginUser() {
    this.user.push(this.login.value)
    console.log(this.user);
    this.getUsersFromLocalStorage();
    localStorage.setItem(this.key, JSON.stringify(this.user));

  }

  getUsersFromLocalStorage() {
    this.data = localStorage.getItem(this.key) ?? "";
    // console.log(this.data);

    if (this.data === '') return [];


    return JSON.parse(this.data);
  }

  get name(){
    return this.login.get('name')
  }
  get email(){
    return this.login.get('email')
  }
  get password(){
    return this.login.get('password')
  }
  get number(){
    return this.login.get('number')
  }

  constructor() {
  }

  ngOnInit(): void {
    //localStorage.clear();
    // get users, if already stored
    this.getUsersFromLocalStorage().forEach((element: any) => {
      this.user.push(element);
    });

    console.log(this.user);
    
  }

}
