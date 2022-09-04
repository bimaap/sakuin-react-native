import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import http from "../../helpers/http";

export const postTransfer = createAsyncThunk("post/transfer", async ([token, amount]) => {
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