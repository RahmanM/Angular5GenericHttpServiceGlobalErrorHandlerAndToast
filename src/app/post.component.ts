import { Component, Input } from '@angular/core';
import { PostService } from './services/post.service';
import { Post } from './models/post';
import { UnknownError } from './common/unknown.error';
import { CustomToasterService } from './services/toaster.service';

@Component({
  selector: 'posts',
  templateUrl: "posts.html",
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  posts: Array<Post>;

  constructor(private service: PostService, private customToasterService: CustomToasterService) {  }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.posts = response as Array<Post>;
      this.customToasterService.success("Posts are loadded successfully.");
    }, error => {
      this.showErrorNotification(error);
    });
  }

  updatePost(post: Post) {
    this.service.update(post).subscribe(response => {
       this.customToasterService.success("Post is updated successfully.");
    }, error => {
      this.showErrorNotification(error);
    })
  }

  deletePost(post: Post) {
    this.service.delete(post.id).subscribe(response => {
      var index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      this.customToasterService.success("Post is deleted successfully.");
    }, error => {
      this.showErrorNotification(error);
    })
  }

  showErrorNotification(error: any) {
    // NB: throw exception to global error handler
    if (error instanceof UnknownError) throw error;
    this.customToasterService.error(error.description);
  }

}
