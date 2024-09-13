import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormSelect,
} from "react-bootstrap";

const AddPet = ({uploadData}) => {
  const {
    register,
    handleSubmit,
    formState: { errors}, reset 
  } = useForm();

  const addItem = (obj) => {
    console.log(obj);
    uploadData(obj);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(addItem)} method="POST">
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
        <Button type="submit">Agregar mascota</Button>
      </FormGroup>
    </Form>
  );
};

export default AddPet;
