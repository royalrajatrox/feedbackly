import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
    return async function(dispatch) {
        const res = await axios.get('/api/current_user')
            dispatch({ type: FETCH_USER, payload: res.data });
    };
};
export const handleToken = (token) => async  function dispatch(dispatch){
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data});
};