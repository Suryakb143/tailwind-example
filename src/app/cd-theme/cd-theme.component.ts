import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-theme',
  templateUrl: './cd-theme.component.html',
  styleUrls: ['./cd-theme.component.scss']
})
export class CdThemeComponent implements OnInit {
  themes = ['Admin', 'Editor', 'Viewer'];  // Example roles
  selectedTheme  = '';
  constructor() { }

  ngOnInit(): void {
  }

}
