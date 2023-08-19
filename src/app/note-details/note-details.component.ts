import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
// import { HttpClient } from '@angular/common/http';
import { Form, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  constructor (private fb : FormBuilder){}
  
  noteForm = this.fb.group({
    title: ['', Validators.required],
    description: ['']
  })
  // public getJsonValue: any;
  // public postJsonValue: any;
  // userData:any = []; 
  // constructor(private http: HttpClient) { }
 
  ngOnInit(): void {
    // this.getMethod();

  }
  // public getMethod(){
  //   this.http.get('http://localhost:3000/posts').subscribe(data => {
  //     console.log(data);
  //     this.userData=data;
  //   });
  // }
loadApiData(){
  this.noteForm.setValue({
    title: 'Reeya',
    description: 'Welcome to Note Form'
  })
}
}
