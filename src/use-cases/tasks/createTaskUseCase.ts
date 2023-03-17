import { randomUUID } from "crypto";
import { ICreateTaskDTO } from "../../DTOS/ICreateTaskDTO";
import { Task } from "../../entities/Task";
import { TasksRepository } from "../../repositories/tasks/interface";

export class CreateTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute({ title, description, effort }: ICreateTaskDTO): Promise<Task> {
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
