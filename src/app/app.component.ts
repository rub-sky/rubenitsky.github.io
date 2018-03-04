import { Component } from '@angular/core';
import {skillSet} from '../assets/data/skills.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public skills = skillSet;
}
