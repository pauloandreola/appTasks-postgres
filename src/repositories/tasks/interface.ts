import { Task } from "../../entities/Task";

export interface TasksRepository {
  create(task: Pick<Task, 'title' | 'description' | 'effort'>): Promise<Task>
}
