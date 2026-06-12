import { protectedFetch } from "../core/server"

export const getApplicationsById = async(applicantId) =>{
    return protectedFetch(`/api/applications?applicantId=${applicantId}`)
}