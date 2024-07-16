import React, { useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MyChart from "./MyChart";
import '../css/grid.css';
import PersonasTabla from "./TablaPersonas";

function Grid(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPersonas, setFilteredPersonas] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
        setShowAlert(false)
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) {
            setShowAlert(true);
            return;
        }
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

    const handleReset =  () => {
        const images = document.querySelectorAll('.imagen-grid');
        images.forEach(img => {
            img.classList.add('desvanecer');
        });

        setTimeout (() => {
            setSearchTerm("");
            setFilteredPersonas([]);
        }, 800); 
    };

    useEffect(() => {
        const images = document.querySelectorAll('.imagen-grid');
        images.forEach(img => {
            img.classList.add('aparecer');
        });
    }, [filteredPersonas]);    

    return (
        
            <div className="contenedor-segundaro">
                <Navbar className="bg-body-tertiary justify-content-center contenedor-navbar">
                    <Form inline onSubmit={handleSearchSubmit}>
                        <Row className="justify-content-center align-items-center">
                            
                        <h2 className="text-center">Buscar a</h2>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="buscar a"
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
            
                <div className="contenedor-segundaro2 bg-body-tertiary">
                    <Row className="justify-content-center align-items-center contendor ">
                        {showAlert ? ( 
                            <div>
                                <p className="text-center">Por favor colocar un nombre valido</p>
                            </div>
                        ) : filteredPersonas.length > 0 ? (
                            filteredPersonas.map((persona, index) => (
                                <Col key={index} className="grid">
                                    <img
                                        className="imagen-grid"
                                        src={require(`../img/grid-${persona.imagen}.png`)}
                                        alt={`foto de ${persona.nombre}`}
                                    />
                                    <div className="contenedor-filtro" >
                                        <p>{persona.nombre} {persona.apellido}</p>
                                    </div>
                                </Col>
                            ))
                        ) : (
                            <div >
                                <p className="text-center">No se ha encontrado ningún usuario en la data..</p>
                            </div>
                        )}
                    </Row>
                </div>
            <div className="contenedor-segundaro3">
                {filteredPersonas.length > 0 && <PersonasTabla personas={filteredPersonas} />}
            </div>       
                <div className="contenedor-segundaro3" >
                    <h2 className="text-center">Estadisticas salariales</h2>
                    <MyChart filteredPersonas={filteredPersonas} />
                </div>

            </div>

    );

}

export default Grid;