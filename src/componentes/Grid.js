import React,{useState} from "react";
import { Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MyChart from "./MyChart";
import '../css/grid.css';

function Grid(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPersonas, setFilteredPersonas] = useState([]);
    
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const filtered = props.personas.filter(persona =>
            persona.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            persona.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
            persona.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            persona.empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
            persona.habilidades.toLowerCase().includes(searchTerm.toLowerCase()) ||
            persona.salario.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPersonas(filtered);
    };

    const handleReset = () =>{
        setSearchTerm("");
        setFilteredPersonas([]);
    };

    return (
        <div className="contenedor-principal">
        <div className="contenedor-segundaro">
            <Navbar className="bg-body-tertiary justify-content-center">
                <Form inline onSubmit={handleSearchSubmit}>
                    <Row className="justify-content-center align-items-center">
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" onClick={handleSearchSubmit} className="btn-primary">Filter</Button>
                        </Col>
                        <Col xs="auto">
                            <Button type="button" onClick={handleReset} className="btn-secondary">Borrar</Button>
                        </Col>
                    </Row>
                </Form>
            </Navbar>
        </div>

        <div>
                <div className="contenedor-segundaro2">
                    <Row className="justify-content-center align-items-center">
                        {filteredPersonas.length > 0 ? (
                            filteredPersonas.map((persona, index) => (
                                <Col key={index} className="grid">
                                    <img
                                        className="imagen-grid"
                                        src={require(`../img/grid-${persona.imagen}.png`)}
                                        alt={`foto de ${persona.nombre}`}

                                        
                                    />
                                    <div className="contenedor-filtro">
                                        <p>{persona.nombre} {persona.apellido}</p>
                                        <p>{persona.cargo} en la empresa {persona.empresa}</p>
                                        <p>{persona.habilidades} y salario {persona.salario}</p>
                                    </div>
                                </Col>
                            ))
                        ) : (
                            <p className="text-center">No se ha encontrado ningún usuario en la data..</p>
                        )}
                    </Row>
                </div>
            </div>

            <div >
            <MyChart filteredPersonas={filteredPersonas}/> 
            </div>
            
            
            
        </div>
       
    );

}

export default Grid;