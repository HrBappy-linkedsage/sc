import Link from "next/link";


const SingleServicesCard = ({icon, title, description}) => {
    return(
        <>
            <div className="col-lg-4 col-md-6">
                <div className="services-item bg-1">
                    <div className="icon">
                        <i className={icon}></i>
                    </div>
                    <a href="single-services.html">
                        <h3>{title}</h3>
                    </a>
                    <p>{description}</p>
                    <Link href="/single-services"><a className="read-btn">Read more +</a></Link>
                </div>
            </div>
        </>
    )
}


export default SingleServicesCard