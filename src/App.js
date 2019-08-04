import React from "react";
import { Container, Card, Divider } from "semantic-ui-react";

import PageTitle from "./Components/Header";
import ToDo from "./Components/Todo";

// import "./App.scss";

function App() {
  return (
    <Container>
      <Container>
        <PageTitle />
      </Container>
      <Divider />
      <Container>
        <Card.Group itemsPerRow={4}>
          <ToDo />
        </Card.Group>
      </Container>
    </Container>
  );
}

export default App;
