import { TasksRepository } from "../../repositories/tasks/interface";
import { TaskInput } from "./interfaces/task-input";

export class UpdateTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(id: string, input: Partial<TaskInput>) {
    const taskExists = await this.tasksRepository.findById(id);
    if(!taskExists) {
      throw new Error('Task not found')
    }
    const task = await this.tasksRepository.updateById(id, input);

    return task;
  };
};
