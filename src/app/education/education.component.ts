import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education = "Education:";
  osu = "Ohio State University";
  degree = "B.S. Electrical and Computer Engineering";
  year = 2018;

  constructor() { }

  ngOnInit(): void {
  }

}
