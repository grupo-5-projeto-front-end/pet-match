import axios, { AxiosInstance } from "axios"

const token: string | null = localStorage.getItem("@petmatch:token")

export const api: AxiosInstance = axios.create({
    baseURL: "https://petmatchapi.herokuapp.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
        }
})