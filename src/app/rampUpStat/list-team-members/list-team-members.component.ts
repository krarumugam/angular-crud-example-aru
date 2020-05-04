import { Component, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/models/teamMember.model';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-list-team-members',
  templateUrl: './list-team-members.component.html'
  , styleUrls: ['./list-team-members.component.scss']
})
export class ListTeamMembersComponent implements OnInit {

  // teamMembers: TeamMember[] = [
  //   {
  //     id: 1,
  //     name: 'Aru',
  //     email: 'aru@gmail.com',
  //     phoneNo: 123456789,
  //     doj: new Date('1/2/2013'),
  //     isActive: true,
  //     photoPath: 'assets/images/male.jpg'
  //   },
  //   {
  //     id: 2,
  //     name: 'Sakthi',
  //     email: 'Sakthi@gmail.com',
  //     phoneNo: 456789123,
  //     doj: new Date('1/2/2014'),
  //     isActive: true,
  //     photoPath: 'assets/images/male.jpg'
  //   },
  //   {
  //     id: 2,
  //     name: 'Kathir',
  //     email: 'Kathir@gmail.com',
  //     phoneNo: 987456123,
  //     doj: new Date('1/2/2015'),
  //     isActive: true,
  //     photoPath: 'assets/images/male.jpg'
  //   }
  // ];

  teamMembers;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {

    this.commonService.getAllTeamMember().subscribe(data => {
      console.log(data);
      this.teamMembers = data;
      //this.teamMembers = data.result;
    });

  }

  updateTeamMember (teamMember: any){
    console.log("test aru");
    console.log(teamMember);

    this.teamMembers = teamMember;
  }



}
