interface TaskProps {
  id: string;
  todo: string;
  category: string;
  is_completed: boolean;
  date_created: string;
  date_updated: string;
  user_created: string;
  user_updated: string;
}

export type { TaskProps };
