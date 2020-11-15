import {profilePhotos, profileType} from "../redux/types/types";
import {axiosInstance, responseType} from "./api";

type setPhoto = {
    photos: profilePhotos
}
type statusType = {
    status:string
}
export const profileAPI = {
    getProfile(userId: number) {
        return axiosInstance.get<profileType>(`profile/${userId}`).then(res => res.data)
    },
    getStatus<statusType>(userId: number) {
        return axiosInstance.get(`profile/status/${userId}`).then(res => res.data)
    },
    updateStatus(status: string) {
        return axiosInstance.put<responseType>(`profile/status`, {status}).then(res => res.data)
    },
    setPhoto(photo: File) {
        let formData = new FormData();
        formData.append("image", photo);
        return axiosInstance.put<responseType<setPhoto>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': "multipart/form-data instead"
            }
        }).then(res => res.data)
    },
    saveProfile(profile: profileType) {
        return axiosInstance.put<responseType<profileType>>(`profile`, profile).then(res => res.data)
    }
}