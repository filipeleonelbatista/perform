/** @jsx jsx */
import { jsx, Heading, Box, Container, Text, Image } from 'theme-ui';
import { Link } from 'components/link';
import menuItems from './footer.data';
import LogoDark from 'assets/logo-dark.svg';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.footerTopArea}>
          <Box sx={styles.footer.menus}>
            <Heading sx={styles.footer.heading}>
              <Image src={LogoDark} alt="Diginess" />
            </Heading>
            <h3>Redes sociais</h3>
            <nav sx={styles.footer.navRow}>
              <a
                href="https://www.facebook.com/agenciaperformoficial/"
                target="_blank"
                sx={styles.footer.link2}
              >
                <FaFacebookF size={26} color="#000" />
              </a>
              <a
                href="https://www.instagram.com/agenciaperformoficial/"
                target="_blank"
                sx={styles.footer.link2}
              >
                <FaInstagram size={26} color="#000" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=+5551986445578&text&app_absent=0"
                target="_blank"
                sx={styles.footer.link2}
              >
                <FaWhatsapp size={26} color="#000" />
              </a>
              <a
                href="mailto:contato@agenciaperform.com.br"
                target="_blank"
                sx={styles.footer.link2}
              >
                <FaEnvelope size={26} color="#000" />
              </a>
            </nav>
          </Box>
          <Box sx={styles.footer.menus}>
            <Heading sx={styles.footer.heading}>
            </Heading>
            <nav sx={styles.footer.navRow}>

            </nav>
          </Box>
          {menuItems.map(({ header, items }, i) => (
            <Box sx={styles.footer.menus} key={i}>
              <Heading sx={styles.footer.heading}>{header}</Heading>
              <nav>
                {items.map(({ path, label }, i) => (
                  <Link
                    path={path}
                    key={i}
                    label={label}
                    sx={styles.footer.link}
                  />
                ))}
              </nav>
            </Box>
          ))}
        </Box>
      </Container>
      <Text sx={styles.footer.copyright}>
        Todos os direitos reservados - Desenvolvido por
        <Link path="#home">
          Agência Perform
        </Link>
      </Text>
    </footer>
  );
}

const styles = {
  footer: {
    navRow: {
      display: 'flex',
      flexDirection: 'row',
    },
    container: {
      width: '100%',
      alignItems: 'stretch',
    },
    footerTopArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      flexWrap: 'wrap',
      pt: [7, null, 8],
      pb: ['10px', null, null, '20px'],
      px: [0, null, null, null, 4],
    },
    menus: {
      width: ['50%', null, null, '25%'],
      display: 'flex',
      flexDirection: 'column',
      mb: ['40px', null, null, '60px'],
    },

    heading: {
      fontSize: [3, null, null, 4],
      color: 'text_secondary',
      fontWeight: '500',
      mb: [3, 4, 5, null, 6],
      lineHeight: '1.35',
    },

    link2: {
      margin: '0 5px',
      fontSize: ['14px', null, 1],
      color: 'text',
      fontWeight: 'body',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, null, 1.6, 1.8],
      ':hover': {
        color: '#999',
      },
      ':last-child': {
        mb: '0px',
      },
    },

    link: {
      fontSize: ['14px', null, 1],
      color: 'text',
      fontWeight: 'body',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, null, 1.6, 1.8],
      ':hover': {
        color: 'primary',
      },
      ':last-child': {
        mb: '0px',
      },
    },
    copyright: {
      fontSize: ['14px', null, 1],
      width: '100%',
      textAlign: 'center',
      p: ['20px 20px'],
      backgroundColor: '#FCFDFE',
      color: 'text',
      a: {
        textDecoration: 'none',
        color: 'inherit',
        pl: 1,
        transition: 'all 0.25s',
        '&:hover': {
          color: 'primary',
        },
      },
    },
  },
};
