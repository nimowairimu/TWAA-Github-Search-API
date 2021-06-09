import { Component, OnInit } from '@angular/core';
import { ReplOptions } from 'repl';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repo:Repos ;
  constructor(public repoService : UserService) { }
   
  repoSearch(searchName){
    this.repoService.getRepos(searchName).then(
      (results)=>{
        this.repo=this.repoService.allRepos
        console.log(this.repo);
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  ngOnInit(): void {
    this.repoSearch('nimowairimu');
  }

}
