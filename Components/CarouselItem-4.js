
import img1 from '../public/assets/img/team/image1.jpg'
import img2 from '../public/assets/img/team/image2.jpg'
import img3 from '../public/assets/img/team/image3.jpg'
import img4 from '../public/assets/img/team/image4.jpg'
import img5 from '../public/assets/img/team/image5.jpg'
import img6 from '../public/assets/img/team/image6.jpg'
import Link from 'next/link';


export default function Carousel() {
    return (
        <div className="carousel-4">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel_item">
                            <div className="single_carousel_item">
                                <img className="" src={img3} alt="General physician" />
                                <h4>General physician</h4>
                                <p>Fever, Stomach Issues, Vomiting, Cough, Headache/Migraine</p>
                            </div>
                            <div className="single_carousel_item">
                                <img className="" src={img4} alt="General physician" />
                                <h4>General physician</h4>
                                <p>Fever, Stomach Issues, Vomiting, Cough, Headache/Migraine</p>
                            </div>
                            <div className="single_carousel_item">
                                <img className="" src={img5} alt="General physician" />
                                <h4>General physician</h4>
                                <p>Fever, Stomach Issues, Vomiting, Cough, Headache/Migraine</p>
                            </div>
                            <div className="single_carousel_item">
                                <img className="" src={img6} alt="General physician" />
                                <h4>General physician</h4>
                                <p>Fever, Stomach Issues, Vomiting, Cough, Headache/Migraine</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel_item">
                            <div className="single_carousel_item">
                                <img className="" src={img1} alt="General physician" />
                                <h4>General physician</h4>
                                <p>Fever, Stomach Issues, Vomiting, Cough, Headache/Migraine</p>
                            </div>
                            <div className="single_carousel_item">
                                <img className="" src={img2} alt="General physician" />
                                <h4>General physician</h4>
                                <p>Fever, Stomach Issues, Vomiting, Cough, Headache/Migraine</p>
                            </div>
                            <div className="single_carousel_item">
                                <img className="" src={img3} alt="General physician" />
                                <h4>General physician</h4>
                                <p>Fever, Stomach Issues, Vomiting, Cough, Headache/Migraine</p>
                            </div>
                            <div className="single_carousel_item">
                                <img className="" src={img4} alt="General physician" />
                                <h4>General physician</h4>
                                <p>Fever, Stomach Issues, Vomiting, Cough, Headache/Migraine</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel_item">
                            <div className="single_carousel_item">
                                <img className="" src={img5} alt="General physician" />
                                <h4>General physician</h4>
                                <p>Fever, Stomach Issues, Vomiting, Cough, Headache/Migraine</p>
                            </div>
                            <div className="single_carousel_item">
                                <img className="" src={img6} alt="General physician" />
                                <h4>General physician</h4>
                                <p>Fever, Stomach Issues, Vomiting, Cough, Headache/Migraine</p>
                            </div>
                            <div className="single_carousel_item">
                                <img className="" src={img1} alt="General physician" />
                                <h4>General physician</h4>
                                <p>Fever, Stomach Issues, Vomiting, Cough, Headache/Migraine</p>
                            </div>
                            <div className="single_carousel_item">
                                <img className="" src={img2} alt="General physician" />
                                <h4>General physician</h4>
                                <p>Fever, Stomach Issues, Vomiting, Cough, Headache/Migraine</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}