import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-profile',
  templateUrl: './cd-profile.component.html',
  styleUrls: ['./cd-profile.component.scss']
})
export class CdProfileComponent implements OnInit {
  panelOpenState = false;
  authorizedRoles = ['Admin', 'Editor', 'Viewer'];  // Example roles
  authorizedGroups = ['HR Group', 'Finance Group', 'Tech Team'];  // Example groups

  authorizedActionResourcesMap = [
    {
      resource: 'User Management',
      actions: ['Create', 'Read', 'Update', 'Delete']
    },
    {
      resource: 'Project Management',
      actions: ['View', 'Edit', 'Assign']
    },
    {
      resource: 'Billing',
      actions: ['View Invoice', 'Approve Payments']
    }
  ]; 

  subpanel: any;

  posts = [
    { title: 'First Post', content: 'This is the First post' },
    { title: 'Second Post', content: 'This is the Second post' },
    { title: 'Third Post', content: 'This is the Third post' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
