import React from 'react';
import io from 'socket.io-client';
import {SOCKET_URL} from './Config';
import {useDispatch, useSelector} from 'react-redux';



export const socket = null;
// export const socket = io(SOCKET_URL);


const ChattrContext = React.createContext(socket);
export default ChattrContext;
