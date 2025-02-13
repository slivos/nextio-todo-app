import type { TaskProps } from "./task-type";

interface TasksListProps {
  title: string;
  count?: number;
  data: TaskProps[];
}

export type { TasksListProps };
