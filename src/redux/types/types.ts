export type postDataType = {
    id:number
    message:string
    likes:number
}
export type profileContacts = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type profilePhotos = {
    small:string | null
    large:string | null
}

export type profileType = {
    userId:number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    fullName: string
    contacts: profileContacts
    photos: profilePhotos
}

export type userType = {
    name: string
    id: number
    photos: profilePhotos,
    status: string | null,
    followed: boolean
}
