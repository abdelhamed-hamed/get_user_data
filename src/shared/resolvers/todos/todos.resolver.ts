import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GettodosService } from '../../services/get/gettodos/gettodos.service';
import { Observable } from 'rxjs';
import { Todos } from '../../interfaces/todos/todos';

export const todosResolver: ResolveFn<Todos[]> = (route, state) => {
  const getTodos = inject(GettodosService);
  let id: string;
  function getTodosDate(): Observable<Todos[]> {
    return getTodos.getTodos<Todos[]>(getID());
  }

  function getID(): number {
    id = route.paramMap.get('id')!;
    return +id;
  }
  return getTodosDate();
};
