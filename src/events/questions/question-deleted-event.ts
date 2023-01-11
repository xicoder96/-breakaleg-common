import { Subjects } from '../subjects';

export interface QuestionDeletedEvent {
  subject: Subjects.QuestionDeleted;
  data: {
    id: string;
  };
}
