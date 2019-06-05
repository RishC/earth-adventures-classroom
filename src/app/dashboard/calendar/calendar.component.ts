import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import { Calendar } from '@fullcalendar/core';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { Course } from '../../core/data/course';
import { Assignment } from '../../core/data/assignment';
import { UserService } from '../../core/services/user.service';
import { CoursesService } from '../../courses/courses.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  options: OptionsInput;
  eventsModel: any;

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarWeekends = true;
  // update all of the upcomming events (assignments) to populate calendar with
  calendarEvents: EventInput[];


  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  // function to get all of the assignments (names, dates, and times), used to
  // populate the calendar
  // getCalendarEvents()  { // : EventInput[]
  //   var allCourses;
  //   this.courseService.getCourses().pipe( tap(courses) => {
  //     allCourses = courses as Course[];
  //   });

  //   var events = [];
  //   for (let i = 0; i < allCourses.length; i++) {
  //     var curAssignments = [];
  //     curAssignments.push(allCourses[i].assignments);
  //     var courseID = allCourses[i].id;
  //     for (let j = 0; j < curAssignments.length; j++) {
  //       var assignmentEvents = curAssignments[j].map((assignment) => {
  //         console.log(this.route.url);
  //         var curURL = location.origin + '/courses/' + courseID + '/assignments';
  //         console.log(curURL);
  //         return { title: assignment.name , start: new Date(assignment.dueDate), url : curURL };
  //       });
  //       console.log(assignmentEvents);
  //       for (let k = 0; k < assignmentEvents.length; k++) {
  //         events.push(assignmentEvents[k]);
  //       }
  //     }
  //   }
  //   return events;
  // }

  // handleDateClick(arg) {
  //   if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
  //     this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
  //       title: 'New Event',
  //       start: arg.date,
  //       allDay: arg.allDay
  //     })
  //   }
  // }

  constructor( private courseService: CoursesService,
               private userService: UserService,
               private route: ActivatedRoute
            ) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe((courses) => {
      let allCourses = courses as Course[];
      let events = [];
      for (let i = 0; i < allCourses.length; i++) {
        let curAssignments = [];
        curAssignments.push(allCourses[i].assignments);
        let courseID = allCourses[i].id;
        for (let j = 0; j < curAssignments.length; j++) {
          if (curAssignments[j]) {
            var assignmentEvents = curAssignments[j].map((assignment) => {
              var curURL = location.origin + '/courses/' + courseID + '/assignments';
              return { title: assignment.name , start: new Date(assignment.dueDate), url : curURL };
            });
            for (let k = 0; k < assignmentEvents.length; k++) {
              events.push(assignmentEvents[k]);
            }
          }
        }
      }
      this.calendarEvents = events;
    });
    this.options = {
      editable: true,
      customButtons: {
        myCustomButton: {
          text: 'custom!',
          click: function () {
            alert('clicked the custom button!');
          }
        }
      },
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin]
    };

  }

}
