import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//we know that response will be in JSON format
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MemberService {

  constructor(private http: HttpClient) { }

  // Uses http.get() to load data 
  getMembers() {
    return this.http.get('http://localhost:8000/members');
  }
  addMembers(firstName: string, lastName: string, email: string, bodyType: Selection, gender: Selection, fitnessGoal: Selection) {
    this.http.post('http://localhost:8000/members', { firstName, lastName, email, bodyType, gender, fitnessGoal })
      .subscribe((responseData) => {
        console.log(responseData);
      });

  }
  updateMember(memberId: string, firstName: string, lastName: string, email: string, bodyType: Selection, gender: Selection, fitnessGoal: Selection) {

    this.http.put("http://localhost:8000/members/"
      + memberId, { firstName, lastName, email, bodyType, gender, fitnessGoal })
      .subscribe(() => {
        console.log('Updated: ' + memberId);
      });

  }

  deleteMember(memberId: string) {
    this.http.delete("http://localhost:8000/members/" + memberId)
      .subscribe(() => {
        console.log('Deleted: ' + memberId);
      });
    location.reload();
  }


}
