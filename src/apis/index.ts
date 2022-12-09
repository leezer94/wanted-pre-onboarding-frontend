import setAuthToken from '@/components/@helper/utils/setAuthToken';
import axios from 'axios';

const authClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const postSignUp = async (userInfo: UserInfo) => {
  const data = await authClient.post('/auth/signup', userInfo);

  return data;
};

const postSignIn = async (userInfo: UserInfo) => {
  const data = await authClient.post('/auth/signin', userInfo);

  const accessToken = data.data.access_token;

  setAuthToken(accessToken);

  return data;
};

export { postSignUp, postSignIn };
