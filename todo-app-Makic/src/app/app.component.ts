import { Component } from '@angular/core';


class ToDo{
  constructor(public personName: string, public description: string, public doneFlag: boolean){

  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private toDos: ToDo[];
  public toDo: ToDo;
  public editToDo: ToDo;
  public isEditing: boolean;
  private indexOfEdit: number;

  constructor(){
    this.toDos = [];
    this.toDo = new ToDo("", "", false);
    this.isEditing = false;
    this.editToDo = new ToDo("", "", false);
    this.indexOfEdit = -1;
  }

  public getToDos(): ToDo[]{
      return this.toDos;
  }

  public create(): void{
      this.toDos.push(
        this.toDo
      );
  }

  public edit(index: number): void{
      this.isEditing = true;
      this.editToDo.personName = this.toDos[index].personName;
      this.editToDo.description = this.toDos[index].description;
      this.editToDo.doneFlag = this.toDos[index].doneFlag;
      this.indexOfEdit = index;
  }

  public save(): void{

      this.toDos[this.indexOfEdit].personName = this.editToDo.personName;
      this.toDos[this.indexOfEdit].description = this.editToDo.description;
      this.toDos[this.indexOfEdit].doneFlag = this.editToDo.doneFlag;
      this.isEditing = false;
  }

}
