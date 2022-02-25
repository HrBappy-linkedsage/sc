
import React, { Component } from 'react';
import liveCallImg from '../public/assets/img/download-app-area.jpg'
import { onSubmitEmail } from '../Components/HttpPostRequest'

import { onSend } from '../Components/HttpPostRequest'

class DownloadApp extends Component {
    constructor(props) {
        super(props);
        this.state = { phoneNo: '' };
        this.state = { subscriberEmail: '' };
    }
    mySubmitHandler = (event) => {
        let body = {
            phoneNo: this.state.phoneNo,
        }

        onSend(body).then(res => {
        }).catch(err => {
            console.log("ERROR", err);
        })
    }
    phoneChangeHandler = (event) => {
        this.setState({ phoneNo: event.target.value });
    }
    mySubmitHandlerEmail = (event) => {
        let body = {
            subscriberEmail: this.state.email,
        }

        onSubmitEmail(body).then(res => {
        }).catch(err => {
            console.log("ERROR", err);
        })
    }
    emailChangeHandler = (event) => {
        this.setState({ subscriberEmail: event.target.value });
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-6 download_hero_img text-center">
                        <img src={liveCallImg} alt="download patient app" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h3 className="title">Download the Shafa Care app</h3>
                            <p>Access video consultation with top doctors on the Shafa Care app. Connect with doctors online, available 24/7, from the comfort of your home.</p>
                            {/* <h6 className="mt-5 mb-3">Get the link to download the app</h6>
                        <div className="sent_sms d-flex">
                            
                            <form  onSubmit={this.mySubmitHandler}>
                                <div className="left d-flex">
                                    <div className="country-code">+88</div>
                                    <input onChange={this.phoneChangeHandler} type="text" name="phone" id="phone_number" required data-error="Please enter your number" className="text_box" placeholder="Phone" />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="appointment-btn mt-3">
                                    <button type="submit" className="default-btn">
                                    Send SMS
                                        <span></span>
                                    </button>
                                </div>
                            </form>
                            
                        </div> */}
                            <div className="app_link d-flex flex-row mt-4">
                                <a href="https://play.google.com/store/apps/details?id=care.shafa.ai.user">
                                    <div><i className="fab fa-google-play"></i> <span>Google Play</span> </div>
                                </a>
                                <a href="https://apps.apple.com/us/app/shafa-care/id1576108114">
                                    <div><i className="fab fa-apple"></i> <span>App Store</span> </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subscribe row mt-4 ">
                    <div className="col-md-6 pt-4">
                        <h3 className="title">Subscribe us</h3>
                        <p>For News, updates and promotional events</p>
                    </div>
                    <div className="col-md-6 pt-4">
                        <form onSubmit={this.mySubmitHandlerEmail}>
                            <div className="d-flex">
                                <input onChange={this.emailChangeHandler} type="text" name="email" id="email" required data-error="Please enter your email" className="text_box" placeholder="Email" />
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="appointment-btn mt-3">
                                <button type="submit" className="default-btn">
                                    Subscribe
                                    <span></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default DownloadApp