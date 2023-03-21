import { describe, expect, it } from 'vitest'
import { InMemoryTasksRepository } from '../../repositories/tasks/in-memory';
import { GetTaskUseCase } from './getTaskUseCase'

describe('Get Tasks Use Case', () => {
  it('It should be able to get a task', async () => {
    const repository = new InMemoryTasksRepository()
    const useCase = new GetTaskUseCase(repository)
      
    const createdTask = await repository.create({
      title: 'Task01',
      description: 'Description01',
      effort: 1
    })

    const task = await useCase.execute(createdTask.id);

    expect(task.title).toEqual('Task01');
    expect(task.description).toEqual('Description01');
    expect(task.effort).toEqual(1);
  });

  it('It should not be able possible to get a task that does not exists.', async() => {
    const repository = new InMemoryTasksRepository();
    const useCase = new GetTaskUseCase(repository);

    try {
      await useCase.execute('Invalid id');
    } catch (error: any) {
      expect(error.message).toEqual('Task not found')
    }
  })
});
