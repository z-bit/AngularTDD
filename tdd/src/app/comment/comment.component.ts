import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments:Array<any>;

  constructor() {
    this.comments = [
      {title: 'First commemnt', likes: 0}
    ];
  }

  add(comment) {
    let commentObj = {title: comment, likes: 0};
    this.comments.unshift(commentObj);
  }

  like(comment) {
    comment.likes++
  }

  ngOnInit() {}
}
