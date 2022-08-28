import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import http from "../../helpers/http";

export const getUsersData = createAsyncThunk("getAll/users", async (token) => {
  const result = {};
  try {
    const { data } = await http(token).get("http://192.168.100.148:8000/users/");

    result.message = data.message;
    result.data = data.results;
    return result;
  } catch (e) {
    result.error = e.response.data.message;
    return result;
  }
});

export const getUserDataById = createAsyncThunk("getUser/users", async (request) => {
    const token = request.token
    const id = request.id
    const result = {};
    try {
        const { data } = await http(token).get(`http://192.168.100.148:8000/users/${id? id: ':id'}`);
        result.data = data.results;
        result.message = data.message;
        return result;
    } catch (e) {
        result.error = e.response.data.message;
        return result;
    }
});

export const getUserPin = createAsyncThunk("getUserPin/users", async ([token, cb]) => {
    const result = {};
    try {
        const { data } = await http(token).get('http://192.168.100.148:8000/users/check/pin');
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
        const { data } = await http(token).patch("http://192.168.100.148:8000/users/patch/pin", send, {
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