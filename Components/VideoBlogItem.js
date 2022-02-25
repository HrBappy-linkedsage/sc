import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from '../authAxios'

import loading from '../public/assets/img/loading.gif'
import defaultImg from '../public/assets/img/blog/image1.jpg';



export default function blog() {
    const getBlogList = async () => {
        return await axios.post('videoBlog/videoList')
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

    // const [blog, setblog] = useState();
    const [loadingData, setLoadingData] = useState(true);

    const [videoBlog,setVideoBlog] = useState()
    // load hospital data list
    useEffect(() => {
        if (loadingData) {
            getBlogList().then(res => {
                console.log("video",res)
                setVideoBlog(res)
            }).catch((err) => { console.log(err) });
        }

        $('#modal1').on('hidden.bs.modal', function (e) {
            // do something...
            $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
        });

        $('#modal6').on('hidden.bs.modal', function (e) {
            // do something...
            $('#modal6 iframe').attr("src", $("#modal6 iframe").attr("src"));
        });

        $('#modal4').on('hidden.bs.modal', function (e) {
            // do something...
            $('#modal4 iframe').attr("src", $("#modal4 iframe").attr("src"));
        });
    }, []);

    if (videoBlog)
        return (
            <>
                <Navbar />


                {/* Start Blog Area */}
                <section className="blog-area ptb-100">
                    <div className="container-fluid home_blog_area pt-50">
                        <div className="row mb-5">
                            <h1 className="mb-3">Shafa Care video vlog</h1>
                        </div>
                        <div className="row video-blog">
                            {
                                videoBlog ?
                                videoBlog.map((list) => {
                                    console.log("item",list.videoTitle)
                                        return (
                                            <div className="col-lg-4 col-md-6 mb-4 single-video-blog">
                                                <div className="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-lg" role="document">
                                                        <div className="modal-content">
                                                            <div className="modal-body mb-0 p-0">
                                                                <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                                                    <iframe className="embed-responsive-item" src={list.videoUrl}
                                                                        allowfullscreen></iframe>
                                                                </div>
                                                            </div>

                                                            <div className="modal-footer justify-content-center">
                                                                <span className="mr-4">{list.videoTitle}</span>
                                                                <a href="" type="button" className="btn-floating btn-sm btn-fb"><i className="fab fa-facebook-f"></i></a>
                                                                <a href="" type="button" className="btn-floating btn-sm btn-tw"><i className="fab fa-twitter"></i></a>
                                                                <a type="button" className="btn-floating btn-sm btn-gplus"><i className="fab fa-google-plus-g"></i></a>
                                                                <a type="button" className="btn-floating btn-sm btn-ins"><i className="fab fa-linkedin-in"></i></a>
                                                                <button type="button" className="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="video-img">
                                                    
                                                    <a>
                                                    {
                                                        list.file?
                                                        <img className="img-fluid z-depth-1" 
                                                        src={
                                                            "https://api-admin.shafa.care/api/v3/auth/publicFile/" +
                                                                list.file.path
                                                            }
                                                             alt={list.videoTitle}
                                                            data-toggle="modal" data-target="#modal1" />
                                                        :                                                        
                                                        <img className="img-fluid z-depth-1" src={defaultImg} alt="video"
                                                            data-toggle="modal" data-target="#modal1" />
                                                    }
                                                        <div className="overlay img-fluid z-depth-1" data-toggle="modal" data-target="#modal1">
                                                            <i className="fas fa-play"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    }) : null
                            }

                        </div>
                    </div>

                </section>
                {/* End Blog Area */}
                <Footer />
            </>
        )
    else return (
        <>

            <div className="pre__loader">
                <img src={loading} alt="loading" />
            </div>
        </>
    )
}