import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import http from "../../helpers/http";

export const getTransactions = createAsyncThunk("get/transactions", async ([token, cb, page = 1, limit = 6]) => {
  const result = {};
  try {
    const { data } = await http(token).get(`https://sakuin-backend.vercel.app/transactions/?page=${page}&limit=${limit}`);

    result.message = data.message;
    result.data = data.results;
    cb(data)
    return result;
  } catch (e) {
    result.error = e.response.data.message;
    return result;
  }
});

export const getTransactionById = createAsyncThunk("get/transactionById", async ([token, id, cb]) => {
  const result = {};
  try {
    const { data } = await http(token).get(`https://sakuin-backend.vercel.app/transactions/${id}`)
    result.message = data.message;
    result.data = data.results;
    cb(data)
    return result;
  } catch (e) {
    result.error = e.response.data.message;
    return result;
  }
});

export const postTopup = createAsyncThunk("post/topup", async ([token, amount]) => {
  const result = {};
  try {
    const send = qs.stringify({amount});
    const { data } = await http(token).post(`https://sakuin-backend.vercel.app/transactions/topup`, send, {
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        }
    });

    result.message = data.message;
    result.data = data.results;
    return result;
  } catch (e) {
    result.error = e.response.data.message;
    return result;
  }
});

export const postTransfer = createAsyncThunk("post/transfer", async ([token, id, values]) => {
  const result = {};
  try {
    const send = qs.stringify(values);
    const { data } = await http(token).post(`https://sakuin-backend.vercel.app/transactions/transfer/${id}`, send, {
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        }
    });
    console.log(data);
    result.message = data.message;
    result.data = data.results;
    return result;
  } catch (e) {
    result.error = e.response.data.message;
    return result;
  }
});