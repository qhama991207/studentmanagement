import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
    id: number;
    name: string;
    age: number;
    grade: string;
}

@Component({
    selector: 'app-student-detail',
    standalone: true,
    templateUrl: './student-detail.component.html',
    styleUrls: ['./student-detail.component.css'],
    imports: [CommonModule]
})
export class StudentDetailComponent {
    @Input() student!: Student; // Input property to receive student data
}
