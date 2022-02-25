

const ServicesCard = ({icon, title, description}) => {
    return(
        <>
        <div className="col-lg-4 col-md-6">
            <div className="top-services-content two">
                <div className="icon">
                    <i className={icon}></i>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
        
        </>
    )
}


export default ServicesCard