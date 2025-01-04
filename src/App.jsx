import "./App.css";
import { AllergyIntolerance } from "./components/AllergyIntolerance";
import { Condition } from "./components/Condition";
import { Observation } from "./components/Observation";
import { MedicationStatement } from "./components/MedicationStatement";
import { PatientInfo } from "./components/PatientInfo";
import { Procedure } from "./components/Procedure";
import "bootstrap/dist/js/bootstrap.min.js";
import { AccordionItem } from "./components/common/AccordionItem";
const App = () => {
  return (
    <>
      <div className="accordion accordion-flush" id="healthRecordAccordion">
        <AccordionItem
          itemId="patienInfo"
          parentId="healthRecordAccordion"
          title="Paciente"
          ariaExpanded="true"
          showContain="show"
          accordionButtonCollapse=""
        >
          <PatientInfo patientId="UC3-Patient" />
        </AccordionItem>
        <AccordionItem
          itemId="conditions"
          parentId="healthRecordAccordion"
          title="Condiciones"
        >
          <Condition patientId="UC3-Patient" />
        </AccordionItem>
        <AccordionItem
          itemId="procedures"
          parentId="healthRecordAccordion"
          title="Procedimientos"
        >
          <Procedure patientId="UC3-Patient" />
        </AccordionItem>
        <AccordionItem
          itemId="allergies"
          parentId="healthRecordAccordion"
          title="Alergias"
        >
          <AllergyIntolerance patientId="UC3-Patient" />
        </AccordionItem>
        <AccordionItem
          itemId="observations"
          parentId="healthRecordAccordion"
          title="Observaciones"
        >
          <Observation patientId="UC3-Patient" />
        </AccordionItem>
        <AccordionItem
          itemId="medications"
          parentId="healthRecordAccordion"
          title="Medicamentos"
        >
          <MedicationStatement patientId="UC3-Patient" />
        </AccordionItem>
      </div>
    </>
  );
};

export default App;
