import solutionImg from "../public/assets/img/solution-details/image5.jpg"
import Link from "next/link";


export default function BlogRightArea() {
    return (
        <>
            <div className="col-lg-4">
                <aside className="widget-area" id="secondary">
                    <section className="widget widget_search">
                        <h3 className="widget-title">Search</h3>

                        <form className="search-form search-top">
                            <label>
                                <span className="screen-reader-text">Search for:</span>
                                <input type="search" className="search-field" placeholder="Search..." />
                            </label>
                            <button type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </form>
                    </section>

                    <section className="widget widget_content">
                        <h3 className="widget-title">Department</h3>

                        <ul className="list">
                            <li>
                                <a href="#">
                                    Orthopeadic
                                    <i className="fa fa-chevron-right"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Diabetic test
                                    <i className="fa fa-chevron-right"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Behaviour health
                                    <i className="fa fa-chevron-right"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    COVID-Test
                                    <i className="fa fa-chevron-right"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Live video
                                    <i className="fa fa-chevron-right"></i>
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section className="widget widget_tinzer_posts_thumb">
                        <h3 className="widget-title">Recent posts</h3>
                        <article className="item">
                            <a href="#" className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                            <div className="info">
                                <time className="2020-06-30">30 January</time>
                                <h4 className="title usmall">
                                    <a href="index-2.html">Ensure at the Hygenic office</a>
                                </h4>
                            </div>
                        </article>

                        <article className="item">
                            <a href="#" className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                            <div className="info">
                                <time className="2020-06-30">17 May</time>
                                <h4 className="title usmall">
                                    <a href="index-2.html">Aliqua tuatorn grate hjyrdre</a>
                                </h4>
                            </div>
                        </article>

                        <article className="item">
                            <a href="#" className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                            <div className="info">
                                <time className="2020-06-30">18 March</time>
                                <h4 className="title usmall">
                                    <a href="index-2.html">How to protect from Germ</a>
                                </h4>
                            </div>
                        </article>
                    </section>

                    <section className="widget widget-image">
                        <img src={solutionImg} alt="image" />
                        <div className="click-btn">
                            <Link href="/contact"><a>Click Here</a></Link>
                        </div>
                    </section>
                </aside>
            </div>
        </>
    )
}

