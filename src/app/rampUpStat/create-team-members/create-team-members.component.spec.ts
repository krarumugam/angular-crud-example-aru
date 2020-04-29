import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeamMembersComponent } from './create-team-members.component';

describe('CreateTeamMembersComponent', () => {
  let component: CreateTeamMembersComponent;
  let fixture: ComponentFixture<CreateTeamMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTeamMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
