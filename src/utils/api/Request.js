
import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'http://165.227.131.111:8080/api/v1/'
})

export const categoryGetReq = ()=>instance.get('categories').then(response=>response.data)
export const categoryPostReq = (data)=>instance.post('categories',data)
export const categoryDelReq = (id)=>instance.delete(`categories/${id}`)
export const categoryUpdReq = (data,id)=>instance.put(`categories/${id}`,data)