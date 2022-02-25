import { useState, useEffect } from 'react'

import { NavLink } from "react-router-dom";
import Link from "next/link";

import defaultImg from '../public/assets/img/team/default-team.png'

export default function AvailableNow({ data }) {


    return (
        <Link as={`/hospital-info/${data.id}`} href={{pathname:`/hospital-info`, query: {id:data.id}}}>
            <a href="" className="d-flex flex-column justify-content-center align-items-center ">
                {
                    data.file && data.file.path?
                    <img className="mr-3 ml-3" src={"https://api-admin.shafa.care/api/v3/auth/publicFile/" + data.file.path} alt={data.name} />
                    :
                    <img className="mr-3 ml-3" src={defaultImg} alt="logo" />
                }
                <p className="mr-3 ml-3">{data.name}</p>
            </a>
            
        </Link>
    )
}