import { Component, OnInit } from '@angular/core';
import { PolicyDetailsComponent } from '../policy-details/policy-details.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public login="assets/images/login.png";

  constructor() { }

  ngOnInit(): void {
  }

}
