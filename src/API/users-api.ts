import {axiosInstance, getItemsType, responseType,} from "./api";
import {userType} from "../redux/types/types";

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return axiosInstance.get<getItemsType<userType>>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return axiosInstance.post<responseType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return axiosInstance.delete(`follow/${userId}`).then(res => res.data)
    },

}