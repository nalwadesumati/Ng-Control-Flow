import { Component, Input } from '@angular/core';
import { Ipost } from '../../../models/posts';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss',
})
export class PostCard {
  @Input() post!: Ipost;
}
