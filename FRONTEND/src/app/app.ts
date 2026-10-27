
import { Component, signal } from '@angular/core';
import { Tarefa } from './tarefa';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TODOapp');

  arrayDeTarefas = signal<Tarefa[]>([]);
  apiURL: string = 'https://projeto-de-sistemas-integrados-yvqt-6kutkyiym-unisanta.vercel.app/';

  constructor(private http: HttpClient) {
    this.READ_tarefas();
  }

  CREATE_tarefa(campo: HTMLInputElement) {
    const descricaoNovaTarefa = campo.value.trim();

    if (descricaoNovaTarefa === '') {
      return;
    }

    const novaTarefa = new Tarefa(descricaoNovaTarefa, false);

    this.http.post<Tarefa>(
      `${this.apiURL}/api/post`,
      novaTarefa
    ).subscribe({
      next: resultado => {
        console.log(resultado);
        campo.value = '';
        this.READ_tarefas();
      },
      error: erro => console.error('Erro ao criar tarefa:', erro)
    });
  }

  READ_tarefas() {
    this.http.get<Tarefa[]>(
      `${this.apiURL}/api/getAll`
    ).subscribe({
      next: resultado => this.arrayDeTarefas.set(resultado),
      error: erro => console.error('Erro ao buscar tarefas:', erro)
    });
  }

  DELETE_tarefas(tarefaAserRemovida: Tarefa) {
    var indice = this.arrayDeTarefas().indexOf(tarefaAserRemovida);
    var id = this.arrayDeTarefas()[indice]._id;
    this.http.delete<Tarefa>(`${this.apiURL}/api/delete/${id}`).subscribe(resultado => { console.log(resultado); this.READ_tarefas(); });
  }

  UPDATE_tarefa(tarefaAserModificada: Tarefa) {
    var indice = this.arrayDeTarefas().indexOf(tarefaAserModificada);
    var id = this.arrayDeTarefas()[indice]._id;
    this.http.patch<Tarefa>(`${this.apiURL}/api/update/${id}`,
    tarefaAserModificada).subscribe(
    resultado => { console.log(resultado); this.READ_tarefas(); });
    }
   
}
