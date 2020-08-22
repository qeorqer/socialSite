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
    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`)
    }
}


export const authAPI = {
    isAuth() {
        return axiosInstance.get(`auth/me`);
    }
}