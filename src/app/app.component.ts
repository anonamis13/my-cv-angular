import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-CV';
  name = "Trevor Osborne";
  address = "3653 Harbor Bay Dr";
  phone = "(513)-513-6160";
  email = "trevor.osborne113@gmail.com";
  message = "";

  displayWork: boolean = true;
  displayEdu: boolean = true;
}
