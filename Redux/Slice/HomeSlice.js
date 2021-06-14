import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Config, {API_URL} from '../../Config';

export const homeslice = createSlice({
  name: 'home',
  initialState: {
    agents: [],
  },
  reducers: {
    setAgents: (state, action) => {
      // console.log('setAgents', action.payload);
      state.agents = action.payload;
    },
    clearAgents: (state, action) => {
      // console.log('setAgents', action.payload);
      state.agents = [];
    },
  },
});

//actions
export const {clearAgents, setAgents} = homeslice.actions;


export default homeslice.reducer;
