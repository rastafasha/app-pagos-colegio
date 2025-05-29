import { HttpClient, HttpBackend } from '@angular/common/http';
import { Component, Input } from '@angular/core';
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
export class ListahijosComponent {
  @Input() userprofile: Parent;

  title = 'Padres';

  loading = false;
  usersCount = 0;
  students: Student;
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
    this.userprofile;
    this.getUsers();
    console.log(this.userprofile);
  }

  getUsers(): void {
    this.studentService.getByParentId(this.userprofile.id).subscribe((res: any) => {
      this.students = res.students;
      (error) => (this.error = error);
      console.log(this.students);
    });
  }

  
  search() {
    return this.parentService.search(this.query).subscribe((res: any) => {
      console.log(res);
      this.students = res;
      if (!this.query) {
        this.ngOnInit();
      }
    });
  }

  public PageSize(): void {
    this.getUsers();
    this.query = '';
  }
}
