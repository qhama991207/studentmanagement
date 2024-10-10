import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LandingPageComponent } from '../landing-page/landing-page.component';
// import { LoginComponent } from '../login/login.component';
// import { StudentDetailComponent } from '../student-detail/student-detail.component';

@Component({
  selector: 'app-student-list',
  standalone: true,
  templateUrl: './student-list.component.html' , 
  styleUrls: ['./student-list.component.css'],
  imports: [CommonModule]  // Add this line
})
export class StudentListComponent {
  students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
}
