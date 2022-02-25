import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "../authAxios";
import BlogItem from "../Components/BlogItem";

import loading from "../public/assets/img/loading.gif";

export default function blog() {
  const [category,setCategory] = useState([]);

  function setCategoryList(data) {
    let tempId = [];
    data.map((item) => {
      if (item.blogCategoryId) tempId.push(item.blogCategoryId);
    });

    let uniqueArray = tempId.filter(function (item, pos) {
      return tempId.indexOf(item) == pos;
    });
    console.log("uni", tempId, uniqueArray);
    let index = 0
    uniqueArray.map((item) => {
      let temp = [];
      data.map((items) => {
        if (items.blog_category && items.blog_category.id == item) {
          temp = {
              'id' : items.blog_category.id,
              'title':items.blog_category.categoryName
            }
          
        }
      });
      category[index] = temp;
      console.log("temp", temp, category);
      index++;
    });
  }


  const getBlogList = async () => {
    return await axios
      .post("blog/blog-list")
      .then((response) => {
        let status = "status" in response;
        if (!status) {
          response.status = 401;
          return response;
        }
        if (response.data.data) return response.data.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  };

  const [blog, setblog] = useState();
  const [allData, setAllData] = useState();
  const [loadingData, setLoadingData] = useState(true);

  function onchangeFun(idd) {
    let tempData = allData;

    tempData = tempData.filter(
      (item) => item.blogCategoryId && item.blogCategoryId == idd
    );
    setblog(tempData);
  }

  // load hospital data list
  useEffect(() => {
    if (loadingData) {
      getBlogList()
        .then((res) => {
          setCategoryList(res);
          setAllData(res);
          setblog(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  if (blog)
    return (
      <>
        <Head>
          <title>Health Feed -- Shafa Care</title>
          <meta
            name="keyboard"
            content="Shafa Care, Online Doctor, Medical Help,Online Medical Help, Blog, medical blog,medicine blog,Shafa Care Blog,Health feed,Shafa Care Health feed"
          />
        </Head>
        <Navbar />
        <div className="blog-category">
          <div className="container">
            <div className="row d-flex justify-content-center  w-100">
              {category && category.length > 0
                ? category.map((item,index) => {
                  return(
                    <div className=" d-flex justify-content-center blog-category-btn">
                      <button onClick={() => onchangeFun(item.id)} type="button">
                        {item.title}
                      </button>
                      {
                        index+1 == category.length?
                        null:
                        <div className="vl"></div>
                      }
                    </div>
                  )
                   })
                : null}
            </div>
          </div>
        </div>
        {/* Start Blog Area */}
        <section className="blog-area ptb-100">
          <div className="container-fluid home_blog_area pt-100">
            <div className="row mb-5">
              <h1 className="mb-3">Health feed</h1>
            </div>

            <div className="row article_area">
              {blog
                ? blog.map((list) => {
                    return (
                      <div className="col-md-4 mb-4">
                        <BlogItem data={list} />
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
