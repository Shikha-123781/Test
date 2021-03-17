import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
	post=[];

  constructor() { }

  ngOnInit(): void {
    let user = localStorage.getItem("user");
    this.post = JSON.parse(user);
  }
  delete(i) {
  	i-=1;
  	this.post.splice(i,1);
  	for(i;i<this.post.length;i++) {
  		this.post[i].index-=1;
  	}
  	console.log(this.post);
  	localStorage.setItem("user",JSON.stringify(this.post));
  	localStorage.setItem("index",JSON.stringify(this.post.length));
  }
}
