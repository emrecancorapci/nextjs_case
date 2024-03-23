export interface ServerTask {
  id: number;
  createdUserId: number;
  name: string;
  description: string | null;
  code: number;
  boardId: number;
  flagId: number;
  order: number;
  startDate: Date | null;
  endDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  deletedUserId: number | null;
}

export interface Board {
  id: number;
  name: string;
  openAction: boolean;
  completeAction: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  tasks: ServerTask[] | [];
}

export interface Flags {
  id: number;
  name: string;
  color: string;
  priority: number;
}

export interface LoginData {
  id: number;
  fullName: string;
  email: string;
  token: string;
}
