import { serverFetch } from "../core/server"

export const getApplicationsById = async(applicantId) =>{
    return serverFetch(`/api/applications?applicantId=${applicantId}`)
}