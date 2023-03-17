import { randomUUID } from "crypto";
import { Task } from "../../entities/Task";

export class CreateTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute({ title, description, effort }: CreateTaskDTO): Promise<Task> {
    const task = new Task();

    Object.assign(task, {
      title,
      description,
      effort,
      createdAt: new Date(),
      completedAt: new Date(),
    });

    await this.tasksRepository.create(task);

    return task;
  };
};
