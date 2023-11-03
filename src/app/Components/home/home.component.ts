import { Component, OnInit } from '@angular/core';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  sidebarToggle:boolean=true;

  toggleSidebar(){
    this.sidebarToggle=!this.sidebarToggle;
  }
}
