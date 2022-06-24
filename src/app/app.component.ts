import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _emplyeeService: EmployeeService) { }
  employees: any = []
  ngOnInit(): void {
    this.employees = this._emplyeeService.getEmloyees()
  }

  // for project two:
  userName: string = "";

  //for class binding study
  public name: string = "code-evolution-ts"
  public successClass: string = "text-success"
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  //for style binding study
  highLightColor = "orange"
  greeting = ''
  titleStyle = {
    color: "blue",
    fontStyle: "italic"
  }
  onClick(event: any) {
    console.log(event)
    this.greeting = "wellcome to code evolution"
  }

  //for Template Reference Variables study
  logMessage(value: any) {
    console.log(value)
  }

  // Two Way Binding study
  variable = ""

  //pipes
  myObj = {
    name: "myname",
    age: 4,
    adrress: "jeusalem"
  }
  date = new Date



}
