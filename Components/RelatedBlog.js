const RelatedBlog = () => {
    return(
        <>
            <div className="col-lg-6">
                <div className="posts-item">
                    <div className="image">
                        <a href="#">
                            <img src="../public/assets/img/blog/image1.jpg" alt="blog image" />
                        </a>

                        <a href="#" className="date">08 <span>June</span></a> /
                    </div>
                
                    <div className="content">
                        <h3>
                            <a href="#">Rethinking the way you receive care</a>
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                
                        <a href="#" className="posts-btn">Read More +</a>
                    </div>
                </div>
            </div>

        </>
    )
}


export default RelatedBlog