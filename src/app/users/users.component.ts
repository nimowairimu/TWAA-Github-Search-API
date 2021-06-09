import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service';
import {User} from '../user';
import { Repos } from '../repos';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user!: User;
repo:Repos | undefined;
  constructor(public myService: UserserviceService, private repoService: UserserviceService ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  searchs(searchName: any){
    this.myService.sarchUser(searchName).then(
      (success: any)=>{
        this.user = this.myService.foundUser;
      },
      (error: any)=>{
        console.log(error)
      }
    );
    this.repoService.getRepos(searchName).then(
      ()=>{
        this.repo=this.repoService.allRepos
        console.log(this.repo);
      },
      ()=>{
        console.log)(error);
      }
    );
  }
  ngOnInit(): void {
    this:searchs("nimowairimu")
  }


function ngOnInit() {
  throw new Error('Function not implemented.');
}

function searchs(arg0: string) {
  throw new Error('Function not implemented.');
}

