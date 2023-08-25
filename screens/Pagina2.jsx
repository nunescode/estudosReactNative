import React from "react";
import { Card, Button, Text } from "react-native-paper";

const Pagina2 = () => {
  return (
    <>
      <Card>
        <Card.Title
          title="Título do Card"
          subtitle="SubTítulo do Card"
        ></Card.Title>
        <Card.Content>
          <Text variant="titleLarge">Card Title </Text>
          <Text variant="bodyMedium">Card Title </Text>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>OK</Button>
        </Card.Actions>
      </Card>
    </>
  );
};

export default Pagina2;
