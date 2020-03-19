import Document, { Html, Head, Main, NextScript } from 'next/document'
import '../components/main.scss'
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <div>
                        <link rel="stylesheet" href="static/bootstrap4/css/bootstrap.min.css" />
                        <link rel="stylesheet" href="/static/plugins/fontawesome-free/css/all.min.css" />
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js" />
                        {/* animate */}
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
                        {/* Ionicons */}
                        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                        {/* <link rel="stylesheet" href="static/antd/dist/antd.css" /> */}
                        {/* <link rel="stylesheet" href="static/react-multi-carousel/lib/styles.css" /> */}
                    </div>


                    {/* <script src="static/bootstrap4/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous" /> */}

                    {/* Google Font: Source Sans Pro */}
                    <link href="https://fonts.googleapis.com/css?family=Kanit&display=swap" rel="stylesheet"></link>
                </Head>
                <body className="sidebar-mini sidebar-collapse control-sidebar-open" >
                    
                        <Main />
                        <NextScript />
                  
                </body>
            </Html>
        )
    }
}

export default MyDocument