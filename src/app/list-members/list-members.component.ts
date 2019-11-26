import { Component, OnInit } from '@angular/core';

import { MemberService } from '../member.service';

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.css']
})
export class ListMembersComponent implements OnInit {

  public members;

  constructor(private _myService: MemberService) { }

  ngOnInit() {
    this.getMembers();
  }
  getMembers() {
    this._myService.getMembers().subscribe(
       //read data and assign to public variable students
       data => { this.members = data},
       err => console.error(err),
       () => console.log('finished loading')
     );
   }
   onDelete(memberId: string) {
     this._myService.deleteMember(memberId);
   }
 
}
