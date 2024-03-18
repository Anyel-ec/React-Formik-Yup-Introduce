import {Form, Formik, Field, ErrorMessage} from 'formik';
import React from 'react';
import styled from "styled-components";
import {Input} from './components/Input';
import * as Yup from 'yup';


const Container = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: center;  
`;

const Content = styled.div`
  width: 80%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 2px;
  padding: 30px 0;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 550px) {
    display: block;
  }
`;

const Footer = styled.div`
  text-align: end;
`;

const Button = styled.button`
  padding: 8px;
  font-size: 20px;
  cursor: pointer;
  background-color: #0081cf;
  color: white;
  border: none;
  border-radius: 5px;
`;
function App() {
  // nombre, apellido, cedula, telefono, correo, checkbox, select 
  const initialValues = {
    nombre: '',
    apellido: '',
    cedula: '',
    telefono: '',
    correo: '',
    checkbox: false,
    select: ''
  }
  const options = [
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
    { value: 'option3', label: 'Opción 3' },
  ];

  const validationSchema = Yup.object({
    // nombre solo texto y permitir maximo 50   caracteres, no debe haber numeros
    nombre: Yup.string()
    .required('El nombre es requerido')
    .matches(/^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]*$/, 'El nombre solo debe contener letras latinas y espacios')
    .max(50, 'Máximo 50 caracteres'),
    apellido: Yup.string()
    .required('El apellido es requerido')
    .matches(/^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]*$/, 'El apellido solo debe contener letras latinas y espacios')
    .max(50, 'Máximo 50 caracteres'),
    // cedula maximo 10 digitos, y solo numeros
    cedula: Yup.string().required('La cedula es requerida').matches(/^[0-9]{10}$/, 'La cedula debe tener 10 digitos numeros'),
    // telefono maximo 10 digitos, y solo numeros
    telefono: Yup.string().required('El telefono es requerido').matches(/^[0-9]{10}$/, 'El telefono debe tener 10 digitos'),
    correo: Yup.string().email('Correo invalido').required('El correo es requerido'),
    checkbox: Yup.boolean().oneOf([true], 'Debes aceptar los terminos y condiciones'),
    select: Yup.string().required('Debes seleccionar una opcion')
  });

  
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  }

  

  return (
    <Container>
      <Content>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Row>
              <Input label="Nombre" name="nombre" type="text" required />
              <Input label="Apellido" name="apellido" type="text" required />
            </Row>
            <Row>
              <Input label="Cedula" name="cedula" type="text" required />
              <Input label="Telefono" name="telefono" type="tel" required />
            </Row>
            <Input label="Correo" name="correo" type="email" required />
            
            <div>
              <label htmlFor="select">Selecciona una opción:</label>
              <Field as="select" name="select" id="select">
                <option value="">Selecciona una opción...</option>
                {options.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Field>
              {/* el error en color*/}
              <ErrorMessage name="select" component="div" style={{color: 'red'}} />

            </div>
            
            <Input label="Terminos y condiciones" name="checkbox" type="checkbox" required />

            <Footer>
              <Button type="submit">Enviar</Button>
            </Footer>
          </Form>
        </Formik>
      </Content>
    </Container>
  );
}

export default App;