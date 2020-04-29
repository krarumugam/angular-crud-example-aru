import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTeamMembersComponent } from './rampUpStat/create-team-members/create-team-members.component';
import { ListTeamMembersComponent } from './rampUpStat/list-team-members/list-team-members.component';


const routes: Routes = [
  { path: 'list', component: ListTeamMembersComponent },
  { path: 'create', component: CreateTeamMembersComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
