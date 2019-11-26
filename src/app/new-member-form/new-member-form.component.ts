import { Component, OnInit, Input} from '@angular/core';
import { MemberService } from '../member.service';  
import { Member } from '../../../serverside/models/member.model';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-member-form',
  templateUrl: './new-member-form.component.html',
  styleUrls: ['./new-member-form.component.css']
})
export class NewMemberFormComponent implements OnInit {

  @Input () firstName: string;
  @Input () lastName: string;
  @Input () email: string;
  @Input () bodyType: Selection; 
  @Input () gender: Selection; 
  @Input () fitnessGoal: Selection; 
  private mode = 'New'; 
  private id: string;

  model = new Member();

  constructor(private _myService: MemberService, private router:Router, public route: ActivatedRoute) { }

  newMember() {
    this.model = new Member;
  }

  onSubmit() { 
    
    console.log("You submitted: " + this.firstName + " " + this.lastName + " " + this.email + " " + this.bodyType + " " + this.gender + " " + this.fitnessGoal)
    this._myService.addMembers(this.firstName ,this.lastName, this.email, this.bodyType, this.gender,this.fitnessGoal);
    this.router.navigate(['/listMembers'])
    .then(() => {
      window.location.reload();
    });
    
  }
  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
       if (paramMap.has('_id'))
         { this.mode = 'Update'; 
           this.id = paramMap.get('_id');}
       else {this.mode = 'New';
           this.id = null; }
     });
     if(this.mode == 'New')
      this._myService.addMembers(this.firstName, this.lastName,this.email, this.bodyType, this.gender,this.fitnessGoal);
    if(this.mode == 'Update')
      this._myService.updateMember(this.id, this.firstName, this.lastName,this.email, this.bodyType, this.gender,this.fitnessGoal);

  }
  
}
