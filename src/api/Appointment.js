import axios from 'axios';
import * as c from './config/Constants';
// import { authHeader } from './config/AuthHeader';
import checkError from './config/HttpClient';

const PARAMS = ({ methodType = 'GET' }) => ({
  method: methodType,
  headers: { 'content-type': 'application/json',},  
});

// const axiosURL = async (api, data) => {

// }

export default {

  getCurrentTimeslot:async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/appointment/getCurrentTimeslot`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },


  handleLeave:async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/appointment/handleLeave`;
    try {
      const { data } = await axios(URL,Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },

  addOrUpdateTimeslot: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/appointment/addOrUpdateTimeslot`;
    try {
      const { data } = await axios(URL,Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },

  removeTimeSlot: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/appointment/removeTimeSlot`;
    try {
      const { data } = await axios(URL,Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },

  bookAppointment: async ({ ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/appointment/bookAppointment`;
    try {
      const { data } = await axios(URL,Object.assign({}, PARAMS({ methodType: 'POST' }), {
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },

  fetchBookedAppointmentList: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/appointment/fetchBookedAppointmentList`;
    try {
      const { data } = await axios(URL,Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },

  getAppointedClientList: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/appointment/getAppointedClientList`;
    try {
      const { data } = await axios(URL,Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },

  fetchRequiredList: async () => {
    const URL = `${c.API_CONSUMER}/api/appointment/fetchRequiredList`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), {}));
      return data;
    } catch (error) {      
      checkError(error);
      throw error;
    }
  },

  fetchStaffList: async ({ cancelToken, ...payload }) => {
    const URL = `${c.API_CONSUMER}/api/appointment/fetchStaffList`;
    try {
      const { data } = await axios(URL,Object.assign({}, PARAMS({ methodType: 'POST' }), {
          cancelToken,
          data: payload,
        }),
      );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },

};