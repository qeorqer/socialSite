import {axiosInstance, resultCodes, resultCodesWithCaptcha, responseType} from "./api";

type meDataType = {
    email: string
    id: number
    login: string
}
type loginDataType = {
        userId: string
}
export const authAPI = {
    isAuth() {
        return axiosInstance.get<responseType<meDataType>>(`auth/me`).then(res => res.data);
    },
    logIn(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return axiosInstance.post<responseType<loginDataType,resultCodes | resultCodesWithCaptcha >>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data);
    },
    logOut() {
        return axiosInstance.delete(`auth/login`);
    }
}