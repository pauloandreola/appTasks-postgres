import { Task } from "vitest";

export class CreateTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute({ title, description }: CreateTaskDTO): Promise<Task> {
    const task = new Task();

    Object.assign(task, {
      title,
      description,
      done: false,
      created_at: new Date(),
      updated_at: new Date(),
    });

    await this.tasksRepository.create(task);

    return task;
  };
};
