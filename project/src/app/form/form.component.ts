import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormControl,FormGroup, FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 submitted = false;
  group: FormGroup;
  value: any;
  index=0;
  post = [];
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  	let i_from_local = localStorage.getItem("index");
  	if(i_from_local!=null) {
  	this.index = JSON.parse(i_from_local);
    }
  	let post_data = localStorage.getItem("user");
  	if(post_data!=null) {
      this.post= JSON.parse(post_data);
  	}
    this.group = this.fb.group({
      firstName: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]],
      lastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]],
      gender: ['',Validators.required],
      date: ['', [Validators.required,this.ageValidator]],
      email: ['',[Validators.required,Validators.email, Validators.pattern('[^$&*()#!?/|{;<>}]+$')]],
      password: ['',[Validators.required,  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword: ['',[Validators.required]]
    }, { validator: this.passwordMatch }); 
  }
  
  ageValidator(control: AbstractControl) {
    let date = new Date(control.value);
    let year = date.getFullYear();
    if(year<2006) {
    	return {invalidAge:true};
    } else {
    	return null;
    }
  }
  passwordMatch(c: AbstractControl) {
    if(c.get('password').value != c.get('confirmPassword').value) {
      return { passwordMismatch: true };
    } else {
        return null ;
      }
  }
   

  onSubmit() {
    this.submitted = true;
    if(this.group.valid) {
    	localStorage.setItem("index",JSON.stringify(++this.index));
        this.group.value.index=this.index;
        this.post.push(this.group.value);
        console.log(this.group.value);
      	localStorage.setItem("user",JSON.stringify(this.post));
      	alert("data inserted");    
      }
   }
   resetForm(){
   	this.group.reset();
   }
}


