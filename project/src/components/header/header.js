/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo-dark.svg';
import LogoWhite from 'assets/logo.svg';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import headerData from './header.data';
import { useRouter } from 'next/router'

export default function Header({ className }) {
  const router = useRouter();
  let menuItems = [];
  if(router.asPath === "/"){
    menuItems = headerData.home;
  }else{
    if(router.asPath === "/marketing-digital"){
      menuItems = headerData.mkt;
    }else{
      menuItems = headerData.aboutus;
    }
  }
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={className === 'sticky' ? LogoDark : LogoWhite} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => {
              if(path[0] === "/"){
                return (
                  <a
                    activeClass="active"
                    sx={
                        router.asPath === path ? 
                          {color: "#000035", textDecoration: "none" } 
                          : 
                          ( className === 'sticky' ? 
                              {color: "#000", textDecoration: "none"} 
                              : {color: "#FFF", textDecoration: "none"} )
                        }
                    href={path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    key={i}
                  >
                    {label}
                  </a>
                )
              }else{
                return (
                  <Link
                    activeClass="active"
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    key={i}
                  >
                    {label}
                  </Link>
                )
              }
            })}
          </Flex>
          <Link
            sx={className === 'sticky' ? {
              fontFamily: 'DM Sans',
              fontWeight: 500,

              padding: '0.8rem 1.4rem',
              backgroundColor: '#000035',
              borderRadius: '1.8rem',
              color: '#FFF',
              transition: '0.3s',
              '&:hover': {
                boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.75)',
              },
            } : {
                fontFamily: 'DM Sans',
                fontWeight: 500,
                border: '1.5px solid white',
                cursor: 'pointer',

                padding: '0.8rem 1.4rem',
                backgroundColor: 'none',
                borderRadius: '1.8rem',
                color: '#fff',
                transition: '0.3s',
                '&:hover': {
                  backgroundColor: '#fff',
                  color: '#333',
                },
              }

            }
            to={"contato"}
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Entre em contato
          </Link>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider >
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'white',
    fontWeight: 'normal',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.5s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
      '.donate__btn': {
        borderColor: 'primary',
        color: 'primary',
        '&:hover': {
          boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
          backgroundColor: 'primary',
          color: 'white',
        },
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: '16px',
      fontWeight: '400',
      px: 25,
      cursor: 'pointer',
      lineHeight: '1.2',
      '&.active': {
        color: 'secondary',
      },
    },
  },
};
