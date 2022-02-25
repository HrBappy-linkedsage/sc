import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "../authAxios";
import Head from "next/head";

import loading from "../public/assets/img/loading.gif";
import defaultImg from "../public/assets/img/blog/image1.jpg";

export default function blog() {
  const getBlogList = async () => {
    return await axios
      .post("videoBlog/videoList")
      .then((response) => {
        let status = "status" in response;
        if (!status) {
          response.status = 401;
          return response;
        }
        return response.data.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  };

  // const [blog, setblog] = useState();
  const [loadingData, setLoadingData] = useState(true);

  const [videoBlog, setVideoBlog] = useState();
  // load hospital data list
  useEffect(() => {
    if (loadingData) {
      getBlogList()
        .then((res) => {
          setVideoBlog(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  function pausrVideo(value, values) {
    $(value).on("hidden.bs.modal", function (e) {
      // do something...
      $(values).attr("src", $(values).attr("src"));
    });
  }

  if (videoBlog)
    return (
      <>
        <Head>
          <title>Video Blog -- Shafa Care</title>
          <meta
            name="keyboard"
            content="Shafa Care, Online Doctor,Medical Help ,Online Medical Help,Video Blog, Shafa Care Video Blog"
          />
        </Head>
        <Navbar />

        {/* Start Blog Area */}
        <section className="blog-area ptb-100">
          <div className="container-fluid home_blog_area pt-50">
            <div className="row mb-5">
              <h1 className="mb-3">Shafa Care video blog</h1>
            </div>
            <div className="row video-blog">
              {videoBlog
                ? videoBlog.map((list) => {
                    return (
                      <div className="col-lg-4 col-md-6 single-video-blog">
                        <div
                          className="modal fade"
                          id={"a" + list.id}
                          tabindex="-1"
                          role="dialog"
                          aria-labelledby="myModalLabel"
                          aria-hidden="true"
                          onClick={() =>
                            pausrVideo(
                              "#a" + list.id,
                              "#a" + list.id + " iframe"
                            )
                          }
                        >
                          <div
                            className="modal-dialog modal-lg"
                            role="document"
                          >
                            <div className="modal-content">
                              <div className="modal-body mb-0 p-0">
                                <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                  <iframe
                                    className="embed-responsive-item"
                                    src={list.videoUrl}
                                    allowfullscreen="1"
                                  ></iframe>
                                </div>
                              </div>

                              <div className="modal-footer justify-content-center">
                                <span className="mr-4">{list.videoTitle}</span>
                                <a
                                  href=""
                                  type="button"
                                  className="btn-floating btn-sm btn-fb"
                                >
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                                <a
                                  href=""
                                  type="button"
                                  className="btn-floating btn-sm btn-tw"
                                >
                                  <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                  type="button"
                                  className="btn-floating btn-sm btn-gplus"
                                >
                                  <i className="fab fa-google-plus-g"></i>
                                </a>
                                <a
                                  type="button"
                                  className="btn-floating btn-sm btn-ins"
                                >
                                  <i className="fab fa-linkedin-in"></i>
                                </a>
                                <button
                                  type="button"
                                  onClick={() =>
                                    pausrVideo(
                                      "#a" + list.id,
                                      "#a" + list.id + " iframe"
                                    )
                                  }
                                  className="btn btn-outline-primary btn-rounded btn-md ml-4"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="video-img">
                          <a>
                            {list.file ? (
                              <img
                                className="img-fluid z-depth-1"
                                src={
                                  "https://api-admin.shafa.care/api/v3/auth/publicFile/" +
                                  list.file.path
                                }
                                alt={list.videoTitle}
                                data-toggle="modal"
                                data-target={"#a" + list.id}
                              />
                            ) : (
                              <img
                                className="img-fluid z-depth-1"
                                src={defaultImg}
                                alt="video blog"
                                data-toggle="modal"
                                data-target={"#a" + list.id}
                              />
                            )}
                            <div
                              className="overlay img-fluid z-depth-1"
                              data-toggle="modal"
                              data-target={"#a" + list.id}
                            >
                              <h3>{list.videoTitle}</h3>
                              <div className="play-btn">
                                <i className="fas fa-play"></i>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </section>
        {/* End Blog Area */}
        <Footer />
      </>
    );
  else
    return (
      <>
        <div className="pre__loader">
          <img src={loading} alt="pre loader" />
        </div>
      </>
    );
}
