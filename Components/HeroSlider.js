import React from 'react'

import img2 from '../public/assets/img/promo-banner/min2.png'
import img3 from '../public/assets/img/promo-banner/min3.png'

import DefaultShape from './DefaultShape'


export default function HeroSlider() {
    return (
        <>
            <div id="carouselHeroControls" className="carousel slide" data-ride="carousel" data-pause="false" data-interval="3000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 slider_img" src={img2} alt="shafacare with you" />
                        <DefaultShape />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 slider_img" src={img3} alt="skin care" />
                        <DefaultShape />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselHeroControls" role="button" data-slide="prev">
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </a>
                <a className="carousel-control-next" href="#carouselHeroControls" role="button" data-slide="next">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a>
            </div>
        </>
    )
}