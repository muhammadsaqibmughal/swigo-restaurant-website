import axios from "axios";

const url = import.meta.env.VITE_BACKEND_BASE_URL;

///home page table reservation
export const handleReserve = async (data) => {
  try {
    let res = await axios.post(`${url}/reserveTable`, data);
    return res;
  } catch (e) {
    console.log("table Reservation Data Didn't send to Database");
  }
};

//contact page table reservation
export const handleReserve2 = async (data) => {
  try {
    return await axios.post(`${url}/reserveTable2`, data);
  } catch (e) {
    console.log("table Reservation Data Didn't send to Database");
  }
};

//signup system

export const handleSignup = async (data) => {
  try {
    return await axios.post(`${url}/signup`, data);
  } catch (e) {
    console.log("Signup Error");
  }
};

// login system

export const handleLogin = async (data) => {
  try {
    return await axios.post(`${url}/login`, data);
  } catch (e) {
    console.log("Login Error");
  }
};
