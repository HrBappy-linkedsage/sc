
import Link from 'next/link'

import symptomImg1 from '../public/assets/img/symptoms/1.png'
import symptomImg2 from '../public/assets/img/symptoms/2.png'
import symptomImg3 from '../public/assets/img/symptoms/3.png'
import symptomImg4 from '../public/assets/img/symptoms/4.png'
import symptomImg5 from '../public/assets/img/symptoms/5.png'
import symptomImg6 from '../public/assets/img/symptoms/6.png'
import symptomImg7 from '../public/assets/img/symptoms/7.png'
import symptomImg8 from '../public/assets/img/symptoms/8.png'
import symptomImg9 from '../public/assets/img/symptoms/9.png'
import symptomImg10 from '../public/assets/img/symptoms/10.png'
import symptomImg11 from '../public/assets/img/symptoms/11.png'
import symptomImg12 from '../public/assets/img/symptoms/12.png'
import symptomImg13 from '../public/assets/img/symptoms/13.png'
import symptomImg14 from '../public/assets/img/symptoms/14.png'
import symptomImg15 from '../public/assets/img/symptoms/15.png'
import symptomImg16 from '../public/assets/img/symptoms/16.png'
import symptomImg17 from '../public/assets/img/symptoms/17.png'
import symptomImg18 from '../public/assets/img/symptoms/18.png'
import symptomImg19 from '../public/assets/img/symptoms/19.png'
import symptomImg20 from '../public/assets/img/symptoms/20.png'

