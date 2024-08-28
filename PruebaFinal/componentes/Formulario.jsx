import { Fragment, useState } from "react";
import { Button, Form, Row, Col } from 'react-bootstrap';
import '../componentes/Estilos.css';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [errors, setErrors] = useState({});

    const regexTexto = /^[a-zA-ZÁÉÍÓÚñ\s]+$/;
    const regexNumero = /^[0-9]{9}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const realizarEnvio = (e) => {
        e.preventDefault();

        let mensajesDeError = [];

        if (!nombre) {
            mensajesDeError.push('El nombre está vacío');
        } else if (!regexTexto.test(nombre)) {
            mensajesDeError.push('El nombre no es válido');
        }

        if (!apellidos) {
            mensajesDeError.push('Los apellidos están vacíos');
        } else if (!regexTexto.test(apellidos)) {
            mensajesDeError.push('Los apellidos no son válidos');
        }

        if (!email) {
            mensajesDeError.push('El correo electrónico está vacío');
        } else if (!regexEmail.test(email)) {
            mensajesDeError.push('El correo electrónico no es válido');
        }

        if (!celular) {
            mensajesDeError.push('El celular está vacío');
        } else if (!regexNumero.test(celular)) {
            mensajesDeError.push('El celular no es válido');
        }

        if (mensajesDeError.length > 0) {
            alert(mensajesDeError.join('\n'));
        } else {
            alert(`Datos ingresados: Nombre: ${nombre}, Apellidos: ${apellidos}, Email: ${email}, Celular: ${celular}`);
        }
    }

    return (
        <div className="form-container">
            <Form onSubmit={realizarEnvio}>
                <Row className="par1">
                    <Col className="uni">
                        <Form.Group>
                            <Form.Label>Nombres:</Form.Label><br/>
                            <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombres" />
                        </Form.Group>
                    </Col>
                    <Col className="uni">
                        <Form.Group >
                            <Form.Label>Apellidos:</Form.Label><br/>
                            <Form.Control type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} placeholder="Apellidos" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Correo Electrónico:</Form.Label><br/>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Celular:</Form.Label><br/>
                            <Form.Control type="text" value={celular} onChange={(e) => setCelular(e.target.value)} placeholder="Celular" />
                        </Form.Group>
                    </Col>
                </Row>
                <Button  className="butt" variant="primary" type="submit">Enviar datos</Button>
            </Form>
        </div>
    );
}

export default Formulario;