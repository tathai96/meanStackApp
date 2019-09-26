import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { Post } from "../post.model";
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postService: PostsService) {
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdatedListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
