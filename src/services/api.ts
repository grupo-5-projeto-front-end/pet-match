import axios from "axios"

const token = localStorage.getItem("@petmatch:token")

export const api = axios.create({
    baseURL: "https://petmatchapi.herokuapp.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
        }
})