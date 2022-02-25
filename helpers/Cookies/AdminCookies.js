import React from 'react'
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

export const getCookies = (name, cb) => {
    try{
        return cookies.get('userData')
    }catch (err){
        console.log(` getCookies :: ${name}`)
        cb()
    }
}


