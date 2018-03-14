import { Component, OnInit } from '@angular/core';
import {skillSet} from '../../assets/data/skills.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills = skillSet;

  constructor() { }

  ngOnInit() {
  }

}
