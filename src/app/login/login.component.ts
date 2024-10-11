import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [CommonModule, FormsModule]
})
export class LoginComponent {
    username: string = '';
    password: string = '';

    onSubmit() {
        console.log('Username:', this.username);
        console.log('Password:', this.password);
        // Add authentication logic here
    }
}
