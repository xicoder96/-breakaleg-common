import { Subjects } from '../subjects';

export interface TagUpdatedEvent {
  subject: Subjects.TagUpdated;
  data: {
    id: string;
    name: string;
  };
}
