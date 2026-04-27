import axios from 'axios'

/* const IPv4 = '192.168.1.146' */
const BASE = 'https://hdstudentmanagement-production.up.railway.app/api/student'
export const getStudent = () => axios.get(BASE)
export const addStudent = (data) => axios.post(BASE, data)
export const delStudent = (id) => axios.delete(`${BASE}/${id}`)
export const editStudent = (data) => axios.put(BASE, data)
