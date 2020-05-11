import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExperience: string = "Work Experience:";
  kroger: string = "Kroger Technlogy";
  kroger2: string = "Software Developer | 2018-present";
  osu: string = "Ohio State University";
  osu2: string = "Student Coder | 2015-2017";

  experiences: string[] = ["Kroger Technlogy",
                          "Software Developer | 2018-present",
                          "Ohio State University",
                          "Student Coder | 2015-2017"]

  constructor() { }

  ngOnInit(): void {
  }

}
