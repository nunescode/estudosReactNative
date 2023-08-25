import React from "react";
import { Avatar, Card } from "react-native-paper";

const Pagina3 = () => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const alunos = []
  return (
    <>
      <Card style={{ marginBottom: 10 }}>
        <Card.Title
          title="Título do Card"
          subtitle="SubTítulo do Card"
          left={LeftContent}
        ></Card.Title>
      </Card>
      <Card style={{ marginBottom: 10 }}>
        <Card.Title
          title="Título do Card"
          subtitle="SubTítulo do Card"
          left={LeftContent}
        ></Card.Title>
      </Card>
      <Card style={{ marginBottom: 10 }}>
        <Card.Title
          title="Título do Card"
          subtitle="SubTítulo do Card"
          left={LeftContent}
        ></Card.Title>
      </Card>
      <Card style={{ marginBottom: 10 }}>
        <Card.Title
          title="Título do Card"
          subtitle="SubTítulo do Card"
          left={LeftContent}
        ></Card.Title>
      </Card>
    </>
  );
};

export default Pagina3;
