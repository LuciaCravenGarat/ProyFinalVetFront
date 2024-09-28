import {Button, Form} from 'react-bootstrap';
import {useForm} from 'react-hook-form';



function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const logingIn = (obj) => {
    console.log(obj);
    
  }
  return (
    <Form onSubmit={handleSubmit(logingIn)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" 
        placeholder="Enter email"
        {...register("email", {
          required: "El email es obligatorio",
        })} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
         placeholder="Password"
         {...register("password", {
          required: "La contraseña obligatoria",
        })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" 
          label="Recordar mis datos"
          {...register("recuerdame")}
          name="recuerdame" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
  );
}

export default Login;