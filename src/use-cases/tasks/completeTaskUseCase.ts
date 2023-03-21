import { TasksRepository } from "../../repositories/tasks/interface";

export class CompleteTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(id: string) {
    const taskExists = await this.tasksRepository.findById(id);
    if(!taskExists) {
      throw new Error('Task not found')
    }
    const task = await this.tasksRepository.updateById(id, { completeAt: new Date() });

    return task;
  };
};