export default function Carousel({data}){

    return(

        <>
            <div className="carousel_wide_screen w-100">
                <div id="SpecialistsControl" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner text-center">
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-around">
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="General Physican" src={symptomImg1} />
                                            <p>General Physican</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Dermatologist" src={symptomImg2} />
                                            <p >Dermatologist</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Dentist" src={symptomImg3} />
                                            <p >Dentist</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Sexologist" src={symptomImg4} />
                                            <p >Sexologist</p>
                                        </a>
                                    </Link> 
                                </div>                  
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="gynaecologist" src={symptomImg5} />
                                            <p >gynaecologist</p>
                                        </a>
                                    </Link> 
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-around">
                            <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Ophthalmology" src={symptomImg6} />
                                            <p >Ophthalmology</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Cardiologist" src={symptomImg7} />
                                            <p >Cardiologist</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Orthopedics" src={symptomImg8} />
                                            <p >Orthopedics</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Diabetologist" src={symptomImg9} />
                                            <p >Diabetologist</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="ENT Surgeon" src={symptomImg10} />
                                            <p >ENT Surgeon</p>
                                        </a>
                                    </Link> 
                                </div>                  
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-around">
                            <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Gastroenterologist" src={symptomImg11} />
                                            <p >Gastroenterologist</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Oncologist" src={symptomImg12} />
                                            <p >Oncologist</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Paediatrician" src={symptomImg13} />
                                            <p >Paediatrician</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Physiotherapist" src={symptomImg14} />
                                            <p >Physiotherapist</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Psychiatrist" src={symptomImg15} />
                                            <p >Psychiatrist</p>
                                        </a>
                                    </Link> 
                                </div>                  
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-around">
                            <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Pulmonologist" src={symptomImg16} />
                                            <p >Pulmonologist</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="General Surgeon" src={symptomImg17} />
                                            <p >General Surgeon</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Urologist" src={symptomImg18} />
                                            <p >Urologist</p>
                                        </a>
                                    </Link> 
                                </div>   
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Neuro Surgeon" src={symptomImg19} />
                                            <p >Neuro Surgeon</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Nephrologist" src={symptomImg20} />
                                            <p >Nephrologist</p>
                                        </a>
                                    </Link> 
                                </div>                 
                            </div>
                        </div>
                        
                    </div>
                    <a className="carousel-control-prev" href="#SpecialistsControl" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#SpecialistsControl" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="carousel_mobile_screen">
                    <div id="SpecialistsControlMobile" className="carousel slide container" data-ride="carousel">
                        <div className="carousel-inner text-center">
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-around">
                                    <div className="single_item">
                                        <Link href="/" >
                                            <a className="d-flex flex-column align-items-center justify-content-around">
                                                <img alt="General Physican" src={symptomImg1} />
                                                <p>General Physican</p>
                                            </a>
                                        </Link> 
                                    </div>
                                    <div className="single_item">
                                        <Link href="/" >
                                            <a className="d-flex flex-column align-items-center justify-content-around">
                                                <img alt="Dermatologist" src={symptomImg2} />
                                                <p >Dermatologist</p>
                                            </a>
                                        </Link> 
                                    </div>                                    
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="d-flex justify-content-around">
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Dentist" src={symptomImg3} />
                                            <p >Dentist</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Sexologist" src={symptomImg4} />
                                            <p >Sexologist</p>
                                        </a>
                                    </Link> 
                                </div> 
                            </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="d-flex justify-content-around">               
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="gynaecologist" src={symptomImg5} />
                                            <p >gynaecologist</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Ophthalmology" src={symptomImg6} />
                                            <p >Ophthalmology</p>
                                        </a>
                                    </Link> 
                                </div>
                            </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="d-flex justify-content-around">
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Cardiologist" src={symptomImg7} />
                                            <p >Cardiologist</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Orthopedics" src={symptomImg8} />
                                            <p >Orthopedics</p>
                                        </a>
                                    </Link> 
                                </div>
                            </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="d-flex justify-content-around">
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Diabetologist" src={symptomImg9} />
                                            <p >Diabetologist</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="ENT Surgeon" src={symptomImg10} />
                                            <p >ENT Surgeon</p>
                                        </a>
                                    </Link> 
                                </div>                  
                            </div>
                        </div>
                            <div className="carousel-item ">
                            <div className="d-flex justify-content-around">
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Gastroenterologist" src={symptomImg11} />
                                            <p >Gastroenterologist</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Oncologist" src={symptomImg12} />
                                            <p >Oncologist</p>
                                        </a>
                                    </Link> 
                                </div>
                            </div>
                        </div>
                            <div className="carousel-item ">
                            <div className="d-flex justify-content-around">
                            <div className="single_item">
                                <Link href="/" >
                                    <a className="d-flex flex-column align-items-center justify-content-around">
                                        <img alt="Paediatrician" src={symptomImg13} />
                                        <p >Paediatrician</p>
                                    </a>
                                </Link> 
                            </div>
                            <div className="single_item">
                                <Link href="/" >
                                    <a className="d-flex flex-column align-items-center justify-content-around">
                                        <img alt="Physiotherapist" src={symptomImg14} />
                                        <p >Physiotherapist</p>
                                    </a>
                                </Link> 
                            </div>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <div className="d-flex justify-content-around">
                            <div className="single_item">
                                <Link href="/" >
                                    <a className="d-flex flex-column align-items-center justify-content-around">
                                        <img alt="Psychiatrist" src={symptomImg15} />
                                        <p >Psychiatrist</p>
                                    </a>
                                </Link> 
                            </div>
                        <div className="single_item">
                                <Link href="/" >
                                    <a className="d-flex flex-column align-items-center justify-content-around">
                                        <img alt="Pulmonologist" src={symptomImg16} />
                                        <p >Pulmonologist</p>
                                    </a>
                                </Link> 
                            </div>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <div className="d-flex justify-content-around">
                            <div className="single_item">
                                <Link href="/" >
                                    <a className="d-flex flex-column align-items-center justify-content-around">
                                        <img alt="General Surgeon" src={symptomImg17} />
                                        <p >General Surgeon</p>
                                    </a>
                                </Link> 
                            </div>
                            <div className="single_item">
                                <Link href="/" >
                                    <a className="d-flex flex-column align-items-center justify-content-around">
                                        <img alt="Urologist" src={symptomImg18} />
                                        <p >Urologist</p>
                                    </a>
                                </Link> 
                            </div>   
                            </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-around">
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Neuro Surgeon" src={symptomImg19} />
                                            <p >Neuro Surgeon</p>
                                        </a>
                                    </Link> 
                                </div>
                                <div className="single_item">
                                    <Link href="/" >
                                        <a className="d-flex flex-column align-items-center justify-content-around">
                                            <img alt="Nephrologist" src={symptomImg20} />
                                            <p >Nephrologist</p>
                                        </a>
                                    </Link> 
                                </div> 
                            </div>                        
                        </div>                            
                   </div>
                    <a className="carousel-control-prev" href="#SpecialistsControlMobile" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#SpecialistsControlMobile" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
            </div>
            </div>
        
        </>
    
    )
}
