/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'components/link';
import { FaPlayCircle } from 'react-icons/fa';
import BannerBG from 'assets/bannerBg.png';
import BannerThumb from 'assets/banner-thumb.png';
import smile from 'assets/smile.png';

import client1 from 'assets/sponsor/google.svg';
import client2 from 'assets/sponsor/facebook.svg';
import client3 from 'assets/sponsor/instagram.svg';
import client4 from 'assets/sponsor/whatsapp.svg';

const data = [
  {
    id: 1,
    path: '#',
    image: client1,
    title: 'google',
  },
];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <h2 sx={styles.h2}>
            NOSSA MISSÃO <br /> É TRAZER RESULTADO <br /> PRO SEU NEGÓCIO ATRAVÉS <br /> DO UNIVERSO DIGITAL
          </h2>
          <p sx={styles.p}>
            Nosso mantra é PERFORMANCE e RESULTADO, um time focado em entregar a
            solução do tamanho da necessidade de cada cliente, servindo de base de
            lançamento e plano de voô para levar sua empresa ao destino que você
            deseja.
          </p>
          
          <Image sx={styles.img} src={smile} width="90" alt="sorriso" />

          <Flex>
            <a
              sx={{
                fontFamily: 'DM Sans',
                textDecoration: "none",
                fontWeight: 500,
                cursor: 'pointer',
                padding: '0.8rem 1.4rem',
                backgroundColor: '#FFF',
                borderRadius: '1.8rem',
                color: '#1F3E76',
                transition: '0.3s',
                '&:hover': {
                  boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.75)',
                  backgroundColor: '#AAA',
                },
              }}
              href={"#contato"}
              >
              Entre em contato
            </a>
            <>
              <ModalVideo
                channel="youtube"
                isOpen={videoOpen}
                videoId="ZNA9rmDsYVE"
                onClose={() => setVideoOpen(false)}
              />
              <Button
                variant="textButton"
                aria-label="Assistir Vídeo"
                onClick={handleClick}
              >
                <FaPlayCircle /> Assistir Vídeo
              </Button>
            </>
          </Flex>
          <Flex sx={styles.sponsorBox}>
            <Text sx={styles.sponsorTitle}>Certificação em:</Text>
            <Box sx={styles.sponsorBox.sponsor}>
              {data.map((item, index) => (
                <Link path={item.path} key={`client-key${index}`}>
                  <Image src={item.image} alt={item.title} />
                </Link>
              ))}
            </Box>
          </Flex>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerThumb} alt="banner" />
        </Box>
      </Container>
    </section >
  );
}

const styles = {
  h2:{
    fontSize: 'xx-large',
    fontWeight: 'bold',
    lineHeight: 1.2,
    color: "#FFF",
    margin: 0,
  },
  p:{    
    fontSize: 'normal',
    fontWeight: 'regular',
    lineHeight: 1.2,
    color: "#99c1da",
  },
  img:{
    margin: "5px 0px 25px 0px",
  },
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url(${BannerBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'primary',
    container: {
      display: 'flex',
    },
    contentBox: {
      width: ['100%', null, '85%', '55%', '50%', '55%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: ['none', null, null, 'block'],
      justifyContent: 'center',
      ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
      mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
      mt: [0, null, null, '40px', 4, 7, 0],
      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      textAlign: 'right',
      width: [0, null, null, '40%', '50%', '60%', '70%', '80%'],
    },
  },
  sponsorTitle: {
    color: 'white',
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    sponsor: {
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0,
        },
      },
    },
  },
};
