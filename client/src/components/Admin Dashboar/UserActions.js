import axios from 'axios';

export const createUser = user => async dispatch => {
  try {
    const res = await axios.post('/users', user);
    dispatch({
      type: 'CREATE_USER',
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUserRole = (userId, role) => async dispatch => {
  try {
    const res = await axios.put(`/users/${userId}`, { role });
    dispatch({
      type: 'UPDATE_USER_ROLE',
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
