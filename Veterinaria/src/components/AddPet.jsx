import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormSelect,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { readOnePet } from "../utils";
import { useEffect } from "react";


const AddPet = ({ uploadData, updateData, isEdit = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { id } = useParams();

  const addItem = (obj) => {
    console.log(obj);
    uploadData(obj);
    reset();
  };
  const editItem = (obj) => {
    console.log(obj);
    updateData(obj);
    reset();
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
          {...register("raza", { required: "La raza es obligatoria" })}
        />
        <Form.Text>{errors.raza?.message}</Form.Text>
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
