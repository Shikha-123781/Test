import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AbstractControl,FormControl,FormGroup, FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formGroup: FormGroup;
  submitted = false;
  houseNo = [];
  locationCoordinates: any;

  constructor(private router: Router,private fb: FormBuilder) { }
 
  ngOnInit() {
    this.formGroup = this.fb.group({
      houseNo: ['',[Validators.required, this.alreadyExist.bind(this), Validators.pattern('^[0-9]*$')]],
      ownerName: ['',[Validators.required, Validators.pattern('^[A-Z a-z]*$')]],
      houseSize: ['',[Validators.required, Validators.pattern('^[0-9]*$')]],
      numberOfFloors: ['',[Validators.required, Validators.pattern('^[0-9]*$')]],
      landmark: ['',[Validators.required, Validators.pattern('^[A-Z a-z]*$')]],
      mobileNumber: ['',[Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }
alreadyExist(c: FormControl) {
  this.houseNo = Object.keys(localStorage);
  if(this.houseNo) {
    for(let x of this.houseNo) {
      if(c.value == x) {
        return {alreadyExist: true};
      }
    }
  }
  return null;
}
 submitForm(form) {
  var locationCoordinates;
  this.submitted = true;
  if(this.formGroup.valid) {
    locationCoordinates =navigator.geolocation.getCurrentPosition((pos)=>{
      console.log(pos.coords.latitude+'N'+pos.coords.longitude+'W');
        return pos.coords.latitude+'N'+pos.coords.longitude+'W';
      });
    console.log(locationCoordinates);
    this.locationCoordinates = locationCoordinates;
    let houseNo = form.controls.houseNo.value;
    let ownerName = form.controls.ownerName.value;
    let houseSize = form.controls.houseSize.value;
    let numberOfFloors = form.controls.numberOfFloors.value;
    let landmark  = form.controls.landmark.value;
    let mobileNumber = form.controls.mobileNumber.value;
    console.log(this.locationCoordinates);
    let data = {"houseNo":houseNo,"ownerName":ownerName,
    "houseSize":houseSize,"numberOfFloors":numberOfFloors,
    "landmark":landmark,"locationCoordinates":this.locationCoordinates,
    "mobileNumber":mobileNumber};
    localStorage.setItem(houseNo,JSON.stringify(data));
    alert("data inserted");
  } else {
    alert("invalid form details");
  }
 }
}

