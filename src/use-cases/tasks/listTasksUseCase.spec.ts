import { describe, expect, it } from 'vitest'
import { InMemoryTasksRepository } from '../../repositories/tasks/in-memory';
import { ListTasksUseCase } from './listTasksUseCase'

describe('Complete Tasks Use Case', () => {
  it('It should be possible to list tasks', async () => {
    const repository = new InMemoryTasksRepository()
    const useCase = new ListTasksUseCase(repository)
      
      await repository.create({
        title: 'Task01',
        description: 'Description01',
        effort: 1
      });

      await repository.create({
        title: 'Task02',
        description: 'Description02',
        effort: 2
      });

      const tasks = await useCase.execute();

      expect(tasks).length(2);
  });

});
