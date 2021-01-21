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
      'Apareça nos primeiros lugares nos anúncios do google, venda mais, receba mais chamadas e visitas ao seu site!',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Branding',
    title: 'Branding',
    text:
      'Atualize a identidade visual da sua empresa, de mais personalidade a sua marca e encante seus clientes.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Social Media',
    title: 'Social Media',
    text:
      'Interaja com seu público, se aproxime dos seus clientes, fidelize a confiança deles com sua marca por meio das redes sociais.',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Site',
    title: 'Site',
    text:
      'Criamos o site ideal para sua empresa, que se adeque tanto para o computador quanto para smartphones.',
  },
  {
    id: 5,
    imgSrc: Chat,
    altText: 'Hospedagem',
    title: 'Hospedagem',
    text:
      'Hospedamos seu site com um suporte ágil e dedicado..',
  },
  {
    id: 6,
    imgSrc: Design,
    altText: 'SEO',
    title: 'SEO',
    text:
      'O Seu site precisa crescer de forma orgânica e ficar ranqueado nas principais posições nos mecanismos de buscas.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Mais serviços"
          title="Outros serviços que oferecemos que podem te ajudar a ir além"
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
