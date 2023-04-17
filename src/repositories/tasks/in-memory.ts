import { randomUUID } from "crypto";
import { Task } from "../../entities/Task";
import { TaskInput, TasksRepository } from "./interface";

export class InMemoryTasksRepository implements TasksRepository {
  private tasks: Task[] =  [];

  async create(task: TaskInput): Promise<Task> {
    const newTask = {
      ...task,
      id: randomUUID(),
      createdAt: new Date(),
      completedAt: null,
    };

    this.tasks.push(newTask);

    return newTask;
  };

  async deleteById(id: string): Promise<void> {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);

    this.tasks.splice(taskIndex, 1);
  };

  async findAll(): Promise<Task[]> {
    return this.tasks;
  }

  async findById(id: string): Promise<Task | null> {
    const task = this.tasks.find((task) => task.id === id);

    return task || null;
  };

  async updateById(id: string, task: Partial<TaskInput>): Promise<Task> {
    const taskIndex = this.tasks.findIndex(task => task.id === id);

    const updatedTask = {
      ...this.tasks[taskIndex],
      ...task,
    };

    this.tasks[taskIndex] = updatedTask;

    return updatedTask;
  };
};
