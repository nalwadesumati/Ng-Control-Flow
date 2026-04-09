import { Component, Input, input } from '@angular/core';
import { PostCard } from '../posts/post-card/post-card';
import { Ipost } from '../../models/posts';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-post-dashboard',

  imports: [PostCard, MatGridListModule],
  templateUrl: './post-dashboard.html',
  styleUrl: './post-dashboard.scss',
})
export class PostDashboard {
  @Input() postData: Ipost[] = [];
}
