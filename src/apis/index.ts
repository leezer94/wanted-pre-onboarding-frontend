import setAuthToken from '@/components/@helper/utils/setAuthToken';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${
      JSON.parse(localStorage.getItem('user') || '{}').token
    }`,
  },
});

const authClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth Related
const postSignUp = async (userInfo: UserInfo) => {
  const data = await authClient.post('/auth/signup', userInfo);

  return data;
};

const postSignIn = async (userInfo: UserInfo) => {
  const response = await authClient.post('/auth/signin', userInfo);

  const accessToken = response.data.access_token;

  if (accessToken) {
    localStorage.setItem(
      'user',
      JSON.stringify({ email: userInfo.email, token: accessToken }),
    );
  }

  setAuthToken(accessToken);

  return response;
};

// Todo Related

const createTodo = async (todo: string) => {
  const { data } = await apiClient.post('/todos', { todo });

  return data;
};

const getTodos = async () => {
  const { data } = await apiClient.get('/todos');

  return data;
};

const updateTodo = async (
  id: number,
  newTodo: { todo?: string | null; isCompleted?: boolean },
) => {
  const { data } = await apiClient.put(`/todos/${id}`, {
    todo: newTodo?.todo,
    isCompleted: newTodo?.isCompleted,
  });

  return data;
};

const deleteTodo = async (id: number) => {
  return await apiClient.delete(`/todos/${id}`);
};

export { postSignUp, postSignIn };

export { createTodo, getTodos, updateTodo, deleteTodo };
