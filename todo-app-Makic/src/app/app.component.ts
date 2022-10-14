import { Component } from '@angular/core';


class Person{
  constructor(
    public name: string,
    public description: string,
    public toDo = 'smth'
  ){}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public person: Person

  constructor(){
    this.person = new Person("John Doe", "Use the washing machine")
  }

}
