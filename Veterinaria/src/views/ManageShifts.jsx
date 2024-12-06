import React, { useContext, useState } from "react";
import { Row, Col, Dropdown, Form } from "react-bootstrap";
import ShiftsForm from "../components/ShiftsForm";
import ShiftsCalendar from "../components/ShiftsCalendar";
import { ShiftContext } from "../components/ShiftContext";
import { createShift } from "../utils";

const ManageShifts = () => {
  const uploadData = async (obj) => {
    try {
      let shift = await createShift(obj);
      console.log("turno creado", shift);
      return shift;
    } catch (error) {
      console.log(error);
    }
  };

  const { vet, setVet, categorie, setCategorie } = useContext(ShiftContext);

  const handleVetChange = (eventKey) => {
    setVet(eventKey);
  };

  const handleCategorieChange = (eventKey) => {
    setCategorie(eventKey);
  };
  return (
    <>
      <div>ManageShifts</div>

      <Row>
        {/* Lado izquierdo: selección de sucursal, categoría, y formulario */}
        <Col md={4} className="p-3">
          <h3>Gestión de Turnos</h3>
          <Form.Group>
            <Form.Label>Vet</Form.Label>
            <Dropdown onSelect={handleVetChange}>
              <Dropdown.Toggle variant="secondary" id="dropdown-vet">
                {vet ? vet : "Seleccione vet"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Vet 1">Vet 1</Dropdown.Item>
                <Dropdown.Item eventKey="Vet 2">Vet 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Categoría de la consulta</Form.Label>
            <Dropdown onSelect={handleCategorieChange}>
              <Dropdown.Toggle variant="secondary" id="dropdown-categorie">
                {categorie ? categorie : "Seleccione una categoría"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="clinica">Clínica</Dropdown.Item>
                <Dropdown.Item eventKey="rayosX">Rayos X</Dropdown.Item>
                <Dropdown.Item eventKey="peluqueria">Peluquería</Dropdown.Item>
                <Dropdown.Item eventKey="odontologia">
                  Odontología
                </Dropdown.Item>
                <Dropdown.Item eventKey="entrenamiento">
                  Entrenamiento
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <ShiftsForm
            categoria={categorie}
            vet={vet}
            uploadData={uploadData}
          />
        </Col>

        <Col md={8} className="p-3">
          <ShiftsCalendar categoria={categorie} vet={vet} />
        </Col>
      </Row>
    </>
  );
};

export default ManageShifts;
