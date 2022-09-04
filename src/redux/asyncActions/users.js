import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import http from "../../helpers/http";

export const getUsersData = createAsyncThunk("getAll/users", async ([token, cb, page = 1, search = '', limit = 10]) => {
  const result = {};
  try {
    const { data } = await http(token).get(`https://sakuin-backend.vercel.app/users?page=${page}&limit=${limit}&search=${search}`);

    result.message = data.message;
    result.data = data.results;
    cb(data)
    return result;
  } catch (e) {
    result.error = e.response.data.message;
    return result;
  }
});

export const getUserDataById = createAsyncThunk("getUser/users", async ([token, cb, id = '']) => {
    const result = {};
    try {
        const { data } = await http(token).get(`https://sakuin-backend.vercel.app/users/${id? id: ':id'}`);
        result.data = data.results;
        result.message = data.message;
        cb(data.results)
        return result;
    } catch (e) {
        result.error = e.response.data.message;
        return result;
    }
});

export const getUserPin = createAsyncThunk("getUserPin/users", async ([token, cb]) => {
    const result = {};
    try {
        const { data } = await http(token).get('https://sakuin-backend.vercel.app/users/check/pin');
        result.data = data.results.pin;
        result.message = data.message;
        cb(data.results.pin)
        return result;
    } catch (e) {
        result.error = e.response.data.message;
        return result;
    }
});

export const patchUserPin = createAsyncThunk("patchUserPin/users", async ([token, pin]) => {
    const result = {};
    try {
        const send = qs.stringify({pin});
        const { data } = await http(token).patch("https://sakuin-backend.vercel.app/users/patch/pin", send, {
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        });
        result.message = data.message;
        return result;
    } catch (e) {
        result.error = e.response.data.message;
        return result;
    }
});

export const patchUserImage = createAsyncThunk("patchUserImage/users", async ([token, image]) => {
    const result = {};

    
    try {
        const imageData = new FormData();
        
        imageData.append("image", {
          uri: image[0].uri,
          name: image[0].fileName,
          type: image[0].type
        })

        const { data } = await http(token).patch("https://sakuin-backend.vercel.app/users/patch/image", imageData, {
            headers: {
                Accept: 'application/json',
                'content-type': 'multipart/form-data'
            }
        });
        
        result.message = data.message;
        return result;
    } catch (e) {
        result.error = e.response.data.message;
        return result;
    }
});

export const patchUserFullname = createAsyncThunk("patchUserFullname/users", async ([token, name]) => {
    const result = {};
    try {
        const send = qs.stringify(name);
        const { data } = await http(token).patch("https://sakuin-backend.vercel.app/users/patch/name", send, {
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        });
        result.message = data.message;
        return result;
    } catch (e) {
        result.error = e.response.data.message;
        return result;
    }
});