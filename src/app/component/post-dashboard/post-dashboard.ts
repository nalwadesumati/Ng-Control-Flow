import { Component, Input, input } from '@angular/core';
import { PostCard } from '../posts/post-card/post-card';
import { Ipost } from '../../models/posts';

@Component({
  selector: 'app-post-dashboard',
  imports: [PostCard],
  templateUrl: './post-dashboard.html',
  styleUrl: './post-dashboard.scss',
})
export class PostDashboard {
  @Input() postData: Array<Ipost> = [];
}
