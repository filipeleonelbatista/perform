/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Google Ads',
    title: 'Google Ads',
    text:
      'Forma mais rápida e lucrativa de chegar até o cliente que busca por seus produtos e serviços. Acelere suas vendas, receba mais chamadas e visitas no seu site!',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Branding',
    title: 'Branding',
    text:
      'Sua marca precisa brilhar e se destacar. Criamos marcas memoráveis. Ajudamos a encontrar o propósito da sua marca que irá guiar a sua forma de se comunicar e vender.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Social Media',
    title: 'Social Media',
    text:
      'Se conecte e se relacione com seus clientes através das redes sociais para vender mais e melhor. Faça sua marca mais conhecida e fidelize clientes.',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Site',
    title: 'Site',
    text:
      'Seu espaço no ambiente virtual. Criamos o site perfeito que será seu escritório e loja online para vender mais através da internet.',
  },
  {
    id: 5,
    imgSrc: Chat,
    altText: 'Hospedagem',
    title: 'Hospedagem',
    text:
      'Seu site hospedado de forma segura e confiável com suporte àgil e dedicado',
  },
  {
    id: 6,
    imgSrc: Design,
    altText: 'SEO',
    title: 'SEO',
    text:
      'Olhar dedicado e atento aos detalhes que fazem seu site e sua marca terem mais visibilidade e acessos na internet, aparecendo entre os primeiros colocados nas páginas do Google.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Principais serviços"
          title="Serviços que fazem parte do nosso plano de vôo para sua jornada"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
