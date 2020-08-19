import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    { title: 'Day1', thought: 'Today was a great day!' },
    { title: 'Day2', thought: 'Today was a okay day!' },
    { title: 'Day3', thought: 'Today was a bad day.' },
  ];
  // when enters page, it's not showing
  showForm: boolean = false;

  constructor() {}

  onSubmit(post: Post) {
    this.posts.unshift(post);
    this.toggleForm();
  }
  onDelete(index: number) {
    this.posts.splice(index, 1);
  }
  // whatever you are, reverse it
  toggleForm() {
    this.showForm = !this.showForm;
  }

  ngOnInit(): void {}
}
