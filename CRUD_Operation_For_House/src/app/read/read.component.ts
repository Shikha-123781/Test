 import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
	//comments
 posts = [];
 str: String;
  constructor(private router: Router) { }

  ngOnInit() {
    let count =0;
    let post =[];
    let posts = Object.keys(localStorage);
    for(let i of posts) {
      post[count] = localStorage.getItem(i);
      this.posts[count] = JSON.parse(post[count]);
      count++;
    }
  }
  put(detail) {
    console.log("shikha");
    let houseNo = detail.houseNo;
    this.router.navigateByUrl("/update/"+houseNo);
  }

  delete(detail) {
    let houseNo = detail.houseNo;
    this.router.navigateByUrl("/delete/"+houseNo);
  }
//this is comment for read component
}
