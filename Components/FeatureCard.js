const SingleServicesCard = ({ data }) => {

    return (
        <div className="d-flex align-items-center justify-content-center flex-column mt-3 mb-3 text-center feature_card p-2">
            <img src={data.image} alt={data.title} />
            <p className="bold mt-3">{data.title}</p>
            <p className="">{data.description}</p>
        </div>
    )
}

export default SingleServicesCard