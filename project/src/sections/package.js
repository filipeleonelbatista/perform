/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';

const packages = [
  {
    name: 'Plano Básico',
    description: 'Para pequenos negócios',
    buttonText: 'Contrate agora',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Landing page profissional',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Acesso a ferramenta de análise de acessos ao site.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Criação de marca',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Integração com redes sociais',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Google ads e Social Ads',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Calendário de postagens',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Hospedagem e domínio grátis por 1 Ano',
        isAvailable: false,
      }
    ],
  },
  {
    header: 'Recomendado',
    name: 'Premium',
    description: 'Para negócios consolidados',
    priceWithUnit: 'R$ 1199,99/',
    buttonText: 'Contrate agora',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Landing page profissional',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Acesso a ferramenta de análise de acessos ao site.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Criação de marca',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Integração com redes sociais',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Google ads e Social Ads',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Calendário de postagens',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Hospedagem e domínio grátis por 1 Ano',
        isAvailable: false,
      },
    ],
  },
  {
    name: 'Plano TOP',
    description: 'Para pequenos negócios',
    buttonText: 'Contrate agora',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Landing page profissional',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Acesso a ferramenta de análise de acessos ao site.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Criação de marca',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Integração com redes sociais',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Google ads e Social Ads',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Calendário de postagens',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Hospedagem e domínio grátis por 1 Ano',
        isAvailable: true,
      },
    ],
  },
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Os combos que oferecemos"
          slogan="Preços"
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    // '&::before': {
    //   position: 'absolute',
    //   content: '""',
    //   top: 0,
    //   right: 0,
    //   background:
    //     'linear-gradient(-45deg, rgba(0,0,0, 0.3) 25%, transparent 25%, transparent 50%, rgba(120,120,120, 0.3) 50%, rgba(100,100,100, 0.3) 75%, transparent 75%, transparent)',
    //   width: '100%',
    //   backgroundSize: '350px 350px',
    //   height: '100%',
    //   opacity: 0.3,
    //   zIndex: 0,
    // },
  },
};
