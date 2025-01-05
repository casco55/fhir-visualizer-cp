import "./App.css";
import { AllergyIntolerance } from "./components/AllergyIntolerance";
import { Condition } from "./components/Condition";
import { Observation } from "./components/Observation";
import { MedicationStatement } from "./components/MedicationStatement";
import { PatientInfo } from "./components/PatientInfo";
import { Procedure } from "./components/Procedure";
import "bootstrap/dist/js/bootstrap.min.js";
import { AccordionItem } from "./components/common/AccordionItem";
import { useSearch } from "./hooks/useSearch";
const App = () => {
  const { text, handleChange, onSearch, searchText } = useSearch();
  return (
    <>
      <div className="col-12 d-flex flex-column">
        <div className="mx-auto my-2">
          <h1>Health Record</h1>
        </div>
        <div className="mx-auto my-2">
          <div className="input-group mb-3 col-11 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar paciente"
              aria-label="Buscar paciente"
              aria-describedby="basic-addon2"
              value={text}
              onChange={handleChange}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={onSearch}
            >
              Buscar
            </button>
          </div>
        </div>
        <div
          className="accordion accordion-flush col-11 mx-auto border mt-3 rounded"
          id="healthRecordAccordion"
        >
          <AccordionItem
            itemId="patienInfo"
            parentId="healthRecordAccordion"
            title="Paciente"
            ariaExpanded="true"
            showContain="show"
            accordionButtonCollapse=""
          >
            <PatientInfo patientId={searchText} />
          </AccordionItem>
          <AccordionItem
            itemId="conditions"
            parentId="healthRecordAccordion"
            title="Condiciones"
          >
            <Condition patientId={searchText} />
          </AccordionItem>
          <AccordionItem
            itemId="procedures"
            parentId="healthRecordAccordion"
            title="Procedimientos"
          >
            <Procedure patientId={searchText} />
          </AccordionItem>
          <AccordionItem
            itemId="allergies"
            parentId="healthRecordAccordion"
            title="Alergias"
          >
            <AllergyIntolerance patientId={searchText} />
          </AccordionItem>
          <AccordionItem
            itemId="observations"
            parentId="healthRecordAccordion"
            title="Observaciones"
          >
            <Observation patientId={searchText} />
          </AccordionItem>
          <AccordionItem
            itemId="medications"
            parentId="healthRecordAccordion"
            title="Medicamentos"
          >
            <MedicationStatement patientId={searchText} />
          </AccordionItem>
        </div>
      </div>
    </>
  );
};

export default App;
