import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryTasksRepository } from '../../repositories/tasks/in-memory';
import { DeleteTaskUseCase } from './deleteTaskUseCase'

describe('Delete Tasks Use Case', () => {
  let repository: InMemoryTasksRepository
  let useCase: DeleteTaskUseCase

  beforeEach(() => {
    repository = new InMemoryTasksRepository()
    useCase = new DeleteTaskUseCase(repository)
  });

  it('It should be possible to delete a task', async () => {
      const createdTask = await repository.create({
        title: 'Task01',
        description: 'Description01',
        effort: 1
      })

      await useCase.execute(createdTask.id);

      const task = await repository.findById(createdTask.id);

      expect(task).toBeFalsy();
  });

  it('It should not be able possible to delete a task that does not exists.', async() => {
    try {
      await useCase.execute('Invalid id');
    } catch (error: any) {
      expect(error.message).toEqual('Task not found')
    }
  })
});
