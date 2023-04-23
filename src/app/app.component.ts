import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pettle';
  opened: boolean = true;
  showFiller: boolean = false
  isMobile: boolean = false;
  sidenavMode = 'side' as 'over' | 'push' | 'side';

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 767px)']).subscribe(result => {
      console.log(result);
      
      if (result.matches) {
        // Screen size is less than 768 pixels
        console.log('Screen size is less than 768 pixels');
        this.isMobile = true;
        this.opened = false;
        this.sidenavMode = 'over' as 'over' | 'push' | 'side';
      } else {
        // Screen size is greater than or equal to 768 pixels
        console.log('Screen size is greater than or equal to 768 pixels');
        this.opened = true;
        this.sidenavMode = 'side' as 'over' | 'push' | 'side';
      }
    });
  }
}
