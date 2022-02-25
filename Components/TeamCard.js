
const SingleServicesCard = ({ data }) => {

    return (
        <div className="wrapper">
            <div className="profile text-center">
                <img src={data.image} className="picture" alt={data.name} />
                <h3 className="name">{data.name}</h3>
                <p className="title">{data.title}</p>
                {/* <p className="description">{data.description}</p> */}
            </div>

            <div className="social-icons">
                <div className="icon icon1">
                    <a href={data.fb}><i className="fab fa-facebook-f"></i></a>
                </div>

                <div className="icon icon2">
                    <a href={data.in}><i className="fab fa-linkedin-in"></i></a>
                </div>

            </div>
        </div>
    )
}

export default  SingleServicesCard