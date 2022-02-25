import React, { useState,useEffect } from 'react'
import axios from '../authAxios'

import userImg from '../public/assets/img/patientapp.png' 
export default function SpecilistAnimation() {
    
    var classname

    const [specilities,setSpecilities] = useState()
    const [loadingData, setLoadingData] = useState(true);

    const getSpecilistLists = async () => {
        return await axios.post('/specialist/specialist-list')
            .then(response => {
                let status = 'status' in response
                if (!status) {
                    response.status = 401
                    return response
                }
                return response.data.data
            })
            .catch(err => {
                console.log(err)
                return []
            })
      }

      useEffect(() => {
        if (loadingData) {          
          getSpecilistLists().then(res =>{
              setSpecilities(res)
          }).catch((err) => { console.log(err) })
        }
    }, []);

    return (
        <div className="row specilist_animation pb-100 d-flex">    
            <div className="animation_logo">
                <img src={userImg} alt = "ShafaCare user app" />
            </div>        
            <div className="right_side"> 
                <div className="left__shadow"></div>
                <div className="right__shadow"></div>               
                <div className="__slider slider_line_1">
                    <div className="__slide-track __slide-track1">
                        {specilities?
                            specilities.map((item) => {
                                var temp =Math.floor(Math.random() * 8)
                                if(temp==0) classname = "first_class"
                                if(temp==1) classname = "sec_class"
                                if(temp==2) classname = "third_class"
                                if(temp==3) classname = "forth_class"
                                if(temp==4) classname = "first_class"
                                if(temp==5) classname = "sec_class"
                                if(temp==6) classname = "third_class"
                                if(temp==7) classname = "forth_class"

                                return(
                                   

                                    item.id%4 == 0?
                                    <div id = {classname} className="__slide"><p>{item.name}</p></div>:null
                                )
                            }):null
                        }
                        {specilities?
                            specilities.map((item) => {
                                var temp =Math.floor(Math.random() * 8)
                                if(temp==0) classname = "first_class"
                                if(temp==1) classname = "sec_class"
                                if(temp==2) classname = "third_class"
                                if(temp==3) classname = "forth_class"
                                if(temp==4) classname = "first_class"
                                if(temp==5) classname = "sec_class"
                                if(temp==6) classname = "third_class"
                                if(temp==7) classname = "forth_class"
                                if(temp==8) classname = "forth_class"

                                return(
                                   

                                    item.id%4 == 0?
                                    <div id = {classname} className="__slide"><p>{item.name}</p></div>:null
                                )
                            }):null
                        }
                        
                    </div>                    
                </div>
                <div className="__slider slider_line_2">
                    <div className="__slide-track __slide-track2 pl-5">
                        {specilities?
                            specilities.map((item) => {
                                var temp =Math.floor(Math.random() * 8)
                                if(temp==0) classname = "first_class"
                                if(temp==1) classname = "sec_class"
                                if(temp==2) classname = "third_class"
                                if(temp==3) classname = "forth_class"
                                if(temp==4) classname = "first_class"
                                if(temp==5) classname = "sec_class"
                                if(temp==6) classname = "third_class"
                                if(temp==7) classname = "forth_class"
                                if(temp==8) classname = "forth_class"

                                return(
                                    item.id%4 == 1?
                                    <div id = {classname} className="__slide"><p>{item.name}</p></div>:null
                                )
                            }):null
                        }
                        {specilities?
                            specilities.map((item) => {
                                var temp =Math.floor(Math.random() * 8)
                                if(temp==0) classname = "first_class"
                                if(temp==1) classname = "sec_class"
                                if(temp==2) classname = "third_class"
                                if(temp==3) classname = "forth_class"
                                if(temp==4) classname = "first_class"
                                if(temp==5) classname = "sec_class"
                                if(temp==6) classname = "third_class"
                                if(temp==7) classname = "forth_class"
                                if(temp==8) classname = "forth_class"

                                return(
                                    item.id%4 == 1?
                                    <div id = {classname} className="__slide"><p>{item.name}</p></div>:null
                                )
                            }):null
                        }
                        
                    </div>
                </div>
                <div className="__slider slider_line_3">
                    <div className="__slide-track __slide-track3 pl-3">
                    {specilities?
                            specilities.map((item) => {
                                var temp =Math.floor(Math.random() * 8)
                                if(temp==0) classname = "first_class"
                                if(temp==1) classname = "sec_class"
                                if(temp==2) classname = "third_class"
                                if(temp==3) classname = "forth_class"
                                if(temp==4) classname = "first_class"
                                if(temp==5) classname = "sec_class"
                                if(temp==6) classname = "third_class"
                                if(temp==7) classname = "forth_class"
                                if(temp==8) classname = "forth_class"

                                return(
                                    item.id%4 == 2?
                                    <div id = {classname} className="__slide"><p>{item.name}</p></div>:null
                                )
                            }):null
                        }
                        {specilities?
                            specilities.map((item) => {
                                var temp =Math.floor(Math.random() * 8)
                                if(temp==0) classname = "first_class"
                                if(temp==1) classname = "sec_class"
                                if(temp==2) classname = "third_class"
                                if(temp==3) classname = "forth_class"
                                if(temp==4) classname = "first_class"
                                if(temp==5) classname = "sec_class"
                                if(temp==6) classname = "third_class"
                                if(temp==7) classname = "forth_class"
                                if(temp==8) classname = "forth_class"

                                return(
                                    item.id%4 == 2?
                                    <div id = {classname} className="__slide"><p>{item.name}</p></div>:null
                                )
                            }):null
                        }
                        
                    </div>
                </div>
                <div className="__slider __slider_line_4">
                    <div className="__slide-track __slide-track4 pl-3">
                    {specilities?
                            specilities.map((item) => {
                                var temp =Math.floor(Math.random() * 8)
                                if(temp==0) classname = "first_class"
                                if(temp==1) classname = "sec_class"
                                if(temp==2) classname = "third_class"
                                if(temp==3) classname = "forth_class"
                                if(temp==4) classname = "first_class"
                                if(temp==5) classname = "sec_class"
                                if(temp==6) classname = "third_class"
                                if(temp==7) classname = "forth_class"
                                if(temp==8) classname = "forth_class"

                                return(
                                    item.id%4 == 3?
                                    <div id = {classname} className="__slide"><p>{item.name}</p></div>:null
                                )
                            }):null
                        }
                        {specilities?
                            specilities.map((item) => {
                                var temp =Math.floor(Math.random() * 8)
                                if(temp==0) classname = "first_class"
                                if(temp==1) classname = "sec_class"
                                if(temp==2) classname = "third_class"
                                if(temp==3) classname = "forth_class"
                                if(temp==4) classname = "first_class"
                                if(temp==5) classname = "sec_class"
                                if(temp==6) classname = "third_class"
                                if(temp==7) classname = "forth_class"
                                if(temp==8) classname = "forth_class"

                                return(
                                    item.id%4 == 1?
                                    <div id = {classname} className="__slide"><p>{item.name}</p></div>:null
                                )
                            }):null
                        }                        
                    </div>
                </div>
            </div>
             
        </div>

    )
}