//security API
import {axiosInstance} from "./api";

type captchaType = {
    url: string
}
export const securityApi = {
    getCaptca<captchaType>() {
        return axiosInstance.get(`security/get-captcha-url`).then(res => res.data);
    }
}