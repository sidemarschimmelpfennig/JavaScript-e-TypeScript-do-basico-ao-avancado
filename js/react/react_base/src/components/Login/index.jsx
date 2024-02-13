import React from 'react';

import { Container } from '../../styles/GlobalStyle';
import { Paragrafo, Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small> Oi </small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit am.</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
