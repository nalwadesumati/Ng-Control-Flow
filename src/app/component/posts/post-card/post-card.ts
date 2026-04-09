import { Component, Input } from '@angular/core';
import { Ipost } from '../../../models/posts';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-post-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss',
})
export class PostCard {
  @Input() post!: Ipost;
}
