import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-cd-settings-wrapper',
  templateUrl: './cd-settings-wrapper.component.html',
  styleUrls: ['./cd-settings-wrapper.component.scss']
})
export class CdSettingsWrapperComponent implements OnInit {
  constructor(private readonly router:Router,private route: ActivatedRoute){}

  menuItems = [
    { label: 'Entitlement', icon: 'brush', content: 'Change how Chrome looks.',link:'entitlement' ,isExternal:false},
    { label: 'Themes', icon: 'search', content: 'Manage search engines.' ,link:'theme',isExternal:false},
    { label: 'About', icon: 'home', content: 'Manage what happens when Chrome starts.',link:'about',isExternal:true }
  ];

  selectedMenuItem: any = {};

  selectMenuItem(item: any): void {
    if(!item.isExternal){
      this.router.navigate([item.link],{relativeTo: this.route});
    }else{
      window.open(item.link,'_blank')
    }
    this.selectedMenuItem = item;
  }

  ngOnInit(): void {
  }

}
