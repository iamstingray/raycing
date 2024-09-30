import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #1a1a1a;
  color: #ffffff;
  text-align: center;
`;

const ContentSection = () => (
  <Section>
    <h2>Unsere iRacing Reise</h2>
    <p>
      Seit 2019 haben wir uns in die Welt des virtuellen Rennsports gestürzt.
      Von bescheidenen Anfängen bis zu spannenden Wettkämpfen auf internationalen
      Bühnen – unsere Leidenschaft für Geschwindigkeit und Präzision kennt keine
      Grenzen. Begleiten Sie uns auf diesem aufregenden Abenteuer!
    </p>
  </Section>
);

export default ContentSection;