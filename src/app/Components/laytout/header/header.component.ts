import { Component } from '@angular/core';
import { CommanService } from 'src/app/services/comman.service';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private homeCom:HomeComponent){}
  onSidebarToggle(){
    this.homeCom.toggleSidebar();
  }

}
