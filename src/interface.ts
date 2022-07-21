export interface Todo {
  task: string;
  complete: boolean;
}

export interface State {
  todos: Todo[];
  filter: string;
}

export interface IActions {
  type: string;
  //payload?: any;
}
