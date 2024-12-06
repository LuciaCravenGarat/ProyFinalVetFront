import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormSelect,
} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { readOnePet } from "../utils";
import { useEffect } from "react";
import Swal from "sweetalert2";

const AddPet = ({ uploadData, updateData, isEdit = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { id } = useParams();

  const addItem = async (obj) => {
    try {
      let response = await uploadData(obj);
      console.log(response);

      if (response) {
        Swal.fire({
          title: "Mascota agregada!",
          text: `La mascota ${obj.name} ha sido agregada con éxito`,
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

  const editItem = async (obj) => {
    try {
      console.log(obj);
      let response = await updateData(obj);
      if (response) {
        Swal.fire({
          title: "Mascota modificada!",
          text: `La mascota ${obj.name} ha sido modificada con éxito`,
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Algo salión mal.",
          text: "Por favor, intenta nuevamente más tarde",
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

  useEffect(() => {
    if (isEdit && id) {
      const getPet = async (id) => {
        try {
          let obj = await readOnePet(id);
          let { data } = obj;
          if (data) {
            setValue("name", data.name);
            setValue("specie", data.specie);
            setValue("raza", data.raza);
            setValue("url", data.url);
            setValue("detail", data.detail);
          }
        } catch (error) {
          console.log(error);
        }
      };

      getPet(id);
    }
  }, [id, isEdit, setValue]);

  const onSubmit = (obj) => {
    if (isEdit) {
      editItem(obj);
    } else {
      addItem(obj);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} method="POST">
      <FormGroup>
        <Form.Label>Nombre</Form.Label>
        <FormControl
          type="text"
          {...register("name", { required: "El nombre es obligatorio" })}
        />
        <Form.Text>{errors.name?.message}</Form.Text>
      </FormGroup>

      <FormGroup>
        <Form.Label>Especie</Form.Label>
        <FormSelect
          type="text"
          {...register("specie", { required: "La especie es obligatoria" })}
        >
          <option value="canina">Canina</option>
          <option value="felina">Felina</option>
          <option value="ave">Ave</option>
          <option value="conejo">Conejo</option>
          <option value="tortuga">Tortuga</option>
        </FormSelect>

        <Form.Text>{errors.specie?.message}</Form.Text>
      </FormGroup>
      <FormGroup>
        <Form.Label>Raza</Form.Label>
        <FormControl
          type="text"
          {...register("race", { required: "La raza es obligatoria" })}
        />
        <Form.Text>{errors.race?.message}</Form.Text>
      </FormGroup>
      <FormGroup>
        <Form.Label>URL imagen</Form.Label>
        <FormControl
          type="text"
          {...register("url", { required: "La url es obligatoria" })}
        />
        <Form.Text>{errors.url?.message}</Form.Text>
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
  );
};

export default AddPet;
