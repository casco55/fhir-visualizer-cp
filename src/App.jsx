import "./App.css";
import { Condition } from "./components/Condition";
import { PatientInfo } from "./components/PatientInfo";

function App() {
  return (
    <>
      <PatientInfo patientId="UC3-Patient" />
      <Condition patientId="UC3-Patient" />
    </>
  );
}

export default App;
