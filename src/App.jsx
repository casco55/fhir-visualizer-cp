import "./App.css";
import { AllergyIntolerance } from "./components/AllergyIntolerance";
import { Condition } from "./components/Condition";
import { Observation } from "./components/Observation";
import { MedicationStatement } from "./components/MedicationStatement";
import { PatientInfo } from "./components/PatientInfo";
import { Procedure } from "./components/Procedure";

function App() {
  return (
    <>
      <PatientInfo patientId="UC3-Patient" />
      <Condition patientId="UC3-Patient" />
      <Procedure patientId="UC3-Patient" />
      <AllergyIntolerance patientId="UC3-Patient" />
      <Observation patientId="UC3-Patient" />
      <MedicationStatement patientId="UC3-Patient" />
    </>
  );
}

export default App;
