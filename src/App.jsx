import "./App.css";
import { AllergyIntolerance } from "./components/AllergyIntolerance";
import { MedicationStatement } from "./components/MedicationStatement";
import { PatientInfo } from "./components/PatientInfo";
import { Procedure } from "./components/Procedure";
import "bootstrap/dist/js/bootstrap.min.js";
import { AccordionItem } from "./components/common/AccordionItem";
import { useSearch } from "./hooks/useSearch";
import { SearchInput } from "./components/SearchInput";
import { InfoComponent } from "./components/common/InfoComponent";
import {
  conditionPath,
  observationPath,
  procedurePath,
} from "./constants/endpoints";
const App = () => {
  const { text, handleChange, onSearch, searchText } = useSearch();
  return (
    <>
      <div className="col-12 d-flex flex-column">
        <div className="mx-auto my-2">
          <h1>Health Record</h1>
        </div>
        <div className="mx-auto my-2">
          <SearchInput
            text={text}
            handleChange={handleChange}
            onSearch={onSearch}
          />
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
            <InfoComponent
              patientId={searchText}
              path={conditionPath}
              errorText={"Hubo un error al cargar las condiciones"}
              noRecordsText={"No se encontraron condiciones"}
            />
          </AccordionItem>
          <AccordionItem
            itemId="procedures"
            parentId="healthRecordAccordion"
            title="Procedimientos"
          >
            <InfoComponent
              patientId={searchText}
              path={procedurePath}
              errorText={"Hubo un error al cargar los procedimientos"}
              noRecordsText={"No se encontraron procedimientos"}
            />
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
            <InfoComponent
              patientId={searchText}
              path={observationPath}
              errorText={"Hubo un error al cargar las observaciones"}
              noRecordsText={"No se encontraron observaciones"}
            />
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
