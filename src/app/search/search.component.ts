import { Component, OnInit, Output,  Input,  } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchName:string;
@Output()searchOutput = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
 search(){
   this.searchOutput.emit(this.searchName);
   this.searchName = "";
 }
}
