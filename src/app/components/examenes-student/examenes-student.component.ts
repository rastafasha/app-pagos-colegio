import { HttpClient, HttpBackend } from '@angular/common/http';
import { Component, Input, SimpleChanges } from '@angular/core';
import { Calificacion } from 'src/app/models/calificacion';
import { Examen } from 'src/app/models/examen';
import { Student } from 'src/app/models/student';
import { ExamenService } from 'src/app/services/examen.service';
import { ParentService } from 'src/app/services/parent-service.service';
import { StudentService } from 'src/app/services/student-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-examenes-student',
  templateUrl: './examenes-student.component.html',
  styleUrls: ['./examenes-student.component.css']
})
export class ExamenesStudentComponent {
  @Input()userprofile:Student;

  isLoading = false;
    title = 'Examenes';
  
    loading = false;
    usersCount = 0;
    examenes: Examen;
    studentprofile: Student;
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
    selectedMateria: Examen;
  
    constructor(
      private exameneService: ExamenService,
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
        // console.log(this.userprofile);
        this.getExamenes();
      }
    }
  
  weightedAverageProgress: number = 0;

    getExamenes(): void {
      if (!this.userprofile || !this.userprofile.id) {
        this.isLoading = false;
        this.error = 'User profile is not defined';
        return;
      }
      this.isLoading = true;
      this.exameneService.getExamensbyStudent(this.userprofile.id).subscribe(
        (res: any) => {
          this.examenes = res.examenes;
          this.calculateWeightedAverage();
          this.isLoading = false;
        },
        (error) => {
          this.error = error;
          this.isLoading = false;
        }
      );
    }

  calculateWeightedAverage(): void {
    if (!this.examenes) {
      this.weightedAverageProgress = 0;
      return;
    }
    let totalScore = 0;
    // If examenes is a single object, convert to array for iteration
    const examenesArray = Array.isArray(this.examenes) ? this.examenes : [this.examenes];
    for (const examen of examenesArray) {
      totalScore += examen.puntaje;
    }
    this.weightedAverageProgress = totalScore;
    console.log(this.weightedAverageProgress);
  }
  
    search() {
      return this.exameneService.search(this.query).subscribe((res: any) => {
        this.examenes = res;
        if (!this.query) {
          this.ngOnInit();
        }
      });
    }
  
    public PageSize(): void {
      this.getExamenes();
      this.query = '';
    }
  
    openPaymentsModal(calif: Examen): void {
          this.selectedMateria = calif;
        }

    openNewModal(studentprofile: Student): void {
      this.selectedStudentProfile = studentprofile;
      console.log(studentprofile);
    }
}
