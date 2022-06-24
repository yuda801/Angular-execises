import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmloyees() {
    return [
      { "id": 1, "name": "avi", "age": 10 },
      { "id": 2, "name": "avi2", "age": 20 },
      { "id": 3, "name": "avi3", "age": 30 },
      { "id": 4, "name": "avi4", "age": 40 }
    ]
  }
}
