import styled from 'styled-components';

export const Title = styled.h1`
  background: green;
  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }
  color: ${({ color }) => color || '#222'};
`;

export const Paragrafo = styled.p``;
