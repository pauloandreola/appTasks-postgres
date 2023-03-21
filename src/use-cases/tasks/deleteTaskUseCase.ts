import { TasksRepository } from "../../repositories/tasks/interface";

export class DeleteTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(id: string) {
    const taskExists = await this.tasksRepository.findById(id);
    if(!taskExists) {
      throw new Error('Task not found')
    }
    await this.tasksRepository.deleteById(id);

  };
};
