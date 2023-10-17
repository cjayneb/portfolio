import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/Listgroup";
import data from "./assets/data.json";
import "./App.css";
import Title from "./Components/Title";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  let items = ["skateboarding", "climbing"];

  const handleSelectitem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="mainContainer">
      <Title color="mainTitleColor" >
        {data.constrcutionPlaceHolder}
        <div className="spinner-border text-success" role="status"></div>
      </Title>
      <ListGroup
        items={items}
        heading="In the meantime, I am also doing these things"
        onSelectItem={handleSelectitem}
      />
      {showAlert && (
        <Alert isDismissable={true} onClose={() => setShowAlert(false)}>
          I can't believe you pressed me bro
        </Alert>
      )}
      <Button color="primary" onClick={() => setShowAlert(true)}>
        press s mmememmememee
      </Button>
    </div>
  );
}

export default App;
