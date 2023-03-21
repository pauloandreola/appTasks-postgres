import { describe, expect, it } from 'vitest'
import { InMemoryTasksRepository } from '../../repositories/tasks/in-memory';
import { CreateTaskUseCase } from './createTaskUseCase'

describe('Create Tasks Use Case', () => {
  it('It should be able to create a task', async () => {
    const repository = new InMemoryTasksRepository()
    const useCase = new CreateTaskUseCase(repository)
      const task = await useCase.execute({
        title: 'Task01',
        description: 'Description01',
        effort: 1
      })

      expect(task).toHaveProperty('id');
      expect(task.title).toEqual('Task01');
      expect(task.description).toEqual('Description01');
      expect(task.effort).toEqual(1);
  });
});
