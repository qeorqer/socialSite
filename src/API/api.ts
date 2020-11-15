import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "ad2dcc3a-2e79-415a-9d4a-70589d65b1fe"
    }
})


export type responseType<D = {}, RC = resultCodes> = {
    data: D
    resultCode: RC
    messages: Array<string>
}
export enum resultCodes {
    success = 0,
    error = 1
}

export type getItemsType<T> = {
    items: Array<T>
    totalCount: number
    error:string | null
}
export enum resultCodesWithCaptcha {
    captchaRequired = 10
}

