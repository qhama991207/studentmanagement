import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  studentId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.studentId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
