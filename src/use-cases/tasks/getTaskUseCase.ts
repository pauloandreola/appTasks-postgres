import { TasksRepository } from "../../repositories/tasks/interface";

export class GetTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(id: string) {
    const task = await this.tasksRepository.findById(id);
    if(!task) {
      throw new Error('Task not found')
    }

    return task;
  };
};
