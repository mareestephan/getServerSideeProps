import Head from 'next/head'
import Header from './header'
import Navbar from './navbar'



const Layout = (props, script, link) => (
    <div>

        <Head>
            <title>Products API</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <meta name="description" content="" />
            <link href="fad.html" rel="canonical" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/png" sizes="32x32" href="https://www.allsale.co.za/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="https://www.allsale.co.za/favicon-16x16.png" />
            <link rel="manifest" href="https://www.allsale.co.za/manifest.json" />
            <meta name="theme-color" content="#fafafa" />
        </ Head>

        <Header />

        <Navbar />

        <div >
            {props.children}

        </div>

    </div>
)

export default Layout;