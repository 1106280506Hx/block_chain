import axios from 'axios'

export const tempGetProjectBrief = (id) => {
    return axios.get('http://127.0.0.1:1000/projectBrief', {
        params: { id }
    })
}

export const tempGetProjectDetails = (id) => {
    return axios.get('http://127.0.0.1:1000/projectDetails', {
        params: { id }
     })
}