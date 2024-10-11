import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component'; // Adjust the path if necessary
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true, // Add this line
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet,LoginComponent,StudentListComponent, StudentDetailComponent, LandingPageComponent,CommonModule], // Include LoginComponent here
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
