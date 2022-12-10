import { createContext, Dispatch } from 'react';

type TodoState = Todo[];

const TodoStateContext = createContext<TodoState | undefined>(undefined);

type Action =
  | { type: 'CREATE'; text: string }
  | { type: 'TOGGLE'; id: number }
  | { type: 'REMOVE'; id: number };

type TodoDispatch = Dispatch<Action>;

const TodoDispatchContext = createContext<TodoDispatch | undefined>(undefined);
