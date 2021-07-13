export interface ITask {
  id: number;
  text: string;
  status: string;
  date: number;
}

export interface ITasks {
  [key: string]: ITask;
}

export interface ITasksState {
  tasks: ITasks;
  ids: number[];
}
