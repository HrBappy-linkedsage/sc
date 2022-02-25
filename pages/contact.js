import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React, { Component } from "react";
import Head from "next/head";
import { onSubmit } from "../Components/HttpPostRequest";

class Contact extends Component {
  constructor(props) {
    super(props);
    (this.state = { username: "" }),
      (this.state = { email: "" }),
      (this.state = { phoneNo: "" }),
      (this.state = { subject: "" }),
      (this.state = { message: "" });
  }

  mySubmitHandler = (event) => {
    let body = {
      name: this.state.username,
      phoneNo: this.state.phoneNo,
      email: this.state.email,
      subject: this.state.subject,
      Description: this.state.message,
    };

    onSubmit(body)
      .then((res) => {})
      .catch((err) => {
        console.log("ERROR", err);
      });
  };
  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  emailChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  phoneChangeHandler = (event) => {
    this.setState({ phoneNo: event.target.value });
  };
  subjectChangeHandler = (event) => {
    this.setState({ subject: event.target.value });
  };
  messageChangeHandler = (event) => {
    this.setState({ message: event.target.value });
  };
  render() {
    return (
      <>
        <Head>
          <title>Contact with Us -- Shafa Care</title>
          <meta
            name="keyboard"
            content="Shafa Care, Online Doctor, Medical Help,Online Medical Help, Contact us, Contact us Shafa Care"
          />
        </Head>

        <Navbar />

        {/* Start Contact Area */}
        <section className="contact-area ptb-100">
          <div className="container pt-5">
            <div className="section-title mobile_contact_content">
              <h3>Drop us message for any query</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="contact-form mobile_contact_content">
              <form
                id="contactForm"
                className="contact-form"
                onSubmit={this.mySubmitHandler}
              >
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        onChange={this.usernameChangeHandler}
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        required
                        data-error="Please enter your name"
                        placeholder="Name"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        onChange={this.emailChangeHandler}
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        required
                        data-error="Please enter your email"
                        placeholder="Email"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        onChange={this.phoneChangeHandler}
                        type="text"
                        name="phone"
                        id="phone_number"
                        required
                        data-error="Please enter your number"
                        className="form-control"
                        placeholder="Phone"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        onChange={this.subjectChangeHandler}
                        type="text"
                        name="subject"
                        id="msg_subject"
                        className="form-control"
                        required
                        data-error="Please enter your subject"
                        placeholder="Subject"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        onChange={this.messageChangeHandler}
                        name="message"
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="5"
                        required
                        data-error="Write your message"
                        placeholder="Your Message"
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="default-btn">
                      Send Message
                      <span></span>
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </form>
            </div>

            <div className="row h-100">
              <div className="col-lg-4 col-md-6 col-sm-6 contact-card pt-2 pb-3">
                <div className="contact-info-box">
                  <div className="icon">
                    <i className="flaticon-email"></i>
                  </div>

                  <h3>Email Here</h3>
                  <p>
                    <a href="mailto:info@shafa.care">info@shafa.care</a>
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 contact-card pt-2 pb-3">
                <div className="contact-info-box">
                  <div className="icon">
                    <i className="flaticon-pin"></i>
                  </div>

                  <h3>Location here</h3>
                  <p>
                    9th Floor, Rupayan Millenium Square, Cha-70, 70/A, Progoti
                    Sharani North Badda, Gulshan Dhaka- 1212, Bangladesh.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 contact-card pt-2 pb-3">
                <div className="contact-info-box">
                  <div className="icon">
                    <i className="flaticon-phone-call"></i>
                  </div>

                  <h3>Call here</h3>
                  <p>
                    <a href="tel:+880 1531 390647">+880 1531 390 647</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="section-title pc_contact_content">
              <h2>Drop us message for any query</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="contact-form pc_contact_content">
              <form
                id="contactForm"
                className="contact-form"
                onSubmit={this.mySubmitHandler}
              >
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        onChange={this.usernameChangeHandler}
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        required
                        data-error="Please enter your name"
                        placeholder="Name"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        onChange={this.emailChangeHandler}
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        required
                        data-error="Please enter your email"
                        placeholder="Email"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        onChange={this.phoneChangeHandler}
                        type="text"
                        name="phone"
                        id="phone_number"
                        required
                        data-error="Please enter your number"
                        className="form-control"
                        placeholder="Phone"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        onChange={this.subjectChangeHandler}
                        type="text"
                        name="subject"
                        id="msg_subject"
                        className="form-control"
                        required
                        data-error="Please enter your subject"
                        placeholder="Subject"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        onChange={this.messageChangeHandler}
                        name="message"
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="5"
                        required
                        data-error="Write your message"
                        placeholder="Your Message"
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="default-btn">
                      Send Message
                      <span></span>
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* End Contact Area */}
        <Footer />
      </>
    );
  }
}
export default Contact;
