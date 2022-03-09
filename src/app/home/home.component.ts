import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public image1="/assets/images/lic1pic.jpg"
  public image2="/assets/images/lic2pic.jpg"
  public image3="/assets/images/lic3pic.jpg"
  public image4="/assets/images/lic1img.jpg"
  public image5="/assets/images/lic2img.jpg"
  public image6="/assets/images/lic3img.jpg"
  public register="assets/images/register.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
