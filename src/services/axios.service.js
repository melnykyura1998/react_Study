import React from 'react';
import axios from "axios";
import baseURL from "../constants/constants";

export const AxiosService = axios.create({baseURL})


