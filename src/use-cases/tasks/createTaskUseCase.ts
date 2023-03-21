import { Task } from "../../entities/Task";
import { TasksRepository } from "../../repositories/tasks/interface";
import { TaskInput } from "./interfaces/task-input";

export class CreateTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(input: TaskInput): Promise<Task> {
    const task = await this.tasksRepository.create(input);
    return task;
  };
};
