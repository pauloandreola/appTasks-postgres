import { Task } from "../../entities/Task";

export interface TasksRepository {
  create(task: Task): Promise<void>
}