/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Button } from 'theme-ui';
import { useState } from 'react';
import SectionHeader from 'components/section-header';

export default function ContactForm() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function handleSendMessage() {
    window.confirm(name + " " + phone + " " + msg);
  }

  return (
    <section sx={{ variant: 'section.keyFeature' }} id="contato">
      <Container>
        <SectionHeader
          slogan="Contato"
          title="Ainda em duvida com alguma coisa? Entre em contato."
        />
        <Grid sx={styles.grid}>
          <div sx={styles.map}>
            <iframe sx={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.1432336112725!2d-50.996196645219854!3d-29.93960888443484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95190b3f7bea767f%3A0x167be74153eb695a!2sAv.%20Jos%C3%A9%20Loureiro%20da%20Silva%2C%201721%20-%20Centro%2C%20Gravata%C3%AD%20-%20RS%2C%2094010-001!5e0!3m2!1spt-BR!2sbr!4v1607361526163!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
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
                rows="6"
                value={msg}
                onChange={(e) => setMsg(e.target.value)} ></textarea>
            </div>

            <Button onClick={handleSendMessage} variant="primary" aria-label="Entre em contato">
              Enviar
            </Button>
          </div>
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['20px 0', null, null],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      null,
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
  map: {
    width: '100%',
    height: '100%',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1.8rem',
  },
  formLabel: {
    fontFamily: "Leigo",
    fontWeight: 800,
    color: '#000'
  },
  formInput: {
    fontFamily: "Leigo",
    width: '100%',
    height: '1.8rem',
    padding: '1.8rem',
    borderRadius: '0.8rem',
    borderWidth: '3px',
    fontSize: 18,
    outline: 'none',
    transition: 'all 0.25s',
    '&.focus': {
      borderColor: '#007acc',
    },
  },
  formTextarea: {
    width: '100%',
    height: 'auto',
    padding: '0.8rem',
    borderRadius: '0.8rem',
    borderWidth: '3px',
    fontSize: 18,
    outline: 'none',
    transition: 'all 0.25s',
    '&.focus': {
      borderColor: '#007acc',
    },
  },
};
