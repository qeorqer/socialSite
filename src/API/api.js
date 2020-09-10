import Axios from "axios";

let axiosInstance = Axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "ad2dcc3a-2e79-415a-9d4a-70589d65b1fe"
    }
})
export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return axiosInstance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return axiosInstance.delete(`follow/${userId}`)
    },

}

export const profileAPI = {
    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return axiosInstance.put(`profile/status`, {status})
    },
    setPhoto(photo) {
        let formData = new FormData();
        formData.append("image", photo);
        return axiosInstance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': "multipart/form-data instead"
            }
        })
    },
    saveProfile(profile){
        return axiosInstance.put(`profile`,profile)
    }
}

export const authAPI = {
    isAuth() {
        return axiosInstance.get(`auth/me`);
    },
    logIn(email, password, rememberMe = false, captcha = null) {
        return axiosInstance.post(`auth/login`, {email, password, rememberMe,captcha})
    },
    logOut() {
        return axiosInstance.delete(`auth/login`);
    }
}

export const securityApi = {
    getCaptca(){
        return axiosInstance.get(`security/get-captcha-url`);
    }
}