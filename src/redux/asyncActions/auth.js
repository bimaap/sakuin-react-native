import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import http from "../../helpers/http";

export const login = createAsyncThunk("auth/login", async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await http().post("https://sakuin-backend.vercel.app/auth/login", send, {
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        }
    });

    result.message = data.message;
    result.token = data.results.token;
    return result;
  } catch (e) {
    result.error = e.response.data.message;
    return result;
  }
});

export const register = createAsyncThunk("auth/register", async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await http().post("https://sakuin-backend.vercel.app/auth/register", send, {
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