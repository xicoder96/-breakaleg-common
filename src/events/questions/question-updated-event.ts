import { Subjects } from '../subjects';

export interface QuestionUpdatedEvent {
  subject: Subjects.QuestionUpdated;
  data: {
    id: string;
    question?: string;
    options?: string[];
    answers?: string[];
    tags?: any[];
    difficulty?: number;
  };
}
