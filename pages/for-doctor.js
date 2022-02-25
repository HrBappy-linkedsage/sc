import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Link from "next/link";
import Head from 'next/head'

// importing images
import image1 from "../public/assets/img/solution-details/1.png";
import image3 from "../public/assets/img/solution-details/3.png";
import image5 from "../public/assets/img/solution-details/5.png";
import benefit1 from "../public/assets/img/benefit/benefit1.png";
import benefit2 from "../public/assets/img/benefit/benefit2.png";
import benefit3 from "../public/assets/img/benefit/benefit3.png";
import benefit4 from "../public/assets/img/benefit/benefit4.png";

export default function AboutUs() {
  var benefitData = [
    {
      id: 1,
      image: benefit1,
      title: "Saves time for both you and your patients",
    },
    {
      id: 2,
      image: benefit2,
      title: "Saves costs",
    },
    {
      id: 3,
      image: benefit3,
      title: "Regular virtual follow-ups",
    },
    {
      id: 4,
      image: benefit4,
      title: "Additional source of revenue",
    },
  ];
  return (
    <>
      <Head>
          <title>For Doctor -- Shafa Care</title>
          <meta
              name="keyboard"
              content="Shafa Care, Online Doctor,Medical Help,Online Medical Help, For Doctor"
          />
      </Head>
      <Navbar />

      {/* Start AboutUs Area */}
      <section id="doctor_need" className="">
        <div className="hero-area ptb-100">
          <div className="container">
            <div className="row h-100 d-flex align-items-center">
              <div className="col-md-6">
                <h1 className="mt-3 mb-5 title1 coor-logo">
                  Easy and secure telemedicine solution
                </h1>
                <div>
                  <Link href="/doctor-registration">
                    <a className="default-btn">
                      Apply<span></span>
                    </a>
                  </Link>
                  <Link href="/d-app">
                    <a className="default-btn">
                      Download<span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="problem  ">
          <div className="container">
            <div className="row pb-5">
              <div className="top w-100 text-center pt-4 pb-5">
                <h2 className="w-100 mt-3 mb-3 color-logo">
                  Simple and secure telemedicine
                </h2>
                <p className="w-100 mb-3 app">
                  Branded telemedicine apps for iOS, Android and Web
                </p>
                <p>
                  A telehealth solution to improve patient outcomes and drive
                  your medical practice revenues
                </p>
              </div>
              <div className="col-md-3 img-sec-phone">
                <img className="h-250" src={image1} alt="doctor app" />
              </div>
              <div className="col-md-9 d-flex align-items-center">
                <div className="row">
                  <h3 className="col-md-12 color-logo mb-3">
                    Schedule telemedicine sessions based on your convenience
                  </h3>
                  {/* <div className="col-md-6 mb-4">
                    <p className="txt-bold">Plan your schedule</p>
                    <p className="txt-md">
                      Set suitable appointment slots for Video Consultations, to
                      balance your clinic schedule with telehealth sessions.
                    </p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Define time slots</p>
                    <p className="txt-md">
                      Choose how long you would like your telemedicine sessions
                      to go on. Define a suitable time slot to better assess
                      your patients
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="txt-bold">Manage your time</p>
                    <p className="txt-md">
                      Confirm, cancel or re-schedule telemedicine appointments
                      to suit your availability so that your time is managed
                      effectively
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="txt-bold">Reduce No-Shows</p>
                    <p className="txt-md">
                      Limit no-shows with telemedicine appointments
                      confirmations and reminders about upcoming telemedicine
                      sessions.
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="col-md-3 img-sec-pc">
                <img className="h-250" src={image1} alt="doctor app" />
              </div>
            </div>

            <div className="row slider-1-bottom  ">
              <div className="col-md-3">
                <img className="h-250" src={image1} alt="doctor app" />
              </div>
              <div className="col-md-9 d-flex align-items-center">
                <div className="row">
                  <h3 className="col-md-12 color-logo">
                    Collect payments for your telemedicine session online
                  </h3>
                  
                  {/* <div className="col-md-6 mb-4">
                    <p className="txt-bold">Define pricing</p>
                    <p className="txt-md">
                      You have the flexibility to price and charge patients (or
                      keep it free) for telemedicine session as your see fit.
                    </p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Online payments</p>
                    <p className="txt-md">
                      Upfront payments for your telehealth sessions before the
                      session is due to start, to confirm participation.
                    </p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Online billing</p>
                    <p className="txt-md">
                      Generate bills for Video Consultations on your Virtual
                      Practice to keep track of revenue generated for
                      telemedicine services
                    </p>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="row slider-1-bottom  ">
              <div className="col-md-3 img-sec-phone">
                <img className="h-250" src={image3} alt="video conference" />
              </div>
              <div className="col-md-9 d-flex align-items-center">
                <div className="row">
                  <h3 className="col-md-12 color-logo">
                    Access patient health records during video sessions to help
                    with diagnosis
                  </h3>
                  {/* <div className="col-md-6 mb-4">
                    <p className="txt-bold">Effective diagnosis</p>
                    <p className="txt-md">
                      Access to patient personal health records and health
                      trackers is available during telemedicine sessions,
                      helping you diagnose and treat patients effectively
                    </p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Direct interaction</p>
                    <p className="txt-md">
                      Whether on your desktop or mobile phone, Video
                      Consultations help you interact with patients just as you
                      would at your clinic
                    </p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Audio mode</p>
                    <p className="txt-md">
                      Connectivity issues do not need to affect your
                      interaction. Switch to an audio-only mode to resume
                      sessions interrupted by poor connectivity
                    </p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Manage from anywhere</p>
                    <p className="txt-md">
                      Your telemedicine appointments and sessions can be managed
                      from anywhere, on the web ormobile app.
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="col-md-3 img-sec-pc">
                <img className="h-250" src={image3} alt="video conference" />
              </div>
            </div>

            <div className="row slider-1-bottom  ">
              <div className="col-md-3">
                <img className="h-250" src={image1} alt="doctor app" />
              </div>
              <div className="col-md-9 d-flex align-items-center">
                <div className="row">
                  <h3 className="col-md-12 mb-3 color-logo">
                    Share post-session summaries with patients to improve
                    adherence
                  </h3>
                  {/* <div className="col-md-6 mb-4">
                    <p className="txt-bold">Consultation notes</p>
                    <p className="txt-md">
                      Create notes about your telemedicine sessions with
                      patients to include goals, medications prescribed,
                      invoices, follow up appointments or care plans you may
                      have discussed.
                    </p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">ePrescriptions</p>
                    <p className="txt-md">
                      Online prescriptions for telemedicine sessions which can
                      be sent to patients or printed on your clinic letter-head
                    </p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Consultation summary</p>
                    <p className="txt-md">
                      Share a summary via email with patients, including key
                      aspects discussed during your session, for better
                      medication adherence
                    </p>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="row slider-2-bottom ">
              <div className="col-md-3 img-sec-phone">
                <img className="h-250" src={image5} alt="user review" />
              </div>
              <div className="col-md-9 d-flex align-items-center">
                <div className="row">
                  <h3 className="col-md-12 color-logo mb-3">
                    Follow up with patients on their progress
                  </h3>
                  {/* <div className="col-md-6 mb-4">
                    <p className="txt-bold">Patient-initiated</p>
                    <p className="txt-md">
                      Patients can book follow-up appointments to their clinic
                      visits or online consultations and consult with your via
                      video consultations
                    </p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Provider-initiated</p>
                    <p className="txt-md">
                      Book follow-up telemedicine sessions for patients who may
                      not be able to visit you at your clinic
                    </p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <p className="txt-bold">Text consultations</p>
                    <p className="txt-md">
                      Your patients also have the option of following up with
                      you through text-based consultations on the web or mobile
                      app.
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="col-md-3 img-sec-pc">
                <img className="h-250" src={image5} alt="user review" />
              </div>
            </div>

            <div className="row pt-4 pt-2">
              <h2 className="w-100 text-center mb-4 color-logo">
                Other benefits
              </h2>
              {benefitData
                ? benefitData.map((item) => {
                    return (
                      <div className="col-md-3">
                        <div className="benefit-card text-center">
                          <img src={item.image} alt= {item.title} />
                          <p className="mt-2">{item.title}</p>
                        </div>
                      </div>
                    );
                  })
                : null}
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>

        <div id="for_doctor_apply">
          <div className="container  ">
            <div className="row d-flex flex-column align-items-center justify-content-center">
              <h2 className="color-logo">Free telemedicine platform trial</h2>
              <p className="mt-2 mb-4">
                A chance for you to trial and assess our Telemedicine Platform.
                No hidden costs.
              </p>
              <Link href="/doctor-registration">
                <a className="default-btn">
                  Apply Now<span></span>
                </a>
              </Link>
              <p className="txt-light mb-3">No credit card required</p>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Area */}
      <Footer />
    </>
  );
}
