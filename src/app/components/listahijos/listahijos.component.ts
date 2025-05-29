import { HttpClient, HttpBackend } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Parent } from 'src/app/models/parents';
import { Student } from 'src/app/models/student';
import { User } from 'src/app/models/users';
import { ParentService } from 'src/app/services/parent-service.service';
import { StudentService } from 'src/app/services/student-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listahijos',
  standalone: false,
  templateUrl: './listahijos.component.html',
  styleUrls: ['./listahijos.component.css'],
})
export class ListahijosComponent implements OnChanges {
  @Input() userprofile: Parent;
  isLoading = false;
  title = 'Padres';

  loading = false;
  usersCount = 0;
  students: Student;
  studentprofile: Student;
  roles;

  p: number = 1;
  count: number = 8;

  error: string;
  selectedValue!: any;
  msm_error: string;
  query: string = '';

  ServerUrl = environment.url_servicios;
  doctores;
  // role:any;

  selectedStudentProfile: Student;

  constructor(
    private parentService: ParentService,
    private studentService: StudentService,
    private http: HttpClient,
    handler: HttpBackend
  ) {
    this.http = new HttpClient(handler);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    // console.log(this.userprofile);
    // Removed this.getUsers() from here to avoid calling before userprofile is set
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userprofile'] && this.userprofile && this.userprofile.id) {
      this.getStudents();
    }
  }

  getStudents(): void {
    if (!this.userprofile || !this.userprofile.id) {
      this.isLoading = false;
      this.error = 'User profile is not defined';
      return;
    }
    this.isLoading = true;
    this.studentService.getByParentId(this.userprofile.id).subscribe(
      (res: any) => {
        this.students = res.students;
        this.isLoading = false;
      },
      (error) => {
        this.error = error;
        this.isLoading = false;
      }
    );
  }

  search() {
    return this.studentService.search(this.query).subscribe((res: any) => {
      this.students = res;
      if (!this.query) {
        this.ngOnInit();
      }
    });
  }

  public PageSize(): void {
    this.getStudents();
    this.query = '';
  }

  openPaymentsModal(student: Student): void {
    this.selectedStudentProfile = student;
  }
}
