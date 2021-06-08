import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  constructor(private router: Router,private route: ActivatedRoute) { }
  detail: any;
  houseNo: any;
  ngOnInit() {
  	this.route.params.forEach((params:Params) => {
      this.houseNo = params.houseNo;
    });
    localStorage.removeItem(this.houseNo);
  	 this.router.navigateByUrl("/read");

  }
// this is for dcomment for delete component
}
