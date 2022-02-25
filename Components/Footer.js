

import MessengerCustomerChat from 'react-messenger-customer-chat';

import Link from 'next/link'
import { useEffect, useState } from 'react'

const Footer = () => {

  
  const[init,setInit] = useState(true)

    useEffect(() => {
        // Scroll Event
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });
        // Click Event
        $('.go-top').on('click', function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    }, []);

    

    return (
        <>


          <MessengerCustomerChat
              pageId="111153804598946"
              appId="189703483194573"
            />
            {/* Start Footer Area */}
            <section className="footer-area pt-100 pb-70">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="single-footer-widget">
                                <h3>Shafa Care</h3>
                                <p>AI-powered online doctor consultation app. Doctors are ready to help you get the care you need, anywhere and anytime in Bangladesh.</p>
                                <ul className="footer-social">
                                    <li>
                                        <a href="https://www.facebook.com/shafa.care.ltd">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>

                                    {/* <li>
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-pinterest-p"></i>
                                        </a>
                                    </li> */}

                                    <li>
                                        <a href="https://www.linkedin.com/company/shafacare">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Instagram</h3>
                            </div>
                        </div> */}

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Useful links</h3>

                                <ul className="footer-quick-links">
                                    <li><Link href="/video-blog"><a>Video Blog</a></Link></li>
                                    <li><Link href="/app"><a>App</a></Link></li>
                                    <li><Link href="/seller-registration"><a>Seller Apply</a></Link></li>
                                    <li><Link href="/terms-condition"><a>Terms & Condition</a></Link></li>
                                    <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
                                    <li><Link href="/refund-policy"><a>Refund Policy</a></Link></li>
                                    <li><Link href="/company-documents"><a>Company Documents</a></Link></li>
                                    <li><Link href="/login"><a>Login</a></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contact</h3>

                                <div className="footer-info-contact">
                                    <i className="flaticon-call"></i>
                                    <span><a href="tel:8801531390647">+880 153 139 0647</a></span>
                                </div>

                                <div className="footer-info-contact">
                                    <i className="flaticon-email"></i>
                                    <span><a href="mailto:info@shafa.care">info@shafa.care</a></span>
                                </div>

                                <div className="footer-info-contact">
                                    <i className="flaticon-pin"></i>
                                    <span>Dhaka, Bangladesh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    {/* <div className="line"></div> */}
                </div>
            </section>
            {/* End Footer Area */}

            {/* Start Copy Right Section */}
            <div className="copyright-area">
                <div className="container">
                    <p>
                        <i className="far fa-copyright"></i>
                        2021 Shafa Care. All rights reserved by
                        <a href="https://shafa.care/" target="_blank">
                            &nbsp;ShafaCare
                        </a>
                    </p>
                </div>
            </div>
            {/* End Copy Right Section */}
            {/* Start Go Top Area?  */}
            <div className="go-top">
                <i className="fa fa-chevron-up"></i>
            </div>
            {/* End Go Top Area */}
        </>
    )
}


export default Footer