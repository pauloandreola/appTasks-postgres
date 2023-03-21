import { describe, expect, it } from 'vitest'
import { InMemoryTasksRepository } from '../../repositories/tasks/in-memory';
import { CompleteTaskUseCase } from './completeTaskUseCase'

describe('Complete Tasks Use Case', () => {
  it('It should be able to complete a task', async () => {
    const repository = new InMemoryTasksRepository()
    const useCase = new CompleteTaskUseCase(repository)
      
      const createdTask = await repository.create({
        title: 'Task01',
        description: 'Description01',
        effort: 1
      })

      const task = await useCase.execute(createdTask.id);

      expect(task.completedAt).toBeFalsy();
  });

  it('It should not be able possible to complete a task that does not exists.', async() => {
    const repository = new InMemoryTasksRepository();
    const useCase = new CompleteTaskUseCase(repository);

    try {
      await useCase.execute('Invalid id');
    } catch (error: any) {
      expect(error.message).toEqual('Task not found')
    }
  })
});
