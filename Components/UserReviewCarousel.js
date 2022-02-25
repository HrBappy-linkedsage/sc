import userImg from '../public/assets/img/team/default-team.png'
import userImg1 from '../public/assets/img/team/default-team.png'
import userImg2 from '../public/assets/img/team/default-team.png'

export default function 
Carousel(){
    return(
        <section className="pt-1 pb-5">
			<div className="container">
                <div className="col-md-12 mt-2">
                    <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel" data-interval="50000">
                        <div className="w-100 carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="bg"></div>
                            <div className="carousel-caption">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 d-flex flex-column justify-content-center">
                                <img src={userImg} alt="" className="rounded-circle" alt="Humayun Kabir" />
                                <p className="mt-3">Humayun Kabir</p>
                                </div>
                                <div className="col-md-8 col-sm-8">
                                {/* <h3>Gives me hope</h3> */}
                                <p>Very easy to book, maintain history. Hassle free from older verstion of booking appoinment via telephone..
                                            Thanks Shafa Care for making it simple.</p>
                                <p className="smallest ">-Patient app user</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="bg"></div>
                            <div className="carousel-caption">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 d-flex flex-column justify-content-center">
                                <img src={userImg1} alt="" className="rounded-circle" alt="Jubaidul" />
                                <p className="mt-3">Jubaidul</p>
                                </div>
                                <div className="col-md-8 col-sm-8">
                                <p>Very good app. Well thought out about booking/rescheduling/canceling an appoinment. Also, Doctor's feedback
                                            mechanism is good and describes all the basics in a good way.</p>
                                <p className="smallest mute">- Shafa Care</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="bg"></div>
                            <div className="carousel-caption">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 d-flex flex-column justify-content-center">
                                <img src={userImg2} alt="" className="rounded-circle" alt="MMS Piash" />
                                <p className="mt-3">MMS Piash</p>
                                </div>
                                <div className="col-md-8 col-sm-8">
                                <p>Very easy to book, maintain history. Hassle free from older verstion of booking appoinment via telephone..
                                        Thanks Shafa Care for making it simple.</p>
                                <p className="smallest mute">- Shafa Care User</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="w-100 text-center">
                            <a className="carousel-control-pre mr-3" href="#carouselExampleControls1" role="button" data-slide="prev">
                                <i className="fa fa-angle-left" aria-hidden="true"></i>
                            </a>
                            <a className="carousel-control-nex ml-3" href="#carouselExampleControls1" role="button" data-slide="next">
                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
			</div>
		</section>
    )
}