import { Subjects } from '../subjects';

export interface QuestionCreatedEvent {
  subject: Subjects.QuestionCreated;
  data: {
    id: string;
    question: string;
    options: string[];
    answers: string[];
    tags: any[];
    difficulty: number;
  };
}
