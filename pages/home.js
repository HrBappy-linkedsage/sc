import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Head from 'next/head'
import ssl from '../public/assets/img/SSL.png'

export default function RefundPolicy(){
    return(
        <>
            <Head>
                <title>Home -- Shafa Care</title>
                <meta
                    name="keyboard"
                    content="Shafa Care, Online Doctor,Medical Help,Online Medical Help, Home"
                />
            </Head>
            <Navbar />            
                <section id="home__page" className="ptb-100">
                    <img src={ssl} alt="ssl certification"/>
                </section>
            <Footer />
         </>
    )
}   


