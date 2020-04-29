import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/common.service';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-create-team-members',
  templateUrl: './create-team-members.component.html'
  , styleUrls: ['./create-team-members.component.scss']
})
export class CreateTeamMembersComponent implements OnInit {

  //profileForm: FormGroup;
  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phoneNo: [''],
    doj: [''],
    isActive: [''],
    photoPath: [''],
  });
  constructor(private fb: FormBuilder, private commonSerive: CommonService) { }
  ngOnInit(): void {

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.commonSerive.addTeamMember(this.profileForm.value).subscribe((Response) => {
      console.log('this is test');
    })
  }



}
