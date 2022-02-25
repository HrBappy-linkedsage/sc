import axios from '../authAxios'
import Axios from '../sellerAxios'
import { formData } from '../FormHelper'

export const onSubmit = async (values) => {
    try {
        return await axios.post('send-message', values)
    } catch (error) {
        return error
    }
}
export const onSubmitEmail = async (values) => {
    try {
        return await axios.post('send-message', values)
    } catch (error) {
        return error
    }
}
export const onSend = async (values) => {
    try {
        return await axios.post('send-sms', values)
    } catch (error) {
        return error
    }
}

export const applyDoctor = async (values) => {
    try {
        return await axios.post('doctor/apply', formData(values))
    } catch (error) {
        return error
    }
}
export const applySeller = async (values) => {
    try {
        return await Axios.post('seller/apply', formData(values))
    } catch (error) {
        return error
    }
}

export const matchList = async () => {
    try {
        return await axios.post('icfl/match-list')
    } catch (error) {
        return error
    }
}

export const userMatchList = async (values) => {
    try {
        return await axios.post('icfl/user-match-list',values)
    } catch (error) {
        return error
    }
}

export const teamPoint = async () => {
    try {
        return await axios.post('icfl/match-point-list')
    } catch (error) {
        return error
    }
}
export const userPoint = async () => {
    try {
        return await axios.post('icfl/match-user-point-list')
    } catch (error) {
        return error
    }
}

export const applyICFLReg = async (values) => {
    try {
        return await axios.post('user/register-public', values)
    } catch (error) {
        return error
    }
}
export const userUpdate = async (values) => {
    try{
        return await axios.post('web/user/update', formData(values))
    } catch (error) {
        return error    
    }
}
export const doctorUpdate = async (values) => {
    try{
        return await axios.post('web/doctor/update', formData(values))
    } catch (error) {
        return error    
    }
}
export const applyICFLLogin = async (values) => {
    try {
        return await axios.post('user/login', values)
    } catch (error) {
        return error
    }
}
export const doctorLogin = async (values) => {
    try {
        return await axios.post('doctor/login', values)
    } catch (error) {
        return error
    }
}
export const createRoom = async (values) => {
    try {
        return await axios.post('user/room/insert', values)
    } catch (error) {
        return error
    }
}
export const userPointInsert = async (values) => {
    try {
        return await axios.post('icfl/user-point-insert', values)
    } catch (error) {
        return error
    }
}
export const matchPrediction = async (values) => {
    try {
        return await axios.post('icfl/match-prediction-insert', values)
    } catch (error) {
        return error
    }
}

export const matchPredictionUpdate = async (values) => {
    try {
        return await axios.post('icfl/match-prediction-update', values)
    } catch (error) {
        return error
    }
}
export const appointmentList = async () => {
    try {
        return await axios.post('room/doctorRoomList', {status:2})
    } catch (error) {
        return error
    }
}