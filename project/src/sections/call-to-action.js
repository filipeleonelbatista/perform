/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text } from 'theme-ui';

import PatternBG from 'assets/patternBG.png';

export default function CallToAction({
  title = "",
  subtitle = ""
}) {
  return (
    <section sx={styles.workflow}>
      <Container>
        <Box sx={styles.content}>
          <Heading sx={styles.title}>{title}</Heading>
          <Text sx={styles.subTitle}>{subtitle}</Text>
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
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
  content:{
    display: 'flex',
    flexDirection: 'column',
    alignItens: 'center',
    justfyContent: 'center',
    textAlign: 'center'

  },
  title: {
    fontSize: [5, null, 10, null, null, 13],
    color: 'white',
    lineHeight: [1.4, null, null, null, null, 1.55],
    pr: [0, null, null, null, null, 2],
    mb: [2, 3],
  },

  subTitle: {
    fontSize: 1,
    fontWeight: 400,
    lineHeight: [1.85, null, null, 1.9, 2],
    color: 'white',
    opacity: 0.65,
    pr: [0, null, null, null, null, 5],
  },
};
