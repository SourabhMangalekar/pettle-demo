import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { MainServiceService } from '../main-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  calendarOptions: CalendarOptions = { };
  userList: any = new Array();

  constructor( private mainService: MainServiceService) { }

  ngOnInit(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin],
      events: [
        { title: 'Walk with Ronnie', date: '2023-04-23' },
        { title: 'Vet visit with Sweety', date: '2023-04-25' },
        { title: 'Fetch with Johnny', date: '2023-04-29' },
        { title: 'Shopping with Linda', date: '2023-04-29' },
        { title: 'Grooming date with Jack', date: '2023-05-04' },
        { title: 'Walk with Ronnie', date: '2023-05-23' },
        { title: 'Vet visit with Sweety', date: '2023-05-25' },
        { title: 'Fetch with Johnny', date: '2023-05-29' },
        { title: 'Shopping with Linda', date: '2023-05-29' },
        { title: 'Grooming date with Jack', date: '2023-04-04' }
      ],
    };
    this.getUsers()
  }

  getUsers(){
    this.mainService.getUserList().subscribe(userList => {
      this.userList = userList
      this.userList.forEach((user: any) => {
        this.mainService.getDoggo().subscribe((doggo: any) => {
          console.log("hello",doggo);
          user.doggoImage = doggo.message
        })
      });
      console.log(this.userList);
    })
  }

}
