import { Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component'; // Adjust the path if necessary
// import { StudentListComponent } from './student-list/student-list.component';
// import { StudentDetailComponent } from './student-detail/student-detail.component';

export const routes: Routes = [  // Use named export
    {path:'',
        redirectTo:'/landing',
        pathMatch: 'full'

    },
    { path: 'landing', loadComponent: ()=> import('./landing-page/landing-page.component').then(m=>m.LandingPageComponent) },
    { path: 'login', loadComponent: ()=> import('./login/login.component').then(m=>m.LoginComponent) },
 
    // { path: '', component: StudentDetailComponent },

    
];
