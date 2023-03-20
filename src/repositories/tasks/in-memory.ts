import { randomUUID } from "crypto";
import { Task } from "../../entities/Task";
import { TasksRepository } from "./interface";

export class InMemoryTasksRepository implements TasksRepository {
  private tasks: Task[] =  [];

  async create(task: Pick<Task, "title" | "description" | "effort">): Promise<Task> {
    const newTask = {
      ...task,
      id: randomUUID(),
      createdAt: new Date(),
      completedAt: null,
    };

    this.tasks.push(newTask);

    return newTask;
  }
}