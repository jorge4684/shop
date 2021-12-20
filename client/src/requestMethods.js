import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzAxYzQ0NTg5NDNlNjUxMjcxMGMwNiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mzk5ODAxMjEsImV4cCI6MTY0MDIzOTMyMX0.VTtOF6RGKtgo2Gmz_HhK1f9eQsMZ6VTuOWtFXjgcxFw"
export const publicRequest = axios.create({
    baseUrl: BASE_URL,
});
export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});
