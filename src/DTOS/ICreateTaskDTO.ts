export interface ICreateTaskDTO {
  title: string;
  description: string;
  effort: number;
  createdAt: Date;
  completedAt: Date;
  id?: string;
}