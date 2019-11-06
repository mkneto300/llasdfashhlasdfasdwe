import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() filterEvent = new EventEmitter<string>();
  @Output() sideFilterOption: string;

  constructor() { }

  ngOnInit() {
  }
  changeFilter(filterOption:string) {
    this.filterEvent.emit(filterOption);
    console.log(filterOption);
  }

}
