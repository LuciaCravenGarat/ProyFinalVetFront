import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { hashSync } from "bcryptjs-react";

export const SignIn = ({ validateUser, createUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const addUser = async (obj) => {
    let existUser = await validateUser(obj.email);
    if (existUser) {
      alert("El usuario ya existe");
    }
  };
  return (
    <>
      <div>SignIn</div>

      <Form onSubmit={handleSubmit(addUser)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar nombre/s"
            {...register("name", {
              required: "El nombre es obligatorio",
            })}
          />
          <Form.Text>{errors.name?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellido/s</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar apellido/s"
            {...register("lastName", {
              required: "El apellido es obligatorio",
            })}
          />
          <Form.Text>{errors.lastName?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingresar número de teléfono"
            {...register("phone", {
              required: "El teléfono es obligatorio",
            })}
          />
          <Form.Text>{errors.phone?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresar email"
            {...register("email", {
              required: "El email es obligatorio",
            })}
          />
          <Form.Text>{errors.email?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresar contraseña"
            {...register("password", {
              required: "La contraseña obligatoria",
            })}
          />
          <Form.Text>{errors.password?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarme
        </Button>
      </Form>
    </>
  );
};

export default SignIn;
