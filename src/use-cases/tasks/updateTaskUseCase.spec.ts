import { describe, expect, it } from 'vitest'
import { InMemoryTasksRepository } from '../../repositories/tasks/in-memory';
import { UpdateTaskUseCase } from './updateTaskUseCase'

describe('Update Tasks Use Case', () => {
  it('It should be able to update a task', async () => {
    const repository = new InMemoryTasksRepository()
    const useCase = new UpdateTaskUseCase(repository)
      
      const createdTask = await repository.create({
        title: 'Task01',
        description: 'Description01',
        effort: 1
      })

      const task = await useCase.execute(createdTask.id, {
        title: 'Task02',
        description: 'Description02',
        effort: 2
      });

      expect(task.title).toEqual('Task02');
      expect(task.description).toEqual('Description02');
      expect(task.effort).toEqual(2);
  });

  it('It should not be able possible to update a task that does not exists.', async() => {
    const repository = new InMemoryTasksRepository();
    const useCase = new UpdateTaskUseCase(repository);

    try {
      await useCase.execute('Invalid id', {
        title: 'Task02',
        description: 'Description02',
        effort: 2
      });
    } catch (error: any) {
      expect(error.message).toEqual('Task not found')
    }
  })
});
