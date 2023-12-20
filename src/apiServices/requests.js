import axios from "axios";


const axiosClient = axios.create();
const REACT_APP_API_URL = 'http://localhost:4000/api'

axiosClient.defaults.baseURL = REACT_APP_API_URL

//default axios timeout 
axiosClient.defaults.timeout = 5*60*1000;

axiosClient.defaults.withCredentials = false;

export async function getRequest(URL) {
  const token =(localStorage.getItem('token') || "");
  axiosClient.defaults.headers.common = { Authorization: `Bearer ${token}` };
  return await axiosClient.get(`/${URL}`);
}

export async function postRequest(URL, payload) {
  if (URL !== "login" && URL !== "user") {
    const token = JSON.parse(localStorage.getItem('token') || "");
    axiosClient.defaults.headers.common = { Authorization: `Bearer ${token}` };
    return await axiosClient.post(`/${URL}`, payload);
  } else {
    return await axiosClient.post(`/${URL}`, payload);
  }
}

export async function putRequest(URL, payload) {
  const token = JSON.parse(localStorage.getItem('token') || "");
  axiosClient.defaults.headers.common = { Authorization: `Bearer ${token}` };
  return await axiosClient.put(`/${URL}`, payload);
}

export async function deleteRequest(URL) {
  const token = JSON.parse(localStorage.getItem('token') || "");
  axiosClient.defaults.headers.common = { Authorization: `Bearer ${token}` };
  return await axiosClient.delete(`/${URL}`);
}
