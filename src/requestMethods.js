import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzk4ZjI3YWY3MGQyM2EzOWY3MWMwMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODExNzI2MywiZXhwIjoxNjQ4Mzc2NDYzfQ.Ejvgz7JBuCSSiuQZVXwA4iyiqDHZYQQY_r_bi6a1db4";

//fatch products
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});
