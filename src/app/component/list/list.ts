import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [NgClass],
  templateUrl: './list.html',
  styleUrl: './list.scss',
  standalone: true,
})
export class List {
  skills: Array<string> = ['Html', 'css', 'Javascript', 'Angular', 'NgRx'];

  sports: Array<string> = ['Football', 'Cricket', 'Basketball', 'Tennis', 'Hockey'];

  fruits: Array<string> = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];
}
