import { randomUUID } from "crypto";

export class Task {
    'title': string;
    'description': string;
    'effort': number;
    'createdAt': Date;
    'completedAt': Date;
    'id'?: string;
  
    constructor() {
      if (!this.id) {
        this.id = randomUUID();
      }
    }
}
