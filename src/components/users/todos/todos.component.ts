import { Component, OnInit } from '@angular/core';
import { Todos } from '../../../shared/interfaces/todos/todos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  constructor(private route: ActivatedRoute, private title: Title) {}
  allTodos!: Todos[];
  errorMessage?: string;
  itemComplete!: string[];
  ngOnInit(): void {
    this.title.setTitle('Todos');
    this.getAllTodos();
  }

  getAllTodos() {
    this.route.data.subscribe(
      ({ todoDate }) => {
        this.allTodos = todoDate;
      },
      (error) => (this.errorMessage = error)
    );
  }
}
