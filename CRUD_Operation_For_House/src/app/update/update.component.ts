import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AbstractControl,FormControl,FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  info = 'update';
	detail: any;
	houseNo: any;
  formGroup: FormGroup;
  submitted = false;
  locationCoordinates: any;
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }
  ngOnInit() {
     this.route.params.forEach((params:Params) => {
       this.houseNo = params.houseNo;
   });
  this.detail = JSON.parse(localStorage.getItem(this.houseNo));
  this.formGroup = this.fb.group({
      houseNo: [this.detail.houseNo,[Validators.required, Validators.pattern('^[0-9]*$')]],
      ownerName: [this.detail.ownerName,[Validators.required, Validators.pattern('^[A-Z a-z]*$')]],
      houseSize: [this.detail.houseSize,[Validators.required, Validators.pattern('^[0-9]*$')]],
      numberOfFloors: [this.detail.numberOfFloors,[Validators.required, Validators.pattern('^[0-9]*$')]],
      landmark: [this.detail.landmark,[Validators.required, Validators.pattern('^[A-Z a-z]*$')]],
      mobileNumber: [this.detail.mobileNumber,[Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }
  submitForm(form) {
    this.submitted = true;
    if(this.formGroup.valid) {
      navigator.geolocation.getCurrentPosition((pos)=>{
        this.locationCoordinates = pos.coords.latitude+'N'+pos.coords.longitude+'W';
      });
      let houseNo = form.controls.houseNo.value;
      let ownerName = form.controls.ownerName.value;
      let houseSize = form.controls.houseSize.value;
      let numberOfFloors = form.controls.numberOfFloors.value;
      let landmark  = form.controls.landmark.value;
      let mobileNumber = form.controls.mobileNumber.value;
      
      let data = {"houseNo":houseNo,"ownerName":ownerName,
      "houseSize":houseSize,"numberOfFloors":numberOfFloors,
      "landmark":landmark,"locationCoordinates":this.locationCoordinates,
      "mobileNumber":mobileNumber};
      localStorage.setItem(houseNo,JSON.stringify(data));
      alert("data inserted");
    } else {
      alert("invalid form details");
    }
    this.router.navigateByUrl("/read");
  }
}