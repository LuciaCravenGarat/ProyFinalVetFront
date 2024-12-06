import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormSelect,
} from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";
// import { readOneShift } from "../utils/index";
// import { useEffect } from "react";
import Swal from "sweetalert2";

const ShiftsForm = ({ uploadData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const addItem = async (obj) => {
    try {
      let response = await uploadData(obj);
      console.log(response);

      if (response) {
        Swal.fire({
          title: "Turno agregado!",
          text: `El turno ha sido agregado con éxito`,
          icon: "success",
        });

        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Algo salió mal",
          text: "Por favor, intenta nuevamente más tarde",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ha ocurrido un error inesperado. Inténtalo de nuevo.",
      });
    }
  };

  const onSubmit = (obj) => {
    addItem(obj);
    console.log(obj);
    
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} method="POST">
        <FormGroup>
          <Form.Label>Paciente</Form.Label>
          <FormControl
            type="text"
            {...register("pet", {
              required: "El nombre de paciente es obligatorio",
            })}
          />
          <Form.Text>{errors.pet?.message}</Form.Text>
        </FormGroup>

        <FormGroup>
          <Form.Label>Fecha</Form.Label>
          <FormSelect
            type="text"
            {...register("date", { required: "La fecha es obligatoria" })}
          >
            <option value="">15/11</option>
            <option value="">16/11</option>
            <option value="">17/11</option>
            <option value="">18/11</option>
            <option value="">19/11</option>
          </FormSelect>

          <Form.Text>{errors.date?.message}</Form.Text>
        </FormGroup>
        <FormGroup>
          <Form.Label>Hora</Form.Label>
          <FormSelect
            type="text"
            {...register("time", { required: "La hora es obligatoria" })}
          >
            <option value="">09:00</option>
            <option value="">10:00</option>
            <option value="">11:00</option>
            <option value="">12:00</option>
            <option value="">13:00</option>
          </FormSelect>
          <Form.Text>{errors.time?.message}</Form.Text>
        </FormGroup>
        <FormGroup>
          <Form.Label>Detalle</Form.Label>
          <FormControl
            type="text"
            {...register("detail", { required: "Este campo es obligatorio" })}
          />
          <Form.Text>{errors.detail?.message}</Form.Text>
        </FormGroup>
        <FormGroup>
          <Button type="submit">Enviar</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default ShiftsForm;
