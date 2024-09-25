import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-entitnments',
  templateUrl: './cd-entitnments.component.html',
  styleUrls: ['./cd-entitnments.component.scss']
})
export class CdEntitnmentsComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
