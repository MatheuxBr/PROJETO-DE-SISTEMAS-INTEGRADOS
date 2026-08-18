import { Component, signal } from '@angular/core';
import { Tarefa } from "./tarefa";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('TODOapp');

  arrayDeTarefas: Tarefa[] = [];
  constructor() {
    this.READ_tarefas();
  }

  CREATE_tarefa(campo: HTMLInputElement) {

    var descricaoNovaTarefa = campo.value;

    if (descricaoNovaTarefa.trim() === '') {
      return;
    }

    var novaTarefa = new Tarefa(descricaoNovaTarefa, false);

    this.arrayDeTarefas.unshift(novaTarefa);

    campo.value = '';
  }

  READ_tarefas() {
    this.arrayDeTarefas = [
      new Tarefa("Estudar Frameworks WEB", false),
      new Tarefa("Comer Pizza", false),
      new Tarefa("Ajudar meus pais", false)
    ];
  }

}