import { Component } from '@angular/core';
import { Istd } from '../../models/student';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.scss',
})
export class Students {
  stdArr: Array<Istd> = [
    {
      fname: 'Jhon',
      lname: 'Doe',
      Email: 'Jhon@gmail.com',
      contact: 34567899,
      stdId: '345',
    },
    {
      fname: 'May',
      lname: 'Doe',
      Email: 'may@gmail.com',
      contact: 3456789989,
      stdId: '235',
    },
    {
      fname: 'June',
      lname: 'Doe',
      Email: 'June@gmail.com',
      contact: 34567899,
      stdId: '455',
    },
    {
      fname: 'august',
      lname: 'Doe',
      Email: 'June@gmail.com',
      contact: 34567899,
      stdId: '456',
    },
    {
      fname: 'july',
      lname: 'Doe',
      Email: 'June@gmail.com',
      contact: 34567899,
      stdId: '457',
    },
  ];
}
