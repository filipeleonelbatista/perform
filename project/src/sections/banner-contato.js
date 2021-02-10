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

export default function BannerContato() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  async function handleSendMessage() {

    let myIp;

    await fetch("https://api.ipify.org/?format=json")
      .then(results => results.json())
      .then(data => {
        myIp = data.ip
      })

    const data = {
      ip: myIp,
      tipoContato: "[Landing page marketing-digital] Formulário de contato",
      celular: phone,
      email: email,
      nome: name,
      mensagem: msg,
      feitoContato: false,
      convertido: true
    }
    const result = await api.post("/api/v1/contatos", data)

  }


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
            QUER AUMENTAR SUAS VENDAS? <br /> 
          </h2>
          <p sx={styles.p}>
            Deixamos sua empresa nas primeiras posições no GOOGLE. 
            Atraia a atenção dos seus clientes nas redes sociais e 
            aumente seu alcance na sua região
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
              {/* <Button
                variant="textButton"
                aria-label="Assistir Vídeo"
                onClick={handleClick}
              >
                <FaPlayCircle /> Assistir Vídeo
              </Button> */}
            </>
          </Flex>
          <Flex sx={styles.sponsorBox}>
            <Text sx={styles.sponsorTitle}>Empresa certificada em:</Text>
            <Box sx={styles.sponsorBox.sponsor}>
              {data.map((item, index) => (
                <Link path={item.path} key={`client-key${index}`}>
                  <Image src={item.image} alt={item.title} />
                </Link>
              ))}
            </Box>
          </Flex>
        </Box>
        <Box sx={styles.formBox}>
          <div sx={styles.form}>
            <div sx={styles.formGroup}>
              <label sx={styles.formLabel} htmlFor="name">Nome completo</label>
              <input sx={styles.formInput}
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div sx={styles.formGroup}>
              <label sx={styles.formLabel} htmlFor="phone">Telefone</label>
              <input sx={styles.formInput}
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div sx={styles.formGroup}>
              <label sx={styles.formLabel} htmlFor="email">Email</label>
              <input sx={styles.formInput}
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div sx={styles.formGroup}>
              <label sx={styles.formLabel} htmlFor="msg">Mensagem</label>
              <textarea sx={styles.formTextarea}
                id="msg"
                rows="3"
                value={msg}
                onChange={(e) => setMsg(e.target.value)} ></textarea>
            </div>

            <Button onClick={handleSendMessage} variant="secondary" aria-label="Entre em contato">
              Enviar
            </Button>
          </div>

        </Box>
      </Container>
    </section >
  );
}

const styles = {
  formBox: {
    width: ['100%', '100%', '100%', '40%', '45%', '40%'],
    display: 'flex',
    flexDirection:  'column',
    alignItems: 'flex-start',
    flexShrink: 0,
    pt: [0, null, null, null, null, null, 5, 7],
  },
  form: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    marginBottom: '1.8rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '0.8rem',
  },
  formLabel: {
    fontFamily: "Leigo",
    fontWeight: 600,
    fontSize: 'small',
    color: '#FFF'
  },
  formInput: {
    fontFamily: "Leigo",
    width: '100%',
    height: '48px',
    border: '2px solid #000035',
    padding: '0.8rem',
    borderRadius: '0.8rem',
    borderWidth: '3px',
    fontSize: 14,
    fontWeight: 600,
    outline: 'none',
    transition: 'all 0.25s',
    '&:focus': {
      borderColor: '#007acc',
    },
  },
  formTextarea: {
    width: '100%',
    height: 'auto',
    padding: '0.8rem',
    border: '2px solid #000035',
    borderRadius: '0.8rem',
    borderWidth: '3px',
    fontSize: 14,
    fontWeight: 600,
    outline: 'none',
    transition: 'all 0.25s',
    '&:focus': {
      borderColor: '#007acc',
    },
  },

  h2: {
    fontSize: 'xx-large',
    fontWeight: 'bold',
    lineHeight: 1.2,
    color: "#FFF",
    margin: 0,
  },
  p: {
    fontSize: 'normal',
    fontWeight: 'regular',
    lineHeight: 1.2,
    color: "#99c1da",
    maxWidth: '70%'
  },
  img: {
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
      // display: 'flex',
      display: 'flex',
      flexDirection: ['column', 'column', 'column', 'row', 'row', 'row'],
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
