import Head from 'next/head'
import Header from './header'
import Navbar from './navbar'
import Container from './container'



const Layout = (props, script, link) => (
    <div>
        <Head>
            <title>Products API</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />


            {/* <iframe src="../../../www.googletagmanager.com/ns.html%3Fid=GTM-P7PZ7M3.html"
                height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe> */}

        </ Head>
        <Header />
        <Navbar />
        <Container />

        <div className="container">
            {props.children}

        </div>

    </div>
)

export default Layout;