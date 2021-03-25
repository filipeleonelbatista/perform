/** @jsx jsx */
import { jsx } from 'theme-ui';
import SEO from 'components/seo';
import logo from 'assets/logo.jpeg'
import fullLogo from 'assets/logo.svg'
import background from 'assets/bannerBg.png'

import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaEnvelope,
    FaGlobe
} from 'react-icons/fa';


export default function Links() {
    const links = [
        {
            title: "Instagram",
            url: "https://www.instagram.com/agenciaperform/",
            icon: <FaInstagram />
        },
        {
            title: "Facebook",
            url: "https://www.facebook.com/performoficial/",
            icon: <FaFacebookF />
        },
        {
            title: "Whatsapp",
            url: "https://api.whatsapp.com/send/?phone=+5551986445578&text&app_absent=0",
            icon: <FaWhatsapp />
        },
        {
            title: "Email",
            url: "mailto:contato@agenciaperform.com.br",
            icon: <FaEnvelope />
        },
        {
            title: "Site",
            url: "https://agenciaperform.com.br",
            icon: <FaGlobe />
        }
    ]

    return (
        <body sx={styles.screen}>
            <SEO title="Perform - Impulsionando resultados digitais" />
            <div sx={styles.container}>
                <a href="https://agenciaperform.com.br">
                    <img sx={styles.imageLogo} src={logo} alt="Perform" />
                </a>
                <div sx={styles.buttonContainer}>
                    {
                        links.map((link, index) => {
                            return (
                                <a key={index} href={link.url} sx={styles.buttonLink}>{link.icon}&nbsp;{link.title.toUpperCase()}</a>
                            );
                        })
                    }
                </div>
                <a href="https://agenciaperform.com.br">
                    <img sx={styles.logo} src={fullLogo} alt="Perform" />
                </a>

            </div>
        </body>
    );

}

const styles = {
    screen: {
        fontFamily: "Leigo",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "red",
        backgroundImage: `url(${background})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: 'top left',
        backgroundSize: 'cover',
    },
    container: {
        margin: "5rem 0",
        maxWidth: "300px",
        width: "100%",
        textAlign: "center",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    imageLogo: {
        width: "5rem",
        height: "auto",
    },
    imageLogo: {
        width: "5rem",
        height: "5rem",
        borderRadius: "50%",
        boxShadow: "5px 5px 15px #384255",
        boxShadow: "-5px -5px 15px #6e82a9"
    },
    buttonContainer: {
        maxWidth: "300px",
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "2.8rem 0rem"
    },
    buttonLink: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0.4rem 0",
        width: "100%",
        fontSize: "large",
        color: "#FFF",
        fontWeight: "bold",
        backgroundColor: "none",
        textDecoration: "none",
        border: "1px solid #FFF",
        padding: "1rem 1rem",
        borderRadius: "0.8rem",
        transition: "0.3s",
        '&:hover': {
            border: "1px solid #666",
            color: "#666"
        }
    }
}