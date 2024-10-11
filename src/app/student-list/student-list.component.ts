import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
    name: string;
}

@Component({
    selector: 'app-student-list',
    standalone: true,
    template: `
        <div class="container">
            <h1>Student List</h1>
            <table>
                <thead>
                    <tr>
                        
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let student of students">
                        
                        <td>{{ student.name }}</td>
                        
                        
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    styleUrls: ['./student-list.component.css'],
    imports: [CommonModule]  // Ensure CommonModule is imported
})
export class StudentListComponent {
    students: Student[] = [
        {  name: 'Alice Johnson' },
        {  name: 'Bob Smith' },
        {  name: 'Charlie Brown' },
        {  name: 'David Wilson' }
    ];
}
