import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentData: string = ''
  @Input('parentData') myName: string = ''

  @Output() childEvent = new EventEmitter()

  constructor() { }

  fireEvent() {
    this.childEvent.emit("hey from child")
  }


  ngOnInit(): void {
  }

}
