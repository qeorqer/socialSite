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
        return axiosInstance.get(`/profile/status/${userId}`)
    },
    updateStatus(status) {
        return axiosInstance.put(`/profile/status`, {status})
    },
    setPhoto(photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile);
        return axiosInstance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': "multipart/form-data instead"
            }
        })
    }
}

export const authAPI = {
    isAuth() {
        return axiosInstance.get(`auth/me`);
    },
    logIn(email, password, rememberMe = false) {
        return axiosInstance.post(`/auth/login`, {email, password, rememberMe})
    },
    logOut() {
        return axiosInstance.delete(`/auth/login`);
    }
}