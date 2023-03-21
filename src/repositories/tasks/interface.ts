import { Task } from "../../entities/Task";

export interface TaskInput {
  title: string;
  description: string;
  effort: number;
  completeAt?: Date;
}
export interface TasksRepository {

  create(task: TaskInput): Promise<Task>;
  deleteById(id: string): Promise<void>;
  findAll(): Promise<Task[]>;
  findById(id: string): Promise<Task | null>;
  updateById(id: string, task: Partial<TaskInput>): Promise<Task>;
}
