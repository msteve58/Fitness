import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';  
import { MemberService } from './member.service';
import { NewMemberFormComponent } from './new-member-form/new-member-form.component';  


import { MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule,MatMenuModule, MatMenu } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMenuComponent } from ./navigation-menu/navigation-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { ListMembersComponent } from './list-members/list-members.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';



import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [ {
  path: '',
  component: HomePageComponent
},  {
  path: 'HomePage',
  component: HomePageComponent
},       {
  path: 'newMember',         
  component: NewMemberFormComponent
},       {
  path: 'listMembers',       
  component: ListMembersComponent
},       
        {
  path: 'editMember/:_id',
  component: NewMemberFormComponent
},      {
  path: '**',                 
  component: NotFoundComponent
}
];



@NgModule({
  declarations: [
    AppComponent,
    NewMemberFormComponent,
    NavigationMenuComponent,
    ListMembersComponent,
    NotFoundComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
