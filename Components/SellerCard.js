

const SellerCard = ({ image, title, description }) => {
    return (
        <div className="col-md-3">
            <div className="partner-single-card">
                <img className="mb-3" src={image} alt={title} />
                <h4 className="mt-2">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}


export default SellerCard