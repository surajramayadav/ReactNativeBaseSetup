import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Config, {AUTH_API_URL, SOCKET_URL} from '../../Config';
import {socket} from '../../SocketContext';
import SocketContext from '../../SocketContext';

export const loginslice = createSlice({
  name: 'login',
  initialState: {
    isLogged: false,
 
  },
  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
   
  },
});

//actions
export const {
  setIsLogged,
} = loginslice.actions;

// export const loginUser = (username, password, navigation) => async (
//   dispatch,
// ) => {
//   // console.log('loginUsers:', username, AUTH_API_URL);
//   // return null;
//   try {
//     dispatch(setLoading(true));
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const {data} = await axios.post(
//       AUTH_API_URL + `/admin`,
//       {
//         username,
//         password,
//       },
//       config,
//     );
//     console.log('signindata', data);
//     if (data.success) {
//       dispatch(setLogin(data));
//       navigation.replace('Home');
//     } else {
//       dispatch(setError('Invalid username or password'));
//     }
//     dispatch(setLoading(false));
//   } catch (error) {
//     console.log('logindata', error);

//     console.log(error.message);
//     dispatch(setError(error.message));
//     dispatch(setLoading(false));
//     navigation.replace('Register', {username});
//   }
// };

// export const logoutUser = () => async (dispatch) => {
//   console.log('logoutUser called');
//   dispatch(setLogout());
// };

// export const registerUser = (username, password, name, navigation) => async (
//   dispatch,
// ) => {
//   try {
//     console.log('hiiii', username, name, password);
//     dispatch(setLoading(true));
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     // console.log(Config.REACT_APP_AUTH_API_URL + `/auth/${agent}`);
//     const {data} = await axios.post(
//       AUTH_API_URL + `/signup`,
//       {
//         username,
//         name,
//         password,
//         role: 'user',
//       },
//       config,
//     );
//     if (data.success) {
//       console.log('data', data);
//       dispatch(setLogin(data));
//       navigation.replace('Home');
//     } else {
//       dispatch(setError('Invalid username or password'));
//     }
//     dispatch(setLoading(false));
//   } catch (error) {
//     console.log('registerData Form', error);
//     console.log(error.message);
//     dispatch(setError(error.message));
//     dispatch(setLoading(false));
//     alert('Error While Registering');
//   }
// };

export default loginslice.reducer;
