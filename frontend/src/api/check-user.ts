import axios, { CancelTokenSource } from 'axios';

import { FormValueProps } from '../features/components/form';

// Static variable to hold the cancel token
let cancelToken: CancelTokenSource | null = null;

// eslint-disable-next-line consistent-return
export const checkUser = async (data: FormValueProps) => {
  // Cancel the previous request if it exists
  if (cancelToken) {
    cancelToken.cancel('Cancelled due to new request');
  }

  // Create a new CancelToken
  cancelToken = axios.CancelToken.source();

  try {
    const response = await axios.get<UserResponse[]>(
      `http://localhost:3000/api/user?email=${encodeURIComponent(
        data.email,
      )}&number=${encodeURIComponent(data.number ? data.number : '')}`,
      { cancelToken: cancelToken.token },
    );
    cancelToken = null;
    return response;
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.log('Fetching terminated', error);
      throw error;
    }
  }
};

interface UserResponse {
  email: string;
  number: string;
}
