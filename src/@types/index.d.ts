declare type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

declare type UserInfo = {
  email?: string;
  password?: string;
};

declare type AuthType = string | null;
