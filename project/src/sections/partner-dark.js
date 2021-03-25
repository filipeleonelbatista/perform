/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextDarkFeature from 'components/text-feature-dark';
import Image from 'components/image';

import Partner from 'assets/partnerDark.png';

import PatternBG from 'assets/patternBG.png';

const data = {
  subTitle: 'Esteja onde seus clientes estão',
  title: 'Soluções inteligentes para seu negócio estar onde seus clientes estão',
  description:
    'Nossa empresa se dispõe a te guiar no universo do marketing digital, criando estratégias e planos especiais para cada cliente e necessidade.',
  btnName: 'Chama no WhatsApp',
  btnURL: 'https://wa.me/+555194235408',
};

export default function PartnerDarkSection() {
  return (
    <section sx={styles.workflow}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextDarkFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={{ px: [0, null, '40px', 0] }}>
          <Image src={Partner} alt="Partner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],

  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', 450, 550, '350px', '410px', '485px'],
    mx: 'auto',
    pb: ['30px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4],
    },
  },
};
