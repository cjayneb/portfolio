import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/Listgroup";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  let items = ["skateboarding", "climbing"];

  const handleSelectitem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Hobbies"
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
