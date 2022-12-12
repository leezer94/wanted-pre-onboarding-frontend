import setAuthToken from '@/components/@helper/utils/setAuthToken';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth Related
const postSignUp = async (userInfo: UserInfo) => {
  const data = await apiClient.post('/auth/signup', userInfo);

  return data;
};

const postSignIn = async (userInfo: UserInfo) => {
  const response = await apiClient.post('/auth/signin', userInfo);

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
  let user;
  const value = localStorage.getItem('user');

  if (value) user = JSON.parse(value);

  const { data } = await apiClient.post(
    '/todos',
    { todo },
    {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    },
  );

  return data;
};

const getTodos = async () => {
  let user;
  const value = localStorage.getItem('user');

  if (value) user = JSON.parse(value);

  const { data } = await apiClient.get('/todos', {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });

  return data;
};

const updateTodo = async (
  id: number,
  newTodo: { todo?: string | null; isCompleted?: boolean },
) => {
  let user;
  const value = localStorage.getItem('user');

  if (value) user = JSON.parse(value);

  const { data } = await apiClient.put(`/todos/${id}`, newTodo, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });

  return data;
};

const deleteTodo = async (id: number) => {
  let user;
  const value = localStorage.getItem('user');

  if (value) user = JSON.parse(value);

  return await apiClient.delete(`/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
};

export { postSignUp, postSignIn };

export { createTodo, getTodos, updateTodo, deleteTodo };
