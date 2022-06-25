import React, { useState } from "react";
import styled from "styled-components";
import About from "./Components/About";

import Intro from "./Components/Intro";
import Stat from "./Components/Stat";
import SupportOptionModal from "./Components/SupportOptionModal";

export default function App() {
  const [SupportModal, setSupportModal] = useState(false);

  return (
    <Container>
      <Intro setSupportModal={setSupportModal} />
      <Stat />
      <About setSupportModal={setSupportModal} />
      {SupportModal && <SupportOptionModal setSupportModal={setSupportModal} />}
    </Container>
  );
}

const Container = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 101px;
  @media (max-width: 548px) {
    padding-bottom: 52px;
  }
`;
