import { randomUUID } from "crypto";
import { Task } from "../../entities/Task";
import { TasksRepository } from "../../repositories/tasks/interface";

interface CreateTaskUseCaseInput {
  title: string;
  description: string;
  effort: number;
}

export class CreateTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(input: CreateTaskUseCaseInput): Promise<Task> {
    const task = await this.tasksRepository.create(input);
    return task;
  };
};
