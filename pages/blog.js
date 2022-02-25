import React, { useState, useEffect } from "react";
import Head from 'next/head'

import axios from "../authAxios";

import { useRouter } from "next/router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import ReactHtmlParser from "react-html-parser";

import loading from "../public/assets/img/loading.gif";


const Blog = () => {
  const getBlogList = async () => {
    return await axios
      .post("blog/blog-list")
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

  const [blog, setblog] = useState();
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (loadingData) {
      getBlogList()
        .then((res) => {
          setblog(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const router = useRouter();
  const { id } = router.query;
  var singleBlog;
  blog
    ? blog.map((item) => {
        if (item.id == id) singleBlog = item;
      })
    : null;

  var cDate;
  if (singleBlog && singleBlog["file"]) {
    var temp = singleBlog["file"];
    cDate = temp.createdAt;

    var result = new Date(cDate);
    result.setDate(result.getDate());
    var ddd = String(result.getDate()).padStart(2, "0");
    var mmm = String(result.getMonth() + 1).padStart(2, "0");
    var yyyyy = result.getFullYear();
    var monthsName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var previousMonth =
      ddd + " " + monthsName[parseInt(mmm) - 1] + ", " + yyyyy;
  }

  function socialWindow(url) {
    var left = (screen.width - 570) / 2;
    var top = (screen.height - 570) / 2;
    var params =
      "menubar=no,toolbar=no,status=no,width=570,height=570,top=" +
      top +
      ",left=" +
      left;
    window.open(url, "NewWindow", params);
  }

  function FacebookFun() {
    var tempURL = "https://in-app.shafa.care/blog/blog.html?id=" + id;
    var pageUrl = encodeURI(tempURL);
    var uurl = "https://www.facebook.com/sharer.php?u=" + pageUrl;
    socialWindow(uurl);
  }
  function TwitterFun() {
    var tempURL = "https://in-app.shafa.care/blog/blog.html?id=" + id;
    var pageUrl = encodeURI(tempURL);
    var tweet = "Shafa Care Blog";
    var uurl =
      "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
    socialWindow(uurl);
  }
  function GooglePlusFun() {
    var tempURL = "https://in-app.shafa.care/blog/blog.html?id=" + id;
    var pageUrl = encodeURI(tempURL);
    var uurl = "https://plus.google.com/share?url=" + pageUrl;
    socialWindow(uurl);
  }
  function LinkedinFun() {
    var tempURL = "https://in-app.shafa.care/blog/blog.html?id=" + id;
    var pageUrl = encodeURI(tempURL);
    var uurl = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
    socialWindow(uurl);
  }

  if (blog)
    return (
      <>
        
        <Navbar />

        <section className="blog_details_body ptb-100">
          {singleBlog ? (
            <div className="container pt-50">
              <div className="row ">
                <div className="col-md-8 d-flex flex-column">
                  <div className="blog_title">
                    <h2>{singleBlog.blogTitle}</h2>
                  </div>
                  <Head>
                      <title>{singleBlog.blogTitle}</title>
                      <meta name="keyboard" content="Shafa Care, Online Doctor,Medical Help,Online Medical Help, Blog, medical blog,medicine blog,Shafa Care Blog" />
                  </Head>
                  <div className="d-flex justify-content-between pt-4">
                    <p>Author: {singleBlog.blogAuth}</p>
                    <p>Posted on: {previousMonth}</p>
                  </div>

                  <div className="">
                    {singleBlog.file ? (
                      <img
                        className="mb-3"
                        src={
                          "https://api-admin.shafa.care/api/v3/auth/publicFile/" +
                          singleBlog.file.path
                        }
                        alt={singleBlog.blogTitle}
                      />
                    ) : null}
                  </div>
                </div>

              </div>
              <div className="row">
                <div className="col-md-8 blog__details">
                  <div className="pt-5">
                    {ReactHtmlParser(singleBlog.post)}
                    {/* {singleBlog.post} */}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </section>

        <div className="share-links">
          <ul>

            <li className="social-share facebook">
              <a href="#" onClick={FacebookFun}>
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>

            <li className="social-share twitter">
              <a href="#" onClick={TwitterFun}>
                <i className="fab fa-twitter"></i>
              </a>
            </li>

            <li className="social-share googleplus">
              <a href="#" onClick={GooglePlusFun}>
                <i className="fab fa-google-plus-g"></i>
              </a>
            </li>
            
            <li className="social-share linkedin">
              <a href="#" onClick={LinkedinFun}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            
          </ul>
        </div>

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
};

export default Blog;
